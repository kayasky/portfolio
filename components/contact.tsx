import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-grey-700">Please contact me using the form below :)</p>
      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg borderBlack p-4"
          type="email"
          placeholder="Your email"
          required
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          required
        ></textarea>
        <button
          type="submit"
          className="group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
          focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Send{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1
          group-hover:-translate-y-1"
          />
        </button>
      </form>
    </section>
  );
}
