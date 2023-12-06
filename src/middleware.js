import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
  // jika URL adalah "/" maka rewrite ke "/login"
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/login", request.nextUrl));
  }

  const token = request.cookies.get("token")?.value;

  if (token) {
    // Verifikasi Token
    try {
      const secretKey = new TextEncoder().encode(
        process.env.NEXT_PUBLIC_SECRET_KEY
      );
      const verifyToken = await jose.jwtVerify(token, secretKey);
      console.log(verifyToken);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
