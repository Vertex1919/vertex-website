"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Premium easing curves
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1],
  premium: [0.6, 0.01, -0.05, 0.95],
  cinematic: [0.77, 0, 0.175, 1],
  elastic: [0.68, -0.55, 0.265, 1.55],
  luxury: [0.43, 0.13, 0.23, 0.96],
} as const;

// Reusable animation variants
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easing.cinematic,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing.smooth,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easing.luxury,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easing.cinematic,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easing.cinematic,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.cinematic,
    },
  },
};

// Line reveal animation for text
export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: easing.cinematic,
    },
  },
};

// Parallax wrapper component
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: -offset }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: easing.smooth }}
    >
      {children}
    </motion.div>
  );
}

// Reveal on scroll component
interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({
  children,
  className,
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
    >
      {children}
    </motion.div>
  );
}

// Stagger children component
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal character by character
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.03,
                ease: easing.cinematic,
              },
            },
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Image reveal with mask
interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export function ImageReveal({
  children,
  className,
  direction = "left",
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
      transition={{ duration: 1.2, ease: easing.cinematic }}
    >
      {children}
    </motion.div>
  );
}

export { motion };
