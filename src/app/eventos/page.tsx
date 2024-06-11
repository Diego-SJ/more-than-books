'use client'
import EventCard from '@/components/event-card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import NewsLatter from '@/components/newlatter'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { getEvents } from '@/lib/events'
import { includes, mapCategories } from '@/lib/utils'
import { Event } from '@/types/event'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

const imageUrl = 'https://source.unsplash.com/random'

const EventsPage = () => {
	const [posts, setBlogPosts] = useState<Event[]>([])
	const [postsAux, setBlogPostsAux] = useState<Event[]>([])
	const [categories, setCategories] = useState<string[]>([])
	const [filters, setFilters] = useState({ category: 'todos', search: '' })
	const onMounted = useRef(false)

	useEffect(() => {
		const getArticles = async () => {
			const data = await getEvents()
			if (!data) {
				toast.error('Error al cargar los posts')
				return
			}

			console.log(data)
			setCategories(mapCategories(data as Event[]))
			setBlogPosts(data as Event[])
			setBlogPostsAux(data as Event[])
		}

		if (!onMounted.current) {
			onMounted.current = true
			getArticles()
		}
	}, [onMounted])

	useEffect(() => {
		const filteredPosts = postsAux?.filter((post) => {
			const categoryMatch = filters.category === 'todos' || post.category === filters.category
			const searchMatch =
				includes(post.title, filters.search) || includes(post.content, filters.search)
			return categoryMatch && searchMatch
		})
		setBlogPosts(filteredPosts)
	}, [filters.category, filters.search])

	return (
		<>
			<Navbar currentPath="events" />
			<main className="container pt-[65px] sm:pt-20 px-0 sm:px-6">
				<div
					className="w-full m-h-[300px] sm:rounded-3xl  sm:h-96 p-6 relative flex flex-col"
					style={{
						background: `linear-gradient(to top, hsl(var(--primary)), hsl(var(--primary))), url('${imageUrl}')`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<div className="mt-10 sm:mt-auto mb-10 flex flex-col sm:flex-row">
						<div className="w-full flex flex-col justify-center">
							<h1 className="text-white text-5xl sm:text-5xl mb-4 font-roboto font-semibold">
								Eventos Destacados
							</h1>
							<p className="text-white text-xl md:text-2xl font-roboto font-thin">
								Forma parte de nuestra comunidad asistiendo A nuestros próximos eventos y
								conferencias para mejorar tus habilidades y conocimientos.
							</p>
						</div>
						<div className="w-full h-full flex justify-center sm:justify-end mt-6 sm:mt-0">
							<Image
								src="/images/webp/events.webp"
								alt="Event Image"
								width={500}
								height={300}
								className="w-auto h-60 object-contain moving-4"
							/>
						</div>
					</div>
					<div className="py-3 sm:px-2 relative w-full flex gap-4 flex-col sm:flex-row">
						<Input
							placeholder="Buscar eventos"
							type="text"
							name="search"
							id="search"
							onChange={({ target }) => setFilters((prev) => ({ ...prev, search: target?.value }))}
						/>
						<div className="flex flex-row gap-4">
							<Select>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Categoría" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Selecciona una categoría</SelectLabel>
										<SelectItem value="todos">Todos</SelectItem>
										{categories?.map((category) => (
											<SelectItem key={category} value={category}>
												{category}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				<div className="flex mt-10 mx-auto max-w-[1200px] px-6 sm:px-0">
					<h3 className="text-3xl font-bold">Próximos Eventos</h3>
				</div>

				{posts?.length ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 mx-auto max-w-[1200px] px-6 sm:px-0">
						{(posts || [])?.map((event) => (
							<EventCard key={event?.slug} {...event} />
						))}
					</div>
				) : (
					<>
						<div className="w-full flex justify-center items-center py-20">
							<h3 className="text-xl font-roboto font-thin text-slate-600">
								No se encontraron eventos próximos
							</h3>
						</div>
					</>
				)}

				{/* <div className="flex mt-10 mx-auto max-w-[1200px] px-6 sm:px-0">
					<h3 className="text-3xl font-bold">Eventos pasados</h3>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 mx-auto max-w-[1200px] px-6 sm:px-0">
					{Array.from({ length: 6 }).map((_, i) => (
						<EventCard
							key={i}
							slug={`evento-${i}`}
							imageSrc="https://source.unsplash.com/random/720x400"
							content="lorem impsum dskjf wefwe f wef w fw ef we f wef we f wef we fw ef wef"
						/>
					))}
				</div> */}
			</main>
			<NewsLatter />
			<Footer mt={20} />
		</>
	)
}

export default EventsPage
