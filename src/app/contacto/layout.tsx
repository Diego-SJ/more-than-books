import type { Metadata, Viewport } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Contacto',
	description: '¿Tienes alguna duda o comentario? Contáctanos y te responderemos lo antes posible.',
	icons: '/images/webp/logo.webp'
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
			<Toaster position="top-right" richColors />
		</html>
	)
}
