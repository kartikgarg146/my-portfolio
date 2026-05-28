"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Open to software engineering, frontend, and AI/ML opportunities.
          Feel free to reach out for collaborations, projects, or internships.
        </p>

        {/* Contact Options */}
        <div className="mt-12 flex flex-col items-center gap-6 text-gray-300">
          {/* Email */}
          <a
            href="mailto:gargkartik623@gmail.com"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaEnvelope className="text-indigo-400" />
            gargkartik623@gmail.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-8 pt-4">
            <a
              href="https://github.com/kartikgarg146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://linkedin.com/in/kartikgarg146"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-14 text-sm text-gray-500">© {new Date().getFullYear()} Kartik Garg. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
