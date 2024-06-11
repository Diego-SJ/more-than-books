'use client'
import Image from 'next/image'

// components/MinimalistTestimonialsSection.js
const testimonials = [
	{
		name: 'Juan Pérez',
		role: 'Director de Escuela',
		message:
			'More than Books ha transformado nuestra forma de enseñar. Los libros y recursos digitales son de excelente calidad y han mejorado significativamente el aprendizaje de nuestros estudiantes.',
		image: 'https://api.dicebear.com/8.x/lorelei/jpg?seed' // Reemplaza con la ruta a la imagen del testimonio
	},
	{
		name: 'María García',
		role: 'Profesora de Inglés',
		message:
			'Los eventos organizados por More than Books son siempre inspiradores y educativos. Me han ayudado a mejorar mis habilidades y a conocer nuevas metodologías de enseñanza.',
		image: 'https://api.dicebear.com/8.x/lorelei/jpg?seed=Maria' // Reemplaza con la ruta a la imagen del testimonio
	},
	{
		name: 'Carlos López',
		role: 'Coordinador Académico',
		message:
			'El soporte que recibimos de More than Books es excepcional. Siempre están dispuestos a ayudarnos y a proporcionar soluciones rápidas a nuestras necesidades.',
		image: 'https://api.dicebear.com/8.x/lorelei/jpg?seed=Carlos' // Reemplaza con la ruta a la imagen del testimonio
	}
]

export default function MinimalistTestimonialsSection() {
	return (
		<div className="pt-0 pb-20 z-0">
			<div className="container mx-auto px-4 text-center relative z-0">
				<div className="absolute inset-0 bounce-1 flex items-center justify-center top-10 z-[0]">
					<div className="bg-pink-200/90 rounded-full w-3/4 h-64 blur-3xl opacity-30"></div>
				</div>
				<div className="flex flex-col w-full z-[1] relative">
					<p
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="0"
						data-aos-offset="150"
						className="w-fit px-6 py-1 mx-auto bg-pink-500/10 text-pink-500 rounded-full mb-2 text-sm font-roboto font-thin"
					>
						Testimonios
					</p>
					<h2
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="150"
						data-aos-offset="150"
						className="text-3xl text-center  md:text-4xl font-roboto font-bold mb-4 w-full"
					>
						Testimonios
					</h2>
					<p
						data-aos="fade-up"
						data-aos-duration="600"
						data-aos-delay="300"
						data-aos-offset="150"
						className="text-base sm:text-lg text-center mx-auto md:text-xl md:max-w-2xl font-roboto font-thin text-foreground/60 w-full mb-2"
					>
						Lo que nuestros clientes dicen sobre nosotros
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
						{testimonials.map((testimonial, index) => (
							<div
								data-aos="zoom-in"
								data-aos-duration="500"
								data-aos-delay={index * 200}
								data-aos-offset="150"
								key={index}
								className="bg-white p-6 rounded-3xl text-left shadow-xl"
							>
								<div className="flex items-center mb-4">
									<Image
										src={testimonial.image}
										alt={testimonial.name || 'Testimonial'}
										width={300}
										height={300}
										className="w-12 h-12 rounded-full mr-4"
									/>
									<div>
										<h3 className="text-lg font-roboto font-semibold text-gray-900">
											{testimonial.name}
										</h3>
										<p className="text-gray-500 font-roboto">{testimonial.role}</p>
									</div>
								</div>
								<p className="text-gray-700 font-roboto font-extralight italic">
									&quot;{testimonial.message}&quot;
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
