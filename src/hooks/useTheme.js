import { useState, useEffect, useCallback } from 'react';

function getInitialMode() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved === 'light';
  } catch (_) {
    /* private browsing — ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  return false;
}

export default function useTheme() {
  const [isLightMode, setIsLightMode] = useState(getInitialMode);

  // Keep body class in sync
  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  // Listen for OS theme changes — ignore if user has a manual override
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: light)');
    if (!mq?.addEventListener) return;

    const handler = () => {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return; // manual override — ignore OS
      } catch (_) {
        /* private browsing — ignore */
      }
      setIsLightMode(mq.matches);
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('theme', next ? 'light' : 'dark');
      } catch (_) {
        /* private browsing — ignore */
      }
      return next;
    });
  }, []);

  return { isLightMode, toggleTheme };
}
