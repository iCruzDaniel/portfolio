import Icon from './Icon';

export default function ContactButton({ onNavigate, label = 'Let\'s talk' }) {
  return (
    <div className="btn-con">
      <button type="button" className="main-btn contact-btn" onClick={() => onNavigate('contact')}>
        <span className="btn-text">{label}</span>
        <span className="btn-icon"><Icon name="envelope" /></span>
      </button>
    </div>
  );
}
