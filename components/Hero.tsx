"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-50" />
        <Image
          src="/profile.jpg"
          alt="Kartik Garg"
          width={160}
          height={160}
          className="rounded-full relative z-10 border border-white/20"
        />
      </motion.div>

      {/* NAME */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-white via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
          KARTIK GARG
        </span>
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
        AI & ML Engineer · Full-Stack Developer · Smart India Hackathon 2025 Finalist
      </p>

      {/* BADGES */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
          🧠 AIML
        </span>
        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
          ⚙️ Full-Stack
        </span>
        <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
          🏆 SIH’25 Finalist
        </span>
      </div>

      {/* RESUME */}
      <a
        href="/resume.pdf"
        download
        className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-xl
                   bg-white text-black font-medium hover:scale-105 transition"
      >
        <HiDownload />
        Download Resume
      </a>
    </section>
  );
}
