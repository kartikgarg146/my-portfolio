"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </h2>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          I’m a third-year engineering student specializing in{" "}
          <span className="text-white">
            Artificial Intelligence & Machine Learning
          </span>
          , with a strong interest in web and backend development. I enjoy
          problem-solving and building clean, efficient, and scalable
          applications.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          I have worked with{" "}
          <span className="text-white">
            Python, JavaScript, React, and Node.js
          </span>{" "}
          while building academic and personal projects, and I am
          continuously learning modern web technologies and system
          development concepts.
        </p>
      </motion.div>
    </section>
  );
}
