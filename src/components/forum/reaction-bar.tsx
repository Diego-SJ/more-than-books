'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from './auth-provider'
import { useToggleReaction } from '@/lib/forum-queries'
import type { ReactionSummary } from '@/types/forum'

const EMOJIS = ['👍', '❤️', '🎉', '💡']

type ReactionBarProps = {
	answerId: string
	reactions: ReactionSummary[]
	questionId: string
}

export default function ReactionBar({ answerId, reactions, questionId }: ReactionBarProps) {
	const { user } = useAuth()
	const toggleReactionMutation = useToggleReaction(questionId)

	const handleReaction = (emoji: string) => {
		if (!user) return
		toggleReactionMutation.mutate({ answerId, userId: user.id, emoji })
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
						disabled={toggleReactionMutation.isPending || !user}
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
