import { redirect } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import QuestionForm from '@/components/forum/question-form'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { ArrowLeft } from 'lucide-react'

export default async function NuevaPreguntaPage() {
	const supabase = createServerSupabaseClient()

	const {
		data: { user }
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/foro/iniciar-sesion')
	}

	// Verify admin role
	const { data: profile } = await supabase
		.from('profiles')
		.select('role')
		.eq('id', user.id)
		.single()

	if (profile?.role !== 'admin') {
		redirect('/foro')
	}

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
