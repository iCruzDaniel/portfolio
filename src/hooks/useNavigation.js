import { useState, useCallback, useLayoutEffect } from 'react';

export default function useNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [activePopup, setActivePopup] = useState(null);

  // Mobile: secciones apiladas (position: relative) — al activar, volver al inicio
  useLayoutEffect(() => {
    document.getElementById(activeSection)?.scrollIntoView({ block: 'start' });
  }, [activeSection]);

  const navigateTo = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setActivePopup(null);
  }, []);

  const openPopup = useCallback((skillName) => {
    setActivePopup(skillName);
  }, []);

  const closePopup = useCallback(() => {
    setActivePopup(null);
  }, []);

  return { activeSection, navigateTo, activePopup, openPopup, closePopup };
}
