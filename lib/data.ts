import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nextsvg from "@/public/next.svg";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lorem Ipsum",
    location: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu urna id nisi tincidunt accumsan. Integer tincidunt, justo nec cursus feugiat, lorem dolor pellentesque tortor, non malesuada risus metus sit amet urna.",
    icon: React.createElement(LuGraduationCap),
    date: "Lorem Ipsum",
  },
  {
    title: "Lorem Ipsum",
    location: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu urna id nisi tincidunt accumsan. Integer tincidunt, justo nec cursus feugiat, lorem dolor pellentesque tortor, non malesuada risus metus sit amet urna.",
    icon: React.createElement(CgWorkAlt),
    date: "Lorem Ipsum - Lorem Ipsum",
  },
  {
    title: "Lorem Ipsum",
    location: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu urna id nisi tincidunt accumsan. Integer tincidunt, justo nec cursus feugiat, lorem dolor pellentesque tortor, non malesuada risus metus sit amet urna.",
    icon: React.createElement(FaReact),
    date: "Lorem Ipsum - Lorem Ipsum",
  },
] as const;

export const projectsData = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu urna id nisi tincidunt accumsan. Integer tincidunt, justo nec cursus feugiat, lorem dolor pellentesque tortor, non malesuada risus metus sit amet urna.",
    tags: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    imageUrl: nextsvg,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu urna id nisi tincidunt accumsan. Integer tincidunt, justo nec cursus feugiat, lorem dolor pellentesque tortor, non malesuada risus metus sit amet urna.",
    tags: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    imageUrl: nextsvg,
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu urna id nisi tincidunt accumsan. Integer tincidunt, justo nec cursus feugiat, lorem dolor pellentesque tortor, non malesuada risus metus sit amet urna.",
    tags: [
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
      "Lorem Ipsum",
    ],
    imageUrl: nextsvg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
