"use client";

import portrait from "@/public/portrait.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              priority={true}
              width="192"
              height="192"
              alt="Kaya's Portrait"
              src={portrait}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0"
              role="img"
              aria-label="Waving Hand"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                damping: 20,
                delay: 0.2,
                duration: 0.7
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <p>
        <span className="font-bold">Hi, I'm Kaya.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">over 10 years</span> of experience. I enjoy
        building sites and apps with{" "}
        <span className="font-bold">
          Typescript, Angular & React with Next.js
        </span>
        .
      </p>
    </section>
  );
}
