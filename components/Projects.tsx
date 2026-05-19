"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Mental Health Chatbot",
    description:
      "A full-stack mental health chatbot and tracking system that enables users to log daily moods and visualize emotional trends. It integrates an NLP-based conversational chatbot using the Gemini API to provide context-aware responses and basic emotional support.",
    tech: [
      "React",
      "TypeScript",
      "Flask",
      "Python",
      "NLP",
      "Gemini API",
    ],
    link: "https://github.com/kartikgarg146/Mental-Health-Chatbot",
  },
  {
    title: "Real-Time Public Transport Tracking System",
    description:
      "A real-time public transport tracking system that displays live vehicle locations on interactive maps using GPS data. Built with a scalable Node.js backend and REST APIs to handle continuous location updates efficiently, ensuring accurate tracking even in low-network conditions.",
    tech: [
      "React Native",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "GPS",
      "Maps API",
    ],
    link: "https://github.com/kartikgarg146/Sadda_Safar-Real-Time-Bus-Tracking-System",
  },
  {
    title: "AI Travel Planner",
    description:
      "An AI-powered travel planning platform that generates personalized itineraries, budget estimates, hotel suggestions, and travel recommendations through a conversational interface. The system uses LLMs and RAG-based document support to deliver smart, context-aware travel assistance.",
    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "Groq API",
      "FAISS",
    ],
    link: "https://ai-travel-planner-kartik.streamlit.app/",
  },
  {
    title: "Plant Disease Detection Using Leaf Images",
    description:
      "An AI-powered plant disease detection system that classifies plant diseases from leaf images using CNN. The model was trained on labeled image datasets and leverages deep learning techniques to achieve high accuracy, enabling early disease detection and prevention in crops.",
    tech: [
      "Python",
      "CNN",
      "Deep Learning",
      "TensorFlow",
      "Image Processing",
    ],
    link: "https://github.com/kartikgarg146",
  },
  {
    title: "Smart Library Management Platform",
    description:
      "A full-stack library management platform designed to digitally manage books, users, and issue/return operations. The platform supports role-based access, efficient book tracking, and a clean responsive UI. Built to ensure scalability, maintainability, and seamless system performance.",
    tech: [
      "React",
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
    ],
    link: "https://github.com/kartikgarg146/Libronexa-Smart-Library-Management-Platform",
  },
  {
    title: "Car Sales Platform",
    description:
      "A car sales platform enabling users to browse available cars, list vehicles for sale, and view detailed car information. The project emphasizes object-oriented programming principles and structured backend logic.",
    tech: [
      "Java",
      "OOPs",
      "JSP / Servlets",
      "MySQL",
    ],
    link: "https://github.com/kartikgarg146",
  },
  {
    title: "File Sharing Platform",
    description:
      "A secure web-based file sharing platform with user authentication, file uploads, and controlled access. The system focuses on data security while maintaining a simple and intuitive user experience.",
    tech: [
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
    ],
    link: "https://github.com/kartikgarg146/Dropico-File-Sharing-Platform",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Projects
        </h2>

        <p className="mt-4 text-lg text-gray-400 text-center">
          A curated selection of projects showcasing my expertise in
          full-stack development, real-time systems, and AI.
        </p>

        {/* PERFECTLY CENTERED GRID */}
        <div
          className="mt-16 grid gap-10 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between h-full
                         max-w-[380px] mx-auto
                         rounded-2xl border border-white/10
                         bg-white/5 backdrop-blur
                         p-6 hover:border-indigo-400/40
                         hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]
                         transition"
            >
              {/* CONTENT */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ALIGNED CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm
                           text-indigo-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
