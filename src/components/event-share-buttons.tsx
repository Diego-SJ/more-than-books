'use client'

import { Facebook, Link } from 'lucide-react'
import { toast } from 'sonner'
import { copyToClipboard } from '@/lib/utils'

export default function EventShareButtons({
	title,
	slug
}: {
	title?: string
	slug?: string
}) {
	const pageUrl = `https://morethanbooks.mx/eventos/${slug ?? ''}`

	const copyUrl = async () => {
		await copyToClipboard(pageUrl)
		toast.success('Copiado al portapapeles')
	}

	return (
		<div className="flex gap-4 justify-center w-full">
			<a
				href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
				target="_blank"
				rel="noreferrer noopener"
				className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
			>
				<Facebook
					size={22}
					strokeWidth={1.3}
					className="text-primary group-hover:text-white transition-all"
				/>
			</a>
			<a
				href={`https://twitter.com/share?url=${pageUrl}&text=${title || '- - -'}`}
				target="_blank"
				rel="noreferrer noopener"
				className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
			>
				<svg
					className="text-primary group-hover:text-white transition-all"
					viewBox="0 0 48 48"
					width="1.3rem"
					height="1.3rem"
					clipRule="evenodd"
					baseProfile="basic"
				>
					<polygon fill="currentColor" points="41,6 9.929,42 6.215,42 37.287,6" />
					<polygon
						fill="transparent"
						fillRule="evenodd"
						points="31.143,41 7.82,7 16.777,7 40.1,41"
						clipRule="evenodd"
					/>
					<path
						fill="currentColor"
						d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
					/>
				</svg>
			</a>
			<button
				onClick={copyUrl}
				className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
			>
				<Link size={20} className="text-primary group-hover:text-white transition-all" />
			</button>
		</div>
	)
}
