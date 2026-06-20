"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="snap-section min-h-screen flex justify-center items-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center"
      >
        {/* Heading */}
        <span className="inline-block text-xs font-semibold tracking-[0.3em] text-neon-green uppercase mb-3">
          Let&apos;s Connect
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-neon">
          Get In Touch
        </h2>
        <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-neon-green to-neon-purple" />

        <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
          Open to software engineering, frontend, and AI/ML opportunities.
          Feel free to reach out for collaborations, projects, or internships.
        </p>

        {/* Contact Card */}
        <div className="mt-12 surface-card-glow px-8 py-10 flex flex-col items-center gap-6">
          <p className="text-foreground-muted text-sm">
            Reach out via email or connect on social
          </p>

          {/* Icons row */}
          <div className="flex gap-6">
            <motion.a
              href="mailto:gargkartik623@gmail.com"
              aria-label="Email Kartik"
              whileHover={{ y: -4 }}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(57,255,136,0.3)]"
            >
              <FaEnvelope size={20} />
            </motion.a>

            <motion.a
              href="https://github.com/kartikgarg146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ y: -4 }}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(57,255,136,0.3)]"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/kartikgarg146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ y: -4 }}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-neon-purple/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <FaLinkedin size={22} />
            </motion.a>
          </div>

          <p className="text-white/70 text-sm font-mono">
            gargkartik623@gmail.com
          </p>
        </div>

        {/* Footer */}
        <p className="mt-14 text-sm text-foreground-muted/70">
          © {new Date().getFullYear()} Kartik Garg. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
