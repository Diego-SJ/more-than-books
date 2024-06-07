import * as React from 'react'

import EventCard from '@/components/event-card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

export function CarouselEvents() {
	return (
		<Carousel className="w-full max-w-sm">
			<CarouselContent className="-ml-1">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<EventCard />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
