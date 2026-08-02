import Icon from './Icon';

export default function ContactItem({ icon, label, value }) {
  return (
    <div className="contact-item">
      <div className="icon">
        <Icon name={icon} />
        <span>{label}</span>
      </div>
      <p>
        <span>{value}</span>
      </p>
    </div>
  );
}
