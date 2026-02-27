'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'

type FormData = { email: string; password: string }

export default function LoginForm() {
	const [isPending, startTransition] = useTransition()
	const { signIn } = useAuth()
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		startTransition(async () => {
			const { error } = await signIn(data.email, data.password)
			if (error) {
				toast.error('Correo o contraseña incorrectos.')
			} else {
				router.push('/foro')
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid gap-y-6 grid-cols-1 max-w-[600px] w-full mx-auto"
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
			<div className="flex flex-col items-start w-full">
				<label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">
					Contraseña
				</label>
				<Input
					type="password"
					autoComplete="current-password"
					placeholder="Tu contraseña"
					{...register('password', { required: true })}
					className="w-full"
				/>
				{errors.password && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">Campo obligatorio</span>
				)}
			</div>
			<Button type="submit" disabled={isPending} className="w-full">
				{isPending ? 'Iniciando sesión...' : 'Iniciar sesión'}
			</Button>
			<p className="text-center text-sm text-slate-500 font-roboto">
				¿No tienes cuenta?{' '}
				<Link href="/foro/registro" className="text-primary hover:underline">
					Regístrate
				</Link>
			</p>
		</form>
	)
}
