'use client'

import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { useRouter } from 'next/navigation'
import UserAvatar from './user-avatar'
import type { Question } from '@/types/forum'

dayjs.locale('es')

type QuestionCardProps = {
	question: Question
	onHashtagClick?: (name: string) => void
}

export default function QuestionCard({ question, onHashtagClick }: QuestionCardProps) {
	const router = useRouter()

	return (
		<article
			className="flex items-start gap-4 py-4 border-b border-slate-100 hover:bg-slate-50/50 transition-colors cursor-pointer px-2 -mx-2 rounded"
			onClick={() => router.push(`/foro/${question.id}`)}
		>
			{/* Avatar */}
			<div className="shrink-0 mt-0.5">
				<UserAvatar name={question.profiles?.display_name ?? 'Anónimo'} size="lg" />
			</div>

			{/* Content */}
			<div className="min-w-0 flex-1">
				{/* Title row */}
				<div className="flex items-start gap-2">
					<span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
					<h3 className="text-base font-roboto font-bold text-foreground leading-snug">
						{question.title}
					</h3>
				</div>

				{/* Meta row */}
				<p className="text-sm text-muted-foreground font-roboto mt-1 ml-4">
					{question.profiles?.display_name ?? 'Anónimo'}
					<span className="mx-2">&middot;</span>
					{dayjs(question.created_at).format('D MMM, YYYY')}
					<span className="mx-2">&middot;</span>
					{question.answer_count ?? 0} respuestas
				</p>

				{/* Hashtags */}
				{question.hashtags && question.hashtags.length > 0 && (
					<div className="flex gap-2 flex-wrap mt-1.5 ml-4">
						{question.hashtags.map((h) => (
							<button
								key={h.id}
								onClick={(e) => {
									e.stopPropagation()
									onHashtagClick?.(h.name)
								}}
								className="text-xs font-roboto text-primary/70 hover:text-primary transition-colors"
							>
								#{h.name}
							</button>
						))}
					</div>
				)}
			</div>
		</article>
	)
}
