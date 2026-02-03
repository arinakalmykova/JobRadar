import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const protectedPaths = ["/page"];
  const path = request.nextUrl.pathname;

  if (!token && protectedPaths.includes(path)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (token && (path === "/auth/login" || path === "/auth/register")) {
    return NextResponse.redirect(new URL("/page", request.url));
  }
}
