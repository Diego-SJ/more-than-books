import type { Metadata } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import '@/app/globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const didactGothic = Didact_Gothic({ subsets: ['latin'], weight: '400' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Eventos de More than books',
	description:
		'Eventos de More than books es una sección donde podrás encontrar los eventos más recientes de la librería.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<Head>
				<meta
					name={'viewport'}
					content={'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'}
				/>
			</Head>
			<body className={`${inter.className} ${didactGothic.className} ${roboto.className}`}>
				{children}
			</body>
		</html>
	)
}
