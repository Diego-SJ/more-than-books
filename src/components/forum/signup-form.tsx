'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'

type FormData = {
	displayName: string
	email: string
	password: string
	confirmPassword: string
}

export default function SignupForm() {
	const [isPending, startTransition] = useTransition()
	const { signUp } = useAuth()
	const router = useRouter()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		startTransition(async () => {
			const { error } = await signUp(data.email, data.password, data.displayName)
			if (error) {
				toast.error(error)
			} else {
				router.push('/foro')
			}
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-6 grid-cols-1 w-full mx-auto">
			<div className="flex flex-col items-start w-full">
				<label htmlFor="displayName" className="mb-2 text-sm font-medium text-gray-700">
					Nombre de usuario
				</label>
				<Input
					type="text"
					autoComplete="name"
					placeholder="Tu nombre"
					{...register('displayName', { required: true })}
					className="w-full"
				/>
				{errors.displayName && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">Campo obligatorio</span>
				)}
			</div>
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
					autoComplete="new-password"
					placeholder="Mínimo 8 caracteres"
					{...register('password', {
						required: 'Campo obligatorio',
						minLength: { value: 8, message: 'Mínimo 8 caracteres' }
					})}
					className="w-full"
				/>
				{errors.password && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">
						{errors.password.message}
					</span>
				)}
			</div>
			<div className="flex flex-col items-start w-full">
				<label htmlFor="confirmPassword" className="mb-2 text-sm font-medium text-gray-700">
					Confirmar contraseña
				</label>
				<Input
					type="password"
					autoComplete="new-password"
					placeholder="Repite tu contraseña"
					{...register('confirmPassword', {
						required: 'Campo obligatorio',
						validate: (val) => val === watch('password') || 'Las contraseñas no coinciden'
					})}
					className="w-full"
				/>
				{errors.confirmPassword && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">
						{errors.confirmPassword.message}
					</span>
				)}
			</div>
			<Button type="submit" disabled={isPending} className="w-full">
				{isPending ? 'Creando cuenta...' : 'Crear cuenta'}
			</Button>
			<p className="text-center text-sm text-slate-500 font-roboto">
				¿Ya tienes cuenta?{' '}
				<Link href="/foro/iniciar-sesion" className="text-primary hover:underline">
					Inicia sesión
				</Link>
			</p>
		</form>
	)
}
