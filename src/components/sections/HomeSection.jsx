import DownloadButton from '../shared/DownloadButton';

export default function HomeSection({ isActive }) {
  return (
    <header className={`container header${isActive ? ' active' : ''}`} id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img style={{ borderRadius: '12px' }} src="img/Perfil.jpeg" alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Daniel Cruz.</span>
            A Engineer Professional.
          </h1>
          <p>
            I'm a Mechatronics Engineering & Systems Engineering Professional
            focused on applying my skills in software development, microcontroller programming,
            and AI in industry. Passionate about designing hardware-software solutions to
            real-world problems.
          </p>
          <DownloadButton />
        </div>
      </div>
    </header>
  );
}
