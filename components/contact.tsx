"use client";

import { sendEmail } from "@/actions/send-email";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";

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
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack p-4"
          type="email"
          placeholder="Your email"
          required
          name="senderEmail"
          maxLength={100}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          required
          name="message"
          maxLength={5000}
        ></textarea>
        <button
          type="submit"
          className="group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
          focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Send
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1
          group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
