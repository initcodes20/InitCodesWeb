import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("admin_token")?.value;

  // ✅ Redirect logged-in users away from /login
  if (pathname.startsWith("/login") && token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.redirect(
        new URL("/admin/dashboard", req.url)
      );
    } catch {
      // invalid token → allow login
    }
  }

  // ✅ Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
