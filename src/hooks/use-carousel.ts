"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Hook for carousel/testimonials with auto-play functionality
 */
export function useCarousel(itemCount: number, autoPlayInterval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next, autoPlayInterval]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    pauseAutoPlay,
    resumeAutoPlay,
  };
}
