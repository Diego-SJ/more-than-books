import type { Metadata, Viewport } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Blog de More than books',
	description:
		'Blog de More than books es una sección donde podrás encontrar noticias y artículos interesantes.',
	icons: '/images/webp/logo.webp',
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: 'https://morethanbooks.vercel.app/',
		title: 'Blog',
		description:
			'Descubre artículos interesantes y estrategias de aprendizaje. Encuentra tutoriales prácticos y análisis detallados en el blog de More than Books.',
		images: [
			{
				url: 'https://gylkgwpiwqqigjxbvehs.supabase.co/storage/v1/object/public/supabase/open-graph/online-education.webp',
				width: 1200,
				height: 630,
				alt: 'Blog de More than books'
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
				<Toaster position="top-right" richColors />
			</body>
		</html>
	)
}
