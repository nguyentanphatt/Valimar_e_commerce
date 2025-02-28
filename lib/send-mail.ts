"use server";
import nodemailer from "nodemailer";

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  sendTo,
  key,
}: {
  sendTo?: string;
  key: string[];
}) {
  try {
    await transporter.verify();
    const formattedKey = key.join(", ");
    
    const info = await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: sendTo || SITE_MAIL_RECEIVER,
      subject: "Your Game Activation Key",
      text: `Thank you for your purchase! Your activation key(s): ${formattedKey}`,
    });

    console.log("Message Sent", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email Sending Failed", error);
    return { success: false, error };
  }
}
