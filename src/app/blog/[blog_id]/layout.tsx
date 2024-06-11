import type { Metadata, Viewport } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Eventos de More than books',
	description:
		'Eventos de More than books es una sección donde podrás encontrar los eventos más recientes de la librería.',
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
	params: any
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
