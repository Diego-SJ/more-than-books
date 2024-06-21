import { getEventBySlug } from '@/lib/events'
import { ImageResponse } from 'next/og'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')

export const runtime = 'edge'

export default async function Image({ params }: { params: { event_id: string } }) {
	// Make sure the font exists in the specified path:
	const fontData = await fetch(
		new URL('../../../../public/fonts/Roboto-Bold.ttf', import.meta.url)
	).then((res) => res.arrayBuffer())

	const fontData2 = await fetch(
		new URL('../../../../public/fonts/Roboto-Regular.ttf', import.meta.url)
	).then((res) => res.arrayBuffer())

	const post = await getEventBySlug(params.event_id)
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'flex-start',
					fontFamily: 'Arial, sans-serif',
					background: '#ffffff'
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						width: '750px',
						background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
						height: '100%',
						padding: '40px 40px'
					}}
				>
					<h1
						style={{
							fontSize: '100px',
							color: '#fff',
							lineHeight: '1',
							fontFamily: 'Roboto-Bold',
							textTransform: 'uppercase'
						}}
					>
						{post.title || 'Evento de More than books'}
					</h1>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '20px'
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#fff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							style={{ marginTop: '2px' }}
						>
							<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
							<path d="M5 21h14" />
						</svg>

						<span
							style={{
								fontSize: '40px',
								color: '#fff',
								fontFamily: 'Roboto-Regular'
							}}
						>
							Por {post?.author || 'More Than Books'}
						</span>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<p
							style={{
								fontSize: '40px',
								color: '#fff',
								fontFamily: 'Roboto-Regular'
							}}
						>
							{dayjs(post.date).format('hh:mm A')}
						</p>

						<div
							style={{
								display: 'flex',
								gap: '20px'
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#fff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#fff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="18" cy="5" r="3" />
								<circle cx="6" cy="12" r="3" />
								<circle cx="18" cy="19" r="3" />
								<line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
								<line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
							</svg>
						</div>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',

						width: '450px',
						alignItems: 'center',
						justifyContent: 'center',
						background: 'white',
						height: '100%',
						padding: '40px 40px'
					}}
				>
					<p
						style={{
							fontSize: '180px',
							color: '#1e293b',
							fontFamily: 'Roboto-Bold',
							textTransform: 'uppercase'
						}}
					>
						{dayjs(post.date).format('MMM')}
					</p>
					<p
						style={{
							fontSize: '180px',
							color: '#64748b',
							fontFamily: 'Roboto-Regular'
						}}
					>
						{dayjs(post.date).format('D')}
					</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: 'Roboto-Bold',
					data: fontData,
					style: 'normal'
				},
				{
					name: 'Roboto-Regular',
					data: fontData2,
					style: 'normal'
				}
			]
		}
	)
}
