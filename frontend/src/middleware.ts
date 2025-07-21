import { NextResponse, NextRequest } from 'next/server'
import { supabase } from './lib/supabaseClient'
// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
    let token = request.cookies.get('token')
    const { data, error } = await supabase.auth.getUser(token?.value)
    if (!data.user) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/protected/:path*',
  }