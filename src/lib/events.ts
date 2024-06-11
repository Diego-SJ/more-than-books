import { cache } from 'react'
import { fetchAPI } from './strapi'
import dayjs from 'dayjs'
import { Event } from '@/types/event'

export function transformEventsArray(apiResponse: any, type?: string): Event[] {
	return apiResponse?.data?.map((item: any) => {
		const { id, attributes } = item
		const { Nombre, Fecha, price, Ubicacion, slug, Contenido, categoria, autore, image } =
			attributes

		// Extraer nombres de categorías
		const categories = categoria?.data?.attributes?.Nombre

		// Definir el autor (puedes modificar esto según los datos reales del autor)
		const author = autore?.data?.attributes?.Nombre || 'More Than Books'

		// Devolver los datos transformados
		const imageUrl = image?.data?.attributes?.url

		let event: Event = {
			id,
			title: Nombre,
			date: Fecha,
			location: Ubicacion,
			content: type === 'unique' ? Contenido : Contenido?.substring(0, 80) + '...',
			price: price || 0,
			category: categories || 'Sin categoría',
			slug: slug,
			author: author,
			imageSrc: imageUrl
		}
		return event
	})
}

export const getEventBySlug = cache(async (slug: string): Promise<Event> => {
	try {
		const item = await fetchAPI(`/api/eventos?filters[slug][$eq]=${slug}&populate=*`)

		return transformEventsArray(item, 'unique')[0] || ({} as Event)
	} catch (error) {
		console.log({ error })
		return {} as Event
	}
})

export const getEvents = cache(async (): Promise<Event[]> => {
	try {
		const item = await fetchAPI(`/api/eventos?&populate=*`)

		return transformEventsArray(item)
	} catch (error) {
		console.log({ error })
		return []
	}
})
