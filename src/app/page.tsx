// pages/index.js

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Navbar theme="dark" />
			<header className="bg-primary w-full relative z-0">
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
						<button className="bg-white font-thin font-roboto text-foreground px-4 py-3 w-48 rounded-xl hover:bg-slate-100 hover:shadow-3xl shadow-black cursor-pointer">
							Nuestras alianzas
						</button>
						<button className="border font-thin font-roboto bg-primary border-white px-4 py-3 w-48 rounded-xl hover:bg-slate-50/10 hover:shadow-3xl shadow-black cursor-pointer">
							Nuestro Blog
						</button>
					</div>
				</div>
			</header>
			<Footer />
		</>
	)
}
