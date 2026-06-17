import { useState, useCallback } from 'react';

export default function useTheme() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsLightMode((prev) => {
      const next = !prev;
      document.body.classList.toggle('light-mode', next);
      return next;
    });
  }, []);

  return { isLightMode, toggleTheme };
}
