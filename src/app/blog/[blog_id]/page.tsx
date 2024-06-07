'use client'
import BlogCard from '@/components/blog-card'
import EventCard from '@/components/event-card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

import { BookA, Crown, Facebook, Link, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const imageUrl = 'https://source.unsplash.com/random/720x400'

const EventsPage = () => {
	const params = useParams()
	return (
		<>
			<Navbar theme="dark" />
			<header className="relative pt-[65px] sm:pt-20 px-0 sm:px-6 min-h-80 z-0 bg-primary">
				<div className="w-full sm:max-w-[900px] flex justify-between mx-auto">
					<div className="flex flex-col w-full px-6 sm:px-0 sm:max-w-[60%]">
						<p className="text-base sm:text-lg font-roboto font-thin text-white/70 mb-3">
							Tecnología
						</p>
						<h1 className="text-white text-4xl font-roboto font-semibold">
							A vintage video game in the industry of UI
						</h1>
					</div>

					<div className="gap-4 justify-center flex-col hidden sm:flex">
						<div className="flex gap-4 justify-start w-full mb-8">
							<a
								href=""
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:shadow-4xl hover:-translate-y-1 group transition-all"
							>
								<Facebook size={20} className="text-primary transition-all" />
							</a>
							<a
								href=""
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:shadow-4xl hover:-translate-y-1 group transition-all"
							>
								<Twitter size={20} className="text-primary transition-all" />
							</a>
							<a
								href=""
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:shadow-4xl hover:-translate-y-1 group transition-all"
							>
								<Link size={20} className="text-primary transition-all" />
							</a>
						</div>

						<div className="flex gap-4">
							<span className="w-10 h-10 bg-white/30 rounded-full grid place-content-center">
								<BookA size={20} className="text-white/90" />
							</span>
							<div>
								<div className="text-white uppercase text-xs font-bold font-roboto">
									{'More than books'}
								</div>
								<div className="text-white/70 text-sm font-roboto font-thin">{'Jun 27, 2024'}</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="relative overflow-hidden flex flex-col sm:flex-row bg-white text-secondary-foreground w-full mx-auto max-w-[95%] lg:max-w-[900px] rounded-2xl shadow-2xl -mt-20">
				<Image
					src={imageUrl}
					alt="Blog Image"
					layout="responsive"
					width={720}
					height={400}
					className="h-96"
				/>
			</div>
			<main className="container relative mt-10 gap-6 sm:mt-20 flex flex-col sm:flex-row max-w-[900px] mb-20">
				<div className="gap-4 flex justify-between items-center sm:hidden mt-2">
					<div className="flex gap-4 w-full">
						<span className="w-10 h-10 min-w-10 min-h-10 bg-slate-300/30 rounded-full grid place-content-center">
							<BookA size={20} className="text-slate-500" />
						</span>
						<div>
							<div className="text-foreground uppercase text-xs font-bold font-roboto">
								{'More than books'}
							</div>
							<div className="text-foreground/70 text-sm font-roboto font-thin">
								{'Jun 27, 2024'}
							</div>
						</div>
					</div>

					<div className="flex gap-2 items-center justify-end w-1/3">
						<a
							href=""
							className="bg-white border border-foreground/40 rounded-full w-8 h-8 min-w-8 min-h-8 grid place-content-center group transition-all"
						>
							<Facebook size={15} className="text-foreground/60 transition-all" />
						</a>
						<a
							href=""
							className="bg-white border border-foreground/40 rounded-full w-8 h-8 min-w-8 min-h-8 grid place-content-center group transition-all"
						>
							<Twitter size={15} className="text-foreground/60 transition-all" />
						</a>
						<a
							href=""
							className="bg-white border border-foreground/40 rounded-full w-8 h-8 min-w-8 min-h-8 grid place-content-center group transition-all"
						>
							<Link size={15} className="text-foreground/60 transition-all" />
						</a>
					</div>
				</div>

				<div className="w-full">
					<h3 className="text-2xl sm:text-3xl text-foreground mb-3 font-roboto font-semibold">
						Feria del libro 2024
					</h3>
					<p className="text-base sm:text-lg font-didact text-secondary-foreground/60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure officiis commodi ut?
						Ducimus, at. Quo nesciunt cum inventore optio praesentium et a esse deserunt saepe
						accusamus architecto, veniam quos.
					</p>
				</div>
			</main>
			<section className="container w-full flex flex-col justify-center max-w-[900px]">
				<h3 className="text-base text-foreground mb-4 font-roboto font-semibold md:text-xl">
					Articulos similares
				</h3>
				<div className=" w-full flex flex-col space-y-4 md:flex-row gap-6 md:items-start md:space-y-0">
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default EventsPage
