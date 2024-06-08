// components/SubscriptionSection.js
'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function NewsLatter() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const onSuccess = () => {
		toast.success('¡Registro exitoso!')
		reset()
	}

	const onSubmit = (data: any) => {
		console.log(data)
		onSuccess()
	}

	return (
		<div className="container mx-auto my-10">
			<div className="w-full  py-16 px-4 text-center rounded-3xl bg-primary relative overflow-hidden">
				<Image
					src="/images/webp/hand5.webp"
					alt="Subscribe"
					width={200}
					height={200}
					className="w-36 lg:w-56 absolute bottom-0 right-0 z-0 -mb-10"
				/>
				<Image
					src="/images/webp/news.webp"
					alt="Subscribe"
					width={200}
					height={200}
					className="w-36 lg:w-56 absolute top-0 left-0 z-0 -mt-1"
				/>
				<div className="flex flex-col relative z-[1] ">
					<h2 className="text-3xl font-bold font-roboto mb-4 text-white">
						Suscríbete a Nuestro Blog
					</h2>
					<p className="text-lg font-extralight text-white mb-8 font-roboto">
						Mantente actualizado con los últimos artículos, recursos y consejos directamente en tu
						bandeja de entrada.
					</p>
					<form onSubmit={handleSubmit(onSubmit)} className="px-4 sm:max-w-md sm:mx-auto">
						<div className="flex flex-col sm:flex-row items-center w-full">
							<input
								type="email"
								{...register('email', { required: true })}
								placeholder="Introduce tu email"
								className="w-full p-3 md:min-w-[20rem] rounded-lg border border-gray-300 mb-4 sm:mb-0 sm:mr-4 outline-none font-roboto focus:shadow-lg"
								required
							/>
							<button
								type="submit"
								className="w-full sm:w-auto  bg-transparent border-text border text-white hover:shadow-lg hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition duration-300"
							>
								Suscribirse
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
