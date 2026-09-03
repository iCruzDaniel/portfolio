import DownloadButton from '../shared/DownloadButton';
import ContactButton from '../shared/ContactButton';

export default function HomeSection({ isActive, onNavigate }) {
  return (
    <header className={`container header${isActive ? ' active' : ''}`} id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img
              style={{ borderRadius: '12px' }}
              src="img/Perfil.webp"
              alt="Daniel Cruz"
              width={749}
              height={748}
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
        <div className="right-header">
          <div className="rt-heading">
            <h1 className="name">
              Hi, I'm <span>Daniel Cruz. </span>
              An Engineering Professional.
            </h1>
          </div>
          <div className="rt-cta">
            <ContactButton onNavigate={onNavigate} />
            <DownloadButton />
          </div>
          <div className="rt-paragraph">
            <p>
              I'm a Mechatronics Engineering & Systems Engineering Professional
              focused on applying my skills in software development, microcontroller programming,
              and AI in industry. Passionate about designing hardware-software solutions to
              real-world problems.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
