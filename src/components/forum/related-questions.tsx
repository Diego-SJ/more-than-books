'use client'

import Link from 'next/link'
import { useRelatedQuestions } from '@/lib/forum-queries'

type RelatedQuestionsProps = {
	questionId: string
	hashtagNames: string[]
}

export default function RelatedQuestions({ questionId, hashtagNames }: RelatedQuestionsProps) {
	const { data: related = [] } = useRelatedQuestions(questionId, hashtagNames)

	if (related.length === 0) return null

	return (
		<section>
			<h2 className="text-lg font-roboto font-bold text-foreground mb-1">
				Preguntas relacionadas
			</h2>
			<p className="text-sm text-muted-foreground font-roboto mb-4">
				Otras preguntas con temas similares.
			</p>
			<ul className="space-y-4">
				{related.map((q) => (
					<li key={q.id}>
						<Link
							href={`/foro/${q.id}`}
							className="text-sm font-roboto font-semibold text-foreground hover:text-primary transition-colors leading-snug block"
						>
							{q.title}
						</Link>
						{q.hashtags && q.hashtags.length > 0 && (
							<div className="flex gap-1.5 flex-wrap mt-1">
								{q.hashtags.map((h) => (
									<span
										key={h.id}
										className="text-xs font-roboto text-muted-foreground"
									>
										#{h.name}
									</span>
								))}
							</div>
						)}
					</li>
				))}
			</ul>
		</section>
	)
}
