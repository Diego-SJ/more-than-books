import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'More than books',
	description:
		'More Than Books es una empresa que busca proporcionar ELT de alta calidad libros de texto, recursos didácticos y cursos de desarrollo profesional para la comunidad ELT.',
	icons: '/images/webp/logo.webp',
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://morethanbooks.vercel.app/',
		title: 'More than books',
		description:
			'More Than Books es una empresa que busca proporcionar ELT de alta calidad libros de texto, recursos didácticos y cursos de desarrollo profesional para la comunidad ELT.',
		images: [
			{
				url: 'https://gylkgwpiwqqigjxbvehs.supabase.co/storage/v1/object/public/supabase/open-graph/logo.webp',
				width: 1200,
				height: 630,
				alt: 'More than books'
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
			<body className={`${roboto.className}`}>{children}</body>
			<Toaster position="top-right" richColors />
		</html>
	)
}
