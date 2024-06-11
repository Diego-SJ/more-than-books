import type { Metadata } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Eventos de More than books',
	description:
		'Eventos de More than books es una sección donde podrás encontrar los eventos más recientes de la librería.',
	viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
	icons: '/images/webp/logo.webp'
}

export default function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode
	params: any
}>) {
	return (
		<html lang="es">
			<body className={`${inter.className} ${didactGothic.className} ${roboto.className}`}>
				{children}
			</body>
		</html>
	)
}
