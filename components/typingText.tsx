import React, { useEffect, useRef, RefObject } from "react";
import Typed from "typed.js";

function TypingText() {
  const typingRef: RefObject<HTMLSpanElement> = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Developer",
        "IITian",
        "Problem Solver",
        "Tech Enthusiast",
        "Sports fanatic",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      startDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy(); // Cleanup to prevent memory leaks
    };
  }, []);

  return (
    <span>
      <span
        className="animate text-gray-500 dark:text-gray-400"
        ref={typingRef}
      ></span>
    </span>
  );
}

export default TypingText;
