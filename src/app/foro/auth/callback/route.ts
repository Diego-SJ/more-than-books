import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED_REDIRECTS = ['/foro']

export async function GET(request: NextRequest) {
	const requestUrl = new URL(request.url)
	const code = requestUrl.searchParams.get('code')
	const next = requestUrl.searchParams.get('next')

	if (code) {
		const cookieStore = cookies()
		const supabase = createServerClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
			{
				cookies: {
					getAll() {
						return cookieStore.getAll()
					},
					setAll(cookiesToSet) {
						try {
							cookiesToSet.forEach(({ name, value, options }) =>
								cookieStore.set(name, value, options)
							)
						} catch {
							// ignore
						}
					}
				}
			}
		)
		await supabase.auth.exchangeCodeForSession(code)
	}

	const redirectTo = next && ALLOWED_REDIRECTS.includes(next) ? next : '/foro'

	return NextResponse.redirect(new URL(redirectTo, request.url))
}
