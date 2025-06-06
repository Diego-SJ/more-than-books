import axios from 'axios'

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
const BEARER_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

export const strapi = axios.create({
	baseURL: STRAPI_API_URL,
	headers: {
		Authorization: `Bearer ${BEARER_TOKEN}`,
		'Content-Type': 'application/json'
	}
})

export async function fetchAxios(path: string) {
	try {
		const response = await strapi.get(path)
		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}

export async function fetchAPI(path: string) {
	const requestUrl = `${STRAPI_API_URL}${path}`
	const response = await fetch(requestUrl, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${BEARER_TOKEN}`,
			'Content-Type': 'application/json'
		}
	})

	if (!response.ok) {
		console.error('Error fetching data:', response.statusText)
		return null
	}

	const data = await response.json()
	return data
}

export async function postApi(path: string, data: any) {
	const requestUrl = `${STRAPI_API_URL}${path}`
	const response = await fetch(requestUrl, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${BEARER_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	if (!response.ok) {
		throw new Error('Error fetching data:', response.statusText as any)
	}

	const responseData = await response.json()
	return responseData
}
