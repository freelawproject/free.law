import { NextResponse } from 'next/server';

// 2026 year-end matching-gift campaign: temporarily send /donate/ to the
// campaign page. The /donate/ page itself is untouched; delete this file on
// January 1 to restore it.
//
// This lives in proxy (formerly middleware) rather than netlify.toml or
// next.config.js redirects because those don't apply to client-side <Link>
// navigation, which fetches /_next/data/... instead of the page URL.
export function proxy(request) {
  return NextResponse.redirect(new URL('/2026-match/', request.url), 307);
}

export const config = {
  matcher: '/donate',
};
