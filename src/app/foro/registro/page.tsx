'use client'

import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SignupForm from '@/components/forum/signup-form'
import { ArrowLeft } from 'lucide-react'

export default function RegistroPage() {
	return (
		<>
			<Navbar currentPath="forum" />
			<main className="container flex flex-col pt-24 pb-10 max-w-lg mx-auto">
				<Link
					href="/foro"
					className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
				>
					<ArrowLeft size={16} />
					Volver al foro
				</Link>
				<h1 className="text-2xl font-roboto font-bold text-foreground mb-4">Crear cuenta</h1>
				<p className="text-slate-500 font-roboto mb-8">
					Completa los siguientes datos para registrarte en el foro.
				</p>
				<SignupForm />
			</main>
			<Footer mt={20} />
		</>
	)
}
