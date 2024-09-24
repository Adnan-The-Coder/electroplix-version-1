import User from "@/models/userModel";
import { NextResponse,NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";


connect()

export default async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {email} = reqBody;

        const user = User.findOne({email});

        if (!user){
            return NextResponse.json({message:"User Not Found !"},{status:400})
        }

        // Generate reset token
		// const resetToken = crypto.randomBytes(20).toString("hex");
		// const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

        
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
        
    }
    
}