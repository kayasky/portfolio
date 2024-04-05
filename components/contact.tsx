"use client";

import { sendEmail } from "@/actions/send-email";
import { motion } from "framer-motion";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import FormFields from "./form-fields";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-button";

export default function Contact() {
  const recaptcha = useRef<ReCAPTCHA>(null);

  const resetForm = () => {
    const form = document.querySelector("form") as HTMLFormElement;
    form.reset();
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-grey-700">Get in touch :)</p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const captchaValue = recaptcha?.current?.getValue();

          if (!captchaValue) {
            toast.error("Please verify the reCAPTCHA!");
            return;
          }

          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          resetForm();

          toast.success("Message sent!");
        }}
      >
        <FormFields />
        <ReCAPTCHA
          ref={recaptcha}
          sitekey="6LddHLEpAAAAAB9UFo4DLY3i0sU7t6cyF646_VFs"
          className="mb-3"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
