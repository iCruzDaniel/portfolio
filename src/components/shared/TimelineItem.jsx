export default function TimelineItem({ icon, duration, title, subtitle, description }) {
  return (
    <div className="timeline-item">
      <div className="tl-icon">
        <i className={icon}></i>
      </div>
      <p className="tl-duration">{duration}</p>
      <h5>{title}<span> - {subtitle}</span></h5>
      <p>{description}</p>
    </div>
  );
}
