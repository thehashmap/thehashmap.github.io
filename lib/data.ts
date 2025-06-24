import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import nextsvg from "@/public/nextjs.jpg";
import krypt from "@/public/Krypt.png";

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
    title: "Indian Institute Of Technology (BHU) Varanasi",
    location: "Varanasi, India",
    description:
      "Bachelor’s and Master’s of Technology (Integrated Dual Degree)\nCPI - 8.86",
    icon: React.createElement(LuGraduationCap),
    date: "2019 – 2024",
  },
  {
    title: "Ethan AI",
    location: "Remote - Singapore",
    description:
      "Software Developer                                                                                                                      ",
    icon: React.createElement(CgWorkAlt),
    date: "February – March 2022",
  },
  {
    title: "Blexings",
    location: "Remote - India",
    description:
      "Frontend and Blockchain Developer                                                                                                                      ",
    icon: React.createElement(CgWorkAlt),
    date: "April – July 2022",
  },
  {
    title: "DoDAO",
    location: "Remote - Canada",
    description:
      "Full Stack Developer | Content Writer                                                                                                                      ",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 – Jan 2024",
  },
  {
    title: "Standard Chartered GBS",
    location: "Chennai - India",
    description:
      "Software Developer                                                                                                                      ",
    icon: React.createElement(CgWorkAlt),
    date: "May – July 2023",
  },
  {
    title: "Standard Chartered GBS",
    location: "Bengaluru - India",
    description:
      "Software Developer                                                                                                                      ",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Krypt",
    description:
      "Web 3.0 Blockchain Application. Send and receive Ethereum cryptocurrency using Metamask wallet. Built and deployed Ethereum smart contracts.",
    tags: ["React", "Solidity", "Tailwind"],
    imageUrl: krypt,
  },
  {
    title: "Goaly",
    description:
      "Created a goal-setting web application using MERN stack. Created Express server with API endpoints to perform CRUD operations and utilized MongoDB to store user information.",
    tags: ["MongoDB", "React", "Express", "Node"],
    imageUrl: nextsvg,
  },
] as const;

export const skillsData = [
  "React",
  "Next",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Node",
  "Express",
  "PostgreSQL",
  "Python",
  "Solidity",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
] as const;
