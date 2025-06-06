import { cache } from 'react'
import { fetchAPI, strapi } from './strapi'
import { Event } from '@/types/event'
import dayjs, { Dayjs } from 'dayjs'

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL

export function transformEventsArray(apiResponse: any, type?: string): Event[] {
	return apiResponse?.data?.map((item: any) => {
		let event: Event = {
			id: item?.id,
			slug: item?.slug,
			title: item?.name,
			date: item?.event_data || null,
			time: item?.event_time || null,
			location: item?.maps_url,
			address: item?.address,
			event_type: item?.event_type,
			content:
				type === 'unique'
					? item?.content
					: !!item?.content
					? item?.content?.substring(0, 100) + '...'
					: '',
			price: item?.price || 0,
			category: item?.category?.Nombre || 'Sin categoría',
			author: item?.author?.Nombre || item?.author?.Email || 'More Than Books',
			imageSrc: `${STRAPI_API_URL}${item?.cover?.formats?.small?.url}`
		}
		return event
	})
}

export const getEventBySlug = cache(async (slug: string): Promise<Event> => {
	try {
		const { data } = await strapi.get(
			`/api/owioweig0243g94u3hg3u94hgs?filters[slug][$eq]=${slug}`,
			{
				params: {
					fields: [
						'id',
						'name',
						'slug',
						'content',
						'event_data',
						'event_time',
						'maps_url',
						'address',
						'event_type',
						'price'
					],
					populate: {
						author: {
							fields: ['Nombre', 'Email']
						},
						category: {
							fields: ['Nombre']
						},
						cover: {
							fields: ['formats']
						}
					}
				}
			}
		)

		return transformEventsArray(data, 'unique')[0] || ({} as Event)
	} catch (error) {
		return {} as Event
	}
})

export const getEvents = cache(async (): Promise<Event[]> => {
	try {
		const { data } = await strapi.get(`/api/owioweig0243g94u3hg3u94hgs`, {
			params: {
				fields: [
					'id',
					'name',
					'slug',
					'content',
					'event_data',
					'event_time',
					'maps_url',
					'address',
					'event_type',
					'price'
				],
				populate: {
					author: {
						fields: ['Nombre', 'Email']
					},
					category: {
						fields: ['Nombre']
					},
					cover: {
						fields: ['formats']
					}
				}
			}
		})

		return transformEventsArray(data) as Event[]
	} catch (error) {
		return []
	}
})

const transformEventDate = (event: Event): Dayjs => {
	return event.date && event.time
		? dayjs(event.date + ' ' + event.time)
		: event.date
		? dayjs(event.date)
		: dayjs()
}

export const filterPrevoiusEvents = (events: Event[]): Event[] => {
	const today = dayjs()
	return events.filter((event) => {
		const eventDateTime = transformEventDate(event)
		return eventDateTime < today
	})
}

export const filterIncomingEvents = (events: Event[]): Event[] => {
	const today = dayjs()
	return events.filter((event) => {
		const eventDateTime = transformEventDate(event)
		return eventDateTime >= today
	})
}
