"use client";

import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link href="/" className="logo-section">

          <img
            src="/images/logo.webp"
            alt="Vertex Logo"
          />

          <div className="logo-text">

            <h2>VERTEX</h2>

            <span>
              CONSTRUCTIONS & SERVICES
            </span>

          </div>

        </Link>

        {/* NAV LINKS */}
        <nav className="nav-links">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/expertise">Expertise</Link>

          <Link href="/clients">Clients</Link>

          <Link href="/careers">Careers</Link>

          <Link href="/contact">Contact</Link>

        </nav>

      </div>

    </header>
  );
}