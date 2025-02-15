import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

const protectedRoutes = ["/userinfo"]

export default async function middleware(req: NextRequest) {
    const session = await auth()

    const isProtectedRoute = protectedRoutes.some((route)=> req.nextUrl.pathname.startsWith(route))

    if(isProtectedRoute && !session?.user){
        return NextResponse.redirect(new URL("api/auth/signin", req.url))
    }
    
    return NextResponse.next()
}