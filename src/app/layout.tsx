import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'More than books',
	description:
		'More than books es una librería virtual que ofrece una amplia gama de libros de diferentes géneros.',
	icons: '/images/webp/logo.webp',
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://morethanbooks.vercel.app/',
		title: 'More than books',
		description:
			'More than books es una librería virtual que ofrece una amplia gama de libros de diferentes géneros.',
		images: [
			{
				url: '/images/webp/logo.webp',
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
