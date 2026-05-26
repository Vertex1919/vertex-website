"use client";

import "./CTA.css";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const labelVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const locationsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonsContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="cta">
      {/* PARALLAX BACKGROUND */}
      <motion.div 
        className="cta-background"
        style={{ y: backgroundY }}
      />
      
      <div className="cta-overlay" />

      <motion.div 
        className="cta-content"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p className="cta-label" variants={labelVariants}>
          Let&apos;s Build Something Exceptional
        </motion.p>

        <motion.h2 variants={titleVariants}>
          <span className="title-line-wrapper">
            <motion.span className="title-line" variants={lineVariants}>
              Trusted Across
            </motion.span>
          </span>
          <span className="title-line-wrapper">
            <motion.span className="title-line" variants={lineVariants}>
              Hyderabad & Bengaluru.
            </motion.span>
          </span>
          <span className="title-line-wrapper">
            <motion.span className="title-line" variants={lineVariants}>
              Expanding PAN-India.
            </motion.span>
          </span>
        </motion.h2>

        <motion.div className="cta-locations" variants={locationsVariants}>
          <div className="cta-location">
            <span>Headquarters</span>
            <p>Hyderabad, Telangana</p>
          </div>
          <div className="cta-divider" />
          <div className="cta-location">
            <span>Operations Hub</span>
            <p>Bengaluru, Karnataka</p>
          </div>
        </motion.div>

        <motion.div 
          className="cta-buttons"
          variants={buttonsContainerVariants}
        >
          <motion.div variants={buttonVariants}>
            <Link href="/contact" className="btn-primary">
              Start A Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link href="/clients" className="btn-secondary">
              Read Client Experiences
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* TESTIMONIAL */}
      <motion.div 
        className="cta-testimonial"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={testimonialVariants}
      >
        <blockquote>
          &ldquo;The strength of Vertex lies in their honesty — no false promises, no
          overcommitment, no underdelivery.&rdquo;
        </blockquote>
        <cite>— Developer Partner, Premium Residential Project</cite>
      </motion.div>
    </section>
  );
}
