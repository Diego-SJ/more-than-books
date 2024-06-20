import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from 'sonner'
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Acerca de More than books',
	description:
		'Acerca de More than books es una sección donde podrás encontrar información sobre la librería.',
	icons: '/images/webp/logo.webp',
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://morethanbooks.vercel.app/',
		title: 'Acerca de More than books',
		description:
			'Conoce la historia, los founders, nuestra misión y visión y mucho más acerca de More than Books.',
		images: [
			{
				url: 'https://gylkgwpiwqqigjxbvehs.supabase.co/storage/v1/object/public/supabase/open-graph/logo.webp',
				width: 1200,
				height: 630,
				alt: 'Acerca de More than books'
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
			<body className={` ${roboto.className}`}>
				{children}
				<Toaster position="top-right" richColors />
			</body>
		</html>
	)
}
