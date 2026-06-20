"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "🎓",
    title: "Who I Am",
    text: `I am a final-year Computer Science (AI/ML) undergraduate passionate
    about building responsive web applications and solving real-world
    problems through technology. I enjoy working across the full stack,
    turning ideas into practical, user-focused digital experiences.`,
  },
  {
    icon: "🛠️",
    title: "What I Build",
    text: `I have hands-on experience with JavaScript, React.js, Python, and
    Django, and have worked on projects involving REST APIs,
    authentication systems, real-time tracking, and AI-powered
    applications. Through these projects, I have developed a strong
    interest in building scalable and intuitive software solutions.`,
  },
  {
    icon: "🚀",
    title: "Where I'm Headed",
    text: `Currently, I am strengthening my understanding of data structures,
    algorithms, and modern web development while exploring the
    intersection of AI and full-stack engineering. I am always eager to
    learn new technologies, collaborate on meaningful projects, and grow
    as a software developer.`,
  },
];

export default function About() {
  return (
    <section id="about" className="snap-section min-h-screen flex justify-center items-center px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-neon-green uppercase mb-3">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-neon">
            About Me
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-neon-green to-neon-purple" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="surface-card-glow px-6 py-8 flex flex-col items-start"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed text-[15px] text-justify">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}