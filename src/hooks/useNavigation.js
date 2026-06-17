import { useState, useCallback } from 'react';

export default function useNavigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [activePopup, setActivePopup] = useState(null);

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
