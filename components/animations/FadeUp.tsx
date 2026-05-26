"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 1.2,
  y = 60,
  className,
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: y,
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
      } : {
        opacity: 0,
        y: y,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
