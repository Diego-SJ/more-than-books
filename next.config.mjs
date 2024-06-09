/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/webp'],
		remotePatterns: [
			{
				hostname: 'source.unsplash.com'
			},
			{ hostname: 'api.dicebear.com' }
		]
	}
}

export default nextConfig
