'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'

type FormData = { email: string }

export default function LoginForm() {
	const [isPending, startTransition] = useTransition()
	const [sent, setSent] = useState(false)
	const { signInWithMagicLink } = useAuth()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		startTransition(async () => {
			const { error } = await signInWithMagicLink(data.email)
			if (error) {
				toast.error('Error al enviar el enlace. Inténtalo de nuevo.')
			} else {
				setSent(true)
			}
		})
	}

	if (sent) {
		return (
			<div className="text-center py-8">
				<h2 className="text-2xl font-roboto font-bold text-foreground mb-4">
					Revisa tu correo electrónico
				</h2>
				<p className="text-slate-500 font-roboto">
					Te enviamos un enlace mágico para iniciar sesión. Revisa tu bandeja de entrada.
				</p>
			</div>
		)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid gap-y-6 grid-cols-1 min-w-[300px] mx-auto"
		>
			<div className="flex flex-col items-start w-full">
				<label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
					Correo electrónico
				</label>
				<Input
					type="email"
					autoComplete="email"
					placeholder="tu@correo.com"
					{...register('email', { required: true })}
					className="w-full"
				/>
				{errors.email && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">Campo obligatorio</span>
				)}
			</div>
			<Button type="submit" disabled={isPending} className="w-full">
				{isPending ? 'Enviando...' : 'Enviar enlace mágico'}
			</Button>
		</form>
	)
}
