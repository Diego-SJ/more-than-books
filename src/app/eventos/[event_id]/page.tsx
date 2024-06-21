import EventsPage from '@/components/event-page'
import { getEventBySlug } from '@/lib/events'
import { markdownToPlainText } from '@/lib/utils'
import { Metadata } from 'next'
import React from 'react'

// export async function generateMetadata({
// 	params
// }: {
// 	params: { event_id: string }
// }): Promise<Metadata> {
// 	// read route params
// 	const id = params.event_id

// 	// fetch data
// 	const product = await getEventBySlug(id)

// 	return {
// 		title: product.title,
// 		description: markdownToPlainText(product.content || ''),
// 		keywords: product.category,
// 		openGraph: {
// 			title: product.title,
// 			description: markdownToPlainText(product.content || ''),
// 			tags: product.category
// 		}
// 	}
// }

const EventPageDetail = ({ params: { event_id } }: any) => {
	return <EventsPage event_id={event_id} />
}

export default EventPageDetail
