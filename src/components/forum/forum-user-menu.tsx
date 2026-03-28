'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'
import UserAvatar from './user-avatar'

export default function ForumUserMenu() {
	const { user, profile, isAdmin, loading, signOut } = useAuth()

	if (loading) return null

	if (!user) {
		return (
			<Link href="/foro/iniciar-sesion">
				<Button variant="outline" size="sm">
					Iniciar sesión
				</Button>
			</Link>
		)
	}

	const displayName = profile?.display_name ?? user.email?.split('@')[0] ?? 'Usuario'

	return (
		<div className="flex items-center gap-3">
			{isAdmin && (
				<span className="text-xs font-roboto font-bold uppercase tracking-wide bg-primary text-primary-foreground px-2 py-0.5 rounded">
					Admin
				</span>
			)}
			<Link
				href="/foro/mi-panel"
				className="flex items-center gap-2 hover:opacity-80 transition-opacity"
			>
				<UserAvatar name={displayName} size="sm" />
				<span className="text-sm font-roboto text-foreground">{displayName}</span>
			</Link>
			<Button variant="ghost" size="sm" onClick={() => signOut()}>
				Cerrar sesión
			</Button>
		</div>
	)
}
