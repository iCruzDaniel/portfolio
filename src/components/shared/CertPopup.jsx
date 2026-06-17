import certificates from '../../data/certificates';

export default function CertPopup({ skillName, onClose }) {
  if (!skillName) return null;

  const cert = certificates[skillName];
  if (!cert) return null;

  return (
    <>
      <div className="popup-overlay" style={{ display: 'block' }} onClick={onClose}></div>
      <div className="popup-modal" style={{ display: 'block' }}>
        <button className="popup-close" onClick={onClose}>&times;</button>
        <div className="popup-title">{skillName}</div>
        {cert.imageUrl ? (
          <img src={cert.imageUrl} alt={skillName} />
        ) : (
          <div className="popup-desc">
            <i className="fa-solid fa-bug"></i>
            No displonible.
          </div>
        )}
      </div>
    </>
  );
}
