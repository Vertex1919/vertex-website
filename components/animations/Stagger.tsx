"use client";

import { motion, useInView } from "framer-motion";
import { useRef, Children, ReactNode, isValidElement, cloneElement } from "react";

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}

export default function Stagger({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className,
}: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return (
            <motion.div variants={itemVariants}>
              {cloneElement(child)}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
}
