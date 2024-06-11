'use client'
import EventCard from '@/components/event-card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { useMDXComponents } from '@/mdx-components'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { Clock, Crown, Facebook, Link, MapPin, Twitter } from 'lucide-react'
import { compileMDX } from 'next-mdx-remote/rsc'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Event } from '@/types/event'
import { getEventBySlug } from '@/lib/events'
import dayjs from 'dayjs'
import { copyToClipboard } from '@/lib/utils'
import 'dayjs/locale/es'
dayjs.locale('es')

const EventsPage = ({ params: { event_id } }: any) => {
	const [post, setBlogPost] = useState<Event>({} as Event)
	const [blogContent, setBlogContent] = useState(<div></div>)
	const onMounted = useRef(false)

	const components = useMDXComponents()

	useEffect(() => {
		const getArticles = async () => {
			const data = await getEventBySlug(event_id)
			if (!data) {
				toast.error('Error al cargar el evento')
				return
			}

			const { content } = await compileMDX({
				source: data?.content as any,
				options: {
					mdxOptions: {
						rehypePlugins: [rehypeHighlight, rehypeSlug],
						remarkPlugins: [remarkGfm]
					},
					parseFrontmatter: true
				},
				components
			})

			setBlogContent(content)

			setBlogPost(data)
		}

		if (!onMounted.current) {
			onMounted.current = true
			getArticles()
		}
	}, [onMounted])

	const copyUrl = () => {
		copyToClipboard(window.location.href)
		toast.success('Copiado al portapapeles')
	}

	return (
		<>
			<Navbar theme="dark" />
			<header
				className="relative pt-[65px] sm:pt-20 px-0 min-h-[200px] sm:px-6 md:min-h-80 z-0"
				style={{
					background: `linear-gradient(to bottom, hsl(var(--primary) / 100%), hsl(var(--primary) / 50%), hsl(var(--primary) / 30%) ), url('${post?.imageSrc}')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: '100% auto'
				}}
			></header>
			<div className="relative flex flex-col sm:flex-row bg-white text-secondary-foreground w-full mx-auto max-w-[90%] md:max-w-[900px] rounded-2xl shadow-2xl -mt-20 z-[0]">
				<div className="relative sm:w-full border-b-[3px] sm:border-b-transparent sm:border-r-[3px] border-dashed border-black/10 px-6 pt-6 pb-10 before:content-[''] before:w-10 before:h-10 before:bg-white before:rounded-full before:absolute before:left-1/2 sm:before:left-[100%] sm:before:top-1/2 before:-translate-x-1/2 sm:before:-translate-x-1/2 sm:before:-translate-y-1/2 before:-bottom-5 sm:before:bottom-[initial] before:shadow-inner-lg">
					<h2 className="text-xl mb-3 font-roboto font-semibold md:text-3xl">
						{post?.title || '- - -'}
					</h2>

					<div className="flex items-start gap-2 mb-3">
						<Clock className="text-primary mt-1" size={18} />
						<div className="flex flex-col">
							<p className="text-base sm:text-lg font-didact text-secondary-foreground/50">
								{post?.date ? dayjs(post?.date).format('dddd d [de] MMMM [del] YYYY') : '- - -'}
							</p>
							<p className="text-base sm:text-lg font-didact">
								{post?.date ? dayjs(post?.date).format('HH:mm a') : '- - -'}
							</p>
						</div>
					</div>

					<div className="flex gap-2 items-center">
						<MapPin className="text-primary mt-0" size={19} />
						<div className="flex flex-col">
							<a
								href={post?.location || ''}
								target="_blank"
								className="text-base sm:text-lg font-didact text-primary hover:underline"
							>
								Ver ubicación en Google Maps
							</a>
						</div>
					</div>
				</div>

				<div className=" px-6 py-6 sm:w-full">
					<h3 className="text-lg text-foreground mb-3 font-roboto font-semibold md:text-2xl md:text-center">
						Unete
					</h3>

					<div className="flex flex-col items-start gap-2 w-full">
						<div className="flex flex-col items-center mb-3 gap-3 w-full md:flex-row">
							<p className="hidden md:inline-flex m-0 text-center">
								Da click para agregar el evento en tu calendario
							</p>
							<Button className="w-full max-w-52 mx-auto">Agregar al calendario</Button>
						</div>
						<div className="flex gap-4 justify-center w-full">
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
								target="_blank"
								rel="noreferrer noopener"
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
							>
								<Facebook
									size={20}
									className="text-primary group-hover:text-white transition-all"
								/>
							</a>
							<a
								href={`https://twitter.com/share?url=${window.location.href}&text=${
									post?.title || '- - -'
								}`}
								target="_blank"
								rel="noreferrer noopener"
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
							>
								<Twitter size={20} className="text-primary group-hover:text-white transition-all" />
							</a>
							<button
								onClick={copyUrl}
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
							>
								<Link size={20} className="text-primary group-hover:text-white transition-all" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<main className="container relative mt-10 gap-6 sm:mt-20 flex flex-col sm:flex-row max-w-[900px] mb-20">
				<div className="w-full">{blogContent}</div>
				<div className="border border-slate-500/50 rounded-xl px-4 py-4 w-full h-min">
					<div className="flex gap-3">
						<span className="bg-slate-200 h-12 w-12 rounded-full grid place-content-center">
							<Crown className="text-slate-600" />
						</span>
						<div className="flex flex-col items-start">
							<h5 className="text-sm font-roboto font-thin text-slate-500">Organizador</h5>
							<h3 className="text-lg font-roboto font-semibold">{post?.author || '- - -'}</h3>
						</div>
					</div>
				</div>
			</main>
			<section className="container w-full flex flex-col justify-center max-w-[900px]">
				<h3 className="text-base text-foreground mb-4 font-roboto font-semibold md:text-xl">
					Más eventos
				</h3>
				<div className=" w-full flex flex-col space-y-4 sm:flex-row gap-6 sm:items-start sm:space-y-0">
					<EventCard />
					<EventCard />
					<EventCard />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default EventsPage
