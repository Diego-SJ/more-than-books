import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Clock, Crown, DollarSign, MapPin, Ticket } from 'lucide-react'
import React from 'react'
import { Event } from '@/types/event'
import dayjs from 'dayjs'
import { createGoogleCalendarLink } from '@/lib/utils'
import 'dayjs/locale/es'
import MarkdownContent from './ui/markdown-content'
import AosInit from './aos-init'
import EventShareButtons from './event-share-buttons'

dayjs.locale('es')

const EventsPage = ({ event }: { event: Event }) => {
	const googleCalendarLink = createGoogleCalendarLink(event)
	return (
		<>
			<AosInit />
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
				<div className="relative sm:w-full border-b-[3px] sm:border-b-transparent sm:border-r-[3px] border-dashed border-black/10 px-6 pt-6 pb-8 before:content-[''] before:w-10 before:h-10 before:bg-white before:rounded-full before:absolute before:left-1/2 sm:before:left-[100%] sm:before:top-1/2 before:-translate-x-1/2 sm:before:-translate-x-1/2 sm:before:-translate-y-1/2 before:-bottom-5 sm:before:bottom-[initial] before:shadow-inner-lg">
					<h2 className="text-3xl mb-3 font-roboto font-semibold">{event?.title}</h2>

					{event?.date && (
						<div className="flex items-start gap-2 mb-3">
							<Clock className="text-primary mt-2 min-w-5" size={18} />
							<div className="flex flex-col">
								<p className="text-base sm:text-lg font-didact text-secondary-foreground/70">
									{dayjs(event.date).format('dddd D [de] MMMM [del] YYYY')}
								</p>
								{!!event.time && (
									<p className="text-base sm:text-lg font-didact text-secondary-foreground/50">
										{dayjs(event.date + ' ' + event.time).format('hh:mm a')}
									</p>
								)}
							</div>
						</div>
					)}

					{event.address && (
						<div className="flex gap-2 items-center mb-3">
							<MapPin className="text-primary mt-0 min-w-5" size={19} />
							<div className="flex flex-col">
								{event.location ? (
									<a
										href={event.location}
										target="_blank"
										className="text-base sm:text-lg font-didact text-secondary-foreground/70 hover:text-primary underline"
									>
										{event.address}
									</a>
								) : (
									<span className="text-base sm:text-lg font-didact text-secondary-foreground/70">
										{event.address}
									</span>
								)}
							</div>
						</div>
					)}

					<div className="flex justify-between items-center">
						{event.author && (
							<div className="flex items-center gap-2">
								<Crown className="text-primary mt-0 min-w-5" size={19} />
								<p className="text-base sm:text-lg font-didact text-secondary-foreground/70">
									{event?.author}
								</p>
							</div>
						)}

						{event.event_type && (
							<div className="flex items-center gap-2">
								<Ticket className="text-primary mt-0 min-w-5" size={19} />
								<p className="text-base sm:text-lg font-didact text-secondary-foreground/70">
									{event.event_type}
								</p>
							</div>
						)}

						{!!event.price && event.price > 0 && (
							<div className="flex items-center gap-2">
								<DollarSign className="text-primary mt-0 min-w-5" size={19} />
								<p className="text-base sm:text-lg font-didact text-secondary-foreground/70">
									{event.price}
								</p>
							</div>
						)}
					</div>
				</div>

				<div className="px-6 py-6 sm:w-full flex flex-col justify-center">
					<h3 className="text-lg text-foreground mb-3 font-roboto font-semibold md:text-2xl text-center">
						Unete
					</h3>

					<div className="flex flex-col items-start gap-2 w-full">
						<div className="flex justify-center items-center mb-3 gap-3 w-full md:flex-row">
							{googleCalendarLink ? (
								<a href={googleCalendarLink ?? ''} target="_blank" rel="noreferrer noopener">
									<Button className="w-full max-w-52 mx-auto font-roboto font-extralight">
										Agregar al calendario
									</Button>
								</a>
							) : (
								<Button className="w-full max-w-52 mx-auto font-roboto font-extralight" disabled>
									No disponible
								</Button>
							)}
						</div>
						<p className="font-roboto text-center w-full font-thin text-base">Comparte en</p>
						<EventShareButtons title={event?.title} slug={event?.slug} />
					</div>
				</div>
			</div>

			<main
				data-aos="zoom-out-up"
				data-aos-delay="100"
				data-aos-duration="300"
				className="container relative mt-10 gap-6 sm:mt-20 flex flex-col max-w-[900px] mb-20"
			>
				{!!event.content && <MarkdownContent markdown={event.content} />}
			</main>
			<Footer />
		</>
	)
}

export default EventsPage
