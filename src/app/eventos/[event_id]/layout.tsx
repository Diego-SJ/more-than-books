import type { Viewport } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from 'sonner'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

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
			<body className={`${roboto.className} relative`}>
				{children}
				<Toaster position="top-right" richColors />
			</body>
		</html>
	)
}
