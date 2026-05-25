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
          I'm a third-year Computer Science (AIML) undergraduate with a passion for
          building software that's not just functional — but purposeful. From scalable
          backend systems to intelligent ML-powered applications, I enjoy working across
          the full stack to bring ideas to life.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          I have hands-on experience with Python, JavaScript, React, and Django, and have
          worked on projects involving REST APIs, machine learning, and real-time systems. 
          Each project pushed me to think not just about writing code, but about designing 
          systems that are efficient, reliable, and built to scale.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Currently, I'm deepening my expertise in data structures, algorithms, and system
          design while exploring the intersection of AI and full-stack engineering. I'm
          always looking for opportunities to work on challenging problems, contribute to
          meaningful projects, and keep growing as a developer.
        </p>
      </motion.div>
    </section>
  );
}
