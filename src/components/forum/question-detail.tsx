'use client'

import dayjs from 'dayjs'
import 'dayjs/locale/es'
import Link from 'next/link'
import UserAvatar from './user-avatar'
import ForumContent from './forum-content'
import type { Question } from '@/types/forum'

dayjs.locale('es')

type QuestionDetailProps = {
	question: Question
	answerCount: number
}

export default function QuestionDetail({ question, answerCount }: QuestionDetailProps) {
	return (
		<div className="mb-8">
			{/* Badge */}
			<span className="inline-block text-xs font-roboto font-bold uppercase tracking-wide bg-foreground text-background px-2.5 py-1 rounded mb-4">
				Pregunta
			</span>

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
