import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login"];
const privateRoutes = ["/agents"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isAuthenticated = !!token;
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  const userOnProtectedRoutes = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const userOnAuthRoute = authRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("callbackUrl", req.url);
  if (!isAuthenticated && userOnProtectedRoutes) {
    return NextResponse.redirect(loginUrl);
  }
  if (isAuthenticated && userOnAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api/auth).*)", "/api/trpc/(.*)"],
};
