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
          I am a Computer Science (AIML) undergraduate currently in my third year,
          with a strong foundation in software development and problem-solving.
          I am particularly interested in building scalable backend systems and
          full-stack web applications that solve real-world problems.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          I have hands-on experience with Python, JavaScript, React, and Django,
          and have worked on projects involving REST APIs, machine learning, and
          real-time systems. I am continuously strengthening my data structures
          and algorithms skills while exploring modern technologies to build
          efficient and reliable software solutions.
        </p>
      </motion.div>
    </section>
  );
}
