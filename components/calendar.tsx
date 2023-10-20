"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/context/theme-context";

export default function Calendar() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="activity"
    >
      <SectionHeading>Github Calendar</SectionHeading>

      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <GitHubCalendar
          username="thehashmap"
          colorScheme={theme == "light" ? "light" : "dark"}
        />
      </motion.div>
    </motion.section>
  );
}
