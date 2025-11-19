"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Sanjeevan's website</Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:underline hover:decoration-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:underline hover:decoration-white transition">
            About Us
          </Link>
          <Link href="/projects" className="hover:underline hover:decoration-white transition">
            Projects
          </Link>

          {/* Dropdown */}
{/* Dropdown - Hover Only */}


          <Link href="/blog" className="hover:underline hover:decoration-white transition">Blogs</Link>
          <Link href="/faq" className="hover:underline hover:decoration-white transition">FAQ</Link>
          <Link href="/contact" className="hover:underline hover:decoration-white transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 space-y-4">
          <Link href="/" className="block hover:underline">Home</Link>
          <Link href="/about" className="block hover:underline">About Us</Link>
          <Link href="/projects" className="block hover:underline">Projects</Link>
          <Link href="/blog" className="block hover:underline">Blogs</Link>
          <Link href="/faq" className="block hover:underline">FAQ</Link>
          <Link href="/contact" className="block hover:underline">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
