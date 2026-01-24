import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("admin_token")?.value;
  // console.log(token);
  

  // ✅ Logged-in users should not see /login
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(
      new URL("/admin/dashboard", req.url)
    );
  }

  // ✅ Protect admin routes
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
