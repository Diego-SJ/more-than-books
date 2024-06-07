'use client'
import EventCard from '@/components/event-card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'

import { Clock, Crown, Facebook, Link, MapPin, Twitter } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'

const imageUrl = 'https://source.unsplash.com/random/720x400'

const EventsPage = () => {
	const params = useParams()
	return (
		<>
			<Navbar theme="dark" />
			<header
				className="relative pt-[65px] sm:pt-20 px-0 min-h-[200px] sm:px-6 md:min-h-80 z-0"
				style={{
					background: `linear-gradient(to bottom, hsl(var(--primary) / 100%), hsl(var(--primary) / 50%), hsl(var(--primary) / 30%) ), url('${imageUrl}')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			></header>
			<div className="relative flex flex-col sm:flex-row bg-white text-secondary-foreground w-full mx-auto max-w-[90%] md:max-w-[900px] rounded-2xl shadow-2xl -mt-20 z-[2]">
				<div className="relative sm:w-full border-b-[3px] sm:border-b-transparent sm:border-r-[3px] border-dashed border-black/10 px-6 pt-6 pb-10 before:content-[''] before:w-10 before:h-10 before:bg-white before:rounded-full before:absolute before:left-1/2 sm:before:left-[100%] sm:before:top-1/2 before:-translate-x-1/2 sm:before:-translate-x-1/2 sm:before:-translate-y-1/2 before:-bottom-5 sm:before:bottom-[initial] before:shadow-inner-lg">
					<h2 className="text-xl mb-3 font-roboto font-semibold md:text-3xl">
						Feria del libro 2024
					</h2>

					<div className="flex items-start gap-2 mb-3">
						<Clock className="text-primary mt-1" size={18} />
						<div className="flex flex-col">
							<p className="text-base sm:text-lg font-didact text-secondary-foreground/50">
								Sab. 26 de Enero, 2024
							</p>
							<p className="text-base sm:text-lg font-didact">5:00 pm - 11:00 pm</p>
						</div>
					</div>

					<div className="flex gap-2 items-center">
						<MapPin className="text-primary mt-0" size={19} />
						<div className="flex flex-col">
							<a
								href=""
								target="_blank"
								className="text-base sm:text-lg font-didact text-primary hover:underline"
							>
								Calle pirul 6 Col. San Juan
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
								href=""
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
							>
								<Facebook
									size={20}
									className="text-primary group-hover:text-white transition-all"
								/>
							</a>
							<a
								href=""
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
							>
								<Twitter size={20} className="text-primary group-hover:text-white transition-all" />
							</a>
							<a
								href=""
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:bg-primary hover:text-white group transition-all"
							>
								<Link size={20} className="text-primary group-hover:text-white transition-all" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<main className="container relative mt-10 gap-6 sm:mt-20 flex flex-col sm:flex-row max-w-[900px] mb-20">
				<div className="w-full">
					<h3 className="text-lg text-foreground mb-3 font-roboto font-semibold md:text-2xl">
						Feria del libro 2024
					</h3>
					<p className="text-base sm:text-lg font-didact text-secondary-foreground/60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure officiis commodi ut?
						Ducimus, at. Quo nesciunt cum inventore optio praesentium et a esse deserunt saepe
						accusamus architecto, veniam quos.
					</p>
				</div>
				<div className="border border-slate-500/50 rounded-xl px-4 py-4 w-full h-min">
					<div className="flex gap-3">
						<span className="bg-slate-200 h-12 w-12 rounded-full grid place-content-center">
							<Crown className="text-slate-600" />
						</span>
						<div className="flex flex-col items-start">
							<h5 className="text-sm font-roboto font-thin text-slate-500">Organizador</h5>
							<h3 className="text-lg font-roboto font-semibold">More Than Books</h3>
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
