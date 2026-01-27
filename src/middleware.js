import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("admin_token")?.value;

  // ✅ Allow ALL API routes (CRITICAL)
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // ✅ Logged-in users should not access /login
  if (pathname === "/login" && token) {
    return NextResponse.redirect(
      new URL("/admin/dashboard", req.url)
    );
  }

  // ✅ Protect admin UI routes ONLY
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  return NextResponse.next();
}

/**
 * 🚨 IMPORTANT
 * This matcher runs middleware ONLY for:
 * - /login
 * - /admin/**
 * It does NOT run for /api/**
 */
export const config = {
  matcher: ["/login", "/admin/:path*"],
};
