'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import QuestionDetail from '@/components/forum/question-detail'
import AnswerCard from '@/components/forum/answer-card'
import AnswerForm from '@/components/forum/answer-form'
import RelatedQuestions from '@/components/forum/related-questions'
import { useAuth } from '@/components/forum/auth-provider'
import { useQuestion, useAnswers, useReactions } from '@/lib/forum-queries'
import { nestAnswers } from '@/lib/forum'
import { ArrowLeft } from 'lucide-react'
import 'aos/dist/aos.css'

export default function QuestionPage() {
	const params = useParams()
	const questionId = params.question_id as string
	const { user } = useAuth()

	const { data: question } = useQuestion(questionId)
	const { data: answers = [] } = useAnswers(questionId)
	const answerIds = answers.map((a) => a.id)
	const { data: reactions = {} } = useReactions(answerIds, user?.id)
	const nested = nestAnswers(answers)

	const hashtagNames = question?.hashtags?.map((h) => h.name) ?? []

	useEffect(() => {
		const initAOS = async () => {
			const AOS = (await import('aos')).default
			AOS.init({ once: true, duration: 800 })
		}
		initAOS()
	}, [])

	if (!question) {
		return (
			<>
				<Navbar currentPath="forum" />
				<main className="container mx-auto pt-24 pb-10 px-4">
					<p className="text-center text-slate-500 font-roboto">Cargando...</p>
				</main>
				<Footer mt={20} />
			</>
		)
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

				{/* Two-column layout */}
				<div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
					{/* Left: Question + Answers */}
					<div>
						<QuestionDetail question={question} answerCount={answers.length} />

						<h2 className="text-lg font-roboto font-bold mb-4">
							{answers.length} {answers.length === 1 ? 'respuesta' : 'respuestas'}
						</h2>

						{nested.map((answer, index) => (
							<div
								key={answer.id}
								data-aos="fade-up"
								data-aos-duration="300"
								data-aos-delay={index * 50}
							>
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

					{/* Right: Sidebar (hidden on mobile) */}
					<div className="hidden lg:block">
						<RelatedQuestions
							questionId={questionId}
							hashtagNames={hashtagNames}
						/>
					</div>
				</div>
			</main>
			<Footer mt={20} />
		</>
	)
}
