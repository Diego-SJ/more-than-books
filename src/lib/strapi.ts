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
