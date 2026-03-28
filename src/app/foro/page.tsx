import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ForumFeed from './forum-feed'
import ForumSidebar from '@/components/forum/forum-sidebar'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Question, Hashtag } from '@/types/forum'

export default async function ForoPage() {
	const supabase = createServerSupabaseClient()

	// Fetch questions with profiles, hashtags, and answer counts
	const { data: questionsData } = await supabase
		.from('questions')
		.select('*, profiles(*), question_hashtags(hashtags(*)), answers(count)')
		.order('created_at', { ascending: false })

	const questions: Question[] = (questionsData ?? []).map((q: any) => ({
		...q,
		hashtags: (q.question_hashtags ?? []).map((qh: any) => qh.hashtags),
		answer_count: q.answers?.[0]?.count ?? 0
	}))

	// Fetch hashtags
	const { data: hashtagsData } = await supabase.from('hashtags').select('*').order('name')

	const hashtags: Hashtag[] = hashtagsData ?? []

	// Fetch top contributors
	const { data: contributorsData } = await supabase.rpc('get_top_contributors', { lim: 10 })
	const contributors = contributorsData ?? []

	// Compute unanswered questions for sidebar
	const unanswered = questions.filter((q) => (q.answer_count ?? 0) === 0).slice(0, 5)

	return (
		<>
			<Navbar currentPath="forum" />
			<main className="container mx-auto pt-24 pb-10 px-4">
				<div className="lg:grid lg:grid-cols-[70dvw_auto] lg:gap-10">
					<div>
						<ForumFeed questions={questions} hashtags={hashtags} />
					</div>
					<div>
						<ForumSidebar contributors={contributors} unansweredQuestions={unanswered} />
					</div>
				</div>
			</main>
			<Footer mt={20} />
		</>
	)
}
