'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'
import { toggleReaction } from '@/lib/forum'
import type { ReactionSummary } from '@/types/forum'

const EMOJIS = ['👍', '❤️', '🎉', '💡']

type ReactionBarProps = {
	answerId: string
	reactions: ReactionSummary[]
	questionId: string
}

export default function ReactionBar({ answerId, reactions, questionId }: ReactionBarProps) {
	const { user } = useAuth()
	const router = useRouter()
	const [isPending, setIsPending] = useState(false)

	const handleReaction = async (emoji: string) => {
		if (!user || isPending) return
		setIsPending(true)
		try {
			await toggleReaction(answerId, user.id, emoji)
			router.refresh()
		} finally {
			setIsPending(false)
		}
	}

	const getReaction = (emoji: string) =>
		reactions.find((r) => r.emoji === emoji) ?? { emoji, count: 0, reacted: false }

	return (
		<div className="flex gap-1 mt-2">
			{EMOJIS.map((emoji) => {
				const r = getReaction(emoji)
				return (
					<Button
						key={emoji}
						variant="ghost"
						size="sm"
						disabled={isPending || !user}
						className={`text-sm px-2 ${r.reacted ? 'border border-primary bg-primary/5' : ''}`}
						onClick={() => handleReaction(emoji)}
					>
						{emoji} {r.count > 0 && <span className="ml-1 text-xs">{r.count}</span>}
					</Button>
				)
			})}
		</div>
	)
}
