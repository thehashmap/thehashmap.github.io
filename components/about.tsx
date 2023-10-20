"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        I am <strong>Nikhil Kumar</strong>, a passionate{" "}
        <strong>Software Developer</strong>.
      </p>{" "}
      <p className="mb-3">
        I&apos;m currently on an electrifying odyssey at the{" "}
        <strong> Indian Institute Of Technology (BHU) Varanasi</strong>,
        crafting a future as a tech architect. My academic forge has ignited my
        passion for innovation and my hunger for coding challenges.
      </p>
      <p className="mb-3">
        My journey extends beyond the classroom, as I&apos;ve ventured into the
        real-world tech battlefield as a <strong>Software Developer</strong> at{" "}
        <strong>Standard Chartered GBS</strong>, where I&apos;ve battled data
        torrents, tamed Python scripts in the name of harnessing the power of
        Big Data. My remote escapades include serving as a{" "}
        <strong>Full Stack Blockchain Developer</strong> and{" "}
        <strong>Content Writer</strong> for <strong>DoDAO</strong>, where
        I&apos;ve woven the threads of ReactJS and Solidity into DApps and
        conjured custom AI bots using Langchain, OpenAI, and a dash of GraphQL
        and Prisma for good measure.
      </p>
      <p className="mb-3">
        I&apos;ve danced with the digital djinn at <strong>Ethan AI</strong>,
        crafting an app for wealth management and sculpting features like AWS S3
        cloud support. At <strong>Blexings</strong>, I wielded the
        developer&apos;s wand to reshape a React Native mobile app, imbuing it
        with a fresh, intuitive interface.
      </p>
      <p className="mb-3">
        In the ever-shifting landscape of code and creativity, my projects stand
        as my testament to the art of development. <em>Krypt</em>, a Web 3.0
        marvel, allows seamless Ethereum cryptocurrency transfers with Metamask
        at the helm. And there <em>Goaly </em>, a goal-setting oasis in the vast
        desert of distractions, built on the sturdy MERN stack foundation.
      </p>
      <p className="mb-3">
        With an arsenal of languages including <strong>C++</strong>,{" "}
        <strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Python</strong>
        , I&apos;ve found my refuge in developer tools like{" "}
        <strong>VS Code</strong>, <strong>Linux</strong>, and Github. I&apos;ve
        danced with frameworks like <strong>ReactJS</strong>,{" "}
        <strong>NextJS</strong>, <strong>React Native</strong>,{" "}
        <strong>NodeJS</strong>, <strong>ExpressJS</strong>, and dined at the{" "}
        <strong>MongoDB</strong> table.
      </p>
      <p className="mb-3">
        Beyond mere coding, I thrive on problem-solving, with accolades on{" "}
        <strong>Leetcode</strong> and a collection of <em>six shining stars</em>{" "}
        on <strong>HackerRank</strong>.
      </p>
      <p className="mb-3">
        I&apos;ve also embraced the spirit of open source. As a{" "}
        <strong>WebX Guild Developer</strong> at <strong>WebX DAO</strong>, I
        have reviewed multiple PRs. I&apos;ve also lent my skills to
        organizations like <strong>EddieHubCommunity</strong>,{" "}
        <strong>AccessibleForAll</strong>, and <strong>LearnWeb3DAO</strong>.
      </p>
    </motion.section>
  );
}
