"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiDjango,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiScikitlearn,
} from "react-icons/si";
import {
  TbApi,
  TbBrain,
  TbDatabase,
  TbBinaryTree,
  TbStack2,
  TbNetwork,
  TbServer,
  TbMessageChatbot,
  TbBulb,
} from "react-icons/tb";
import { FaC } from "react-icons/fa6";

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C", icon: FaC },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: TbDatabase },
      { name: "HTML & CSS", icon: SiHtml5 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning", icon: TbBrain },
      { name: "NLP", icon: TbMessageChatbot },
      { name: "RAG Pipelines", icon: TbBulb },
      { name: "LLM Integration", icon: TbServer },
      { name: "Prompt Engineering", icon: TbBulb },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "Data Structures", icon: TbBinaryTree },
      { name: "OOP", icon: TbStack2 },
      { name: "DBMS", icon: TbDatabase },
      { name: "Operating Systems", icon: SiLinux },
      { name: "Computer Networks", icon: TbNetwork },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="snap-section min-h-screen flex justify-center items-center px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full text-center"
      >
        {/* Heading */}
        <span className="inline-block text-xs font-semibold tracking-[0.3em] text-neon-purple uppercase mb-3">
          What I Work With
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-neon">
          Skills
        </h2>
        <p className="mt-4 text-lg text-foreground-muted">
          Technologies and tools I work with
        </p>

        {/* Groups */}
        <div className="mt-16 space-y-12 text-left">
          {SKILL_GROUPS.map((group, gIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gIndex * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold tracking-wider text-neon-green uppercase mb-5 flex items-center gap-3">
                {group.title}
                <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="surface-card-glow flex items-center gap-3 px-4 py-3.5 text-white"
                    >
                      <Icon className="text-xl text-neon-green shrink-0" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
