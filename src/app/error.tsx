'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

type ErrorProps = {
	error: Error & { digest?: string }
	reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<>
			<Navbar />
			<main className="container mx-auto pt-24 pb-10 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
				<p className="text-8xl font-roboto font-bold text-primary mb-4">500</p>
				<h1 className="text-2xl font-roboto font-bold text-foreground mb-3">
					Algo salió mal
				</h1>
				<p className="text-muted-foreground font-roboto mb-8 max-w-sm">
					Ocurrió un error inesperado. Puedes intentar de nuevo o volver al inicio.
				</p>
				<div className="flex items-center gap-3">
					<button
						onClick={reset}
						className="inline-flex items-center bg-primary text-primary-foreground font-roboto font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
					>
						Intentar de nuevo
					</button>
					<Link
						href="/"
						className="inline-flex items-center font-roboto font-semibold px-5 py-2.5 rounded-lg border border-border hover:bg-slate-50 transition-colors"
					>
						Volver al inicio
					</Link>
				</div>
			</main>
			<Footer />
		</>
	)
}
