import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import QuestionDetail from '@/components/forum/question-detail'
import AnswerCard from '@/components/forum/answer-card'
import AnswerForm from '@/components/forum/answer-form'
import RealtimeAnswers from '@/components/forum/realtime-answers'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { nestAnswers } from '@/lib/forum'
import { ArrowLeft } from 'lucide-react'
import type { Question, Answer, ReactionSummary } from '@/types/forum'

export default async function QuestionPage({ params }: { params: { question_id: string } }) {
	const supabase = createServerSupabaseClient()
	const questionId = params.question_id

	// Get current user for reaction "reacted" status
	const {
		data: { user }
	} = await supabase.auth.getUser()

	// Fetch question
	const { data: questionData } = await supabase
		.from('questions')
		.select('*, profiles(*), question_hashtags(hashtags(*))')
		.eq('id', questionId)
		.single()

	if (!questionData) {
		return (
			<>
				<Navbar currentPath="forum" />
				<main className="container mx-auto pt-24 pb-10 px-4">
					<div className="text-center py-20">
						<p className="text-slate-500 font-roboto mb-4">
							Esta pregunta no existe o fue eliminada.
						</p>
						<Link href="/foro" className="text-primary hover:underline font-roboto font-semibold">
							Volver al foro
						</Link>
					</div>
				</main>
				<Footer mt={20} />
			</>
		)
	}

	const question: Question = {
		...questionData,
		hashtags: (questionData.question_hashtags ?? []).map((qh: any) => qh.hashtags)
	}

	// Fetch answers
	const { data: answersData } = await supabase
		.from('answers')
		.select('*, profiles(*)')
		.eq('question_id', questionId)
		.order('created_at', { ascending: true })

	const answers: Answer[] = answersData ?? []
	const nested = nestAnswers(answers)

	// Fetch reactions
	const answerIds = answers.map((a) => a.id)
	let reactions: Record<string, ReactionSummary[]> = {}

	if (answerIds.length > 0) {
		const { data: reactionsData } = await supabase
			.from('reactions')
			.select('*')
			.in('answer_id', answerIds)

		for (const answerId of answerIds) {
			const answerReactions = (reactionsData ?? []).filter((r: any) => r.answer_id === answerId)
			const emojiMap = new Map<string, { count: number; reacted: boolean }>()

			for (const r of answerReactions) {
				const existing = emojiMap.get(r.emoji) ?? { count: 0, reacted: false }
				existing.count++
				if (user && r.user_id === user.id) existing.reacted = true
				emojiMap.set(r.emoji, existing)
			}

			reactions[answerId] = Array.from(emojiMap.entries()).map(([emoji, data]) => ({
				emoji,
				...data
			}))
		}
	}

	// Fetch related questions
	const hashtagNames = question.hashtags?.map((h) => h.name) ?? []
	let relatedQuestions: Question[] = []

	if (hashtagNames.length > 0) {
		const { data: relatedData } = await supabase
			.from('questions')
			.select('*, profiles(*), question_hashtags(hashtags(*))')
			.neq('id', questionId)
			.order('created_at', { ascending: false })

		relatedQuestions = (relatedData ?? [])
			.map((q: any) => ({
				...q,
				hashtags: (q.question_hashtags ?? []).map((qh: any) => qh.hashtags)
			}))
			.filter((q: any) => q.hashtags.some((h: any) => hashtagNames.includes(h.name)))
			.slice(0, 5)
	}

	return (
		<>
			<Navbar currentPath="forum" />
			<main className="container mx-auto pt-24 pb-10 px-4">
				<Link
					href="/foro"
					className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
				>
					<ArrowLeft size={16} />
					Volver al foro
				</Link>

				<div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
					<RealtimeAnswers questionId={questionId}>
						<div>
							<QuestionDetail question={question} answerCount={answers.length} />

							<h2 className="text-lg font-roboto font-bold mb-4">
								{answers.length} {answers.length === 1 ? 'respuesta' : 'respuestas'}
							</h2>

							{nested.map((answer) => (
								<div key={answer.id}>
									<AnswerCard
										answer={answer}
										questionAuthorId={question.author_id}
										reactions={reactions}
										questionId={questionId}
									/>
								</div>
							))}

							<div className="mt-8">
								<AnswerForm questionId={questionId} />
							</div>
						</div>
					</RealtimeAnswers>

					<div className="hidden lg:block">
						<section>
							<h2 className="text-lg font-roboto font-bold text-foreground mb-1">
								Preguntas relacionadas
							</h2>
							{relatedQuestions.length > 0 ? (
								<>
									<p className="text-sm text-muted-foreground font-roboto mb-4">
										Otras preguntas con temas similares.
									</p>
									<ul className="space-y-4">
										{relatedQuestions.map((q) => (
											<li key={q.id}>
												<Link
													href={`/foro/${q.id}`}
													className="block text-sm font-roboto text-foreground hover:text-primary transition-colors"
												>
													{q.title}
												</Link>
											</li>
										))}
									</ul>
								</>
							) : (
								<p className="text-sm text-muted-foreground font-roboto mb-4">
									No hay preguntas relacionadas.
								</p>
							)}
						</section>
					</div>
				</div>
			</main>
			<Footer mt={20} />
		</>
	)
}
