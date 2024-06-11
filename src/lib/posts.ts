import { cache } from 'react'
import { fetchAPI } from './strapi'
import { BlogPost } from '@/types/post'

export function transformPost(apiResponse: any, type?: string): BlogPost[] {
	return apiResponse?.data?.map((item: any) => {
		const { id, attributes } = item
		const { name, content, slug, createdAt, categoria, Autor, image } = attributes

		// Extraer nombres de categorías
		const categories = categoria?.data?.attributes?.Nombre

		// Definir el autor (puedes modificar esto según los datos reales del autor)
		const author = Autor?.data?.[0]?.attributes?.Nombre || 'More Than Books'

		// Devolver los datos transformados
		const imageUrl = image?.data?.attributes?.url

		return {
			id: id,
			title: name,
			description: type === 'unique' ? content : content?.substring(0, 160) + '...',
			categories: categories || 'Sin categoría',
			slug: slug,
			created_at: createdAt,
			author: author,
			imageUrl: imageUrl
		}
	})
}

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost> => {
	try {
		const item = await fetchAPI(`/api/blogs?filters[slug][$eq]=${slug}&populate=*`)

		return transformPost(item, 'unique')[0]
	} catch (error) {
		return {} as BlogPost
	}
})

export const getPosts = cache(async (): Promise<BlogPost[]> => {
	try {
		const item = await fetchAPI(`/api/blogs?&populate=*`)

		return transformPost(item)
	} catch (error) {
		return []
	}
})
