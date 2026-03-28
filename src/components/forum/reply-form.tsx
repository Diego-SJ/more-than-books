'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'
import { createAnswer } from '@/lib/forum'
import RichTextEditor from './rich-text-editor'

type FormData = { body: string }

type ReplyFormProps = {
	questionId: string
	parentAnswerId: string
	onClose: () => void
}

export default function ReplyForm({ questionId, parentAnswerId, onClose }: ReplyFormProps) {
	const { user } = useAuth()
	const router = useRouter()
	const [isPending, setIsPending] = useState(false)
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FormData>()

	if (!user) return null

	const onSubmit = async (data: FormData) => {
		setIsPending(true)
		try {
			await createAnswer(data.body, questionId, user.id, parentAnswerId)
			toast.success('Respuesta publicada')
			onClose()
			router.refresh()
		} catch {
			toast.error('Error al publicar la respuesta.')
		} finally {
			setIsPending(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-3 grid-cols-1 mt-3">
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
			<div className="flex gap-2">
				<Button type="submit" size="sm" disabled={isPending}>
					{isPending ? 'Publicando...' : 'Responder'}
				</Button>
				<Button type="button" variant="ghost" size="sm" onClick={onClose}>
					Cancelar
				</Button>
			</div>
		</form>
	)
}
