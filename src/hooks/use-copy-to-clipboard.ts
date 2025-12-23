"use client";

import { useCallback, useState } from "react";

/**
 * Hook for copy to clipboard functionality with feedback
 */
export function useCopyToClipboard(feedbackDuration = 2000) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), feedbackDuration);
      return true;
    } catch {
      return false;
    }
  }, [feedbackDuration]);

  const isCopied = useCallback((key: string) => copiedKey === key, [copiedKey]);

  return { copy, isCopied, copiedKey };
}
