// pages/index.js

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ArrowRight, CalendarHeart, Handshake, Headset, Rss } from 'lucide-react'
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
							Las Ventajas
						</p>
						<h2 className="text-3xl font-roboto font-semibold">
							Las Ventajas de Usar Nuestro Servicio
						</h2>
						<p className="text-lg font-roboto font-thin text-foreground/60 mt-2">
							Descubre por qué More than Books es el aliado perfecto para tus necesidades educativas
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:max-w-[1200px] md:mx-auto">
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<Handshake size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Alianza con Editoriales</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Aprovecha nuestra red de editoriales aliadas para acceder a una amplia variedad de
								libros de inglés.
							</p>
							<Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link>
						</div>
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 shadow-lg shadow-blue-500/50 mx-auto mb-4">
								<CalendarHeart size={40} strokeWidth={1} className="text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Servicio de Eventos</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Organizamos eventos educativos que enriquecen la experiencia de aprendizaje y
								desarrollo profesional.
							</p>
							<Link
								href={'/eventos'}
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link>
						</div>
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 shadow-lg shadow-red-500/50 mx-auto mb-4">
								<Rss size={40} strokeWidth={1} className="text-red-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Servicio de Blog</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Accede a contenido educativo complementario a través de nuestro blog, diseñado para
								apoyar a estudiantes y profesores.
							</p>
							<Link
								href={'/blog'}
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link>
						</div>
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 shadow-lg shadow-amber-500/50 mx-auto mb-4">
								<Headset size={40} strokeWidth={1} className="text-amber-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Contacto y Soporte</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Ofrecemos soporte inmediato y atención personalizada para resolver cualquier
								consulta o problema.
							</p>
							<Link
								href={'/contacto'}
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								Saber Más{' '}
								<ArrowRight
									size={18}
									className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<section id="alianzas" className="bg-gray-100 py-40">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<p className="w-fit px-6 py-1 bg-primary/10 text-primary rounded-full mx-auto mb-2 text-sm font-roboto font-thin">
							Alianzas
						</p>
						<h2 className="text-3xl font-roboto font-semibold">
							Nuestras Alianzas con Editoriales
						</h2>
						<p className="text-lg font-roboto font-thin text-foreground/60 mt-2">
							Trabajamos con editoriales reconocidas para ofrecerte los mejores materiales
							educativos
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-[800px] mx-auto">
						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<Handshake size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Aprovecha nuestra red de editoriales aliadas para acceder a una amplia variedad de
								libros de inglés.
							</p>
							<Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								<button className="font-thin font-roboto bg-primary text-white px-4 py-3 w-48 rounded-full hover:bg-primary/90 transition-all hover:shadow-3xl shadow-black cursor-pointer">
									Visitar sitio{' '}
									<ArrowRight
										size={18}
										className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
									/>
								</button>
							</Link>
						</div>

						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<Handshake size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Aprovecha nuestra red de editoriales aliadas para acceder a una amplia variedad de
								libros de inglés.
							</p>
							<Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								<button className="font-thin font-roboto bg-primary text-white px-4 py-3 w-48 rounded-full hover:bg-primary/90 transition-all hover:shadow-3xl shadow-black cursor-pointer">
									Visitar sitio{' '}
									<ArrowRight
										size={18}
										className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
									/>
								</button>
							</Link>
						</div>

						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<Handshake size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Aprovecha nuestra red de editoriales aliadas para acceder a una amplia variedad de
								libros de inglés.
							</p>
							<Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								<button className="font-thin font-roboto bg-primary text-white px-4 py-3 w-48 rounded-full hover:bg-primary/90 transition-all hover:shadow-3xl shadow-black cursor-pointer">
									Visitar sitio{' '}
									<ArrowRight
										size={18}
										className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
									/>
								</button>
							</Link>
						</div>

						<div className="bg-white p-6 rounded-3xl shadow-xl text-center">
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<Handshake size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Aprovecha nuestra red de editoriales aliadas para acceder a una amplia variedad de
								libros de inglés.
							</p>
							<Link
								href="/alianzas"
								className="text-primary font-roboto font-thin mt-4 inline-block group"
							>
								<button className="font-thin font-roboto bg-primary text-white px-4 py-3 w-48 rounded-full hover:bg-primary/90 transition-all hover:shadow-3xl shadow-black cursor-pointer">
									Visitar sitio{' '}
									<ArrowRight
										size={18}
										className="inline-block mb-[1px] ml-1 group-hover:translate-x-2 transition-all"
									/>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}
