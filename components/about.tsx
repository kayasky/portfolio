"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        With over 10 years of experience in web development, I am passionate
        about creating innovative and user-friendly products that meet the needs
        of various industries, such as banking, wealth management, and telecom.
      </p>
    </motion.section>
  );
}
