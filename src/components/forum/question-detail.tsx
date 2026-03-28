'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import UserAvatar from './user-avatar'
import ForumContent from './forum-content'
import { useAuth } from './auth-provider'
import { deleteQuestion } from '@/lib/forum'
import type { Question } from '@/types/forum'

dayjs.locale('es')

type QuestionDetailProps = {
	question: Question
	answerCount: number
}

export default function QuestionDetail({ question, answerCount }: QuestionDetailProps) {
	const { user, isAdmin } = useAuth()
	const router = useRouter()
	const [isDeleting, setIsDeleting] = useState(false)

	const canDeleteQuestion = user && (isAdmin || user.id === question.author_id)

	const handleDeleteQuestion = async () => {
		if (!window.confirm('¿Estás seguro de que deseas eliminar esta pregunta? Se eliminarán todas las respuestas asociadas.')) return
		setIsDeleting(true)
		try {
			await deleteQuestion(question.id)
			router.push('/foro')
		} catch {
			toast.error('Error al eliminar la pregunta.')
			setIsDeleting(false)
		}
	}

	return (
		<div className="mb-10">
			{/* Card de la pregunta */}
			<div className="border border-slate-200 border-l-4 border-l-primary rounded-xl bg-slate-50 p-6 sm:p-8 mb-2">
				{/* Badge + Delete */}
				<div className="flex items-center justify-between mb-5">
					<span className="inline-block text-xs font-roboto font-bold uppercase tracking-wide bg-foreground text-background px-2.5 py-1 rounded">
						Pregunta
					</span>
					{canDeleteQuestion && (
						<Button
							variant="outline"
							size="sm"
							disabled={isDeleting}
							onClick={handleDeleteQuestion}
							className="text-red-500 border-red-300 hover:text-red-700 hover:bg-red-50 hover:border-red-400 gap-1.5"
						>
							<Trash2 size={16} />
							Eliminar pregunta
						</Button>
					)}
				</div>

				{/* Author + Meta */}
				<div className="flex gap-3 items-center mb-5">
					<UserAvatar name={question.profiles?.display_name ?? 'Anónimo'} size="lg" />
					<div>
						<span className="text-sm font-roboto font-semibold text-foreground">
							{question.profiles?.display_name ?? 'Anónimo'}
						</span>
						<p className="text-xs text-muted-foreground font-roboto mt-0.5">
							{dayjs(question.created_at).format('D MMM, YYYY')}
							<span className="mx-1.5">&middot;</span>
							{answerCount} {answerCount === 1 ? 'respuesta' : 'respuestas'}
						</p>
					</div>
				</div>

				{/* Title */}
				<h1 className="text-2xl sm:text-3xl font-roboto font-bold text-foreground mb-5 leading-tight">
					{question.title}
				</h1>

				{/* Body */}
				<div className="prose prose-slate max-w-none font-roboto text-foreground/80">
					<ForumContent content={question.body} />
				</div>

				{/* Hashtags */}
				{question.hashtags && question.hashtags.length > 0 && (
					<div className="flex gap-2 flex-wrap mt-6">
						{question.hashtags.map((h) => (
							<Link
								key={h.id}
								href="/foro"
								className="text-xs font-roboto text-muted-foreground border border-border rounded-full px-3 py-1 hover:border-primary/50 hover:text-primary transition-colors"
							>
								{h.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
