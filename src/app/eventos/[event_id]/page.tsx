import EventsPage from '@/components/event-page'
import { getEventBySlug } from '@/lib/events'
import { markdownToPlainText } from '@/lib/utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateMetadata({
	params
}: {
	params: { event_id: string }
}): Promise<Metadata> {
	// read route params
	const id = params.event_id

	if (!id) {
		return {
			title: 'Evento no encontrado',
			description: 'Evento no encontrado',
			keywords: 'Evento no encontrado',
			openGraph: {
				title: 'Evento no encontrado',
				description: 'Evento no encontrado',
				tags: 'Evento no encontrado'
			}
		}
	}

	// fetch data
	const product = await getEventBySlug(id)

	return {
		title: product.title,
		description: markdownToPlainText(product.content || ''),
		keywords: product.category,
		openGraph: {
			title: product.title,
			description: markdownToPlainText(product.content || ''),
			url: `https://morethanbooks.mx/eventos/${id}`,
			images: [
				{
					url: product.imageSrc as string,
					width: 1200,
					height: 600,
					alt: product.title
				}
			],
			tags: product.category
		}
	}
}

const EventPageDetail = async ({ params: { event_id } }: { params: { event_id: string } }) => {
	const event = await getEventBySlug(event_id)

	if (!event?.title) {
		notFound()
	}

	return <EventsPage event={event} />
}

export default EventPageDetail
