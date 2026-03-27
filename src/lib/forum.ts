import { createClient } from '@/lib/supabase'
import type { Hashtag, Question, Answer, Reaction, TopContributor } from '@/types/forum'

// ── Read (public) ──────────────────────────────────────────

export async function getHashtags(): Promise<Hashtag[]> {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('hashtags')
		.select('*')
		.order('name')
	if (error) throw error
	return data ?? []
}

export async function getQuestions(
	hashtag?: string,
	search?: string
): Promise<Question[]> {
	const supabase = createClient()
	let query = supabase
		.from('questions')
		.select('*, profiles(*), question_hashtags(hashtags(*)), answers(count)')
		.order('created_at', { ascending: false })

	if (search) {
		const escaped = search.replace(/[%_\\,().]/g, (c) => `\\${c}`)
		query = query.or(`title.ilike.%${escaped}%,body.ilike.%${escaped}%`)
	}

	const { data, error } = await query

	if (error) throw error

	return (data ?? [])
		.map((q: any) => ({
			...q,
			hashtags: (q.question_hashtags ?? []).map((qh: any) => qh.hashtags),
			answer_count: q.answers?.[0]?.count ?? 0
		}))
		.filter((q: any) => {
			if (!hashtag) return true
			return q.hashtags.some((h: Hashtag) => h.name === hashtag)
		})
}

export async function getQuestionById(id: string): Promise<Question | null> {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('questions')
		.select('*, profiles(*), question_hashtags(hashtags(*))')
		.eq('id', id)
		.single()

	if (error) return null

	return {
		...data,
		hashtags: (data.question_hashtags ?? []).map((qh: any) => qh.hashtags)
	}
}

export async function getRelatedQuestions(
	questionId: string,
	hashtagNames: string[],
	limit = 5
): Promise<Question[]> {
	if (!hashtagNames.length) return []

	const supabase = createClient()
	const { data, error } = await supabase
		.from('questions')
		.select('*, profiles(*), question_hashtags(hashtags(*))')
		.neq('id', questionId)
		.order('created_at', { ascending: false })

	if (error) throw error

	return (data ?? [])
		.map((q: any) => ({
			...q,
			hashtags: (q.question_hashtags ?? []).map((qh: any) => qh.hashtags)
		}))
		.filter((q: any) =>
			q.hashtags.some((h: Hashtag) => hashtagNames.includes(h.name))
		)
		.slice(0, limit)
}

export async function getAnswers(questionId: string): Promise<Answer[]> {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('answers')
		.select('*, profiles(*)')
		.eq('question_id', questionId)
		.order('created_at', { ascending: true })

	if (error) throw error
	return data ?? []
}

export function nestAnswers(flat: Answer[]): Answer[] {
	const topLevel = flat.filter((a) => !a.parent_answer_id)
	const childMap = new Map<string, Answer[]>()
	for (const a of flat) {
		if (a.parent_answer_id) {
			const siblings = childMap.get(a.parent_answer_id) ?? []
			siblings.push(a)
			childMap.set(a.parent_answer_id, siblings)
		}
	}
	return topLevel.map((a) => ({ ...a, replies: childMap.get(a.id) ?? [] }))
}

export async function getReactions(
	answerIds: string[],
	userId?: string
): Promise<Record<string, { emoji: string; count: number; reacted: boolean }[]>> {
	if (!answerIds.length) return {}

	const supabase = createClient()
	const { data, error } = await supabase
		.from('reactions')
		.select('*')
		.in('answer_id', answerIds)

	if (error) throw error

	const grouped: Record<string, { emoji: string; count: number; reacted: boolean }[]> = {}

	for (const answerId of answerIds) {
		const answerReactions = (data ?? []).filter((r: Reaction) => r.answer_id === answerId)
		const emojiMap = new Map<string, { count: number; reacted: boolean }>()

		for (const r of answerReactions) {
			const existing = emojiMap.get(r.emoji) ?? { count: 0, reacted: false }
			existing.count++
			if (userId && r.user_id === userId) existing.reacted = true
			emojiMap.set(r.emoji, existing)
		}

		grouped[answerId] = Array.from(emojiMap.entries()).map(([emoji, data]) => ({
			emoji,
			...data
		}))
	}

	return grouped
}

export async function getTopContributors(limit = 10): Promise<TopContributor[]> {
	const supabase = createClient()
	const { data, error } = await supabase.rpc('get_top_contributors', { lim: limit })
	if (error) throw error
	return data ?? []
}

// ── Write (authenticated) ──────────────────────────────────

export async function createQuestion(
	title: string,
	body: string,
	hashtagNames: string[],
	authorId: string
): Promise<Question | null> {
	const supabase = createClient()
	const { data: question, error } = await supabase
		.from('questions')
		.insert({ title, body, author_id: authorId })
		.select()
		.single()

	if (error) throw error
	if (!question) return null

	if (hashtagNames.length > 0) {
		// Upsert hashtags (insert new ones, ignore existing)
		const { error: upsertError } = await supabase
			.from('hashtags')
			.upsert(
				hashtagNames.map((name) => ({ name })),
				{ onConflict: 'name', ignoreDuplicates: true }
			)
			.select()
		if (upsertError) throw upsertError

		// Fetch all hashtags by name to get their IDs
		const { data: allHashtags, error: fetchError } = await supabase
			.from('hashtags')
			.select('*')
			.in('name', hashtagNames)
		if (fetchError) throw fetchError

		if (allHashtags?.length) {
			const { error: linkError } = await supabase
				.from('question_hashtags')
				.insert(allHashtags.map((h) => ({ question_id: question.id, hashtag_id: h.id })))
			if (linkError) throw linkError
		}
	}

	return question
}

export async function createAnswer(
	body: string,
	questionId: string,
	authorId: string,
	parentAnswerId?: string
): Promise<Answer | null> {
	const supabase = createClient()
	const row: Record<string, string> = { body, question_id: questionId, author_id: authorId }
	if (parentAnswerId) row.parent_answer_id = parentAnswerId

	const { data, error } = await supabase
		.from('answers')
		.insert(row)
		.select('*, profiles(*)')
		.single()

	if (error) throw error
	return data
}

export async function deleteAnswer(answerId: string): Promise<boolean> {
	const supabase = createClient()
	const { error } = await supabase.from('answers').delete().eq('id', answerId)
	return !error
}

export async function deleteQuestion(questionId: string): Promise<boolean> {
	const supabase = createClient()
	const { error } = await supabase.from('questions').delete().eq('id', questionId)
	return !error
}

export async function toggleReaction(
	answerId: string,
	userId: string,
	emoji: string
): Promise<boolean> {
	const supabase = createClient()
	const { data: existing } = await supabase
		.from('reactions')
		.select('id')
		.eq('answer_id', answerId)
		.eq('user_id', userId)
		.eq('emoji', emoji)
		.single()

	if (existing) {
		const { error } = await supabase.from('reactions').delete().eq('id', existing.id)
		return !error
	} else {
		const { error } = await supabase
			.from('reactions')
			.insert({ answer_id: answerId, user_id: userId, emoji })
		return !error
	}
}

export async function updateProfile(
	userId: string,
	displayName: string
): Promise<boolean> {
	const supabase = createClient()
	const { error } = await supabase
		.from('profiles')
		.update({ display_name: displayName })
		.eq('id', userId)
	return !error
}

export async function getProfile(userId: string) {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', userId)
		.single()
	if (error) return null
	return data
}

export async function getQuestionsByAuthor(authorId: string): Promise<Question[]> {
	const supabase = createClient()
	const { data, error } = await supabase
		.from('questions')
		.select('*, question_hashtags(hashtags(*))')
		.eq('author_id', authorId)
		.order('created_at', { ascending: false })

	if (error) throw error
	return (data ?? []).map((q: any) => ({
		...q,
		hashtags: (q.question_hashtags ?? []).map((qh: any) => qh.hashtags)
	}))
}
