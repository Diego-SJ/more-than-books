'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/forum/auth-provider'
import { useProfile, useQuestionsByAuthor, useUpdateProfile } from '@/lib/forum-queries'
import { ArrowLeft } from 'lucide-react'
import 'aos/dist/aos.css'

export default function MiPanelPage() {
	const { user, loading } = useAuth()
	const router = useRouter()
	const { data: profile } = useProfile(user?.id)
	const { data: questions = [] } = useQuestionsByAuthor(user?.id)
	const updateProfileMutation = useUpdateProfile(user?.id ?? '')
	const [displayName, setDisplayName] = useState('')

	useEffect(() => {
		if (!loading && !user) {
			router.push('/foro/iniciar-sesion')
		}
	}, [user, loading, router])

	useEffect(() => {
		if (profile) {
			setDisplayName(profile.display_name)
		}
	}, [profile])

	const handleUpdateProfile = () => {
		if (!user) return
		updateProfileMutation.mutate(displayName, {
			onSuccess: (success) => {
				if (success) {
					toast.success('Perfil actualizado')
				} else {
					toast.error('Error al actualizar el perfil')
				}
			},
			onError: () => toast.error('Error al actualizar el perfil')
		})
	}

	if (loading || !user) return null

	return (
		<>
			<Navbar currentPath="forum" />
			<main className="container max-w-2xl mx-auto pt-24 pb-10">
				<Link
					href="/foro"
					className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
				>
					<ArrowLeft size={16} />
					Volver al foro
				</Link>
				<h1 className="text-2xl font-roboto font-bold text-foreground mb-8">Mi panel</h1>

				<section className="mb-10">
					<h2 className="text-xl font-roboto font-bold mb-4">Perfil</h2>
					<div className="grid gap-4">
						<div>
							<label className="mb-2 text-sm font-medium text-gray-700 block">
								Correo electrónico
							</label>
							<Input value={user.email ?? ''} disabled className="bg-slate-50" />
						</div>
						<div>
							<label className="mb-2 text-sm font-medium text-gray-700 block">
								Nombre de usuario
							</label>
							<Input
								value={displayName}
								onChange={(e) => setDisplayName(e.target.value)}
							/>
						</div>
						<Button
							onClick={handleUpdateProfile}
							disabled={updateProfileMutation.isPending}
							className="w-full sm:w-auto"
						>
							{updateProfileMutation.isPending ? 'Guardando...' : 'Guardar cambios'}
						</Button>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-roboto font-bold mb-4">Mis preguntas</h2>
					{questions.length ? (
						<ul className="space-y-3">
							{questions.map((q) => (
								<li key={q.id} className="flex items-start gap-2">
									<Link
										href={`/foro/${q.id}`}
										className="text-primary hover:underline font-roboto"
									>
										{q.title}
									</Link>
									{q.hashtags && q.hashtags.length > 0 && (
										<div className="flex gap-1 flex-wrap">
											{q.hashtags.map((h) => (
												<span
													key={h.id}
													className="text-xs text-muted-foreground font-roboto"
												>
													#{h.name}
												</span>
											))}
										</div>
									)}
								</li>
							))}
						</ul>
					) : (
						<p className="text-slate-500 font-roboto">Aún no has creado preguntas.</p>
					)}
				</section>
			</main>
			<Footer mt={20} />
		</>
	)
}
