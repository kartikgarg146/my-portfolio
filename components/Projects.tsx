"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Mental Health Chatbot",
    description:
      "A full-stack mental health chatbot and tracking system that enables users to log daily moods and visualize emotional trends. It integrates an NLP-based conversational chatbot using the Gemini API to provide context-aware responses and basic emotional support.",
    tech: ["React", "TypeScript", "Flask", "Python", "NLP", "Gemini API"],
    link: "https://webswellspring.netlify.app/",
  },
  {
    title: "Real-Time Public Transport Tracking System",
    description:
      "A real-time public transport tracking system that displays live vehicle locations on interactive maps using GPS data. Built with a scalable Node.js backend and REST APIs to handle continuous location updates efficiently, ensuring accurate tracking even in low-network conditions.",
    tech: ["React Native", "Node.js", "JavaScript", "REST APIs", "GPS", "Maps API"],
    link: "https://github.com/kartikgarg146/Sadda_Safar-Real-Time-Bus-Tracking-System",
  },
  {
    title: "AI Travel Planner",
    description:
      "An AI-powered travel planning platform that generates personalized itineraries, budget estimates, hotel suggestions, and travel recommendations through a conversational interface. The system uses LLMs and RAG-based document support to deliver smart, context-aware travel assistance.",
    tech: ["Python", "Streamlit", "LangChain", "Groq API", "FAISS"],
    link: "https://ai-travel-planner-kartik.streamlit.app/",
  },
  {
    title: "Plant Disease Detection Using Leaf Images",
    description:
      "An AI-powered plant disease detection system that classifies plant diseases from leaf images using CNN. The model was trained on labeled image datasets and leverages deep learning techniques to achieve high accuracy, enabling early disease detection and prevention in crops.",
    tech: ["Python", "CNN", "Deep Learning", "TensorFlow", "Image Processing"],
    link: "https://github.com/kartikgarg146",
  },
  {
    title: "Smart Library Management Platform",
    description:
      "A full-stack library management platform designed to digitally manage users, books, and issue/return operations. The platform supports role-based access, efficient book tracking, and a clean responsive UI. Built to ensure scalability, maintainability, and seamless system performance.",
    tech: ["React", "Node.js", "TypeScript", "Express", "MongoDB"],
    link: "https://github.com/kartikgarg146/Libronexa-Smart-Library-Management-Platform",
  },
  {
    title: "Car Sales Platform",
    description:
      "A car sales platform enabling users to browse available cars, list vehicles for sale, and view detailed car information. The project emphasizes object-oriented programming principles and structured backend logic.",
    tech: ["Java", "OOPs", "JSP / Servlets", "MySQL"],
    link: "https://github.com/kartikgarg146",
  },
  {
    title: "File Sharing Platform",
    description:
      "A secure web-based file sharing platform with user authentication, file uploads, and controlled access. The system focuses on data security while maintaining a simple and intuitive user experience.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    link: "https://github.com/kartikgarg146/Dropico-File-Sharing-Platform",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="snap-section min-h-screen px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-neon-green uppercase mb-3">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-neon">
            Projects
          </h2>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            A curated selection of projects showcasing my expertise in
            full-stack development, real-time systems, and AI.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* center line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-neon-green via-neon-purple to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={project.title}
                  className="md:grid md:grid-cols-2 md:gap-12 relative md:py-4"
                >
                  {/* center dot - desktop only */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background border-2 border-neon-green shadow-[0_0_12px_rgba(57,255,136,0.6)] z-10" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className={`surface-card-glow p-6 md:p-7 ${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <span className="text-xs font-mono text-neon-purple">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-foreground-muted text-sm leading-relaxed text-justify">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neon-green hover:text-neon-purple transition-colors"
                    >
                      View Project →
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
