import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const PrivacyNoticePage = () => {
	return (
		<>
			<Navbar currentPath="contact" />

			<header className="container  flex flex-col sm:flex-row relative mt-28 max-w-[1200px] mx-auto">
				<div className="flex flex-col items-start w-full justify-center">
					<h1 className="text-3xl sm:text-start font-roboto font-bold w-full text-center text-foreground">
						AVISO DE PRIVACIDAD INTEGRAL DE MORE THAN BOOKS, S.A. DE C.V.
					</h1>
				</div>
			</header>
			<main className="container flex flex-col my-10 max-w-[1200px] mx-auto">
				{/* filters */}

				<p className="text-lg mb-2">
					MORE THAN BOOKS, S.A. DE C.V. (en adelante MORE THAN BOOKS), es el responsable del
					Tratamiento de sus Datos Personales, conforme a lo estipulado en el presente Aviso.
				</p>
				<p className="text-lg mb-2">
					En caso de dudas, comentarios y sugerencias favor de comunicarse a la cuenta de correo
					electrónico: gabino.bandala@mtbooks.com.mx Nuestras oficinas se encuentran ubicadas en
					Calle Ignacio Manuel Altamirano No.7, Local C1, Colonia San Rafael, Delegación Cuauhtémoc,
					C.P. 06470, Ciudad de México.
				</p>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					SU INFORMACIÓN PERSONAL
				</h5>
				<p className="text-lg mb-2">
					La privacidad de su información personal es de gran importancia para MORE THAN BOOKS. La
					Ley Federal de Protección de Datos Personales en Posesión de Particulares protege dicha
					información de usos no permitidos y sin su consentimiento, por lo que el presente
					documento tiene como finalidad hacer de su conocimiento la información que recabamos de
					usted, para qué y cómo la usamos.
				</p>
				<p className="text-lg mb-6">
					La forma en que puede ejercer sus derechos de acceso, rectificación, oposición y
					cancelación, así como la revocación de su consentimiento ante MORE THAN BOOKS.
				</p>
				<p className="text-lg mb-2">
					Lo anteriormente citado, tiene el objetivo de que usted tenga pleno control y decisión
					sobre sus datos personales. Por lo que le recomendamos que lea atentamente la siguiente
					información:
				</p>
				<p className="text-lg mb-2">
					El presente Aviso es aplicable para los Titulares de Datos Personales obtenidos directa,
					indirecta o personalmente por MORE THAN BOOKS, a través de contratos, cartas, solicitudes
					de información, así como de los distintos formularios contenidos en el Sitio Web de MORE
					THAN BOOKS, o cualquier otro medio especificado para tales efectos, que hagan referencia
					al presente Aviso de Privacidad.
				</p>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					COMO OBTENEMOS SU INFORMACIÓN PERSONAL
				</h5>
				<p className="text-lg mb-2">
					MORE THAN BOOKS obtiene, resguarda y trata su información personal en virtud de la actual
					o futura relación jurídica que existe con usted, así como por la prestación y/u obtención
					de servicios.
				</p>
				<p className="text-lg mb-2">Sus datos pueden ser obtenidos</p>
				<ul className="list-decimal ml-8">
					<li className="text-lg mb-2">
						Personalmente, cuando usted los entregue físicamente a alguno de nuestros empleados o
						encargados.
					</li>
					<li className="text-lg mb-2">
						Directamente, cuando nos lo haga llegar usted o su representante legal a través de los
						medios tecnológicos o de correspondencia designados para tal efecto.
					</li>
					<li className="text-lg mb-2">
						Indirectamente, a través de bases de datos públicas o de terceros que nos los
						proporcionen como referencia.
					</li>
				</ul>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					QUE INFORMACIÓN RECABAMOS
				</h5>

				<p className="text-lg mb-2">
					Entre la información que MORE THAN BOOKS obtiene personal, directa o indirectamente por
					parte de sus usuarios, clientes, proveedores y/o cualquier persona relacionada con los
					Servicios se encuentran los mencionados en la siguiente clasificación:
				</p>
				<ul className="list-decimal ml-8">
					<li className="text-lg mb-2">
						Identificación: nombre completo, correo electrónico, domicilio, teléfono, móvil, edad,
						fecha de nacimiento, RFC.
					</li>
					<li className="text-lg mb-2">
						Patrimoniales y financieros: número de tarjeta bancaria, identificadores de cuentas
						bancarias y/o conceptos de operaciones.
					</li>
					<li className="text-lg mb-2">
						Académicos: nivel de escolaridad, institución de procedencia, turno y grupo.
					</li>
				</ul>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					USO DE SU INFORMACION PERSONAL
				</h5>

				<p className="text-lg mb-2">
					MORE THAN BOOKS trata su información personal para alguno o algunos de los siguientes
					fines que dan origen y son necesarias para la relación jurídica con Usted:
				</p>

				<ul className="list-decimal ml-8">
					<li className="text-lg mb-2">
						Para el registro, alta y administración de su Tienda en Línea a través de la página web
						de MORE THAN BOOKS y sus servicios relacionados;
					</li>
					<li className="text-lg mb-2">
						Para el registro, alta y administración de su cuenta en el portal MORE THAN BOOKS para
						la compra y envío de productos y/o servicios adquiridos a través de la plataforma de
						MORE THAN BOOKS;
					</li>
					<li className="text-lg mb-2">
						El funcionamiento, gestión, facturación, cobranza, administración, prestación,
						ampliación y mejora de nuestros servicios;
					</li>
					<li className="text-lg mb-2">
						Entrega de notificaciones, requerimientos, cartas o boletines informativos o atención a
						sus solicitudes relacionadas con los servicios que prestamos;
					</li>
					<li className="text-lg mb-2">
						La transferencia de su información en los casos aplicables de conformidad con el
						apartado CON QUIEN PODEMOS COMPARTIR SU INFORMACION del presente Aviso;
					</li>
					<li className="text-lg mb-2">
						La publicación de datos personales en los casos aplicables de conformidad con el
						aparatado PUBLICACIÓN DE SU INFORMACIÓN PERSONAL del presente Aviso;
					</li>
				</ul>

				<p className="text-lg mb-2">
					MORE THAN BOOKS no utiliza datos personales para fines distintos a los antes mencionados.
					Sin embargo, si usted así lo requiere, puede informarnos su negativa para el uso de su
					información personal, siempre que las finalidades sean distintas a aquéllas que son
					necesarias y den origen a una relación jurídica, a través de los medios descritos en el
					presente aviso.
				</p>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					MECANISMOS DE SEGURIDAD
				</h5>

				<p className="text-lg mb-2">
					Para garantizar el correcto resguardo de sus datos personales y para dar pleno
					cumplimiento a las obligaciones que la LFPDPPP establece en la materia, se le informa que
					MORE THAN BOOKS tiene implementadas las medidas de seguridad administrativas, técnicas y
					físicas necesarias y suficientes para la correcta protección de sus datos personales.
				</p>
				<p className="text-lg mb-2">
					La seguridad y la confidencialidad de los datos que los usuarios proporcionen al contratar
					un servicio o comprar un producto en línea estarán protegidos por un servidor seguro bajo
					el protocolo Secure Socket Layer (SSL), de tal forma que los datos enviados se
					transmitirán encriptados para asegurar su resguardo.
				</p>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					ACEPTACIÓN DE LOS TÉRMINOS
				</h5>

				<p className="text-lg mb-2">
					Esta declaración de Confidencialidad / Privacidad constituye un acuerdo legal entre el
					usuario y MORE THAN BOOKS. Si el usuario utiliza los servicios de este sitio web,
					significa que ha leído, entendido y consentido los términos antes expuestos. Para resolver
					cualquier duda en este sentido, nos podrá contactar al correo
					gabino.bandala@mtbooks.com.mx
				</p>

				<h5 className="text-xl sm:text-2xl font-roboto font-semibold mt-8 mb-4">
					DERECHO DE ACUDIR ANTE EL INAI
				</h5>

				<p className="text-lg mb-2">
					Si el Titular de los Datos considera que han sido vulnerados sus derechos respecto de la
					protección de datos personales, tiene el derecho de acudir a la autoridad correspondiente
					para defender su ejercicio.
				</p>

				<p className="text-lg mb-2">
					La autoridad es el Instituto Nacional de Transparencia, Acceso a la Información y
					Protección de Datos Personales (INAI), su sitio web es: www.inai.org.mx.
				</p>

				<p className="text-lg mb-2">
					Atentamente. <br />
					MORE THAN BOOKS, S.A. DE C.V.
				</p>
			</main>
			<Footer />
		</>
	)
}

export default PrivacyNoticePage
