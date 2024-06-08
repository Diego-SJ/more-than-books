/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'source.unsplash.com'
			},
			{ hostname: 'api.dicebear.com' }
		]
	}
}

export default nextConfig
