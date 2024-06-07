// components/EventCard.js
'use client'
import { Copy } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type EventCardProps = {
	imageSrc?: string
	price?: number
	month?: string
	day?: number
	title?: string
	description?: string
	href?: string
}

export default function EventCard({
	imageSrc,
	price,
	month,
	day,
	title,
	description: location,
	href
}: EventCardProps) {
	const router = useRouter()

	const handleClick = () => {
		router.push(`/eventos/${href}`)
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
					height={300}
				/>
				<div className="absolute top-3 left-3 bg-white text-gray-800 font-bold py-1 px-3 rounded">
					{price ? `$${price}` : 'Gratis'}
				</div>
				<div className="absolute top-3 right-3 flex">
					<button className="bg-white p-2 rounded-full shadow hover:bg-slate-100">
						<Copy size={20} />
					</button>
				</div>
			</div>
			<div className="p-4 flex gap-4 ">
				<div className="my-auto text-center">
					<div className="text-gray-700 uppercase text-xs font-bold">{month || 'Enero'}</div>
					<div className="text-primary font-bold text-xl ">{day || 24}</div>
				</div>
				<div>
					<div className="mt-1 text-gray-800 font-semibold group-hover:text-primary transition-all">
						{title || 'Mi evento'}
					</div>
					<div className="mt-1 text-gray-600 text-sm">{location}</div>
				</div>
			</div>
		</div>
	)
}
