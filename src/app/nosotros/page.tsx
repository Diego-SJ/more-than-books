import BlogCard from '@/components/blog-card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
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
import Image from 'next/image'
import React from 'react'

const AboutUsPage = () => {
	return (
		<>
			<Navbar currentPath="about" />
			<header className="container  flex flex-col sm:flex-row pt-20 sm:pt-28 relative">
				<span className="moving w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary/5 z-0 absolute rounded-full right-[5%] -top-[25%] animate-pulse sm:block"></span>
				<span className="moving-2 w-[200px] sm:w-[200px] h-[200px] sm:h-[200px] bg-primary/5 z-0 absolute rounded-full left-[10%] top-[50%] animate-pulse sm:block"></span>
				<span className="moving w-[100px] sm:w-[100px] h-[100px] sm:h-[100px] bg-primary/5 z-0 absolute rounded-full right-[40%] top-[120%] animate-pulse sm:block"></span>
				<div className="flex flex-col items-start w-full justify-center py-10 md:py-0">
					<h1 className="text-5xl sm:text-start font-roboto font-bold mb-8 md:mb-4 w-full text-center text-foreground">
						Conoce <span className="font-roboto font-bold text-primary">nuestro</span> viaje
					</h1>
					<p className="text-xl text-center sm:text-start sm:text-2xl font-roboto font-thin sm:mb-8 sm:max-w-[80%] w-full text-foreground/60">
						Descubre la historia detrás de nuestra empresa, nuestros valores fundamentales y el
						equipo dedicado que trabaja incansablemente para ofrecerte lo mejor.
					</p>
				</div>
				<div className="flex justify-end w-full">
					<Image
						src="/images/webp/people-doing-team-work.webp"
						alt="people-doing-team-work"
						width={500}
						height={300}
						className="w-auto h-auto object-contain drop-shadow-3xl"
					/>
				</div>
			</header>
			<main className="container flex flex-col my-20 max-w-[1200px] mx-auto ">
				<section className="mb-16 flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-10 min-h-[90vh]">
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<span className="moving w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-green-500/10 z-0 absolute rounded-full right-[5%] -top-[25%] animate-pulse md:block"></span>
							<Image
								src="/images/webp/mtb.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-52 h-52 md:w-96 md:h-96 object-cover drop-shadow-3xl z-[0] bounce-1 rounded-full"
							/>
						</div>
					</div>
					<div className="flex flex-col md:max-w-xl w-full">
						<h2 className="text-2xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full">
							Educación <span className="font-roboto font-bold text-green-500">Integral</span> para{' '}
							<span className="font-roboto font-bold text-green-500">Instituciones</span> Exigentes
						</h2>
						<p className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-didact text-foreground/60 w-full mb-2">
							En <strong>More than Books</strong>, nos comprometemos a satisfacer las necesidades de
							las instituciones educativas con eficiencia y eficacia.
						</p>
						<p className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-didact text-foreground/60 w-full">
							Ofrecemos una amplia gama de libros de texto, plataformas y libros digitales de alto
							valor educativo. Además, brindamos cursos, talleres y conferencias para apoyar el
							desarrollo profesional de los profesores. ¡Descubre cómo podemos transformar la
							educación juntos!
						</p>
					</div>
				</section>

				<section className="mb-16 flex flex-col md:flex-row md:justify-center md:items-center sm:gap-10 pt-12 pb-6 sm:py-10 rounded-3xl bg-orange-100/70 px-6">
					<div className="flex flex-col md:max-w-[50%] lg:max-w-xl w-full items-center">
						<h2 className="text-2xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full">
							Nuestra <span className="font-roboto font-bold text-amber-500">Misión</span>
						</h2>
						<p className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-didact text-foreground/60 w-full mb-2">
							Es enriquecer el conocimiento de alumnos y profesionales del ámbito educativo mediante
							contenido de alta calidad y cursos de desarrollo profesional para maestros.
						</p>
						<p className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-didact text-foreground/60 w-full">
							Nos esforzamos por ofrecer un servicio excepcional que cumpla y supere las
							expectativas de nuestros usuarios, convirtiéndonos en su aliado confiable para elegir
							el mejor material educativo.
						</p>
					</div>
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<Image
								src="/images/webp/target.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover drop-shadow-3xl z-[0] bounce-1 rounded-full"
							/>
						</div>
					</div>
				</section>

				<section className="mb-16 flex flex-col md:flex-row md:justify-center md:items-center sm:gap-10 pt-12 pb-6 sm:py-10 rounded-3xl bg-sky-100/70 px-6">
					<div className="flex flex-col md:max-w-[50%] lg:max-w-xl w-full items-center">
						<h2 className="text-2xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full">
							Nuestra <span className="font-roboto font-bold text-sky-500">Visión</span>
						</h2>
						<p className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-didact text-foreground/60 w-full mb-2">
							Convertirnos en una empresa con presencia nacional e internacional, capaz de
							satisfacer las necesidades educativas actuales y futuras.
						</p>
						<p className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-didact text-foreground/60 w-full">
							Nuestro objetivo es desarrollar canales de distribución eficientes que nos acerquen a
							nuestros clientes, facilitando el acceso a nuestros servicios de manera fácil y
							oportuna.
						</p>
					</div>
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<Image
								src="/images/webp/goal.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover drop-shadow-3xl z-[0] bounce-1 rounded-full"
							/>
						</div>
					</div>
				</section>

				<section className="container px-0 sm:mx-auto py-20 relative ">
					<svg
						className="absolute left-full transform translate-x-1/2"
						width="404"
						height="404"
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-primary"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
					</svg>
					<svg
						className="absolute right-full bottom-0 transform -translate-x-1/2"
						width="404"
						height="404"
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-primary"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
					</svg>
					<h2 className="text-2xl text-center md:text-4xl font-roboto font-bold mb-10 w-full">
						Nuestros <span className="font-roboto font-bold ">Valores</span>
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						<div className="bg-blue-500/10 text-foreground p-6 rounded-3xl">
							<h3 className="text-2xl font-bold mb-2 font-roboto ">Respeto</h3>
							<p className="text-lg text-foreground/70">
								Es de vital importancia fortalecer las relaciones humanas. El trato respetuoso es
								clave para crear un ambiente de motivación y confianza.
							</p>
						</div>
						<div className="bg-green-500/10 text-foreground p-6 rounded-3xl">
							<h3 className="text-2xl font-bold mb-2 font-roboto ">Integridad</h3>
							<p className="text-lg text-foreground/70">
								La honestidad y compromiso siempre deben anteponerse ante el desarrollo de las
								actividades laborales.
							</p>
						</div>
						<div className="bg-red-500/10 text-foreground p-6 rounded-3xl">
							<h3 className="text-2xl font-bold mb-2 font-roboto ">Excelencia</h3>
							<p className="text-lg text-foreground/70">
								Estamos constantemente tras la búsqueda de mejorar nuestros servicios para ofrecer
								una experiencia grata a nuestros usuarios.
							</p>
						</div>
						<div className="bg-yellow-500/10 text-foreground p-6 rounded-3xl">
							<h3 className="text-2xl font-bold mb-2 font-roboto ">Disponibilidad al cambio</h3>
							<p className="text-lg text-foreground/70">
								Sabemos de los constantes cambios a los que estamos expuestos, por esta razón
								estamos abiertos a la innovación y la búsqueda de nuevos proyectos.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default AboutUsPage
