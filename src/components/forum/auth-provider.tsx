'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'
import type { Profile } from '@/types/forum'

type AuthContextType = {
	user: User | null
	profile: Profile | null
	isTeacher: boolean
	isAdmin: boolean
	loading: boolean
	signIn: (email: string, password: string) => Promise<{ error: string | null }>
	signUp: (
		email: string,
		password: string,
		displayName: string
	) => Promise<{ error: string | null }>
	signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
	user: null,
	profile: null,
	isTeacher: false,
	isAdmin: false,
	loading: true,
	signIn: async () => ({ error: null }),
	signUp: async () => ({ error: null }),
	signOut: async () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [profile, setProfile] = useState<Profile | null>(null)
	const [loading, setLoading] = useState(true)
	const supabase = createClient()

	const fetchProfile = async (userId: string) => {
		const { data } = await supabase.from('profiles').select('*').eq('id', userId).single()
		setProfile(data)
	}

	useEffect(() => {
		const getUser = async () => {
			const {
				data: { session }
			} = await supabase.auth.getSession()
			const currentUser = session?.user ?? null
			setUser(currentUser)
			if (currentUser) {
				await fetchProfile(currentUser.id)
			}
			setLoading(false)
		}

		getUser()

		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(async (_event, session) => {
			const currentUser = session?.user ?? null
			setUser(currentUser)
			if (currentUser) {
				await fetchProfile(currentUser.id)
			} else {
				setProfile(null)
			}
			setLoading(false)
		})

		return () => subscription.unsubscribe()
	}, [supabase.auth])

	const signIn = async (email: string, password: string) => {
		const { error } = await supabase.auth.signInWithPassword({ email, password })
		return { error: error?.message ?? null }
	}

	const signUp = async (email: string, password: string, displayName: string) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,

			options: {
				data: { display_name: displayName }
			}
		})
		if (error) return { error: error.message }

		// Fallback: insert profile in case trigger didn't fire
		if (data.user) {
			await supabase.from('profiles').upsert(
				{
					id: data.user.id,
					display_name: displayName,
					email
				},
				{ onConflict: 'id' }
			)
		}

		// Auto-login after signup
		const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
		if (signInError) return { error: signInError.message }

		return { error: null }
	}

	const signOut = async () => {
		await supabase.auth.signOut()
		setUser(null)
		setProfile(null)
	}

	const isTeacher = profile?.role === 'teacher'
	const isAdmin = profile?.role === 'admin'

	return (
		<AuthContext.Provider value={{ user, profile, isTeacher, isAdmin, loading, signIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
