import axios from 'axios'

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
const BEARER_TOKEN =
	process.env.NEXT_PUBLIC_STRAPI_BEARER_TOKEN ||
	'00663f3e826d5e6063b69d4fa211b4bc9a7a5b03529a4d2ba4011eca71e670bec9a66c72a71ba187d9aa00582f322bd431ad04ee768bf36296b925b9ffc61e56fbb196c15f2d04750abff791f0be1e4daf34167202a4263776aaa3f0fd8c4ce44f81bfc4c5747ed84e47468f2b341b5e8a057ef381c6f9aa11ce53506d3fd79c'

export const strapi = axios.create({
	baseURL: 'http://localhost:1337' || STRAPI_API_URL,
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
