import { AuthProvider } from '@/components/forum/auth-provider'
import QueryProvider from '@/components/forum/query-provider'

export const metadata = {
	title: 'Foro | More than books',
	description: 'Foro de discusión para maestros y usuarios de More Than Books'
}

export default function ForoLayout({ children }: { children: React.ReactNode }) {
	return (
		<QueryProvider>
			<AuthProvider>{children}</AuthProvider>
		</QueryProvider>
	)
}
