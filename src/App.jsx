import './App.scss';

import useNavigation from './hooks/useNavigation';

import { GradientButtonGroup } from './components/ui/gradient-button-group';
import CertPopup from './components/shared/CertPopup';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
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

      <GradientButtonGroup
        activeSection={activeSection}
        onNavigate={navigateTo}
        className="gradient-dock"
      />
      <CertPopup skillName={activePopup} onClose={closePopup} />
    </>
  );
}
