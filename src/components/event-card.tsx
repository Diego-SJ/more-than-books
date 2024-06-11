// components/EventCard.js
'use client'
import { copyToClipboard } from '@/lib/utils'
import { Event } from '@/types/event'
import dayjs from 'dayjs'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import 'dayjs/locale/es'
dayjs.locale('es')

type EventCardProps = Event

export default function EventCard({ imageSrc, price, date, title, content, slug }: EventCardProps) {
	const router = useRouter()
	const [isHovered, setIsHovered] = useState(false)

	const handleClick = () => {
		if (isHovered) return
		router.push(`/eventos/${slug}`)
	}

	const copyUrl = () => {
		copyToClipboard(window.location.href)
		toast.success('URL copiada al portapapeles')
	}

	const handleHover = () => {
		setIsHovered(!isHovered)
	}

	return (
		<div
			className="w-full bg-white rounded-3xl shadow-lg overflow-hidden group hover:cursor-pointer transition-all hover:scale-105"
			onClick={handleClick}
		>
			<div className="relative">
				<Image
					src={imageSrc || 'https://source.unsplash.com/random/720x400'}
					alt="Event Image"
					className="w-full h-48 object-cover transition-all"
					width={500}
					priority
					height={300}
				/>
				<div className="absolute top-4 left-4 bg-white text-gray-800  py-1 px-3 rounded-3xl font-roboto font-thin text-sm">
					{price ? `$${price}` : 'Gratis'}
				</div>
				<div className="absolute top-4 right-4 flex">
					<button
						className="bg-white p-2 rounded-full shadow hover:bg-slate-100"
						onClick={copyUrl}
						onMouseEnter={handleHover}
						onMouseLeave={handleHover}
					>
						<Copy size={20} />
					</button>
				</div>
			</div>
			<div className="p-4 flex gap-4 ">
				<div className="my-auto text-center">
					<div className="text-gray-700 uppercase text-xs font-bold">
						{date ? dayjs(date).format('MMM') : '- - -'}
					</div>
					<div className="text-primary font-bold text-xl ">
						{date ? dayjs(date).format('D') : '- - -'}
					</div>
				</div>
				<div>
					<div className="mt-1 text-gray-800 font-semibold group-hover:text-primary transition-all">
						{title || 'Mi evento'}
					</div>
					<div className="mt-1 text-gray-600 text-sm font-roboto">{content || '- - -'}</div>
				</div>
			</div>
		</div>
	)
}
