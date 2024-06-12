import { Event } from '@/types/event'
import { BlogPost } from '@/types/post'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function markdownToPlainText(markdown: string): string {
	// Reemplazar encabezados
	let plainText = markdown.replace(/^\s*#{1,6}\s*([^\n]+)\s*$/gm, '$1')

	// Reemplazar negrita y cursiva
	plainText = plainText.replace(/\*\*\*(.*?)\*\*\*/g, '$1') // ***texto***
	plainText = plainText.replace(/___(.*?)___/g, '$1') // ___texto___
	plainText = plainText.replace(/\*\*(.*?)\*\*/g, '$1') // **texto**
	plainText = plainText.replace(/__(.*?)__/g, '$1') // __texto__
	plainText = plainText.replace(/\*(.*?)\*/g, '$1') // *texto*
	plainText = plainText.replace(/_(.*?)_/g, '$1') // _texto_

	// Reemplazar enlaces
	plainText = plainText.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')

	// Reemplazar imágenes
	plainText = plainText.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1')

	// Reemplazar citas
	plainText = plainText.replace(/^\s*>+\s?/gm, '')

	// Reemplazar listas ordenadas y desordenadas
	plainText = plainText.replace(/^\s*[-\*\+]\s+/gm, '')
	plainText = plainText.replace(/^\s*\d+\.\s+/gm, '')

	// Reemplazar código en línea
	plainText = plainText.replace(/`([^`]+)`/g, '$1')

	// Reemplazar bloques de código
	plainText = plainText.replace(/```[^`]*```/g, '')

	// Reemplazar tablas
	plainText = plainText.replace(/^\|.*\|$/gm, '')
	plainText = plainText.replace(/^\s*[-:]+\s*$/gm, '')

	// Reemplazar líneas horizontales
	plainText = plainText.replace(/^\s*[-\*_\s]{3,}\s*$/gm, '')

	// Retirar cualquier línea vacía restante
	plainText = plainText.replace(/\n{2,}/g, '\n\n')

	return plainText.trim()
}

export const mapCategories = (blogs: BlogPost[] | Event[]): string[] => {
	const categories = blogs.map(
		(blog) => (blog as BlogPost)?.categories || (blog as Event)?.category
	)
	const uniqueCategories = Array.from(new Set(categories.flat())) as string[]

	return uniqueCategories
}

export const normalizeText = (text: string) => {
	let newText = text?.normalize('NFD')?.replace(/[\u0300-\u036f]/g, '')
	return newText?.replace(/[^\w\s]/gi, '') || ''
}

export function includes(value1 = '', value2 = '') {
	// Normalizar los textos para eliminar acentos
	const normalizedValue1 = normalizeText(value1)?.toLowerCase()
	const normalizedValue2 = normalizeText(value2)?.toLowerCase()

	// Construir un patrón de expresión regular para buscar value2 en cualquier lugar de value1
	return !!normalizedValue1?.includes(normalizedValue2)
}

export async function copyToClipboard(text: string): Promise<void> {
	try {
		if (navigator.clipboard && window.isSecureContext) {
			// Usa la API moderna del portapapeles si está disponible y en un contexto seguro
			await navigator.clipboard.writeText(text)
		} else {
			// Fallback para navegadores más antiguos
			const textArea = document.createElement('textarea')
			textArea.value = text
			// Asegúrate de que el textarea no sea visible
			textArea.style.position = 'fixed'
			textArea.style.left = '-999999px'
			textArea.style.top = '-999999px'
			document.body.appendChild(textArea)
			textArea.focus()
			textArea.select()
			document.execCommand('copy')
			document.body.removeChild(textArea)
		}
	} catch (error) {
		console.error('Error al copiar al portapapeles: ', error)
	}
}

export const createGoogleCalendarLink = (event: Event): string => {
	const { title, date, location, content } = event
	if (!date) return '#'

	const startDate = new Date(date)
	const endDate = new Date(date)
	endDate.setHours(23, 59, 59, 999) // Final del día

	const startDateISO = startDate.toISOString().replace(/-|:|\.\d\d\d/g, '')
	const endDateISO = endDate.toISOString().replace(/-|:|\.\d\d\d/g, '')

	const eventDetails = encodeURIComponent(`${content}`)

	const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
		title || 'Evento'
	)}&dates=${startDateISO}/${endDateISO}&details=${
		eventDetails || ''
	}&location=${encodeURIComponent(location || 'Virtual')}`

	return googleCalendarLink
}
