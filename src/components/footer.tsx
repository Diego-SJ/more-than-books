import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterProps = {
	mt?: number
}

const Footer = ({ mt = 20 }: FooterProps) => {
	return (
		<footer className={`flex flex-col font-didact font-base mt-${mt}`}>
			<div className="flex justify-between border-y border-slate-200 py-4 px-10 flex-col gap-7 sm:flex-row">
				<div className="block font-roboto">
					<Image
						src="/images/webp/logo.webp"
						alt="logo"
						width={100}
						priority
						height={100}
						className={`h-10 `}
					/>
				</div>
				<ul className="flex sm:items-center flex-col list-none gap-4 sm:flex-row">
					<li>
						<Link href="/#alianzas" className="hover:underline">
							Alianzas
						</Link>
					</li>
					<li>
						<Link href="/eventos" className="hover:underline">
							Eventos
						</Link>
					</li>
					<li>
						<Link href="/blog" className="hover:underline">
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
