import { NextResponse } from 'next/server';

// 2026 year-end matching-gift campaign: temporarily send /donate/ to the
// campaign page. The /donate/ page itself is untouched.
//
// The redirect switches itself off once the campaign ends: midnight at the
// start of January 1 in US Pacific time, so it covers December 31 in every
// continental US time zone. After that, this file can be deleted.
//
// This lives in proxy (formerly middleware) rather than netlify.toml or
// next.config.js redirects because those don't apply to client-side <Link>
// navigation, which fetches /_next/data/... instead of the page URL.
const CAMPAIGN_END = new Date('2027-01-01T00:00:00-08:00');

export function proxy(request) {
  if (Date.now() >= CAMPAIGN_END.getTime()) return NextResponse.next();
  return NextResponse.redirect(new URL('/2026-match/', request.url), 307);
}

export const config = {
  matcher: '/donate',
};
