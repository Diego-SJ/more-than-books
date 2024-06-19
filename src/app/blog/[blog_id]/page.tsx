import BlogDetailPage from '@/components/blog-page'
import { getPostBySlug } from '@/lib/posts'
import { markdownToPlainText } from '@/lib/utils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
	params
}: {
	params: { blog_id: string }
}): Promise<Metadata> {
	// read route params
	const id = params.blog_id

	// fetch data
	const product = await getPostBySlug(id)

	return {
		title: product.title,
		openGraph: {
			title: product.title,
			description: markdownToPlainText(product.description || ''),
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

const BlogDetail = ({ params: { blog_id } }: any) => {
	return <BlogDetailPage blog_id={blog_id} />
}

export default BlogDetail
