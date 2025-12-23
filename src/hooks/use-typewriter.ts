"use client";

import { useEffect, useState } from "react";

/**
 * Hook to create a typewriter effect cycling through an array of strings
 */
export function useTypewriter(words: readonly string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentIndex];
    
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
