"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-lg font-semibold tracking-wide
                         bg-gradient-to-r from-white to-gray-300
                         bg-clip-text text-transparent">
          Kartik Garg
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-4 text-gray-300">
          <a href="#about" className="block">About</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
