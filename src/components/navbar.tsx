// components/Navbar.js
'use client'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

type NavbarProps = {
	theme?: 'light' | 'dark'
	currentPath?: 'home' | 'events' | 'blog' | 'about' | 'contact' | 'alliances'
}

const isActive = (currentPath: string, path: string) => {
	let styles = `before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-primary before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-1`

	return currentPath === path ? `${styles}` : ``
}

export default function Navbar({ theme = 'light', currentPath = 'home' }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<nav
			className={`p-4 fixed top-0 w-full z-[2] ${
				theme === 'light' ? `text-foreground` : scrolled ? 'text-foreground' : 'text-white'
			}  ${scrolled ? 'bg-white border-b border-slate-300' : 'transparent'} transition-all`}
		>
			<div className="container mx-auto flex justify-between items-center">
				<div className=" text-2xl font-bold text-inherit">MORETHANTBOOKS</div>
				<div className="hidden md:flex gap-5">
					<Link href={'/'} className={`hover:underline relative ${isActive(currentPath, 'home')}`}>
						Inicio
					</Link>
					<Link
						href={'/alianzas'}
						className={`hover:underline relative ${isActive(currentPath, 'alianzas')}`}
					>
						Alianzas
					</Link>
					<Link
						href={'/eventos'}
						className={`hover:underline relative ${isActive(currentPath, 'events')}`}
					>
						Eventos
					</Link>
					<Link
						href={'/blog'}
						className={`hover:underline relative ${isActive(currentPath, 'blog')}`}
					>
						Blog
					</Link>
					<Link
						href={'/nosotros'}
						className={`hover:underline relative ${isActive(currentPath, 'about')}`}
					>
						Nosotros
					</Link>
				</div>
				<div className="hidden md:block">
					<Link href={'/contacto'}>
						<button
							className={`${
								theme === 'light'
									? 'bg-primary hover:bg-primary-100 text-white'
									: scrolled
									? 'bg-primary hover:bg-primary-100 text-white'
									: 'bg-white hover:bg-slate-100 text-primary'
							} font-base font-roboto text-primary px-4 py-2 w-min rounded-xl hover:shadow-3xl hover:shadow-black  text-sm transition-all`}
						>
							Contactanos
						</button>
					</Link>
				</div>
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(true)}
						className={`${theme === 'light' ? 'text-foreground' : 'text-white'}`}
					>
						<Menu />
					</button>
				</div>
			</div>
			<Transition
				show={isOpen}
				enter="transition transform duration-400"
				enterFrom="translate-x-full"
				enterTo="translate-x-0"
				leave="transition transform duration-400"
				leaveFrom="translate-x-0"
				leaveTo="translate-x-full"
			>
				<div className="flex flex-col items-center justify-center min-h-screen space-y-6 fixed inset-0 bg-white z-[100]">
					<button
						onClick={() => setIsOpen(false)}
						className="text-primary-txt text-2xl self-end mr-6 absolute top-6 right-2"
					>
						<X className="text-foreground" />
					</button>
					<Link href={'/'} className="text-foreground text-2xl" onClick={() => setIsOpen(false)}>
						Inicio
					</Link>
					<Link
						href={'/eventos'}
						className="text-foreground text-2xl"
						onClick={() => setIsOpen(false)}
					>
						Eventos
					</Link>
					<Link
						href={'/alianzas'}
						className="text-foreground text-2xl"
						onClick={() => setIsOpen(false)}
					>
						Alianzas
					</Link>
					<Link
						href={'/blog'}
						className="text-foreground text-2xl"
						onClick={() => setIsOpen(false)}
					>
						Blog
					</Link>
					<Link
						href={'/nosotros'}
						className="text-foreground text-2xl"
						onClick={() => setIsOpen(false)}
					>
						Nosotros
					</Link>
					<Link
						href={'/contacto'}
						className="text-foreground text-2xl"
						onClick={() => setIsOpen(false)}
					>
						Contactanos
					</Link>
				</div>
			</Transition>
		</nav>
	)
}
