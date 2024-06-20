import type { Metadata, Viewport } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Aviso de privacidad',
	description:
		'Lee nuestro aviso de privacidad para entender cómo protegemos tu información personal.',
	icons: '/images/webp/logo.webp',
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://morethanbooks.vercel.app/',
		title: 'Aviso de privacidad',
		description:
			'Lee nuestro aviso de privacidad para entender cómo protegemos tu información personal.',
		images: [
			{
				url: 'https://gylkgwpiwqqigjxbvehs.supabase.co/storage/v1/object/public/supabase/open-graph/reading-idea.webp',
				width: 1200,
				height: 630,
				alt: 'Aviso de privacidad'
			}
		]
	}
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1.0,
	maximumScale: 1.0,
	userScalable: false,
	viewportFit: 'cover'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${inter.className} ${didactGothic.className} ${roboto.className}`}>
				{children}
			</body>
		</html>
	)
}
