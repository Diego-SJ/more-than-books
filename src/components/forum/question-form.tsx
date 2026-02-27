'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useAuth } from './auth-provider'
import { useCreateQuestion } from '@/lib/forum-queries'
import RichTextEditor from './rich-text-editor'

type FormData = {
	title: string
	body: string
}

export default function QuestionForm() {
	const { user } = useAuth()
	const router = useRouter()
	const createQuestionMutation = useCreateQuestion()
	const [hashtags, setHashtags] = useState<string[]>([])
	const [hashtagInput, setHashtagInput] = useState('')
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<FormData>()

	const addHashtag = (value: string) => {
		const tag = value.trim().toLowerCase().replace(/^#/, '')
		if (tag && !hashtags.includes(tag)) {
			setHashtags((prev) => [...prev, tag])
		}
		setHashtagInput('')
	}

	const removeHashtag = (tag: string) => {
		setHashtags((prev) => prev.filter((h) => h !== tag))
	}

	const handleHashtagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' || e.key === ',') {
			e.preventDefault()
			addHashtag(hashtagInput)
		}
	}

	const onSubmit = (data: FormData) => {
		if (!user) return
		if (hashtags.length === 0) {
			toast.error('Agrega al menos un hashtag')
			return
		}
		createQuestionMutation.mutate(
			{ title: data.title, body: data.body, hashtags, authorId: user.id },
			{
				onSuccess: (question) => {
					if (question) {
						toast.success('Pregunta creada')
						router.push(`/foro/${question.id}`)
					}
				},
				onError: () => toast.error('Error al crear la pregunta. Inténtalo de nuevo.')
			}
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-6 grid-cols-1">
			<div className="flex flex-col items-start w-full">
				<label htmlFor="title" className="mb-2 text-sm font-medium text-gray-700">
					Título *
				</label>
				<Input
					placeholder="¿Cuál es tu pregunta?"
					{...register('title', { required: true })}
					className="w-full"
				/>
				{errors.title && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">
						Campo obligatorio
					</span>
				)}
			</div>
			<div className="flex flex-col items-start w-full">
				<label className="mb-2 text-sm font-medium text-gray-700">
					Hashtags *
				</label>
				<Input
					placeholder="Escribe un hashtag y presiona Enter"
					value={hashtagInput}
					onChange={(e) => setHashtagInput(e.target.value)}
					onKeyDown={handleHashtagKeyDown}
					onBlur={() => {
						if (hashtagInput.trim()) addHashtag(hashtagInput)
					}}
				/>
				{hashtags.length > 0 && (
					<div className="flex gap-2 flex-wrap mt-2">
						{hashtags.map((tag) => (
							<span
								key={tag}
								className="inline-flex items-center gap-1 text-sm font-roboto text-primary bg-primary/10 rounded-full px-3 py-1"
							>
								#{tag}
								<button
									type="button"
									onClick={() => removeHashtag(tag)}
									className="text-primary/60 hover:text-primary transition-colors"
								>
									<X size={12} />
								</button>
							</span>
						))}
					</div>
				)}
			</div>
			<div className="flex flex-col items-start w-full">
				<label htmlFor="body" className="mb-2 text-sm font-medium text-gray-700">
					Descripción *
				</label>
				<Controller
					name="body"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<RichTextEditor
							value={field.value || ''}
							onChange={(val) => field.onChange(val)}
							placeholder="Describe tu pregunta con detalle..."
						/>
					)}
				/>
				{errors.body && (
					<span className="text-red-600 font-roboto font-thin text-sm mt-1">
						Campo obligatorio
					</span>
				)}
			</div>
			<Button type="submit" disabled={createQuestionMutation.isPending} className="w-full">
				{createQuestionMutation.isPending ? 'Publicando...' : 'Publicar pregunta'}
			</Button>
		</form>
	)
}
