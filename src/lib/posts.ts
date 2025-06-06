import { cache } from 'react'
import { fetchAPI, strapi } from './strapi'
import { BlogPost } from '@/types/post'

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL

export function transformPost(apiResponse: any): BlogPost[] {
	return apiResponse?.data?.data?.map((item: any) => {
		const { id, createdAt, Titulo, slug, Autor, Descripcion, cover, Categoria } = item

		return {
			id: id,
			author: Autor?.Nombre || Autor?.Email || 'More Than Books',
			title: Titulo,
			slug: slug,
			description: Descripcion,
			categories: Categoria?.Nombre || 'Sin categoría',
			created_at: createdAt,
			imageUrl: `${STRAPI_API_URL}${cover?.formats?.small?.url}` || null
		}
	})
}

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost> => {
	try {
		const { data } = await strapi.get(`/api/articles?filters[slug][$eq]=${slug}`, {
			params: {
				fields: ['id', 'Titulo', 'slug', 'Descripcion', 'createdAt', 'Contenido'],
				populate: {
					Autor: {
						fields: ['Nombre', 'Email']
					},
					Categoria: {
						fields: ['Nombre']
					},
					cover: {
						fields: ['formats']
					}
				}
			}
		})

		return data?.data?.map((item: any) => {
			const { id, createdAt, Titulo, slug, Autor, Descripcion, cover, Categoria } = item

			return {
				id: id,
				author: Autor?.Nombre || Autor?.Email || 'More Than Books',
				title: Titulo,
				slug: slug,
				description: Descripcion,
				content: item?.Contenido || '',
				categories: Categoria?.Nombre || 'Sin categoría',
				created_at: createdAt,
				imageUrl: `${STRAPI_API_URL}${cover?.formats?.large?.url}` || null
			} as BlogPost
		})[0]
	} catch (error) {
		return {} as BlogPost
	}
})

export const getPosts = cache(async (): Promise<BlogPost[]> => {
	try {
		const item = await strapi.get(`/api/articles`, {
			params: {
				fields: ['id', 'Titulo', 'slug', 'Descripcion', 'createdAt'],
				populate: {
					Autor: {
						fields: ['Nombre', 'Email']
					},
					Categoria: {
						fields: ['Nombre']
					},
					cover: {
						fields: ['formats']
					}
				}
			}
		})

		return transformPost(item) as BlogPost[]
	} catch (error) {
		return []
	}
})
