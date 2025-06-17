import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { firstname, lastname, company, phone, email, message } = await req.json();

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email configuration is missing");
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify transporter configuration
        await transporter.verify();

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: "harikrishnanwebpage@gmail.com",
            subject: `New Contact Form Submission from ${firstname} ${lastname}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to send email" },
            { status: 500 }
        );
    }
} 