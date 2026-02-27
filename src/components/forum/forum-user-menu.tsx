'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'

export default function ForumUserMenu() {
	const { user, loading, signOut } = useAuth()

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

	return (
		<div className="flex items-center gap-3">
			<Link href="/foro/mi-panel" className="text-sm font-roboto text-foreground hover:text-primary">
				{user.email?.split('@')[0]}
			</Link>
			<Button variant="ghost" size="sm" onClick={() => signOut()}>
				Cerrar sesión
			</Button>
		</div>
	)
}
