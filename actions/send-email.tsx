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

  try {
    await resend.emails.send({
      from: "itskaya.ca contact <hi@itskaya.ca>",
      to: "itskayaj@gmail.com",
      subject: "New message from your website!",
      reply_to: senderEmail,
      text: message
    });
  } catch (error) {
    return {
      error: getErrorMessage(error)
    };
  }
};

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
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
