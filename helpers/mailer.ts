import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import {VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE} from "./emailTemplates.js"
import { NextResponse } from "next/server.js";

export const sendEmail  = async ({email, emailType, userId}:any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(),10);
        console.log("Hashed Token Generated")
        if (emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId,{
                verifyToken:hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            })
            console.log("User Found in DB with veify Token")
        }else if(emailType === 'RESET'){
            await User.findByIdAndUpdate(userId,{
                forgotPasswordToken:hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        var transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
              user: process.env.MAILTRAP_USER,
              pass: process.env.MAILTRAP_PASS
            }
          });
          console.log("Email Transporter is now Ready !")

          const mailtOptions = {
            from: '"Electroplix" <hello@electroplix.com>',
            to:email,
            subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
            html: emailType === "VERIFY" ? VERIFICATION_EMAIL_TEMPLATE.replace("{LINK_HREF}",`${process.env.DOMAIN}/verifyemail?token=${hashedToken}`) : PASSWORD_RESET_REQUEST_TEMPLATE,
          }

          console.log("Mail Options Are now Set !")
          console.log("Sending Email...")
          const mailResponse = await transport.sendMail(mailtOptions);
          return mailResponse;


    } catch (error:any) {
        // throw new Error(error.message);
        return NextResponse.json({error:error.message},{status:500})
        
    }

}
