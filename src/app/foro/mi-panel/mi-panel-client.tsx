'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { updateProfile } from '@/lib/forum'
import { ArrowLeft } from 'lucide-react'
import type { Profile, Question } from '@/types/forum'

type MiPanelClientProps = {
	profile: Profile
	questions: Question[]
}

export default function MiPanelClient({ profile, questions }: MiPanelClientProps) {
	const router = useRouter()
	const [displayName, setDisplayName] = useState(profile.display_name)
	const [isPending, setIsPending] = useState(false)

	const handleUpdateProfile = async () => {
		setIsPending(true)
		try {
			const success = await updateProfile(profile.id, displayName)
			if (success) {
				toast.success('Perfil actualizado')
				router.refresh()
			} else {
				toast.error('Error al actualizar el perfil')
			}
		} catch {
			toast.error('Error al actualizar el perfil')
		} finally {
			setIsPending(false)
		}
	}

	return (
		<>
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
						<Input value={profile.email} disabled className="bg-slate-50" />
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
						disabled={isPending}
						className="w-full sm:w-auto"
					>
						{isPending ? 'Guardando...' : 'Guardar cambios'}
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
		</>
	)
}
