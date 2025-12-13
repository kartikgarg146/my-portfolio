"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get In Touch
        </h2>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Whether you want to discuss a project, opportunity, or just
          say hello — my inbox is always open.
        </p>

        {/* Contact Options */}
        <div className="mt-12 flex flex-col items-center gap-6 text-gray-300">
          {/* Email */}
          <a
            href="mailto:kartikgarg146@gmail.com"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <FaEnvelope className="text-indigo-400" />
            kartikgarg146@gmail.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-8 pt-4">
            <a
              href="https://github.com/kartikgarg146"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://linkedin.com/in/kartikgarg146"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-14 text-sm text-gray-500">
          © {new Date().getFullYear()} Kartik Garg. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
