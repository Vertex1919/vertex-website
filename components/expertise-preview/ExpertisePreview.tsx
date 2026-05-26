"use client";

import "./ExpertisePreview.css";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExpertisePreview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const services = [
    {
      id: "01",
      title: "Marble, Tile & Granite",
      description: "Flawless alignment, precision grouting, polished finishes",
      image: "/images/expertise/marble.webp",
    },
    {
      id: "02",
      title: "Waterproofing Solutions",
      description: "Bathrooms, terraces, basements, facades — sealed for decades",
      image: "/images/expertise/waterproofing.webp",
    },
    {
      id: "03",
      title: "Interior Designing",
      description: "Corporate lobbies to premium residences — function meets form",
      image: "/images/expertise/interiors.webp",
    },
    {
      id: "04",
      title: "Premium Painting",
      description: "Weather-resistant exteriors, rich interiors, strict surface preparation",
      image: "/images/expertise/painting.webp",
    },
  ];

  const headerLeftVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headerRightVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  return (
    <section ref={sectionRef} className="expertise-preview">
      {/* SECTION HEADER */}
      <div className="expertise-header">
        <motion.div 
          className="expertise-header-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerLeftVariants}
        >
          <p className="section-label">Our Expertise</p>
          <h2>
            Four specialised verticals.
            <br />
            One accountable partner.
          </h2>
        </motion.div>
        <motion.div 
          className="expertise-header-right"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerRightVariants}
        >
          <p>
            Finishing services built for India&apos;s premium developers. Every
            surface Vertex touches is governed by the same principle — premium
            methods, proven materials, complete accountability.
          </p>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/expertise" className="btn-secondary">
              View All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SERVICES GRID */}
      <motion.div 
        className="services-grid"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={gridVariants}
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={cardVariants}>
            <Link href="/expertise" className="service-card">
              <div className="service-image">
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="service-overlay" />
              </div>
              <div className="service-content">
                <span className="service-number">{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
