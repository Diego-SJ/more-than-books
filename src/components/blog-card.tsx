// components/EventCard.js
'use client'
import { BookA } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type EventCardProps = {
	imageSrc?: string
	title?: string
	description?: string
	href?: string
	author?: string
	date?: string
	category?: string
}

export default function BlogCard({
	imageSrc,
	title,
	description,
	href,
	author,
	date,
	category
}: EventCardProps) {
	const router = useRouter()

	const handleClick = () => {
		router.push(`/blog/${href}`)
	}

	return (
		<div
			className="w-full rounded-3xl overflow-hidden group hover:cursor-pointer transition-all mb-4 sm:mb-10 group"
			onClick={handleClick}
		>
			<div className="relative overflow-hidden h-40 max-h-40">
				<Image
					src={imageSrc || 'https://source.unsplash.com/random/720x400'}
					alt="Event Image"
					className="w-full h-48 object-cover transition-all group-hover:scale-110"
					width={500}
					height={300}
				/>
			</div>
			<div className="pt-3 px-1 flex flex-col transition-all">
				<div className="text-foreground text-sm font-didact">{category || 'Tecnología'}</div>
				<div className="mb-4">
					<div className=" text-gray-800 font-bold font-roboto text-xl group-hover:text-primary transition-all my-3">
						{title || 'A vintage video game in the industry of UI'}
					</div>
					<div className="mt-1 text-slate-400 sm:text-base font-didact">
						{description ||
							'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis minus dolorem earum quas facilis.'}
					</div>
				</div>
				<div className="flex gap-4">
					<span className="w-10 h-10 bg-primary rounded-full grid place-content-center">
						<BookA size={20} className="text-primary-foreground" />
					</span>
					<div>
						<div className="text-slate-700 uppercase text-xs font-bold font-roboto">
							{author || 'More than books'}
						</div>
						<div className="text-slate-400 text-sm font-didact">{date || 'Jun 27, 2024'}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
