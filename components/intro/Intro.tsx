"use client";

import "./Intro.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const featuresContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  return (
    <section ref={sectionRef} className="intro">
      <div className="intro-container">
        {/* LEFT SIDE */}
        <motion.div 
          className="intro-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p className="intro-label" variants={labelVariants}>
            The Vertex Standard
          </motion.p>
          <motion.h2 variants={titleVariants}>
            <span className="line-wrapper">
              <motion.span className="line-text" variants={lineVariants}>
                One standard.
              </motion.span>
            </span>
            <span className="line-wrapper">
              <motion.span className="line-text" variants={lineVariants}>
                One commitment.
              </motion.span>
            </span>
            <span className="line-wrapper">
              <motion.span className="line-text" variants={lineVariants}>
                Excellence.
              </motion.span>
            </span>
          </motion.h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div 
          className="intro-right"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={featuresContainerVariants}
        >
          <div className="intro-features">
            {[
              {
                number: "01",
                title: "Straight Commitments",
                description: "We say what we'll do. We do what we say. Nothing more, nothing less.",
              },
              {
                number: "02",
                title: "Expert Workforce",
                description: "Skilled labourers. Experienced engineers. Decisive project managers — all operating under a single quality framework.",
              },
              {
                number: "03",
                title: "Premium Methods & Materials",
                description: "No substitutions. No shortcuts. Industry-leading materials, modern techniques, and documented quality control at every stage.",
              },
            ].map((feature) => (
              <motion.div 
                key={feature.number}
                className="intro-feature"
                variants={featureVariants}
              >
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-line" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
