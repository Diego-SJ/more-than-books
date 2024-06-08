import type { Metadata } from 'next'
import { Inter, Didact_Gothic, Roboto } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'More than books',
	description:
		'More than books es una librería virtual que ofrece una amplia gama de libros de diferentes géneros.'
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
			<body className={`${roboto.className} scroll-smooth`}>{children}</body>
		</html>
	)
}
