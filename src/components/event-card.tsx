'use client'

import { Event } from '@/types/event'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { markdownToPlainText } from '@/lib/utils'
import { useState } from 'react'

import 'dayjs/locale/es'
dayjs.locale('es')

type EventCardProps = Event

export default function EventCard({
	imageSrc,
	price = 0,
	date = '',
	title = '',
	content = '',
	slug = '',
	...eventData
}: EventCardProps) {
	const router = useRouter()
	const [imageError, setImageError] = useState(false)

	const handleClick = () => {
		if (slug) {
			router.push(`/eventos/${slug}`)
		}
	}

	// Imagen por defecto o fallback
	const imageUrl =
		imageError || !imageSrc
			? '/images/default-event.jpg' // Usa una imagen local como fallback
			: imageSrc

	return (
		<div
			className="w-full bg-white rounded-3xl shadow-lg overflow-hidden group hover:cursor-pointer transition-all hover:scale-105"
			onClick={handleClick}
		>
			<div className="relative">
				<Image
					src={imageUrl}
					alt={title || 'Event Image'}
					className="w-full h-48 object-cover transition-all"
					width={720}
					height={400}
					priority
					onError={() => setImageError(true)}
					placeholder="blur"
					blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." // Agrega un blur placeholder
				/>
				{price > 0 && (
					<div className="absolute top-4 left-4 bg-white text-gray-800 py-1 px-3 rounded-3xl font-roboto font-thin text-sm">
						${price}
					</div>
				)}
			</div>
			<div className="p-4 flex gap-4">
				<div className="my-auto text-center min-w-14">
					<div className="text-gray-700 uppercase font-roboto text-base font-medium">
						{date ? dayjs(date).format('MMM') : '---'}
					</div>
					<div className="text-primary font-medium font-roboto text-xl">
						{date ? dayjs(date).format('D') : '--'}
					</div>
					{eventData?.time && date && (
						<div className="font-medium font-roboto text-xs">
							{dayjs(`${date} ${eventData.time}`).format('hh:mm a')}
						</div>
					)}
				</div>
				<div className="flex-1 min-w-0">
					{' '}
					{/* min-w-0 previene overflow */}
					<h3 className="mt-1 text-gray-800 text-lg font-roboto font-semibold group-hover:text-primary transition-all truncate">
						{title || 'Mi evento'}
					</h3>
					<p className="mt-1 text-gray-600 text-sm font-roboto font-extralight line-clamp-2">
						{markdownToPlainText(content || 'Sin descripción')}
					</p>
				</div>
			</div>
		</div>
	)
}
