'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import NewsLatter from '@/components/newlatter'
import { Bird, HeartHandshake, ReplaceAll, Trophy } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutUsPage = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			<Navbar currentPath="about" />
			<header className="container  flex flex-col md:flex-row pt-20 md:pt-40 relative">
				<span className="moving w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 z-0 absolute rounded-full right-[5%] -top-[25%] animate-pulse md:block"></span>
				<span className="moving-2 w-[200px] md:w-[200px] h-[200px] md:h-[200px] bg-primary/5 z-0 absolute rounded-full left-[10%] top-[50%] animate-pulse md:block"></span>
				<span className="moving w-[100px] md:w-[100px] h-[100px] md:h-[100px] bg-primary/5 z-0 absolute rounded-full right-[40%] top-[120%] animate-pulse md:block"></span>
				<div className="flex flex-col items-start w-full justify-center py-10 md:py-0">
					<p
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="300"
						className="w-fit self-center md:self-start px-6 py-1 bg-primary/10 text-primary rounded-full mb-2 text-sm font-roboto font-thin"
					>
						Nosotros
					</p>
					<h1
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="300"
						className="text-5xl md:text-start font-roboto font-bold mb-8 md:mb-4 w-full text-center text-foreground"
					>
						Conoce <span className="font-roboto font-bold text-primary">nuestro</span> viaje
					</h1>
					<p
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="300"
						className="text-xl text-center md:text-start md:text-2xl font-roboto font-thin md:mb-8 md:max-w-[80%] w-full text-foreground/60"
					>
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
						data-aos="zoom-out-up"
						data-aos-delay="0"
						data-aos-duration="300"
					/>
				</div>
			</header>
			<main className="container flex flex-col mt-0 mb-20 md:mt-20 md:mb-20 max-w-[1200px] mx-auto ">
				<section className="container px-0 sm:mx-auto py-20 relative ">
					<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
						<div className="bg-pink-200/50 rounded-full w-2/4 h-64 blur-3xl opacity-30"></div>
					</div>
					<p
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-duration="500"
						data-aos-offset="200"
						className="w-fit mx-auto px-6 py-1 bg-pink-500/10 text-pink-500 rounded-full mb-2 text-sm font-roboto font-thin"
					>
						Fundadores
					</p>
					<h2
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="500"
						data-aos-offset="200"
						className="text-2xl text-center md:text-4xl font-roboto font-bold mb-10 w-full"
					>
						Conoce a los <span className="font-roboto font-bold ">fundadores</span>
					</h2>
					<div
						data-aos="fade-up-left"
						data-aos-delay="200"
						data-aos-offset="200"
						data-aos-duration="800"
						className="flex gap-10 sm:gap-20 justify-center flex-col sm:flex-row"
					>
						<div className="flex flex-col items-center">
							<div className="rounded-full relative bg-slate-300">
								<Image
									src="/images/avatars/founder-1.webp"
									alt="founder-1"
									width={500}
									height={300}
									className="w-52 h-52 md:w-72 md:h-72 object-cover drop-shadow-sm z-[0] bounce-1 rounded-full grayscale"
								/>
							</div>
							<h3 className="text-xl font-semibold font-roboto mt-4">Gabino Bandala</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">CEO</p>
						</div>
						<div
							data-aos="fade-up-right"
							data-aos-delay="200"
							data-aos-offset="200"
							data-aos-duration="800"
							className="flex flex-col items-center"
						>
							<div className="rounded-full relative bg-slate-300">
								<Image
									src="/images/avatars/founder-2.webp"
									alt="founder-1"
									width={500}
									height={300}
									className="w-52 h-52 md:w-72 md:h-72 object-cover drop-shadow-sm z-[0] bounce-1 rounded-full grayscale"
								/>
							</div>
							<h3 className="text-xl font-semibold font-roboto mt-4">Cynthia García</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">Project Manager</p>
						</div>
					</div>
				</section>

				<section className="my-20 md:my-10 flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-10 md:min-h-[70vh]">
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<span className="moving w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/10 z-0 absolute rounded-full right-[5%] -top-[25%] animate-pulse md:block"></span>
							<Image
								src="/images/webp/mtb.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-52 h-52 md:w-96 md:h-96 object-cover drop-shadow-sm z-[0] bounce-1 rounded-full"
								data-aos="zoom-out-up"
								data-aos-delay="0"
								data-aos-offset="150"
								data-aos-duration="800"
							/>
						</div>
					</div>
					<div className="flex flex-col md:max-w-xl w-full relative">
						<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
							<div className="bg-blue-200/90 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
						</div>
						<p
							data-aos="fade-up-right"
							data-aos-delay="100"
							data-aos-offset="150"
							data-aos-duration="800"
							className="w-fit self-center md:self-start px-6 py-1 bg-blue-500/10 text-blue-500 rounded-full mb-2 text-sm font-roboto font-thin"
						>
							Historia
						</p>
						<h2
							data-aos="fade-up-right"
							data-aos-delay="200"
							data-aos-offset="150"
							data-aos-duration="800"
							className="text-3xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full"
						>
							Un paso al <span className="font-roboto font-bold text-blue-500">pasado</span>
						</h2>
						<p
							data-aos="fade-up-right"
							data-aos-delay="300"
							data-aos-offset="150"
							data-aos-duration="800"
							className="text-base md:text-lg text-justify md:text-start md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2"
						>
							More than Books se estableció en 2014 con la visión de revolucionar la forma en que
							las personas acceden e interactúan con los recursos educativos en ELT.
						</p>
						<p
							data-aos="fade-up-right"
							data-aos-delay="400"
							data-aos-offset="150"
							data-aos-duration="800"
							className="text-base md:text-lg text-justify md:text-start md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2"
						>
							Desde sus inicios, More than Books se ha comprometido a brindar soluciones innovadoras
							en el campo y la educación de ELT.
						</p>
					</div>
				</section>

				<section className="my-20 md:my-10 flex flex-col-reverse md:flex-row md:justify-center md:items-center gap-4 md:gap-10 md:min-h-[70vh]">
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<Image
								src="/images/webp/team-solving-problem.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-full h-full lg:w-[30rem] lg:h-[30rem] object-cover drop-shadow-sm z-[0] bounce-1 rounded-full"
								data-aos="fade-up-right"
								data-aos-delay="0"
								data-aos-offset="150"
								data-aos-duration="500"
							/>
						</div>
					</div>
					<div className="flex flex-col md:max-w-xl w-full relative">
						<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
							<div className="bg-green-200/90 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
						</div>
						<p
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-offset="150"
							data-aos-duration="500"
							className="w-fit self-center md:self-start px-6 py-1 bg-green-500/10 text-green-500 rounded-full mb-2 text-sm font-roboto font-thin"
						>
							Compañía
						</p>
						<h2
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-3xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full"
						>
							Sobre la <span className="font-roboto font-bold text-green-500">compañía</span>
						</h2>
						<p
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-base md:text-lg text-justify md:text-start md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2"
						>
							More Than Books es una empresa que busca proporcionar ELT de alta calidad libros de
							texto, recursos didácticos y cursos de desarrollo profesional para la comunidad ELT.
							Por lo tanto, nuestro empresa cuenta con la distribución de Express Editorial en
							México.
						</p>
					</div>
				</section>

				<section className="mb-16 flex flex-col md:flex-row md:justify-center md:items-center sm:gap-10 pt-12 pb-6 sm:py-10 rounded-3xl px-6">
					<div className="flex flex-col md:max-w-[50%] lg:max-w-xl w-full items-center relative">
						<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
							<div className="bg-amber-200/70 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
						</div>
						<p
							data-aos="fade-up-right"
							data-aos-delay="0"
							data-aos-offset="150"
							data-aos-duration="500"
							className="w-fit self-center md:self-start px-6 py-1 bg-amber-500/10 text-amber-500 rounded-full mb-2 text-sm font-roboto font-thin"
						>
							FQA
						</p>
						<h2
							data-aos="fade-up-right"
							data-aos-delay="100"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-3xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full"
						>
							Nuestra <span className="font-roboto font-bold text-amber-500">Misión</span>
						</h2>
						<p
							data-aos="fade-up-right"
							data-aos-delay="200"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2"
						>
							Nuestra misión es brindar a los maestros oportunidades excepcionales de desarrollo
							profesional a través de capacitaciones académicas y certificaciones internacionales,
							asegurando que puedan educar a nuevas generaciones de niños y profesionales capaces de
							comunicar sus ideas al mundo a través de nuestros libros en inglés de calidad.
						</p>
					</div>
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<Image
								src="/images/webp/target.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover drop-shadow-xl z-[0] bounce-1 rounded-full"
								data-aos="fade-up-right"
								data-aos-delay="400"
								data-aos-offset="150"
								data-aos-duration="500"
							/>
						</div>
					</div>
				</section>

				<section className="mb-16 flex flex-col md:flex-row md:justify-center md:items-center sm:gap-10 pt-12 pb-6 sm:py-10 rounded-3xl  px-6">
					<div className="flex flex-col md:max-w-[50%] lg:max-w-xl w-full items-center relative">
						<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
							<div className="bg-sky-200/90 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
						</div>
						<p
							data-aos="fade-up-right"
							data-aos-delay="0"
							data-aos-offset="150"
							data-aos-duration="500"
							className="w-fit self-center md:self-start px-6 py-1 bg-sky-500/10 text-sky-500 rounded-full mb-2 text-sm font-roboto font-thin"
						>
							Visión
						</p>
						<h2
							data-aos="fade-up-right"
							data-aos-delay="100"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-4xl text-center md:text-start md:text-4xl font-roboto font-bold mb-4 w-full"
						>
							Nuestra <span className="font-roboto font-bold text-sky-500">Visión</span>
						</h2>
						<p
							data-aos="fade-up-right"
							data-aos-delay="200"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2"
						>
							Nuestra visión es convertirnos en una presencia líder en México, Centro y Sudamérica.
							Nuestro objetivo es ir más allá de las fronteras para llegar a todos los lugares donde
							la enseñanza del inglés es crucial.
						</p>
						<p
							data-aos="fade-up-right"
							data-aos-delay="300"
							data-aos-offset="150"
							data-aos-duration="500"
							className="text-base sm:text-lg text-justify md:text-start md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full"
						>
							A medida que nos expandimos y crecemos, nos comprometemos a mantener y fortalecer
							nuestros valores fundamentales. Visualizamos un futuro en el que los estudiantes
							tengan acceso a una educación de calidad, los maestros tengan acceso a metodologías
							actualizadas en ELT y todas las escuelas se beneficien de nuestro plan de
							reforestación.
						</p>
					</div>
					<div className="flex justify-center">
						<div className="rounded-full relative">
							<Image
								src="/images/webp/goal.webp"
								alt="mission"
								width={500}
								height={300}
								className="w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover drop-shadow-xl z-[0] bounce-1 rounded-full"
								data-aos="fade-up-right"
								data-aos-delay="400"
								data-aos-offset="150"
								data-aos-duration="500"
							/>
						</div>
					</div>
				</section>

				<section className="container px-0 sm:mx-auto py-20 relative ">
					<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-20">
						<div className="bg-pink-200/50 rounded-full w-2/4 h-64 blur-3xl opacity-30"></div>
					</div>
					<p
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-offset="150"
						data-aos-duration="500"
						className="w-fit mx-auto px-6 py-1 bg-pink-500/10 text-pink-500 rounded-full mb-2 text-sm font-roboto font-thin"
					>
						Responsabilidad
					</p>
					<h2
						data-aos="fade-up-right"
						data-aos-delay="100"
						data-aos-offset="150"
						data-aos-duration="500"
						className="text-2xl text-center md:text-4xl font-roboto font-bold mb-8 w-full"
					>
						Responsabilidad <span className="font-roboto font-bold ">Social</span>
					</h2>
					<p
						data-aos="fade-up-right"
						data-aos-delay="200"
						data-aos-offset="150"
						data-aos-duration="500"
						className="text-base sm:text-lg text-center mx-auto md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full"
					>
						Promovemos activamente la conciencia social y la sostenibilidad ambiental, contribuyendo
						al desarrollo ecológico a través de programas de reforestación y generando conciencia
						sobre la importancia del cuidado de nuestro medio ambiente.
					</p>
				</section>

				<section className="container px-0 sm:mx-auto py-20 relative ">
					<p
						data-aos="fade-up"
						data-aos-delay="0"
						data-aos-offset="150"
						data-aos-duration="500"
						className="w-fit mx-auto px-6 py-1 bg-sky-500/10 text-sky-500 rounded-full mb-2 text-sm font-roboto font-thin"
					>
						Valores
					</p>
					<h2
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-offset="150"
						data-aos-duration="500"
						className="text-2xl text-center md:text-4xl font-roboto font-bold mb-10 w-full"
					>
						Nuestros <span className="font-roboto font-bold ">Valores</span>
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div
							data-aos="fade-up-right"
							data-aos-delay="200"
							data-aos-offset="150"
							data-aos-duration="500"
							className="bg-white p-6 rounded-3xl shadow-xl text-center"
						>
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 shadow-lg shadow-green-500/50 mx-auto mb-4">
								<HeartHandshake size={40} strokeWidth={1} className="text-green-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Respeto</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Es de vital importancia fortalecer las relaciones humanas. El trato respetuoso es
								clave para crear un ambiente de motivación y confianza.
							</p>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-offset="150"
							data-aos-duration="500"
							className="bg-white p-6 rounded-3xl shadow-xl text-center"
						>
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 shadow-lg shadow-blue-500/50 mx-auto mb-4">
								<Bird size={40} strokeWidth={1} className="text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Integridad</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								La honestidad y compromiso siempre deben anteponerse ante el desarrollo de las
								actividades laborales.
							</p>
						</div>

						<div
							data-aos="fade-down"
							data-aos-delay="500"
							data-aos-offset="150"
							data-aos-duration="500"
							className="bg-white p-6 rounded-3xl shadow-xl text-center"
						>
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-violet-100 shadow-lg shadow-violet-500/50 mx-auto mb-4">
								<Trophy size={40} strokeWidth={1} className="text-violet-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Excelencia</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Estamos constantemente tras la búsqueda de mejorar nuestros servicios para ofrecer
								una experiencia grata a nuestros usuarios.
							</p>
						</div>
						<div
							data-aos="fade-up-left"
							data-aos-delay="300"
							data-aos-offset="150"
							data-aos-duration="500"
							className="bg-white p-6 rounded-3xl shadow-xl text-center"
						>
							<div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 shadow-lg shadow-red-500/50 mx-auto mb-4">
								<ReplaceAll size={40} strokeWidth={1} className="text-red-600" />
							</div>
							<h3 className="text-xl font-semibold font-roboto">Resiliencia</h3>
							<p className="text-foreground/60 mt-2 font-roboto font-thin">
								Cultivamos la resiliencia, manteniéndonos abiertos a la innovación y siempre en
								busca de nuevos proyectos.
							</p>
						</div>
					</div>
				</section>
			</main>
			<NewsLatter />
			<Footer mt={20} />
		</>
	)
}

export default AboutUsPage
