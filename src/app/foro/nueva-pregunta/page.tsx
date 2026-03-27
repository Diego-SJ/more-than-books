'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import QuestionForm from '@/components/forum/question-form'
import { useAuth } from '@/components/forum/auth-provider'
import { ArrowLeft } from 'lucide-react'
import 'aos/dist/aos.css'

export default function NuevaPreguntaPage() {
	const { user, isAdmin, loading } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!loading && (!user || !isAdmin)) {
			router.push('/foro')
		}
	}, [user, isAdmin, loading, router])

	if (loading || !user || !isAdmin) return null

	return (
		<>
			<Navbar currentPath="forum" />
			<main className="container max-w-2xl mx-auto pt-24 pb-10">
				<Link
					href="/foro"
					className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
				>
					<ArrowLeft size={16} />
					Volver al foro
				</Link>
				<h1 className="text-2xl font-roboto font-bold text-foreground mb-8">Nueva pregunta</h1>
				<QuestionForm />
			</main>
			<Footer mt={20} />
		</>
	)
}
