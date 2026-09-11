import './App.scss';

import useTheme from './hooks/useTheme';
import useNavigation from './hooks/useNavigation';

import Navigation from './components/layout/Navigation';
import { AnimatedThemeToggler } from './components/ui/animated-theme-toggler';
import CertPopup from './components/shared/CertPopup';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const { isLightMode, setTheme } = useTheme();
  const { activeSection, navigateTo, activePopup, openPopup, closePopup } = useNavigation();

  return (
    <>
      <HomeSection isActive={activeSection === 'home'} onNavigate={navigateTo} />

      <main>
        <AboutSection
          isActive={activeSection === 'about'}
          onTechClick={openPopup}
        />
        <PortfolioSection isActive={activeSection === 'portfolio'} onNavigate={navigateTo} />
        <ContactSection isActive={activeSection === 'contact'} />
      </main>

      <Navigation activeSection={activeSection} onNavigate={navigateTo} />
      <AnimatedThemeToggler
        theme={isLightMode ? 'light' : 'dark'}
        onThemeChange={(next) => setTheme(next === 'light')}
        className="theme-btn"
        variant="circle"
      />
      <CertPopup skillName={activePopup} onClose={closePopup} />
    </>
  );
}
