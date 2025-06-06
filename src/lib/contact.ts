import { cache } from 'react'
import { strapi } from './strapi'

type Message = {
	name: string
	email: string
	message: string
}

export const sendMessage = cache(async (data: Message): Promise<boolean> => {
	try {
		await strapi.post(`/api/contacts-form-more-than-books`, {
			data: data
		})

		return true
	} catch (error) {
		return false
	}
})

export const subscribeEmail = cache(async (data: { email: string }): Promise<boolean> => {
	try {
		await strapi.post(`/api/subscriotion-to-newslatter-mtbs`, { data })

		return true
	} catch (error) {
		return false
	}
})
