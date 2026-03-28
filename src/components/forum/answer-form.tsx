'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'
import { createAnswer } from '@/lib/forum'
import RichTextEditor from './rich-text-editor'
import Link from 'next/link'

type FormData = { body: string }

type AnswerFormProps = {
	questionId: string
}

export default function AnswerForm({ questionId }: AnswerFormProps) {
	const { user } = useAuth()
	const router = useRouter()
	const [isPending, setIsPending] = useState(false)
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm<FormData>()

	if (!user) {
		return (
			<div className="text-center py-6 border border-dashed border-slate-300 rounded-xl">
				<p className="text-slate-500 font-roboto">
					<Link href="/foro/iniciar-sesion" className="text-primary hover:underline font-semibold">
						Inicia sesión
					</Link>{' '}
					para responder
				</p>
			</div>
		)
	}

	const onSubmit = async (data: FormData) => {
		setIsPending(true)
		try {
			await createAnswer(data.body, questionId, user.id)
			toast.success('Respuesta publicada')
			reset()
			router.refresh()
		} catch {
			toast.error('Error al publicar la respuesta.')
		} finally {
			setIsPending(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4 grid-cols-1">
			<h3 className="text-lg font-roboto font-semibold text-foreground">Tu respuesta</h3>
			<Controller
				name="body"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<RichTextEditor
						value={field.value || ''}
						onChange={(val) => field.onChange(val)}
						placeholder="Escribe tu respuesta..."
					/>
				)}
			/>
			{errors.body && (
				<span className="text-red-600 font-roboto font-thin text-sm">Campo obligatorio</span>
			)}
			<Button type="submit" disabled={isPending} className="w-full sm:w-auto">
				{isPending ? 'Publicando...' : 'Responder'}
			</Button>
		</form>
	)
}
