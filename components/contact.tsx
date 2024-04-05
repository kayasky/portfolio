"use client";

import { sendEmail } from "@/actions/send-email";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import FormFields from "./form-fields";
import SectionHeading from "./section-heading";
import SubmitButton from "./submit-button";

export default function Contact() {
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
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent!");
        }}
      >
        <FormFields />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
