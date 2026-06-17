export default function ContactItem({ icon, label, value }) {
  return (
    <div className="contact-item">
      <div className="icon">
        <i className={icon}></i>
        <span>{label}</span>
      </div>
      <p>
        <span>{value}</span>
      </p>
    </div>
  );
}
