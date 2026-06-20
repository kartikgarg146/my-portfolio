"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "backdrop-blur-md bg-background/30 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5"
        >
          <span className="w-7 h-7 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </span>
          <span className="text-xl font-bold tracking-tight text-gradient-neon drop-shadow-[0_0_12px_rgba(57,255,136,0.25)]">
            Kartik Garg
          </span>
        </motion.a>

        {/* Right side: Resume icon + nav links + Mobile button */}
        <div className="flex items-center gap-3">
          {/* Desktop Menu (Resume + links) */}
          <div className="hidden md:flex items-center gap-3 text-sm text-white">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.08 }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(57,255,136,0.3)]"
            >
              <HiOutlineDocumentArrowDown size={18} />
            </motion.a>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-neon-green/50 hover:text-white hover:shadow-[0_0_15px_rgba(57,255,136,0.25)]"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white text-2xl relative z-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-background/90 border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-3 text-white">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-center transition-all duration-300 hover:border-neon-green/50 hover:text-glow-green"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}