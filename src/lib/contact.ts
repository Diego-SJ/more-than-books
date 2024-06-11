import { cache } from 'react'
import { postApi } from './strapi'

type Message = {
	name: string

	email: string
	message: string
}

export const sendMessage = cache(async (data: Message): Promise<boolean> => {
	try {
		await postApi(`/api/messages`, {
			data: data
		})

		return true
	} catch (error) {
		return false
	}
})

export const subscribeEmail = cache(async (data: { email: string }): Promise<boolean> => {
	try {
		await postApi(`/api/subscriptions`, { data })

		return true
	} catch (error) {
		return false
	}
})
