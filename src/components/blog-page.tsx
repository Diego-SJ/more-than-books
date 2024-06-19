'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { getPostBySlug } from '@/lib/posts'
import { BlogPost } from '@/types/post'

import { BookA, Facebook, Link } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { useMDXComponents } from '@/mdx-components'
import { copyToClipboard } from '@/lib/utils'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es')
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Skeleton } from '@/components/ui/skeleton'
import { SkeletonContainer } from '@/components/skeleton-container'

const XIcon = ({ className = '' }) => (
	<svg
		className={`${className} transition-all`}
		viewBox="0 0 48 48"
		width="1.3rem"
		height="1.3rem"
		clipRule="evenodd"
		baseProfile="basic"
	>
		<polygon fill="currentColor" points="41,6 9.929,42 6.215,42 37.287,6" />
		<polygon
			fill="transparent"
			fill-rule="evenodd"
			points="31.143,41 7.82,7 16.777,7 40.1,41"
			clip-rule="evenodd"
		/>
		<path
			fill="currentColor"
			d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
		/>
	</svg>
)

const BlogDetailPage = ({ blog_id }: { blog_id: string }) => {
	const [post, setBlogPost] = useState<BlogPost>({} as BlogPost)
	const [blogContent, setBlogContent] = useState(<div></div>)
	const onMounted = useRef(false)

	const components = useMDXComponents()

	useEffect(() => {
		Aos.init()
	}, [])

	useEffect(() => {
		const getArticles = async () => {
			const data = await getPostBySlug(blog_id)
			if (!data) {
				toast.error('Error al cargar el post')
				return
			}

			const { content } = await compileMDX({
				source: data?.description,
				options: {
					mdxOptions: {
						rehypePlugins: [rehypeHighlight, rehypeSlug],
						remarkPlugins: [remarkGfm]
					},
					parseFrontmatter: true
				},
				components
			})

			setBlogContent(content)

			setBlogPost(data)
		}

		if (!onMounted.current) {
			onMounted.current = true
			getArticles()
		}
	}, [onMounted, blog_id, components])

	const copyUrl = () => {
		copyToClipboard(window.location.href)
		toast.success('Copiado al portapapeles')
	}

	return (
		<>
			<Navbar theme="dark" currentPath="blog" />
			<header className="relative pt-[65px] sm:pt-20 px-0 sm:px-6 min-h-80 z-0 bg-primary">
				<div className="w-full sm:max-w-[900px] flex justify-between mx-auto">
					<div
						data-aos="zoom-out-up"
						data-aos-delay="0"
						data-aos-duration="300"
						className="flex flex-col w-full px-6 sm:px-0 sm:max-w-[60%]"
					>
						{post?.categories ? (
							<p className="text-base sm:text-lg font-roboto font-thin text-white/70 mb-3">
								{post?.categories || 'Sin categoría'}
							</p>
						) : (
							<Skeleton className="h-6 w-36 opacity-30 mb-6" />
						)}
						{post?.title ? (
							<h1 className="text-white text-4xl font-roboto font-semibold ">
								{post?.title || '- - -'}
							</h1>
						) : (
							<div className="flex flex-col gap-4">
								<Skeleton className="h-8 w-60 opacity-30" />
								<Skeleton className="h-8 w-60 opacity-30" />
							</div>
						)}
					</div>

					<div
						data-aos="zoom-out-up"
						data-aos-delay="100"
						data-aos-duration="300"
						className="gap-4 justify-center flex-col hidden sm:flex"
					>
						<div className="flex gap-4 justify-start w-full mb-8">
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
								target="_blank"
								rel="noreferrer noopener"
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:shadow-4xl hover:-translate-y-1 group transition-all"
							>
								<Facebook size={22} strokeWidth={1.5} className="text-primary transition-all" />
							</a>
							<a
								href={`https://twitter.com/share?url=${window.location.href}&text=${
									post?.title || '- - -'
								}`}
								target="_blank"
								rel="noreferrer noopener"
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:shadow-4xl hover:-translate-y-1 group transition-all"
							>
								<XIcon className="text-primary" />
							</a>
							<button
								onClick={copyUrl}
								className="bg-white border border-primary rounded-full w-10 h-10 grid place-content-center hover:shadow-4xl hover:-translate-y-1 group transition-all"
							>
								<Link size={20} className="text-primary transition-all" />
							</button>
						</div>

						<div className="flex gap-4">
							<span className="w-10 h-10 bg-white/30 rounded-full grid place-content-center">
								<BookA size={20} className="text-white/90" />
							</span>
							<div>
								{post?.author || post?.created_at ? (
									<>
										<div className="text-white uppercase text-xs font-bold font-roboto">
											{post?.author || '- - -'}
										</div>
										<div className="text-white/70 text-sm font-roboto font-thin">
											{post?.created_at
												? dayjs(post?.created_at).format('dddd D [de] MMMM [del] YYYY')
												: '- - -'}
										</div>
									</>
								) : (
									<div className="flex flex-col gap-2">
										<Skeleton className="h-4 w-60 opacity-30" />
										<Skeleton className="h-4 w-60 opacity-40" />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</header>
			<div
				data-aos="zoom-out-up"
				data-aos-delay="200"
				data-aos-duration="300"
				className="relative overflow-hidden flex flex-col sm:flex-row bg-white text-secondary-foreground w-full mx-auto max-w-[95%] lg:max-w-[900px] rounded-2xl shadow-2xl -mt-20"
			>
				{post?.imageUrl ? (
					<Image
						src={post?.imageUrl || ''}
						alt="Blog Image"
						layout="responsive"
						width={720}
						height={400}
						priority
						className="h-96"
					/>
				) : (
					<Skeleton className="h-96 w-full" />
				)}
			</div>
			<main className="container relative mt-10 gap-6 sm:mt-20 flex flex-col sm:flex-row max-w-[900px] mb-20">
				{post?.description ? (
					<>
						<div className="gap-4 flex justify-between items-center sm:hidden mt-2">
							<div className="flex gap-4 w-full">
								<span className="w-10 h-10 min-w-10 min-h-10 bg-slate-300/30 rounded-full grid place-content-center">
									<BookA size={20} className="text-slate-500" />
								</span>
								<div>
									<div className="text-foreground uppercase text-xs font-bold font-roboto">
										{post?.author || '- - -'}
									</div>
									<div className="text-foreground/70 text-sm font-roboto font-thin">
										{post?.created_at
											? dayjs(post?.created_at).format('dddd D [de] MMMM [del] YYYY')
											: '- - -'}
									</div>
								</div>
							</div>

							<div className="flex gap-2 items-center justify-end w-1/3">
								<a
									href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
									target="_blank"
									rel="noreferrer noopener"
									className="bg-white border border-foreground/40 rounded-full w-8 h-8 min-w-8 min-h-8 grid place-content-center group transition-all"
								>
									<Facebook
										size={20}
										strokeWidth={1}
										className="text-foreground/60 transition-all"
									/>
								</a>
								<a
									href={`https://twitter.com/share?url=${window.location.href}&text=${
										post?.title || '- - -'
									}`}
									target="_blank"
									rel="noreferrer noopener"
									className="bg-white border border-foreground/40 rounded-full w-8 h-8 min-w-8 min-h-8 grid place-content-center group transition-all"
								>
									<XIcon className="text-foreground/40" />
								</a>
								<button
									onClick={copyUrl}
									className="bg-white border border-foreground/40 rounded-full w-8 h-8 min-w-8 min-h-8 grid place-content-center group transition-all"
								>
									<Link size={15} className="text-foreground/60 transition-all" />
								</button>
							</div>
						</div>

						<div className="w-full">{blogContent}</div>
					</>
				) : (
					<SkeletonContainer />
				)}
			</main>
			{/* <section className="container w-full flex flex-col justify-center max-w-[900px]">
				<h3 className="text-base text-foreground mb-4 font-roboto font-semibold md:text-xl">
					Articulos similares
				</h3>
				<div className=" w-full flex flex-col space-y-4 md:flex-row gap-6 md:items-start md:space-y-0">
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</section> */}
			<Footer />
		</>
	)
}

export default BlogDetailPage
