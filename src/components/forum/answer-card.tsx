'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { Trash2, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import UserAvatar from './user-avatar'
import ForumContent from './forum-content'
import { useAuth } from './auth-provider'
import { useDeleteAnswer } from '@/lib/forum-queries'
import ReactionBar from './reaction-bar'
import ReplyForm from './reply-form'
import type { Answer } from '@/types/forum'
import type { ReactionSummary } from '@/types/forum'

dayjs.locale('es')

type AnswerCardProps = {
	answer: Answer
	questionAuthorId: string
	reactions: Record<string, ReactionSummary[]>
	questionId: string
	isReply?: boolean
}

export default function AnswerCard({
	answer,
	questionAuthorId,
	reactions,
	questionId,
	isReply = false
}: AnswerCardProps) {
	const { user, isAdmin } = useAuth()
	const deleteAnswerMutation = useDeleteAnswer(questionId)
	const [showReplyForm, setShowReplyForm] = useState(false)

	const canDelete =
		user && (isAdmin || user.id === answer.author_id || user.id === questionAuthorId)

	const handleDelete = () => {
		if (!window.confirm('¿Estás seguro de que deseas eliminar esta respuesta?')) return
		deleteAnswerMutation.mutate(answer.id, {
			onError: () => toast.error('Error al eliminar la respuesta.')
		})
	}

	const answerReactions = reactions[answer.id] ?? []

	return (
		<div>
			<div className={`border border-slate-200 rounded-xl p-5 ${isReply ? '' : 'mb-4'}`}>
				<div className="flex items-center justify-between mb-3">
					<div className="flex gap-3 items-center">
						<UserAvatar name={answer.profiles?.display_name ?? 'Anónimo'} size={isReply ? 'sm' : 'md'} />
						<div>
							<span className="text-slate-700 uppercase text-xs font-bold font-roboto">
								{answer.profiles?.display_name ?? 'Anónimo'}
							</span>
							<p className="text-slate-400 text-xs font-didact">
								{dayjs(answer.created_at).format('D MMM, YYYY')}
							</p>
						</div>
					</div>
					{canDelete && (
						<Button
							variant="ghost"
							size="sm"
							disabled={deleteAnswerMutation.isPending}
							onClick={handleDelete}
							className="text-red-500 hover:text-red-700 hover:bg-red-50"
						>
							<Trash2 size={16} />
						</Button>
					)}
				</div>
				<div className="prose prose-slate max-w-none font-roboto text-foreground/80 text-sm">
					<ForumContent content={answer.body} />
				</div>
				<ReactionBar
					answerId={answer.id}
					reactions={answerReactions}
					questionId={questionId}
				/>

				{/* Reply button — only on top-level answers */}
				{!isReply && user && (
					<div className="mt-2">
						<Button
							variant="ghost"
							size="sm"
							className="text-muted-foreground hover:text-foreground text-xs gap-1"
							onClick={() => setShowReplyForm((prev) => !prev)}
						>
							<MessageSquare size={14} />
							Responder
						</Button>
					</div>
				)}

				{showReplyForm && (
					<ReplyForm
						questionId={questionId}
						parentAnswerId={answer.id}
						onClose={() => setShowReplyForm(false)}
					/>
				)}
			</div>

			{/* Nested replies */}
			{answer.replies && answer.replies.length > 0 && (
				<div className="ml-8 border-l-2 border-slate-200 pl-4 mt-2 mb-4 space-y-2">
					{answer.replies.map((reply) => (
						<AnswerCard
							key={reply.id}
							answer={reply}
							questionAuthorId={questionAuthorId}
							reactions={reactions}
							questionId={questionId}
							isReply
						/>
					))}
				</div>
			)}
		</div>
	)
}
