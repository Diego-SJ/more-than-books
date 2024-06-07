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
			<header className="container  flex flex-col sm:flex-row pt-20 sm:pt-28 relative">
				<span className="moving w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary/5 z-0 absolute rounded-full right-[5%] -top-[25%] animate-pulse sm:block"></span>
				<span className="moving-2 w-[200px] sm:w-[200px] h-[200px] sm:h-[200px] bg-primary/5 z-0 absolute rounded-full left-[10%] top-[50%] animate-pulse sm:block"></span>
				<span className="moving w-[100px] sm:w-[100px] h-[100px] sm:h-[100px] bg-primary/5 z-0 absolute rounded-full right-[40%] top-[100%] animate-pulse sm:block"></span>
				<div className="flex flex-col items-start w-full justify-center">
					<h1 className="text-3xl sm:text-5xl sm:text-start font-roboto font-bold mb-4 w-full text-center text-primary">
						Blog
					</h1>
					<p className="text-xl text-center sm:text-start sm:text-2xl font-didact sm:mb-8 sm:max-w-[80%] w-full">
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
				<div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center mb-10">
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
