// components/Navbar.js
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold text-black">
          <Link href="/">
            Shahab
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#contact" className="text-gray-600 hover:text-black transition">
            Contact
          </Link>
          <Link href="#services" className="text-gray-600 hover:text-black transition">
            Services
          </Link>
          <Link href="#skills" className="text-gray-600 hover:text-black transition">
            Skills
          </Link>
          <Link href="#skills" className="text-gray-600 hover:text-black transition">
            About
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-black transition">
            Projects
          </Link>
          <Link href="#resume" className="text-gray-600 hover:text-black transition">
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="#about" className="text-gray-600 hover:text-black transition">
            About
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-black transition">
            Projects
          </Link>
          <Link href="#skills" className="text-gray-600 hover:text-black transition">
            Skills
          </Link>
          <Link href="#cv" className="text-gray-600 hover:text-black transition">
            CV
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-black transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}