import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import UserAvatar from './user-avatar'
import type { Question, TopContributor } from '@/types/forum'

type ForumSidebarProps = {
	contributors: TopContributor[]
	unansweredQuestions: Question[]
}

export default function ForumSidebar({ contributors, unansweredQuestions }: ForumSidebarProps) {
	return (
		<aside className="space-y-8">
			{/* Top Contributors */}
			<section>
				<h2 className="text-xl font-roboto font-bold text-foreground mb-1">
					Top Contributors
				</h2>
				<p className="text-sm text-muted-foreground font-roboto mb-4">
					Quienes más participan respondiendo preguntas.
				</p>
				{contributors.length > 0 ? (
					<ul className="space-y-3">
						{contributors.map((c) => (
							<li key={c.id} className="flex items-center gap-3">
								{c.avatar_url ? (
									<img
										src={c.avatar_url}
										alt={c.display_name}
										className="w-6 h-6 rounded-full object-cover shrink-0"
									/>
								) : (
									<UserAvatar name={c.display_name} size="sm" />
								)}
								<span className="text-sm font-roboto font-medium text-foreground truncate">
									{c.display_name}
								</span>
								<div className="flex items-center gap-1 text-muted-foreground ml-auto shrink-0">
									<MessageCircle size={14} />
									<span className="text-sm font-roboto">{c.answer_count}</span>
								</div>
							</li>
						))}
					</ul>
				) : (
					<p className="text-sm text-muted-foreground font-roboto">
						Aún no hay contribuidores.
					</p>
				)}
			</section>

			{/* Unanswered Questions */}
			{unansweredQuestions.length > 0 && (
				<section>
					<h2 className="text-xl font-roboto font-bold text-foreground mb-1">
						Sin responder
					</h2>
					<p className="text-sm text-muted-foreground font-roboto mb-4">
						Preguntas que aún no tienen respuestas. Sé el primero en participar.
					</p>
					<ul className="space-y-3">
						{unansweredQuestions.map((q) => (
							<li key={q.id}>
								<span className="text-xs text-muted-foreground font-roboto">
									{q.profiles?.display_name ?? 'Anónimo'} preguntó
								</span>
								<Link
									href={`/foro/${q.id}`}
									className="block text-sm font-roboto font-medium text-foreground hover:text-primary transition-colors"
								>
									{q.title}
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</aside>
	)
}
