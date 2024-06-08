import { ArrowRight, Handshake } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Alliances = () => {
	return (
		<section id="alianzas" className="py-40 relative z-0">
			<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-[40rem] md:-top-20 z-0">
				<div className="bg-primary/30 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
			</div>
			<div className="container mx-auto px-4 relative z-[1]">
				<div className="text-center mb-12">
					<p className="w-fit px-6 py-1 bg-primary/10 text-primary rounded-full mx-auto mb-2 text-sm font-roboto font-thin">
						Alianzas
					</p>
					<h2 className="text-3xl font-roboto font-semibold">Nuestras Alianzas con Editoriales</h2>
					<p className="text-lg font-roboto font-thin text-foreground/60 mt-2">
						Trabajamos con editoriales reconocidas para ofrecerte los mejores materiales educativos
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8 max-w-[1000px] mx-auto">
					<div className="bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:shadow-xl text-center flex gap-6 overflow-hidden transition-all justify-between">
						<div className="flex items-center my-auto justify-center h-full w-full max-w-36 rounded-3xl bg-white shadow-sm shadow-slate-500/50 mx-auto p-2">
							<Image
								src="/images/alliances/express-p.webp"
								width={500}
								height={500}
								alt="sterling"
								className="w-full h-full object-contain"
							/>
						</div>

						<div className="flex flex-col items-start my-auto py-6 w-full">
							<h5 className="text-xl font-roboto font-semibold mb-2">Express Publishing</h5>
							<p className="text-foreground/60 font-roboto font-thin w-full text-start text-sm lg:text-base mb-2 pr-4">
								Especializados en materiales educativos para la enseñanza del inglés, con más de
								3,500 títulos y presencia en más de 90 países
							</p>
							<a
								href="https://www.expresspublishing.co.uk/es-lat"
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-500 font-roboto font-thin inline-block group"
							>
								Visitar sitio{' '}
								<ArrowRight
									size={18}
									className="inline-block  ml-1 group-hover:translate-x-2 transition-all"
								/>
							</a>
						</div>
					</div>

					<div className="bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:shadow-xl text-center flex gap-6 overflow-hidden transition-all justify-between">
						<div className="flex items-center my-auto justify-center h-full w-full max-w-36 rounded-3xl bg-white shadow-sm shadow-slate-500/50 mx-auto p-2">
							<Image
								src="/images/alliances/compass.webp"
								width={500}
								height={500}
								alt="sterling"
								className="w-full h-full object-contain"
							/>
						</div>

						<div className="flex flex-col items-start my-auto py-6 w-full">
							<h5 className="text-xl font-roboto font-semibold mb-2">Compass Publishing</h5>
							<p className="text-foreground/60 font-roboto font-thin w-full text-start text-sm lg:text-base mb-2 pr-4">
								Ofrecen una amplia gama de libros ELT y servicios digitales para mejorar las
								habilidades de aprendizaje en inglés, con una fuerte presencia en Asia
							</p>
							<a
								href="https://www.compasspub.com/eng/main/index.asp"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sky-600 font-roboto font-thin inline-block group"
							>
								Visitar sitio{' '}
								<ArrowRight
									size={18}
									className="inline-block  ml-1 group-hover:translate-x-2 transition-all"
								/>
							</a>
						</div>
					</div>

					<div className="bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:shadow-xl text-center flex gap-6 overflow-hidden transition-all justify-between">
						<div className="flex items-center my-auto justify-center h-full w-full max-w-36 rounded-3xl bg-white shadow-sm shadow-slate-500/50 mx-auto p-2">
							<Image
								src="/images/alliances/vhl.webp"
								width={500}
								height={500}
								alt="sterling"
								className="w-full h-full object-contain"
							/>
						</div>

						<div className="flex flex-col items-start my-auto py-6 w-full">
							<h5 className="text-xl font-roboto font-semibold mb-2">Vista Higher Learning</h5>
							<p className="text-foreground/60 font-roboto font-thin w-full text-start text-sm lg:text-base mb-2 pr-4">
								Distribuidora que se enfoca en proporcionar recursos educativos de alta calidad para
								el aprendizaje de idiomas, principalmente inglés y español.
							</p>
							<a
								href="https://vistahigherlearning.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-red-600 font-roboto font-thin inline-block group"
							>
								Visitar sitio{' '}
								<ArrowRight
									size={18}
									className="inline-block  ml-1 group-hover:translate-x-2 transition-all"
								/>
							</a>
						</div>
					</div>

					<div className="bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:shadow-xl text-center flex gap-6 overflow-hidden transition-all justify-between">
						<div className="flex items-center my-auto justify-center h-full w-full max-w-36 rounded-3xl bg-white shadow-sm shadow-slate-500/50 mx-auto p-2">
							<Image
								src="/images/alliances/nbag.webp"
								width={500}
								height={500}
								alt="sterling"
								className="w-full h-full object-contain"
							/>
						</div>

						<div className="flex flex-col items-start my-auto py-6 w-full">
							<h5 className="text-xl font-roboto font-semibold mb-2">NE Build & Grow</h5>
							<p className="text-foreground/60 font-roboto font-thin w-full text-start text-sm lg:text-base mb-2 pr-4">
								Editorial dedicada a la creación de materiales educativos innovadores para el
								aprendizaje del inglés, combinando métodos tradicionales y digitales.
							</p>
							<a
								href="https://www.nebuildandgrow.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-800 font-roboto font-thin inline-block group"
							>
								Visitar sitio{' '}
								<ArrowRight
									size={18}
									className="inline-block  ml-1 group-hover:translate-x-2 transition-all"
								/>
							</a>
						</div>
					</div>

					<div className="bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:shadow-xl text-center flex gap-6 overflow-hidden transition-all justify-between">
						<div className="flex items-center my-auto justify-center h-full w-full max-w-36 rounded-3xl bg-white shadow-sm shadow-slate-500/50 mx-auto p-2">
							<Image
								src="/images/alliances/mm-publications.webp"
								width={500}
								height={500}
								alt="sterling"
								className="w-full h-full object-contain"
							/>
						</div>

						<div className="flex flex-col items-start my-auto py-6 w-full">
							<h5 className="text-xl font-roboto font-semibold mb-2">MM Publications</h5>
							<p className="text-foreground/60 font-roboto font-thin w-full text-start text-sm lg:text-base mb-2 pr-4">
								Publican materiales didácticos para la enseñanza del inglés, conocidos por sus
								cursos estructurados y recursos complementarios digitales.
							</p>
							<a
								href="https://www.mmpublications.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-700 font-roboto font-thin inline-block group"
							>
								Visitar sitio{' '}
								<ArrowRight
									size={18}
									className="inline-block  ml-1 group-hover:translate-x-2 transition-all"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Alliances
