"use client";

import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* BRAND */}
          <div className="footer-brand">
            <h2>VERTEX</h2>
            <p>
              Premium construction, marble, waterproofing, painting and interior
              execution environments crafted through precision, trust and
              architectural excellence.
            </p>
            <div className="footer-founded">
              <span>Founded 2021</span>
              <span>Hyderabad & Bengaluru</span>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <nav className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/expertise">Expertise</Link>
                <Link href="/clients">Clients</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <nav className="footer-links">
                <Link href="/expertise">Marble & Granite</Link>
                <Link href="/expertise">Waterproofing</Link>
                <Link href="/expertise">Interior Design</Link>
                <Link href="/expertise">Painting</Link>
              </nav>
            </div>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:hello@vertexconstructionservices.in">
                hello@vertexconstructionservices.in
              </a>
            </div>
            <div className="contact-item">
              <span>Phone</span>
              <a href="tel:+917899042875">+91 78990 42875</a>
            </div>
            <div className="contact-item">
              <span>WhatsApp</span>
              <a
                href="https://wa.me/917899042875"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 78990 42875
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>&copy; 2025 Vertex Construction & Services</span>
          <span>Crafted Through Precision & Trust</span>
        </div>
      </div>
    </footer>
  );
}
