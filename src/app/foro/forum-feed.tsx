'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import EmptyState from '@/components/empty-state'
import QuestionCard from '@/components/forum/question-card'
import ForumUserMenu from '@/components/forum/forum-user-menu'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/forum/auth-provider'
import { Plus, Search } from 'lucide-react'
import type { Question, Hashtag } from '@/types/forum'

type Tab = 'recientes' | 'sin-responder' | 'popular'

const TABS: { key: Tab; label: string }[] = [
	{ key: 'recientes', label: 'Recientes' },
	{ key: 'sin-responder', label: 'Sin responder' },
	{ key: 'popular', label: 'Popular' }
]

type ForumFeedProps = {
	questions: Question[]
	hashtags: Hashtag[]
}

export default function ForumFeed({ questions, hashtags }: ForumFeedProps) {
	const { user, isAdmin } = useAuth()
	const [activeTab, setActiveTab] = useState<Tab>('recientes')
	const [activeHashtag, setActiveHashtag] = useState<string | null>(null)
	const [search, setSearch] = useState('')

	const filtered = useMemo(() => {
		let result = [...questions]

		if (activeHashtag) {
			result = result.filter((q) => q.hashtags?.some((h) => h.name === activeHashtag))
		}

		if (search) {
			const s = search.toLowerCase()
			result = result.filter(
				(q) => q.title.toLowerCase().includes(s) || q.body.toLowerCase().includes(s)
			)
		}

		switch (activeTab) {
			case 'sin-responder':
				result = result.filter((q) => (q.answer_count ?? 0) === 0)
				break
			case 'popular':
				result.sort((a, b) => (b.answer_count ?? 0) - (a.answer_count ?? 0))
				break
			case 'recientes':
			default:
				break
		}

		return result
	}, [questions, activeHashtag, search, activeTab])

	return (
		<>
			{/* Header */}
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-roboto font-bold text-foreground">Foro</h1>
				<div className="flex items-center gap-3">
					<ForumUserMenu />
					{user && isAdmin && (
						<Link href="/foro/nueva-pregunta">
							<Button>
								<Plus size={16} className="mr-1" /> Nueva pregunta
							</Button>
						</Link>
					)}
				</div>
			</div>

			{/* Tabs */}
			<div className="flex items-center gap-6 border-b border-slate-200 mb-4">
				{TABS.map((tab) => (
					<button
						key={tab.key}
						onClick={() => setActiveTab(tab.key)}
						className={`pb-3 text-sm font-roboto font-medium transition-colors border-b-2 -mb-px ${
							activeTab === tab.key
								? 'border-primary text-foreground'
								: 'border-transparent text-muted-foreground hover:text-foreground'
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Search */}
			<div className="relative mb-4">
				<Search
					size={16}
					className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
				/>
				<Input
					placeholder="Buscar preguntas..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="pl-9"
				/>
			</div>

			{/* Hashtag pills */}
			{hashtags.length > 0 && (
				<div className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide">
					<button
						onClick={() => setActiveHashtag(null)}
						className={`shrink-0 text-xs font-roboto px-3 py-1 rounded-full border transition-colors ${
							!activeHashtag
								? 'bg-primary text-primary-foreground border-primary'
								: 'bg-background text-muted-foreground border-border hover:border-primary/50'
						}`}
					>
						Todos
					</button>
					{hashtags.map((h: Hashtag) => (
						<button
							key={h.id}
							onClick={() => setActiveHashtag(activeHashtag === h.name ? null : h.name)}
							className={`shrink-0 text-xs font-roboto px-3 py-1 rounded-full border transition-colors ${
								activeHashtag === h.name
									? 'bg-primary text-primary-foreground border-primary'
									: 'bg-background text-muted-foreground border-border hover:border-primary/50'
							}`}
						>
							#{h.name}
						</button>
					))}
				</div>
			)}

			{/* Question list */}
			{filtered.length ? (
				<div>
					{filtered.map((question) => (
						<div key={question.id}>
							<QuestionCard
								question={question}
								onHashtagClick={(name) => setActiveHashtag(name)}
							/>
						</div>
					))}
				</div>
			) : (
				<EmptyState />
			)}
		</>
	)
}
