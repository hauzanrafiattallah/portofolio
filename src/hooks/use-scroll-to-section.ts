"use client";

import { useCallback } from "react";

/**
 * Hook to handle smooth scrolling to sections
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return scrollToSection;
}
