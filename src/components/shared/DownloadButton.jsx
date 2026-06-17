export default function DownloadButton({ href = 'https://drive.google.com/file/d/117vvIiug_zX1cD_Ell7icEdbvzZTjAOJ/view?usp=sharing' }) {
  return (
    <div className="btn-con">
      <a href={href} target="_blank" rel="noopener noreferrer" className="main-btn">
        <span className="btn-text">Download CV</span>
        <span className="btn-icon"><i className="fas fa-download"></i></span>
      </a>
    </div>
  );
}
