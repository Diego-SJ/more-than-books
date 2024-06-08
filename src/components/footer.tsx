import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className="flex flex-col font-didact font-base mt-20">
			<div className="flex justify-between border-y border-slate-200 py-10 px-10 flex-col gap-7 sm:flex-row">
				<div className="block font-roboto">
					MORE<strong>THAN</strong>BOOKS
				</div>
				<div className="block">
					<ul className="flex flex-col list-none gap-4 sm:flex-row">
						<li>
							<Link href="/alianzas" className="hover:underline">
								Alianzas
							</Link>
						</li>
						<li>
							<Link href="/blog" className="hover:underline">
								Eventos
							</Link>
						</li>
						<li>
							<Link href="/contacto" className="hover:underline">
								Blog
							</Link>
						</li>
						<li>
							<Link href="/nosotros" className="hover:underline">
								Nosotros
							</Link>
						</li>

						<li>
							<Link href="/aviso-de-privacidad" className="hover:underline">
								Aviso de privacidad
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex justify-center py-6 px-6 items-center">
				<p className="text-center">
					© 2021 More Than Books.{' '}
					<span className="inline-flex">Todos los derechos reservados.</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
