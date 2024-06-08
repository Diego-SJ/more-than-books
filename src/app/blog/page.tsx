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

const BlogPage = () => {
	return (
		<>
			<Navbar currentPath="blog" />
			<header className="mb-11 sm:mb-10 md:mb-8 container rounded-2xl max-w-[95%] xl:max-w-[1400px] flex justify-center items-center py-8 bg-primary mt-20 overflow-hidden relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					className="absolute z-[0] text-white/10 bounce-3 top-0 w-full"
				>
					<path
						fill="currentColor"
						fillOpacity="1"
						d="M0,256L26.7,240C53.3,224,107,192,160,186.7C213.3,181,267,203,320,224C373.3,245,427,267,480,240C533.3,213,587,139,640,122.7C693.3,107,747,149,800,192C853.3,235,907,277,960,272C1013.3,267,1067,213,1120,165.3C1173.3,117,1227,75,1280,96C1333.3,117,1387,203,1413,245.3L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
					></path>
				</svg>
				<Image
					src="/images/webp/light-bulb.webp"
					alt="bulb"
					width={500}
					height={300}
					className="hidden sm:block w-auto h-auto object-contain drop-shadow-3xl z-[0] bounce-1"
				/>
				<h1 className="text-5xl font-roboto font-bold w-full text-center text-primary-foreground z-[0] min-w-[50%]">
					Blog
				</h1>
				<Image
					src="/images/webp/pencil.webp"
					alt="pencil"
					width={500}
					height={300}
					className="hidden sm:block w-auto h-auto object-contain drop-shadow-3xl z-[0] bounce-2"
				/>
			</header>
			<header className="container  flex flex-col sm:flex-row relative">
				<span className="moving w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary/5 z-0 absolute rounded-full right-[5%] -top-[45%] animate-pulse sm:block"></span>
				<span className="moving-2 w-[200px] sm:w-[200px] h-[200px] sm:h-[200px] bg-primary/5 z-0 absolute rounded-full left-[10%] top-[50%] animate-pulse sm:block"></span>
				<span className="moving w-[100px] sm:w-[100px] h-[100px] sm:h-[100px] bg-primary/5 z-0 absolute rounded-full right-[40%] top-[100%] animate-pulse sm:block"></span>
				<div className="flex flex-col items-start w-full justify-center">
					<h1 className="text-3xl sm:text-5xl sm:text-start font-roboto font-bold mb-4 w-full text-center text-foreground">
						Explora y aprende
					</h1>
					<p className="text-xl md:text-2xl font-roboto font-thin text-center sm:text-start sm:mb-8 sm:max-w-[80%] w-full">
						Descubre artículos, recursos y consejos para mejorar tus habilidades y conocimientos en
						diversas áreas.
					</p>
				</div>
				<div className="flex justify-end w-full">
					<Image
						src="/images/webp/online-education.webp"
						alt="Blog Image"
						width={500}
						height={300}
						className="w-auto h-auto object-contain drop-shadow-3xl"
					/>
				</div>
			</header>
			<main className="container flex flex-col my-10">
				{/* filters */}
				<div className="flex flex-col lg:flex-row sm:justify-between gap-4 sm:items-center mb-10">
					<h5 className="text-xl sm:text-3xl font-roboto font-semibold">Todos los posts</h5>
					<div className="flex flex-col sm:flex-row gap-4">
						<Select>
							<SelectTrigger className="w-full sm:min-w-40">
								<SelectValue placeholder="Cateogía" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Selecciona una categoría</SelectLabel>
									<SelectItem value="todos">Todos</SelectItem>
									<SelectItem value="tecnología">Tecnología</SelectItem>
									<SelectItem value="diseño">Diseño</SelectItem>
									<SelectItem value="marketing">Marketing</SelectItem>
									<SelectItem value="programación">Programación</SelectItem>
									<SelectItem value="negocios">Negocios</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<Input
							placeholder="Buscar posts"
							type="text"
							name="search"
							id="search"
							className="w-full sm:min-w-96"
						/>
					</div>
				</div>

				{/* posts */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
					{Array.from({ length: 7 }).map((_, i) => (
						<BlogCard key={i} href={`blog-${i}`} />
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}

export default BlogPage
