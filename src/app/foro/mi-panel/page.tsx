import { redirect } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MiPanelClient from './mi-panel-client'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Question } from '@/types/forum'

export default async function MiPanelPage() {
	const supabase = createServerSupabaseClient()

	const {
		data: { user }
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/foro/iniciar-sesion')
	}

	// Fetch profile
	const { data: profile } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.id)
		.single()

	if (!profile) {
		redirect('/foro/iniciar-sesion')
	}

	// Fetch user's questions
	const { data: questionsData } = await supabase
		.from('questions')
		.select('*, question_hashtags(hashtags(*))')
		.eq('author_id', user.id)
		.order('created_at', { ascending: false })

	const questions: Question[] = (questionsData ?? []).map((q: any) => ({
		...q,
		hashtags: (q.question_hashtags ?? []).map((qh: any) => qh.hashtags)
	}))

	return (
		<>
			<Navbar currentPath="forum" />
			<main className="container max-w-2xl mx-auto pt-24 pb-10">
				<MiPanelClient profile={profile} questions={questions} />
			</main>
			<Footer mt={20} />
		</>
	)
}
