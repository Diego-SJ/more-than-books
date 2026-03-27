'use client'

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
import { useDeleteQuestion } from '@/lib/forum-queries'
import type { Question } from '@/types/forum'

dayjs.locale('es')

type QuestionDetailProps = {
	question: Question
	answerCount: number
}

export default function QuestionDetail({ question, answerCount }: QuestionDetailProps) {
	const { user, isAdmin } = useAuth()
	const router = useRouter()
	const deleteQuestionMutation = useDeleteQuestion()

	const canDeleteQuestion = user && (isAdmin || user.id === question.author_id)

	const handleDeleteQuestion = () => {
		if (!window.confirm('¿Estás seguro de que deseas eliminar esta pregunta? Se eliminarán todas las respuestas asociadas.')) return
		deleteQuestionMutation.mutate(question.id, {
			onSuccess: () => router.push('/foro'),
			onError: () => toast.error('Error al eliminar la pregunta.')
		})
	}

	return (
		<div className="mb-8">
			{/* Badge + Delete */}
			<div className="flex items-center justify-between mb-4">
				<span className="inline-block text-xs font-roboto font-bold uppercase tracking-wide bg-foreground text-background px-2.5 py-1 rounded">
					Pregunta
				</span>
				{canDeleteQuestion && (
					<Button
						variant="outline"
						size="sm"
						disabled={deleteQuestionMutation.isPending}
						onClick={handleDeleteQuestion}
						className="text-red-500 border-red-300 hover:text-red-700 hover:bg-red-50 hover:border-red-400 gap-1.5"
					>
						<Trash2 size={16} />
						Eliminar pregunta
					</Button>
				)}
			</div>

			{/* Title */}
			<h1 className="text-2xl sm:text-3xl font-roboto font-bold text-foreground mb-3 leading-tight">
				{question.title}
			</h1>

			{/* Meta */}
			<p className="text-sm text-muted-foreground font-roboto mb-6">
				{dayjs(question.created_at).format('D MMM, YYYY')}
				<span className="mx-2">&middot;</span>
				{answerCount} {answerCount === 1 ? 'respuesta' : 'respuestas'}
			</p>

			{/* Author + Body */}
			<div className="border border-slate-200 rounded-xl p-5 mb-2">
				<div className="flex gap-3 items-center mb-4">
					<UserAvatar name={question.profiles?.display_name ?? 'Anónimo'} size="md" />
					<div>
						<span className="text-sm font-roboto font-semibold text-foreground">
							{question.profiles?.display_name ?? 'Anónimo'}
						</span>
					</div>
				</div>

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
