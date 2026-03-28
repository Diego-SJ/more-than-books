import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function NotFound() {
	return (
		<>
			<Navbar />
			<main className="container mx-auto pt-24 pb-10 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
				<p className="text-8xl font-roboto font-bold text-primary mb-4">404</p>
				<h1 className="text-2xl font-roboto font-bold text-foreground mb-3">
					Página no encontrada
				</h1>
				<p className="text-muted-foreground font-roboto mb-8 max-w-sm">
					Lo sentimos, la página que buscas no existe o fue movida.
				</p>
				<Link
					href="/"
					className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-roboto font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
				>
					Volver al inicio
				</Link>
			</main>
			<Footer />
		</>
	)
}
