import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Admin Notification Email
        const adminMailOptions = {
            from: `"Webitya Lead Bot" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to self/admin
            subject: `🚀 New Lead: ${name}`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #25D366;">New Webitya Lead!</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message || 'No specific message.'}</p>
                <hr style="border: 1px solid #eee;">
                <p style="font-size: 12px; color: #888;">Sent from wa.webitya.com</p>
            </div>
        `,
        };

        // 2. User Thank You Email (Attractive/Premium)
        const userMailOptions = {
            from: `"Webitya Automation" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Welcome to the Future of Business! 🚀`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b141a; color: #ffffff; }
                .container { max-width: 600px; margin: 0 auto; background-color: #111b21; border-radius: 16px; overflow: hidden; border: 1px solid #333; }
                .header { background-color: #202c33; padding: 30px; text-align: center; border-bottom: 2px solid #25D366; }
                .logo { font-size: 24px; font-weight: bold; color: #ffffff; text-decoration: none; }
                .logo span { color: #25D366; }
                .content { padding: 40px 30px; line-height: 1.6; }
                .btn { display: inline-block; padding: 12px 30px; background-color: #25D366; color: #000000; text-decoration: none; font-weight: bold; border-radius: 50px; margin-top: 20px; }
                .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; background-color: #0b141a; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">Webitya<span>.</span></div>
                </div>
                <div class="content" style="color: #ffffff;">
                    <h1 style="color: #25D366; margin-top: 0;">You're In! 🚀</h1>
                    <p style="color: #e2e8f0; font-size: 16px; margin-bottom: 16px;">Hi ${name},</p>
                    <p style="color: #e2e8f0; font-size: 16px; margin-bottom: 24px;">Thanks for exploring <strong style="color: #ffffff;">Webitya</strong>. We've received your inquiry and are excited to show you how WhatsApp Automation can scale your business <strong style="color: #ffffff;">3x faster</strong>.</p>
                    <p style="color: #e2e8f0; font-size: 16px; margin-bottom: 32px;">Our team is reviewing your details and will reach out shortly on—you guessed it—WhatsApp!</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://wa.digital.webitya.in" class="btn" style="color: #000000;">Visit Dashboard</a>
                    </div>
                    <p style="color: #94a3b8; font-size: 14px;">In the meantime, feel free to reply to this email if you have urgent questions.</p>
                </div>
                <div class="footer">
                    &copy; ${new Date().getFullYear()} Webitya. All rights reserved.<br>
                    Ranchi, Jharkhand, India
                </div>
            </div>
        </body>
        </html>
      `,
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
