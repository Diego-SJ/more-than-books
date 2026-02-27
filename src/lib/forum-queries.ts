'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
	getHashtags,
	getQuestions,
	getQuestionById,
	getAnswers,
	getReactions,
	getProfile,
	getQuestionsByAuthor,
	getTopContributors,
	getRelatedQuestions,
	createQuestion,
	createAnswer,
	deleteAnswer,
	toggleReaction,
	updateProfile
} from '@/lib/forum'

// ── Query Keys ──────────────────────────────────────────────

export const forumKeys = {
	hashtags: ['hashtags'] as const,
	questions: ['questions'] as const,
	question: (id: string) => ['question', id] as const,
	answers: (questionId: string) => ['answers', questionId] as const,
	reactions: (answerIds: string[], userId?: string) =>
		['reactions', ...answerIds, userId] as const,
	profile: (userId: string) => ['profile', userId] as const,
	questionsByAuthor: (authorId: string) => ['questions', 'author', authorId] as const,
	topContributors: ['topContributors'] as const,
	relatedQuestions: (questionId: string) => ['relatedQuestions', questionId] as const
}

// ── Queries ─────────────────────────────────────────────────

export function useHashtags() {
	return useQuery({
		queryKey: forumKeys.hashtags,
		queryFn: getHashtags
	})
}

export function useQuestions() {
	return useQuery({
		queryKey: forumKeys.questions,
		queryFn: () => getQuestions()
	})
}

export function useQuestion(id: string) {
	return useQuery({
		queryKey: forumKeys.question(id),
		queryFn: () => getQuestionById(id),
		enabled: !!id
	})
}

export function useAnswers(questionId: string) {
	return useQuery({
		queryKey: forumKeys.answers(questionId),
		queryFn: () => getAnswers(questionId),
		enabled: !!questionId
	})
}

export function useReactions(answerIds: string[], userId?: string) {
	return useQuery({
		queryKey: forumKeys.reactions(answerIds, userId),
		queryFn: () => getReactions(answerIds, userId),
		enabled: answerIds.length > 0
	})
}

export function useProfile(userId: string | undefined) {
	return useQuery({
		queryKey: forumKeys.profile(userId!),
		queryFn: () => getProfile(userId!),
		enabled: !!userId
	})
}

export function useTopContributors() {
	return useQuery({
		queryKey: forumKeys.topContributors,
		queryFn: () => getTopContributors()
	})
}

export function useQuestionsByAuthor(authorId: string | undefined) {
	return useQuery({
		queryKey: forumKeys.questionsByAuthor(authorId!),
		queryFn: () => getQuestionsByAuthor(authorId!),
		enabled: !!authorId
	})
}

export function useRelatedQuestions(questionId: string, hashtagNames: string[]) {
	return useQuery({
		queryKey: forumKeys.relatedQuestions(questionId),
		queryFn: () => getRelatedQuestions(questionId, hashtagNames),
		enabled: hashtagNames.length > 0
	})
}

// ── Mutations ───────────────────────────────────────────────

export function useCreateQuestion() {
	const qc = useQueryClient()
	return useMutation({
		mutationFn: (vars: { title: string; body: string; hashtags: string[]; authorId: string }) =>
			createQuestion(vars.title, vars.body, vars.hashtags, vars.authorId),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: forumKeys.questions })
			qc.invalidateQueries({ queryKey: forumKeys.hashtags })
		}
	})
}

export function useCreateAnswer(questionId: string) {
	const qc = useQueryClient()
	return useMutation({
		mutationFn: (vars: { body: string; authorId: string; parentAnswerId?: string }) =>
			createAnswer(vars.body, questionId, vars.authorId, vars.parentAnswerId),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: forumKeys.answers(questionId) })
		}
	})
}

export function useDeleteAnswer(questionId: string) {
	const qc = useQueryClient()
	return useMutation({
		mutationFn: (answerId: string) => deleteAnswer(answerId),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: forumKeys.answers(questionId) })
		}
	})
}

export function useToggleReaction(questionId: string) {
	const qc = useQueryClient()
	return useMutation({
		mutationFn: (vars: { answerId: string; userId: string; emoji: string }) =>
			toggleReaction(vars.answerId, vars.userId, vars.emoji),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ['reactions'] })
		}
	})
}

export function useUpdateProfile(userId: string) {
	const qc = useQueryClient()
	return useMutation({
		mutationFn: (displayName: string) => updateProfile(userId, displayName),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: forumKeys.profile(userId) })
		}
	})
}
