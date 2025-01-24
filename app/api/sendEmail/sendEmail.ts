"use server";
import { Resend } from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const aname = formData.get("aname"); 
    const email = formData.get("email"); 
    const message = formData.get("message");


   
        resend.emails.send({
            from: "info@anazon.hadizproductions.com",
            to: "alihadimedlej001@gmail.com",
            subject: "New message from your website",
            text: "Name: " + aname + " "  + "\nEmail:" + email  + "\n" + message,
        })
 
    redirect('/');

}

