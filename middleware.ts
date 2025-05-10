// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(['/Custom-Plan','/sign-in(.*)'])
const isProtectedRoute = createRouteMatcher(['',''])

export default clerkMiddleware(async (auth, request) => {
    if (isProtectedRoute(request)) {
      await auth.protect()
    }
  })

// export function middleware(request:NextRequest){
//     const path = request.nextUrl.pathname;

//     const isPublicPath = path === '/login' || path === '/SignUp' || path === '/verifyemail'

//     const token = request.cookies.get('token')?.value || '';

//     if (!token){
//         request.cookies.set("auth","false");
//     }

//     if (isPublicPath && token){
//         return NextResponse.redirect(new URL('/profile',request.nextUrl))
//     }
//     if (!isPublicPath && !token){
//         return NextResponse.redirect(new URL('/login',request.nextUrl))
//     }
// }

export const config={
    matcher: [
        // '/profile',
        // '/login',
        // '/SignUp',
        // '/verifyemail',
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
