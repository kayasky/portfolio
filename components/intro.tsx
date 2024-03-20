"use client";

import portrait from "@/public/portrait.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hi, I'm Kaya.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">over 10 years</span> of experience. I enjoy
        building sites and apps with{" "}
        <span className="font-bold">
          Typescript, Angular & React with Next.js
        </span>
        .
      </motion.p>

      <div className="flex gap-2">
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          href=""
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download Resume <HiDownload />
        </a>
        <a
          href=""
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.2rem]"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
}
