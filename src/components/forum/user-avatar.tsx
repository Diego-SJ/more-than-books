function getAvatarColor(name: string): string {
	const colors = [
		'bg-red-500',
		'bg-orange-500',
		'bg-amber-500',
		'bg-emerald-500',
		'bg-teal-500',
		'bg-cyan-500',
		'bg-blue-500',
		'bg-indigo-500',
		'bg-violet-500',
		'bg-pink-500',
	]
	let hash = 0
	for (const char of name) hash = char.charCodeAt(0) + ((hash << 5) - hash)
	return colors[Math.abs(hash) % colors.length]
}

const sizeClasses = {
	sm: 'w-6 h-6 text-xs',
	md: 'w-8 h-8 text-sm',
	lg: 'w-10 h-10 text-base',
} as const

type UserAvatarProps = {
	name: string
	size?: 'sm' | 'md' | 'lg'
}

export default function UserAvatar({ name, size = 'md' }: UserAvatarProps) {
	const initial = name.charAt(0).toUpperCase()
	const color = getAvatarColor(name)

	return (
		<span
			className={`${sizeClasses[size]} ${color} rounded-full grid place-content-center shrink-0 text-white font-bold font-roboto`}
		>
			{initial}
		</span>
	)
}
