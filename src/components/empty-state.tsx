import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="500"
			data-aos-delay="100"
			data-aos-offset="150"
			className="flex flex-col w-full mx-auto pb-28 pt-28 justify-center items-center px-10"
		>
			<Image
				src="/images/webp/empty.webp"
				alt="Empty"
				width={200}
				height={200}
				className="w-56 h-5w-56 mx-auto mb-6"
			/>
			<h2 className="text-3xl text-center font-bold text-foreground font-roboto">
				No se encontraron resultados
			</h2>
			<p className="text-center text-lg text-slate-500 mt-4 font-thin font-roboto">
				Lo sentimos, no encontramos resultados para tu búsqueda.
			</p>
		</div>
	)
}

export default EmptyState
