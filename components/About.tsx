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
          <span className="text-white">Artificial Intelligence & Machine Learning</span>.
          I enjoy building intelligent systems, real-time applications,
          and scalable full-stack solutions.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          I have hands-on experience with{" "}
          <span className="text-white">Python, JavaScript, React, Node.js</span>,
          and love experimenting with machine learning models,
          data preprocessing, and modern web technologies.
        </p>
      </motion.div>
    </section>
  );
}
