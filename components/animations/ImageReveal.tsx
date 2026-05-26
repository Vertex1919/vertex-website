"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  delay?: number;
}

export default function ImageReveal({
  children,
  direction = "left",
  className,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const clipPathVariants = {
    left: {
      hidden: { clipPath: "inset(0 100% 0 0)" },
      visible: { clipPath: "inset(0 0% 0 0)" },
    },
    right: {
      hidden: { clipPath: "inset(0 0 0 100%)" },
      visible: { clipPath: "inset(0 0 0 0%)" },
    },
    up: {
      hidden: { clipPath: "inset(100% 0 0 0)" },
      visible: { clipPath: "inset(0% 0 0 0)" },
    },
    down: {
      hidden: { clipPath: "inset(0 0 100% 0)" },
      visible: { clipPath: "inset(0 0 0% 0)" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={clipPathVariants[direction]}
      transition={{ 
        duration: 1.4, 
        delay,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
