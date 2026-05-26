"use client";

import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import OptimizedImage from "@/components/optimized-image/OptimizedImage";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.9]);

  // Animation variants
  const labelVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonsContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 1.5 },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="hero-section">
      {/* HERO IMAGE WITH PARALLAX */}
      <motion.div 
        className="hero-image-wrapper"
        style={{ y: imageY, scale: imageScale }}
      >
        <OptimizedImage
          src="/images/hero/hero.webp"
          alt="Premium Construction Environment"
          priority
          className="hero-image"
        />
      </motion.div>

      {/* OVERLAY WITH SCROLL-LINKED OPACITY */}
      <motion.div 
        className="hero-overlay"
        style={{ opacity: overlayOpacity }}
      />

      {/* CONTENT WITH PARALLAX */}
      <motion.div 
        className="hero-content"
        style={{ y: contentY }}
        initial="hidden"
        animate="visible"
      >
        {/* LABEL */}
        <motion.p className="hero-label" variants={labelVariants}>
          Premium Construction & Interior Services
        </motion.p>

        {/* TITLE WITH LINE-BY-LINE REVEAL */}
        <motion.h1 variants={titleVariants}>
          <span className="title-line-wrapper">
            <motion.span className="title-line" variants={lineVariants}>
              Finishing Excellence.
            </motion.span>
          </span>
          <span className="title-line-wrapper">
            <motion.span className="title-line" variants={lineVariants}>
              Built to Last.
            </motion.span>
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.span className="hero-subtext" variants={subtextVariants}>
          India&apos;s top developers don&apos;t settle at the structure. They settle
          at the finish. That&apos;s where Vertex Construction Services begins.
          From marble alignment to waterproofing precision — we deliver what we
          promise, every single time.
        </motion.span>

        {/* BUTTONS */}
        <motion.div 
          className="hero-buttons"
          variants={buttonsContainerVariants}
        >
          <motion.a 
            href="/contact" 
            className="btn-primary"
            variants={buttonVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          <motion.a
            href="https://wa.me/917899042875"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            variants={buttonVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            WhatsApp Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        className="hero-scroll"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
