import './App.scss';

import useTheme from './hooks/useTheme';
import useNavigation from './hooks/useNavigation';

import Navigation from './components/layout/Navigation';
import ThemeToggle from './components/layout/ThemeToggle';
import CertPopup from './components/shared/CertPopup';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const { toggleTheme } = useTheme();
  const { activeSection, navigateTo, activePopup, openPopup, closePopup } = useNavigation();

  return (
    <>
      <HomeSection isActive={activeSection === 'home'} />

      <main>
        <AboutSection
          isActive={activeSection === 'about'}
          onTechClick={openPopup}
        />
        <PortfolioSection isActive={activeSection === 'portfolio'} />
        <BlogSection isActive={activeSection === 'blogs'} />
        <ContactSection isActive={activeSection === 'contact'} />
      </main>

      <Navigation activeSection={activeSection} onNavigate={navigateTo} />
      <ThemeToggle onToggle={toggleTheme} />
      <CertPopup skillName={activePopup} onClose={closePopup} />
    </>
  );
}
