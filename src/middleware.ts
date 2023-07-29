import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = { matcher: '/admin/:path*' }

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('admin-key')

  if (!cookie) {
    if (!request.nextUrl.pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
}
