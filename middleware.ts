import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request:NextResponse){
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/login' || path === '/SignUp' || path === '/verifyemail'

    const token = request.cookies.get('token')?.value || '';

    if (isPublicPath && token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }
    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
}

export const config={
    matcher: [
        '/',
        '/profile',
        '/login',
        '/SignUp',
        '/verifyemail',
    ],
}