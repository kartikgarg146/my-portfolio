"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "C",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Django",
  "REST APIs",
  "Machine Learning",
  "MongoDB",
  "MySQL",
  "HTML & CSS",
  "Git & GitHub",
  "Java",
  "Data Structures",
  "System Design",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Skills
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Technologies and tools I work with
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10
                         bg-white/5 backdrop-blur
                         px-4 py-3 text-gray-200
                         hover:border-cyan-400/40
                         hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]
                         transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
