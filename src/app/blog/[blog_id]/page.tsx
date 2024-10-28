import { getPostBySlug } from '@/lib/posts'
import { markdownToPlainText } from '@/lib/utils'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

export const runtime = 'edge'

export async function generateMetadata({
	params
}: {
	params: { blog_id: string }
}): Promise<Metadata> {
	// read route params
	const id = params.blog_id

	if (!id) {
		return {
			title: 'Evento no encontrado',
			description: 'Evento no encontrado',
			keywords: 'Evento no encontrado',
			openGraph: {
				title: 'Evento no encontrado',
				description: 'Evento no encontrado',
				tags: 'Evento no encontrado'
			}
		}
	}

	// fetch data
	const product = await getPostBySlug(id)

	return {
		title: product.title,
		description: markdownToPlainText(product.description || ''),
		keywords: product.categories,
		openGraph: {
			title: product.title,
			description: markdownToPlainText(product.description || ''),
			url: `https://morethanbooks.mx/blog/${id}`,
			images: [
				{
					url: product.imageUrl as string,
					width: 1200,
					height: 630,
					alt: product.title
				}
			]
		}
	}
}

const Blogpage = dynamic(() => import('../../../components/blog-page'), {
	ssr: false
})

const BlogDetail = ({ params: { blog_id } }: any) => {
	return <Blogpage blog_id={blog_id} />
}

export default BlogDetail
