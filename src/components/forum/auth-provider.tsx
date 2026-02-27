'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'
import type { Profile } from '@/types/forum'

type AuthContextType = {
	user: User | null
	profile: Profile | null
	isTeacher: boolean
	loading: boolean
	signInWithMagicLink: (email: string) => Promise<{ error: string | null }>
	signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
	user: null,
	profile: null,
	isTeacher: false,
	loading: true,
	signInWithMagicLink: async () => ({ error: null }),
	signOut: async () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [profile, setProfile] = useState<Profile | null>(null)
	const [loading, setLoading] = useState(true)
	const supabase = createClient()

	const fetchProfile = async (userId: string) => {
		const { data } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', userId)
			.single()
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

	const signInWithMagicLink = async (email: string) => {
		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: `${window.location.origin}/foro/auth/callback`
			}
		})
		return { error: error?.message ?? null }
	}

	const signOut = async () => {
		await supabase.auth.signOut()
		setUser(null)
		setProfile(null)
	}

	const isTeacher = profile?.role === 'teacher'

	return (
		<AuthContext.Provider value={{ user, profile, isTeacher, loading, signInWithMagicLink, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
