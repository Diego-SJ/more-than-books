import EventsPage from '@/components/event-page'
import { getEventBySlug } from '@/lib/events'
import { markdownToPlainText } from '@/lib/utils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
	params
}: {
	params: { event_id: string }
}): Promise<Metadata> {
	// read route params
	const id = params.event_id

	// fetch data
	const product = await getEventBySlug(id)

	return {
		title: product.title,
		openGraph: {
			title: product.title,
			description: markdownToPlainText(product.content || ''),
			images: [
				{
					url: product.imageSrc as string,
					width: 1200,
					height: 630,
					alt: product.title
				}
			]
		}
	}
}

const EventPageDetail = ({ params: { event_id } }: any) => {
	return <EventsPage event_id={event_id} />
}

export default EventPageDetail
