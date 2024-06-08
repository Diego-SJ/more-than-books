'use client'
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const onSuccess = () => {
		toast.success('Mensaje enviado correctamente')
		reset()
	}

	const onSubmit = (data: any) => {
		console.log(data)
		onSuccess()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-6 grid-cols-1">
			<div className="flex flex-col items-start w-full">
				<label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
					Nombre *
				</label>
				<Input
					autoComplete="name"
					placeholder="Nombre"
					{...register('name', { required: true })}
					className="w-full"
				/>
				{errors.name && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">Campo obligatorio</span>
				)}
			</div>
			<div className="flex flex-col items-start w-full">
				<label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
					Correo Electrónico *
				</label>
				<Input
					type="email"
					className="w-full"
					autoComplete="email"
					placeholder="Correo Electrónico"
					{...register('email', { required: true })}
				/>
				{errors.email && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">Campo obligatorio</span>
				)}
			</div>
			<div className="flex flex-col items-start w-full">
				<label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
					Mensaje *
				</label>
				<Textarea
					placeholder="Escribe tu mensaje aquí"
					{...register('message', { required: true })}
				/>
				{errors.message && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">Campo obligatorio</span>
				)}
			</div>
			<div className="w-full">
				<button
					type="submit"
					className="w-full border font-thin min-w-max font-roboto bg-primary text-secondary border-primary px-4 py-2 h-[44px] rounded-xl hover:bg-primary/90 hover:shadow-sm hover:shadow-black transition-all"
				>
					Enviar mensaje
				</button>
			</div>
		</form>
	)
}

export default ContactForm
