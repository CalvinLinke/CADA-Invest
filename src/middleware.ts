import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/investoren") &&
    !pathname.startsWith("/investoren/gate")
  ) {
    const auth = request.cookies.get("investoren_auth");
    if (auth?.value !== "granted") {
      return NextResponse.redirect(new URL("/investoren/gate", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/investoren", "/investoren/:path*"],
};
