"use client";

import { useState, useCallback } from "react";

interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

/**
 * Hook for contact form submission handling
 */
export function useContactForm(resetDelay = 3000) {
  const [state, setState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const submit = useCallback(async (formData: FormData) => {
    setState({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setState({ isSubmitting: false, isSubmitted: true, error: null });
      
      // Reset success state after delay
      setTimeout(() => {
        setState({ isSubmitting: false, isSubmitted: false, error: null });
      }, resetDelay);
      
      return true;
    } catch (error) {
      setState({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: error instanceof Error ? error.message : "Something went wrong" 
      });
      return false;
    }
  }, [resetDelay]);

  const reset = useCallback(() => {
    setState({ isSubmitting: false, isSubmitted: false, error: null });
  }, []);

  return { ...state, submit, reset };
}
