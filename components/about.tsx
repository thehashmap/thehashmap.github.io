"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About Me
      </h2>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla
        est ullamcorper eget nulla. Phasellus vestibulum lorem sed risus. Est
        ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Commodo
        nulla facilisi nullam vehicula ipsum a arcu cursus. Varius duis at
        consectetur lorem. Vivamus at augue eget arcu. Vestibulum morbi blandit
        cursus risus at ultrices mi. Cursus in hac habitasse platea dictumst
        quisque. Tellus integer feugiat scelerisque varius. Mauris nunc congue
        nisi vitae suscipit tellus mauris a diam. Ornare quam viverra orci
        sagittis eu. Nisl nisi scelerisque eu ultrices vitae auctor eu. Risus
        feugiat in ante metus dictum at tempor. Id porta nibh venenatis cras sed
        felis eget velit. Accumsan lacus vel facilisis volutpat est velit
        egestas dui id. Habitasse platea dictumst quisque sagittis purus sit
        amet volutpat. Placerat in egestas erat imperdiet sed euismod nisi porta
        lorem. Vulputate mi sit amet mauris commodo quis imperdiet massa
        tincidunt.
      </p>
    </motion.section>
  );
}
