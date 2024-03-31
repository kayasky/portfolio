"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <motion.section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project) => (
            <div key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        }
      </div>
    </motion.section>
  );
}
