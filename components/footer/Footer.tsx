"use client";

import "./Footer.css";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>
            VERTEX
          </h2>

          <p>
            Premium construction,
            marble, waterproofing,
            painting and interior
            execution environments
            crafted through precision,
            trust and architectural excellence.
          </p>

        </div>

        {/* LINKS */}
        <div className="footer-links">

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/expertise">
            Expertise
          </a>

          <a href="/clients">
            Clients
          </a>

          <a href="/careers">
            Careers
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

        {/* CONTACT */}
        <div className="footer-contact">

          <span>
            hello@vertexconstructionservices.in
          </span>

          <p>
            Luxury execution environments
            across premium residential
            and commercial spaces.
          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <span>
          © 2025 Vertex Construction & Services
        </span>

        <span>
          Crafted Through Precision & Trust
        </span>

      </div>

    </footer>
  );
}