import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // API routes - handled individually
  if (pathname.startsWith('/api/')) {
    return response;
  }

  // Static assets - aggressive caching
  if (
    pathname.startsWith('/_next/static/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|webp|svg|gif|woff|woff2|ttf|eot)$/)
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
    return response;
  }

  // HTML pages - cache with revalidation
  if (pathname === '/' || !pathname.includes('.')) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=600'
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/webpack-hmr (hot module reload)
     */
    '/((?!_next/webpack-hmr).*)',
  ],
};
