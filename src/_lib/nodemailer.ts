// lib/email.ts
import nodemailer from 'nodemailer';
import { Env } from './constants';


const transporter = nodemailer.createTransport({
    host: Env.SMTP_HOST as string, // GoDaddy SMTP server
    port: Number(Env.SMTP_PORT as string), // or 587
    secure: Env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: Env.SMTP_USER as string, // your GoDaddy email
        pass: Env.SMTP_PASSWORD as string, // your GoDaddy email password
    },
} as nodemailer.TransportOptions); // Cast to TransportOptions

interface EmailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export const sendEmail = async ({ to, subject, text, html }: EmailOptions) => {
    const mailOptions = {
        from: Env.EMAIL_FROM as string,
        to,
        subject,
        text,
        html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


// export const sendEmail = async ({ to, subject, text, html }: EmailOptions) => {
//     const mailOptions = {
//         from: Env.EMAIL_FROM as string,
//         to,
//         subject,
//         text,
//         html,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };
