"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  element?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  element = "span",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Split text into lines (preserving the original line breaks)
  const lines = text.split("\n");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const Component = motion[element];

  return (
    <Component
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ display: "block" }}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: "block",
            overflow: "hidden",
          }}
        >
          <motion.span
            variants={lineVariants}
            style={{ display: "block" }}
          >
            {line || "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
