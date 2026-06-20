"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import type { Container, Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadAll(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((err) => {
        console.error("Particles failed to init:", err);
      });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded:", container);
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: {
          color: "rgba(0,0,0,0)",
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, width: 1920, height: 1080 },
          },
          color: {
            value: ["#38bdf8", "#818cf8", "#22d3ee"],
          },
          links: {
            enable: true,
            color: "#94a3b8",
            distance: 170,
            opacity: 0.8,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.2,
            outModes: { default: "bounce" },
          },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}