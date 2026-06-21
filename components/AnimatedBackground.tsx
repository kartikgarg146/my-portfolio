"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-black" />

      {/* Blob 1 */}
      <motion.div
        className="absolute top-[-20%] left-[-15%] w-[500px] h-[500px]
                   rounded-full bg-gradient-to-r
                   from-indigo-500 via-purple-500 to-cyan-400
                   opacity-25 blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px]
                   rounded-full bg-gradient-to-r
                   from-cyan-400 via-sky-500 to-indigo-500
                   opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 (subtle center glow) */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[400px] h-[400px]
                   rounded-full bg-gradient-to-r
                   from-purple-500 to-indigo-500
                   opacity-15 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}