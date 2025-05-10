import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: "Logout Successful", success: true });

        // Clear cookies with domain and path adjustments
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/",
            secure: process.env.NODE_ENV === "production", // Secure cookies in production
            domain: process.env.NODE_ENV === "production" ? "electroplix.com" : "localhost", // Adjust domain
        });
        
        response.cookies.set("auth", "false", {
            path: "/",
            secure: process.env.NODE_ENV === "production",
            domain: process.env.NODE_ENV === "production" ? "electroplix.com" : "localhost", // Adjust domain
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
