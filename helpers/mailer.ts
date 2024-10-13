import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";
import { NextResponse } from "next/server.js";

export const sendEmail = async ({ email, emailType, userId }:any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        console.log("Hashed Token Generated");

        const verifyCode = Math.floor(100000 + Math.random()*900000).toString();

        let updateData = {};
        let emailSubject = '';
        let emailHtml = '';

        switch (emailType) {
            case 'VERIFY':
                updateData = {
                    verifyToken: verifyCode,
                    verifyTokenExpiry: Date.now() + 3600000 // Expires in 1 hour
                };
                emailSubject = "Verify Your Email";
                emailHtml = VERIFICATION_EMAIL_TEMPLATE.replace("{VERIFY_CODE}", `${verifyCode}`);
                break;

            case 'RESET':
                updateData = {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                };
                emailSubject = "Reset Your Password";
                emailHtml = PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", `${process.env.DOMAIN}/reset-password?token=${hashedToken}`);
                break;

            case 'RESET_SUCCESS':
                emailSubject = "Your Password Reset Was Successful";
                emailHtml = PASSWORD_RESET_SUCCESS_TEMPLATE;
                break;

            // Add more cases as needed
            default:
                throw new Error("Invalid email type");
        }

        await User.findByIdAndUpdate(userId, updateData);
        console.log("User Found in DB with tokens updated");

        const transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS
            }
        });
        console.log("Email Transporter is now Ready!");

        const mailOptions = {
            from: '"Electroplix" <hello@electroplix.com>',
            to: email,
            subject: emailSubject,
            html: emailHtml,
        };

        console.log("Mail Options Are now Set!");
        console.log("Sending Email...");
        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}



export const WelcomeEmail = async ({email,userId}:any) => {

    try {
        const user = await User.findOne({userId});

        if (!user){
            return NextResponse.json({sucess:false,message:"user not found in DB"})
        }

        const username = user.username;
        const Nodemailer = require("nodemailer");
        const { MailtrapTransport } = require("mailtrap");

        const TOKEN = process.env.MAILTRAP_PASS;

        const transport = Nodemailer.createTransport(
        MailtrapTransport({
            token: TOKEN,
        })
        );

        const sender = {
        address: "hello@electroplix.com",
        name: "Electroplix",
        };
        const recipients = [
        "official.electroplix@gmail.com",
        ];

        transport
        .sendMail({
            from: sender,
            to: recipients,
            template_uuid: process.env.WELCOME_EMAIL_UUID,
            template_variables: {
            "company_info_name": "Electroplix",
            "name": username
            }
        })
        .then(console.log, console.error);
        
    } catch (error:any) {
        return NextResponse.json({success:false,status:500,message:error.message})
    }
}