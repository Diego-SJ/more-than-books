'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

type RealtimeAnswersProps = {
	questionId: string
	children: React.ReactNode
}

export default function RealtimeAnswers({ questionId, children }: RealtimeAnswersProps) {
	const router = useRouter()
	const supabase = createClient()

	useEffect(() => {
		const channel = supabase
			.channel(`question:${questionId}`)
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'answers',
					filter: `question_id=eq.${questionId}`
				},
				() => router.refresh()
			)
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'reactions'
				},
				() => router.refresh()
			)
			.subscribe()

		return () => {
			supabase.removeChannel(channel)
		}
	}, [questionId, supabase, router])

	return <>{children}</>
}
