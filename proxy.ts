import { NextRequest, NextResponse } from "next/server"

import { defaultLocale } from "@/i18n/config"

// English is served without a prefix (the URLs that already exist) and Spanish under /es.
// Unprefixed paths are rewritten to /en/..., the URL in the browser does not change.
// /en/... is redirected to the unprefixed path so each page has one address.
export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
		const url = request.nextUrl.clone()
		url.pathname = pathname.slice(defaultLocale.length + 1) || "/"
		return NextResponse.redirect(url, 308)
	}

	if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next()

	const url = request.nextUrl.clone()
	url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`
	return NextResponse.rewrite(url)
}

export const config = {
	matcher: ["/((?!_next/|assets/|api/|.*\\..*).*)"],
}
