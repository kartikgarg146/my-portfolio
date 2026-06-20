"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const BADGES = [
  { icon: "🧠", label: "AIML" },
  { icon: "⚙️", label: "Full-Stack" },
  { icon: "🏆", label: "SIH'25 Finalist" },
];

export default function Hero() {
  return (
    <section className="snap-section min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8"
      >
        {/* animated glow ring */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-neon-green to-neon-purple"
        />
        <Image
          src="/profile.jpg"
          alt="Kartik Garg"
          width={160}
          height={160}
          className="rounded-full relative z-10 border-2 border-white/20 object-cover"
          priority
        />
      </motion.div>

      {/* NAME */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.15}
        className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-300 to-cyan-400 bg-clip-text text-transparent"
      >
        KARTIK GARG
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="mt-4 text-base sm:text-lg md:text-xl text-foreground-muted whitespace-nowrap"
      >
        AI &amp; ML Engineer &middot; Full-Stack Developer &middot; Smart India Hackathon 2025 Finalist
      </motion.p>

      {/* BADGES */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.45}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        {BADGES.map((badge) => (
          <span
            key={badge.label}
            className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white backdrop-blur-sm whitespace-nowrap transition-all duration-300 hover:border-neon-green/50 hover:shadow-[0_0_15px_rgba(57,255,136,0.25)]"
          >
            {badge.icon} {badge.label}
          </span>
        ))}
      </motion.div>

      {/* RESUME */}
      <motion.a
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 inline-flex items-center px-6 py-2.5 rounded-xl
                   bg-white text-black font-semibold text-sm
                   shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
      >
        Resume
      </motion.a>
    </section>
  );
}
