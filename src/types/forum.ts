export type Profile = {
	id: string
	display_name: string
	email: string
	avatar_url: string | null
	created_at: string
	role: 'teacher' | 'user'
}

export type Hashtag = {
	id: number
	name: string
}

export type Question = {
	id: string
	title: string
	body: string
	author_id: string
	created_at: string
	updated_at: string
	profiles?: Profile
	hashtags?: Hashtag[]
	question_hashtags?: { hashtags: Hashtag }[]
	answer_count?: number
}

export type Answer = {
	id: string
	body: string
	question_id: string
	author_id: string
	parent_answer_id?: string | null
	created_at: string
	profiles?: Profile
	replies?: Answer[]
}

export type Reaction = {
	id: string
	answer_id: string
	user_id: string
	emoji: string
}

export type ReactionSummary = {
	emoji: string
	count: number
	reacted: boolean
}

export type TopContributor = {
	id: string
	display_name: string
	avatar_url: string | null
	answer_count: number
}
