import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

// components/ContactForm.js
export default function ContactFormPage() {
	return (
		<>
			<Navbar theme="light" currentPath="contact" />
			<div className="mt-10 sm:mt-0 py-16 px-0 overflow-hidden sm:px-2 lg:px-8 lg:py-24">
				<div className="relative max-w-xl mx-auto">
					<svg
						className="absolute left-full transform translate-x-1/2"
						width="404"
						height="404"
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-primary"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
					</svg>
					<svg
						className="absolute right-full bottom-0 transform -translate-x-1/2"
						width="404"
						height="404"
						fill="none"
						viewBox="0 0 404 404"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="85737c0e-0916-41d7-917f-596dc7edfa27"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
					</svg>
					<div className="flex flex-col mt-4 container text-center">
						<h1 className="text-5xl font-bold text-foreground font-roboto mb-4">Contacto</h1>
						<div className="w-full">
							<p className="mt-4 text-lg leading-7 text-foreground/70 font-thin font-roboto mb-10">
								Nos encantaría saber de ti. Llena el formulario y te responderemos lo antes posible.
							</p>
							<ContactForm />
						</div>

						<div className="mb-0 mt-20 w-full">
							<h2 className="text-xl sm:text-2xl font-semibold text-foreground font-roboto mb-2 ">
								Visita nuestra tienda física
							</h2>
							<p className="mt-4 text-lg leading-7 text-foreground/70 font-thin font-roboto mb-8">
								Blvrd Ramón G. Bonfil 1107, San Cayetano el Bordo, 42084 Pachuca de Soto, Hgo.
							</p>
							<a
								href="https://www.google.com/maps/dir/?api=1&destination=Blvrd%20Ram%C3%B3n%20G.%20Bonfil%201107,%20San%20Cayetano%20el%20Bordo,%2042084%20Pachuca%20de%20Soto,%20Hgo.,%20M%C3%A9xico"
								target="_blank"
								className="border font-thin min-w-max font-roboto bg-primary text-secondary border-primary px-4 py-3 w-48 rounded-xl hover:bg-primary/90 hover:shadow-sm hover:shadow-black transition-all"
							>
								Ver en Google Maps
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
