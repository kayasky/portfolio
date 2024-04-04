"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message") as string;
  const senderEmail = formData.get("senderEmail") as string;

  if (!isFormValid(message, senderEmail)) {
    return {
      error: "Invalid form data."
    };
  }

  await resend.emails.send({
    from: "hi@itskaya.ca",
    to: "itskayaj@gmail.com",
    subject: "New message from your website!",
    reply_to: senderEmail,
    text: message
  });
};

const isFormValid = (message: string, senderEmail: string) => {
  return (
    typeof message === "string" &&
    typeof senderEmail === "string" &&
    message.length > 0 &&
    message.length <= 5000 &&
    senderEmail.includes("@") &&
    senderEmail.length <= 100
  );
};
