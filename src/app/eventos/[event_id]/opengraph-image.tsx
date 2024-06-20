import { getEventBySlug } from '@/lib/events'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
	width: 1200,
	height: 630
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { blog_id: string } }) {
	const post = await getEventBySlug(params.blog_id)

	console.log(post)

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				{post.title} ergerher
			</div>
		),
		{
			...size
		}
	)
}
