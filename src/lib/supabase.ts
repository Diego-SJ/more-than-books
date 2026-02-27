import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () =>
	createClientComponentClient({
		supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
		supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
	})
