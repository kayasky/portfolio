import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Position 1",
    location: "Toronto, ON",
    description: "Position 1 description. This is a long description to test the layout.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Position 2",
    location: "Toronto, ON",
    description: "Position 2 description. This is a long description to test the layout.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Position 3",
    location: "Toronto, ON",
    description: "Position 3 description. This is a long description to test the layout.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Project 1",
    description:
      "Project 1 description. This is a long description to test the layout.",
    tags: ["Angular", "Typescript", "SCSS", "Node"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;