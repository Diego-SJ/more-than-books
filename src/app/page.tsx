// pages/index.js

import Alliances from '@/components/alliances'
import Footer from '@/components/footer'
import FAQSection from '@/components/fqa-accordion'
import Navbar from '@/components/navbar'
import NewsLatter from '@/components/newlatter'
import TestimonialsSection from '@/components/testimonials'
import { Brain, HeartHandshake, ShieldCheck, Speech, Trees } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Navbar theme="dark" />
			<header className="bg-primary w-full relative z-0 mb-20">
				<span className="moving w-[600px] h-[600px] bg-white/5 z-0 absolute rounded-full right-[5%] -top-[25%] animate-pulse block"></span>
				<span className="moving-2 w-[200px] h-[200px] bg-white/5 z-0 absolute rounded-full left-[10%] top-[50%] animate-pulse block"></span>
				<span className="moving w-[100px] h-[100px] bg-white/5 z-0 absolute rounded-full right-[10%] top-[70%] animate-pulse block"></span>
				<Image
					src="/images/webp/reading-idea.webp"
					alt="Hero Image"
					width={500}
					height={500}
					className="h-auto max-h-[20rem] w-[30rem] sm:h-[40rem] sm:max-h-[40rem] sm:w-auto object-cover absolute -bottom-[8rem] sm:-bottom-[15rem]  left-1/2 -translate-x-1/2 drop-shadow-2xl z-0"
				/>

				<Image
					src="/images/webp/news.webp"
					alt="voice"
					width={500}
					height={300}
					className="hidden md:block w-auto  h-auto object-contain drop-shadow-3xl z-[0] bounce-1 absolute top-[60%] left-[10%]"
				/>
				<Image
					src="/images/webp/pencil.webp"
					alt="pencil"
					width={500}
					height={300}
					className="hidden md:block w-auto h-auto object-contain drop-shadow-3xl z-[0] bounce-2 absolute bottom-[15%] right-[10%]"
				/>
				<div className="z-[2] text-white container flex flex-col items-center justify-start pt-28 sm:pt-36 min-h-[50rem] md:min-h-screen w-full pb-0 sm:pb-52 relative">
					<h1 className="text-5xl sm:text-7xl font-bold text-center px-2 max-w-[25ch] font-roboto">
						Empoderando el aprendizaje del Inglés en las aulas
					</h1>
					<p className="text-xl md:text-2xl font-roboto font-thin text-center mt-4 px-2">
						Descubre nuestros libros y recursos educativos diseñados para el éxito de tus
						estudiantes.
					</p>
					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<Link
							href="#alianzas"
							className="bg-white text-center font-thin font-roboto text-foreground px-4 py-3 w-48 rounded-xl hover:bg-slate-100 hover:shadow-3xl shadow-black cursor-pointer"
						>
							Nuestras alianzas
						</Link>
						<Link
							href={'/blog'}
							className="border text-center font-thin font-roboto border-white px-4 py-3 w-48 rounded-xl hover:bg-slate-50/10 hover:shadow-3xl shadow-black cursor-pointer"
						>
							Nuestro Blog
						</Link>
					</div>
				</div>
			</header>
			<div className="py-20 mb-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<p className="w-fit px-6 py-1 bg-primary/10 text-primary rounded-full mx-auto mb-2 text-sm font-roboto font-thin">
							Servicios
						</p>
						<h2 className="text-3xl font-roboto font-semibold">¿Por qué elegir More than Books?</h2>
						<p className="text-lg font-roboto font-thin text-foreground/60 mt-2">
							Descubre por qué More than Books es el aliado perfecto para tus necesidades educativas
						</p>
					</div>
					<div className="flex justify-center flex-wrap gap-6 md:max-w-[1200px] md:mx-auto">
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center w-full max-w-96">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 shadow-lg shadow-blue-500/50 mx-auto mb-4">
								<Brain size={40} strokeWidth={1} className="text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Desarrollo profesional docente</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Se ofrecen cursos de desarrollo profesional continuo a todos nuestros usuarios
								actuales.
							</p>
							{/* <Link
								href={'/eventos'}
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link> */}
						</div>
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center w-full max-w-96">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 shadow-lg shadow-red-500/50 mx-auto mb-4">
								<ShieldCheck size={40} strokeWidth={1} className="text-red-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Certificados internacionales</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Las Certificaciones Internacionales son patrocinadas por nuestra empresa para
								contribuir a las certificaciones de los docentes.
							</p>
							{/* <Link
								href={'/blog'}
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link> */}
						</div>
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center w-full max-w-96">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 shadow-lg shadow-amber-500/50 mx-auto mb-4">
								<Speech size={40} strokeWidth={1} className="text-amber-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Convenciones</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Algunos profesores son invitados a MEXTESOL u otras convenciones nacionales para
								mantenerse actualizados sobre las tendencias de ELT.
							</p>
							{/* <Link
								href={'/contacto'}
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link> */}
						</div>

						<div className="bg-white p-6 rounded-3xl shadow-xl text-center w-full max-w-96">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 shadow-lg shadow-purple-500/50 mx-auto mb-4">
								<HeartHandshake size={40} strokeWidth={1} className="text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Donaciones</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Se pueden realizar donaciones de recursos educativos y otros materiales a las
								instituciones.
							</p>
							{/* <Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link> */}
						</div>

						<div className="bg-white p-6 rounded-3xl shadow-xl text-center w-full max-w-96">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<Trees size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Programa de reforestación</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Conscientes de la problemática ambiental, implementamos proyectos de reforestación
								en colegios patrocinado por MTB
							</p>
							{/* <Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link> */}
						</div>
					</div>
				</div>
			</div>

			<Alliances />

			<section className="container my-40 sm:my-20 flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-10 sm:min-h-[90vh]">
				<div className="flex justify-center w-full">
					<div className=" relative">
						<Image
							src="/images/webp/team-idea.webp"
							alt="mission"
							width={1000}
							height={1000}
							quality={100}
							className="w-[90%] h-[90%] mx-auto lg:w-[31rem] lg:h-[30rem] object-cover drop-shadow-xl bounce-1 z-[0] mb-10"
						/>
					</div>
				</div>
				<div className="flex flex-col md:max-w-xl w-full items-center md:items-start">
					<p className="w-fit px-6 py-1 bg-primary/10 text-primary rounded-full mb-2 text-sm font-roboto font-thin">
						Blog
					</p>
					<h2 className="text-3xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full">
						Descubre Nuestro Blog
					</h2>
					<p className="text-base sm:text-lg text-center md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2">
						Mantente actualizado con los últimos artículos, recursos y consejos para mejorar tus
						habilidades y conocimientos.
					</p>
					<p className="text-base sm:text-lg text-center md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full">
						Nuestro blog está diseñado para apoyar a profesores, estudiantes y todos los interesados
						en la educación.
					</p>
					<div className="relative mt-10">
						<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
							<div className="bg-teal-300/70 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
						</div>
						<div className="relative z-[1] flex">
							<Link
								href={'/blog'}
								className="mx-auto md:mx-0 border border-primary bg-primary text-white text-center font-thin font-roboto px-4 py-3 w-48 rounded-xl hover:bg-primary/90 hover:shadow-3xl shadow-black cursor-pointer"
							>
								Visita Nuestro Blog
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="container my-40 sm:my-20 flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-10 sm:min-h-[90vh]">
				<div className="flex justify-center w-full">
					<div className=" relative">
						<Image
							src="/images/webp/people-events.webp"
							alt="mission"
							width={1000}
							height={1000}
							quality={100}
							className="w-[90%] h-[90%] mx-auto lg:w-[30rem] lg:h-[30rem] object-cover drop-shadow-lg bounce-1 z-[0]"
						/>
					</div>
				</div>
				<div className="flex flex-col md:max-w-xl w-full items-center md:items-start">
					<p className="w-fit sm:mx-0 px-6 py-1 bg-indigo-500/10 text-indigo-500 rounded-full mb-2 text-sm font-roboto font-thin">
						Eventos
					</p>
					<h2 className="text-3xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full">
						Participa en Nuestros Eventos
					</h2>
					<p className="text-base sm:text-lg text-center md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2">
						Únete a nuestros eventos educativos diseñados para enriquecer tu experiencia de
						aprendizaje.
					</p>
					<p className="text-base sm:text-lg text-center md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full">
						Ofrecemos conferencias, talleres y seminarios que te ayudarán a desarrollarte
						profesionalmente.
					</p>
					<div className="relative mt-10">
						<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
							<div className="bg-orange-300 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
						</div>
						<div className="relative z-[1] flex">
							<Link
								href={'/eventos'}
								className="mx-auto md:mx-0 border border-indigo-500 bg-indigo-500 text-white text-center font-thin font-roboto px-4 py-3 w-48 rounded-xl hover:bg-indigo-500/90 hover:shadow-3xl shadow-black cursor-pointer"
							>
								Ver Próximos Eventos
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="container my-40 sm:mt-20 sm:mb-0 flex flex-col md:flex-row gap-6 md:gap-10 sm:min-h-[90vh] relative">
				<div className="flex flex-col w-full">
					<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
						<div className="bg-teal-200 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
					</div>
					<p className="w-fit mx-auto px-6 py-1 bg-teal-500/10 text-teal-500 rounded-full mb-2 text-sm font-roboto font-thin">
						FQA
					</p>
					<h2 className="text-3xl text-center  md:text-4xl font-roboto font-bold mb-4 w-full">
						Preguntas Frecuentes
					</h2>
					<p className="text-base sm:text-lg text-center md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2">
						Encuentra respuestas a las preguntas más frecuentes sobre nuestros servicios y
						productos.
					</p>
					<Image
						src="/images/webp/faq-chat.webp"
						alt="mission"
						width={1000}
						height={1000}
						quality={100}
						className="w-[10rem] h-[10rem] sm:w-auto sm:h-auto lg:w-[20rem] lg:h-[20rem] mx-auto self-start object-cover drop-shadow-lg bounce-1 z-[0]"
					/>
				</div>
				<div className="w-full relative md:py-12">
					<FAQSection />
				</div>
			</section>

			<TestimonialsSection />

			<NewsLatter />
			<Footer mt={0} />
		</>
	)
}
