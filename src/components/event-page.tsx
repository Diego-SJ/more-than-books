'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { useMDXComponents } from '@/mdx-components'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { Clock, Crown, Facebook, Link, MapPin } from 'lucide-react'
import { compileMDX } from 'next-mdx-remote/rsc'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Event } from '@/types/event'
import { getEventBySlug } from '@/lib/events'
import dayjs from 'dayjs'
import { copyToClipboard, createGoogleCalendarLink } from '@/lib/utils'
import 'dayjs/locale/es'
dayjs.locale('es')
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SkeletonContainer } from '@/components/skeleton-container'
import { Skeleton } from '@/components/ui/skeleton'

const EventsPage = ({ event_id }: { event_id: string }) => {
	const [post, setBlogPost] = useState<Event>({} as Event)
	const [blogContent, setBlogContent] = useState(<div></div>)
	const onMounted = useRef(false)

	const components = useMDXComponents()

	useEffect(() => {
		Aos.init()
	}, [])

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
	}, [onMounted, event_id, components])

	const copyUrl = async () => {
		await copyToClipboard(window.location.href)
		toast.success('Copiado al portapapeles')
	}

	return (
		<>
			<Navbar theme="dark" currentPath="events" />
			<header
				className="relative pt-[65px] sm:pt-20 px-0 min-h-[200px] sm:px-6 md:min-h-80 z-0"
				style={{
					background: `url('/images/svg/pattern-bg.svg'), linear-gradient(to bottom, hsl(var(--primary) / 100%), hsl(var(--primary) / 100%) )`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: '100% auto'
				}}
			></header>
			<div
				data-aos="zoom-out-up"
				data-aos-delay="0"
				data-aos-duration="300"
				className="relative flex flex-col sm:flex-row bg-white text-secondary-foreground w-full mx-auto max-w-[90%] md:max-w-[900px] rounded-2xl shadow-2xl -mt-20 z-[0]"
			>
				<div className="relative sm:w-full border-b-[3px] sm:border-b-transparent sm:border-r-[3px] border-dashed border-black/10 px-6 pt-6 pb-10 before:content-[''] before:w-10 before:h-10 before:bg-white before:rounded-full before:absolute before:left-1/2 sm:before:left-[100%] sm:before:top-1/2 before:-translate-x-1/2 sm:before:-translate-x-1/2 sm:before:-translate-y-1/2 before:-bottom-5 sm:before:bottom-[initial] before:shadow-inner-lg">
					<h2 className="text-3xl mb-3 font-roboto font-semibold">
						{post?.title || <Skeleton className="h-6 w-full" />}
					</h2>

					<div className="flex items-start gap-2 mb-3">
						{post?.date && post?.title ? (
							<>
								<Clock className="text-primary mt-2" size={18} />
								<div className="flex flex-col">
									<p className="text-base sm:text-lg font-didact text-secondary-foreground/70">
										{dayjs(post?.date).format('dddd D [de] MMMM [del] YYYY')}
									</p>
									<p className="text-base sm:text-lg font-didact text-secondary-foreground/50">
										{dayjs(post?.date).format('HH:mm a')}
									</p>
								</div>
							</>
						) : (
							<div className="my-6 space-y-1 flex">
								<Skeleton className="h-6 w-20" />
							</div>
						)}
					</div>

					<div className="flex gap-2 items-center  mb-3">
						{post?.location ? (
							<>
								<MapPin className="text-primary mt-0" size={19} />
								<div className="flex flex-col">
									<a
										href={post?.location || ''}
										target="_blank"
										className="text-base sm:text-lg font-didact text-secondary-foreground/70 hover:text-primary underline"
									>
										Ver ubicación
									</a>
								</div>
							</>
						) : (
							<Skeleton className="h-6 w-full" />
						)}
					</div>
					<div className="flex gap-2 items-center">
						{post?.author ? (
							<>
								<Crown className="text-primary mt-0" size={19} />
								<p className="text-base sm:text-lg font-didact text-secondary-foreground/70">
									{post?.author || '- - -'}
								</p>
							</>
						) : (
							<Skeleton className="h-6 w-full" />
						)}
					</div>
				</div>

				<div className=" px-6 py-6 sm:w-full flex flex-col justify-center">
					<h3 className="text-lg text-foreground mb-3 font-roboto font-semibold md:text-2xl text-center">
						Unete
					</h3>

					<div className="flex flex-col items-start gap-2 w-full">
						<div className="flex justify-center items-center mb-3 gap-3 w-full md:flex-row">
							<a href={createGoogleCalendarLink(post)} target="_blank" rel="noreferrer noopener">
								<Button className="w-full max-w-52 mx-auto font-roboto font-extralight">
									Agregar al calendario
								</Button>
							</a>
						</div>
						<p className="font-roboto text-center w-full font-thin text-base">Comparte en</p>
						<div className="flex gap-4 justify-center w-full">
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
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
								href={`https://twitter.com/share?url=${window.location.href}&text=${
									post?.title || '- - -'
								}`}
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
					</div>
				</div>
			</div>

			<main
				data-aos="zoom-out-up"
				data-aos-delay="100"
				data-aos-duration="300"
				className="container relative mt-10 gap-6 sm:mt-20 flex flex-col sm:flex-row max-w-[900px] mb-20"
			>
				{!!post?.content ? <div className="w-full">{blogContent}</div> : <SkeletonContainer />}
			</main>
			{/* <section className="container w-full flex flex-col justify-center max-w-[900px]">
				<h3 className="text-base text-foreground mb-4 font-roboto font-semibold md:text-xl">
					Más eventos
				</h3>
				<div className=" w-full flex flex-col space-y-4 sm:flex-row gap-6 sm:items-start sm:space-y-0">
					<EventCard />
					<EventCard />
					<EventCard />
				</div>
			</section> */}
			<Footer />
		</>
	)
}

export default EventsPage
