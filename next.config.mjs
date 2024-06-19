/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		formats: ['image/webp', 'image/avif'],
		remotePatterns: [
			{
				protocol: 'https',
				port: '',
				pathname: '/random/**',
				hostname: 'source.unsplash.com'
			},
			{
				protocol: 'https',
				port: '',
				pathname: '/**',
				hostname: 'gylkgwpiwqqigjxbvehs.supabase.co'
			},
			{ protocol: 'https', port: '', pathname: '/**', hostname: 'api.dicebear.com' },
			{
				protocol: 'https',
				port: '',
				pathname: '/**',
				hostname: 'morethanbooks-cms-strapi.onrender.com'
			}
			//https://gylkgwpiwqqigjxbvehs.supabase.co/storage/v1/object/public/supabase/files/bioluminiscencia.jpg_554688468.webp-14baaca6203c67acf872ff323fb02641.webp
		]
	}
}

export default nextConfig
