"use client";

import { useEffect, useMemo, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  yOffset: number;
}

/**
 * Hook to generate floating particles with client-side only random positions
 * This prevents hydration mismatch between server and client
 */
export function useFloatingParticles(count: number = 20) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    if (!mounted) return [];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 2, // 0-2 seconds delay
      yOffset: Math.random() * -200 - 100, // -100 to -300px
    }));
  }, [count, mounted]);

  return { particles, mounted };
}
