import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import NewsLatter from '@/components/newlatter'

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
						<div className="w-full relative">
							<div className="absolute inset-0 bounce-1 flex items-center justify-center -top-0">
								<div className="bg-pink-200/50 rounded-full w-2/4 h-64 blur-3xl opacity-30"></div>
							</div>
							<p className="mt-4 text-lg leading-7 text-foreground/70 font-thin font-roboto mb-10">
								Nos encantaría saber de ti. Llena el formulario y te responderemos lo antes posible.
							</p>
							<ContactForm />
						</div>

						<div className="mb-0 mt-20 w-full">
							<h2 className="text-xl sm:text-2xl font-semibold text-foreground font-roboto mb-2 ">
								Teléfonos
							</h2>
							<p className="mt-4 text-base sm:text-lg leading-7 text-foreground/70 font-thin font-roboto mb-2">
								Si lo prefieres puedes llamarnos a los siguientes números:
							</p>
							<div className="flex flex-row gap-4 justify-center">
								<a
									href="tel:771-387-87-40"
									target="_blank"
									referrerPolicy="no-referrer"
									className="text-lg sm:text-xl font-semibold text-primary font-roboto mb-2"
								>
									771-387-87-40
								</a>
								{' | '}
								<a
									href="tel:554-173-96-34"
									target="_blank"
									referrerPolicy="no-referrer"
									className="text-lg sm:text-xl font-semibold text-primary font-roboto mb-4"
								>
									554-173-96-34
								</a>
							</div>
						</div>

						<div className="mb-0 mt-20 w-full">
							<h2 className="text-xl sm:text-2xl font-semibold text-foreground font-roboto mb-2 ">
								Correos
							</h2>
							<p className="mt-4 text-base sm:text-lg leading-7 text-foreground/70 font-thin font-roboto mb-2">
								También puedes escribirnos a los siguientes correos:
							</p>
							<div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-center">
								<a
									href="mailto:ventas@mtbooks.com.mx"
									target="_blank"
									referrerPolicy="no-referrer"
									className="text-lg sm:text-xl font-semibold text-primary font-roboto mb-2"
								>
									ventas@mtbooks.com.mx
								</a>
								<span className="hidden sm:static">{' | '}</span>
								<a
									href="mailto:contacto@mtbooks.com.mx"
									target="_blank"
									referrerPolicy="no-referrer"
									className="text-lg sm:text-xl font-semibold text-primary font-roboto mb-4"
								>
									contacto@mtbooks.com.mx
								</a>
							</div>
						</div>

						<div className="mb-0 mt-20 w-full">
							<h2 className="text-xl sm:text-2xl font-semibold text-foreground font-roboto mb-2 ">
								O visitanos en alguna de nuestras sucursales
							</h2>
							<div className="mb-10">
								<p className="mt-4 text-sm sm:text-lg leading-7 text-foreground/70 font-thin font-roboto mb-8">
									Cto. Plan de San Luis No. 275 Fracc. Constitución C.P. 42080 Pachuca de Soto,
									Hidalgo
								</p>
								<a
									href="https://maps.app.goo.gl/fcHNwP8DfZf6Li4q7"
									target="_blank"
									className="border font-thin min-w-max mb-10 font-roboto bg-primary text-secondary border-primary px-4 py-3 w-48 rounded-xl hover:bg-primary/90 hover:shadow-sm hover:shadow-black transition-all"
								>
									Ver en Google Maps
								</a>
							</div>

							<div>
								<p className="mt-4 text-sm sm:text-lg leading-7 text-foreground/70 font-thin font-roboto mb-8">
									Ignacio Manuel Altamirano No. 10 Alcaldía Cuauhtémoc Col. San Rafael C.P. 06470
									Ciudad de México
								</p>
								<a
									href="https://maps.app.goo.gl/9JyAZFLb7YoDASkq6"
									target="_blank"
									className="border font-thin min-w-max font-roboto bg-primary text-secondary border-primary px-4 py-3 w-48 rounded-xl hover:bg-primary/90 hover:shadow-sm hover:shadow-black transition-all"
								>
									Ver en Google Maps
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NewsLatter />
			<Footer mt={20} />
		</>
	)
}
