// components/FAQSection.js
'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
	{
		question: '¿Qué tipo de libros ofrecen?',
		answer:
			'Ofrecemos una amplia variedad de libros de texto, plataformas digitales y libros electrónicos de alta calidad para instituciones educativas.'
	},
	{
		question: '¿Cómo puedo acceder a los recursos complementarios?',
		answer:
			'Los recursos complementarios están disponibles a través de nuestra plataforma digital, accesible para todas las instituciones afiliadas.'
	},
	{
		question: '¿Qué tipo de eventos organizan?',
		answer:
			'Organizamos conferencias, talleres y seminarios enfocados en el desarrollo profesional de los profesores y el enriquecimiento educativo de los estudiantes.'
	},
	{
		question: '¿Cómo puedo contactar con el soporte?',
		answer:
			'Puedes contactarnos a través de nuestro formulario de contacto en la página de soporte, o enviándonos un correo electrónico a soporte@morethanbooks.com.'
	}
]

export default function FAQSection() {
	const [activeIndex, setActiveIndex] = useState(null)

	const toggleFAQ = (index: any) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<div className="text-center">
			<div className="w-full text-left">
				{faqs?.map((faq, index) => (
					<div
						data-aos="zoom-in-left"
						data-aos-duration="600"
						data-aos-delay={index * 150}
						data-aos-offset="150"
						key={index}
						className="mb-4"
					>
						<button
							onClick={() => toggleFAQ(index)}
							className={`w-full text-left p-4 bg-white rounded-3xl shadow-sm focus:outline-none transition-all border border-slate-100 ${
								activeIndex === index ? 'text-teal-500' : ''
							}`}
						>
							<div className="flex justify-between items-center">
								<span className="font-roboto text-lg font-semibold">{faq.question}</span>
								<span className="font-roboto">
									{activeIndex === index ? <ChevronDown /> : <ChevronUp />}
								</span>
							</div>
						</button>
						<div
							className={`bg-white rounded-3xl shadow-inner-lg ${
								activeIndex === index
									? 'h-auto px-6 py-4 mt-2'
									: 'm-0 p-0 h-0 max-h-0 min-h-0 overflow-hidden'
							} transition-all`}
						>
							<p className="font-roboto text-slate-700 font-thin">{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
