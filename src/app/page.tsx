"use client"; // Ensure this is a client-side component

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-foreground text-background shadow-md sticky top-0 z-50">
      {/* Navbar container */}
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">RODJEAN</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a
            className="text-sm font-medium hover:underline font-semibold"
            href="https://nextjs.org/About Me"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
          <a
            className="text-sm font-medium hover:underline font-semibold"
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a
            className="text-sm font-medium hover:underline font-semibold"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profesional Experience
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {/* Top Line */}
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          {/* Middle Line */}
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          {/* Bottom Line */}
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 translate-y-[-2px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 translate-y-4"
        } md:hidden bg-foreground text-background px-6 py-4 transition-all duration-300 ease-in-out`}
      >
        <a
          className="block text-sm font-medium py-2 hover:underline"
          href="https://nextjs.org/About Me"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Me
        </a>
        <a
          className="block text-sm font-medium py-2 hover:underline"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
        <a
          className="block text-sm font-medium py-2 hover:underline"
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profesional Experience
        </a>
      </div>
    </header>
  );
}
