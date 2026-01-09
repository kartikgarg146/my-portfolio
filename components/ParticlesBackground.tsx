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
    }).then(() => {
      setInit(true);
    } );
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: {
            color: "#020617",
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true },
            },
            color: {
              value: ["#38bdf8", "#818cf8", "#22d3ee"],
            },
            links: {
              enable: true,
              color: "#64748b",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              outModes: { default: "bounce" },
            },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
