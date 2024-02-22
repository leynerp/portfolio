import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';

import Negotiator from 'negotiator';
import { i18n } from './i18n/i18n';
const locales = i18n.locales;
const defaultLocale = i18n.defaultLocale;
function getLanguage (request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
  }
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
}
export function middleware (request: NextRequest) {
  let response;
  const pathname = request.nextUrl.pathname;
  if (pathname.includes('.svg') || pathname.includes('.png')) return NextResponse.next();
  const pathLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
  if (pathLocale) {
    response = NextResponse.rewrite(new URL(pathname, request.url));
  } else {
    const isFirstVisit = !request.cookies.has('NEXT_LOCALE');
    const locale = isFirstVisit ? getLanguage(request) : request.cookies.get('NEXT_LOCALE');
    const pathLocale = locale && defaultLocale
    response = NextResponse.rewrite(new URL(`/${pathLocale}${pathname}`, request.url));
    if (pathLocale) { response.cookies.set('NEXT_LOCALE', pathLocale); }
  }

  return response
}
export const config = {
  matcher: '/((?!api|_next/static|_next/image|img/|favicon.ico).*)'

};
