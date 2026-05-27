"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          I am a third-year Computer Science (AI/ML) undergraduate passionate
          about building responsive web applications and solving real-world
          problems through technology. I enjoy working across the full stack,
          turning ideas into practical, user-focused digital experiences.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          I have hands-on experience with JavaScript, React.js, Python, and
          Django, and have worked on projects involving REST APIs,
          authentication systems, real-time tracking, and AI-powered
          applications. Through these projects, I have developed a strong
          interest in building scalable and intuitive software solutions.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          Currently, I am strengthening my understanding of data structures,
          algorithms, and modern web development while exploring the
          intersection of AI and full-stack engineering. I am always eager to
          learn new technologies, collaborate on meaningful projects, and grow
          as a software developer.
        </p>
      </motion.div>
    </section>
  );
}
