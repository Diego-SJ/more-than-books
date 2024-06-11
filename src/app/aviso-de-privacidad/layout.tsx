import type { Metadata } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Aviso de privacidad',
	description:
		'En esta sección podrás encontrar información sobre el aviso de privacidad de More than books.',
	viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
	icons: '/images/webp/logo.webp'
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
