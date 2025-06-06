export type Event = {
	id?: number
	imageSrc?: string
	price?: number
	date?: string
	time?: string
	title?: string
	content?: string
	slug?: string
	category?: string
	author?: string
	location?: string
	address?: string
	event_type?: 'Presencial' | 'Virtual'
}
