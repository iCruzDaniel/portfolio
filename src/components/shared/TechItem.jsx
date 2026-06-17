export default function TechItem({ name, iconUrl, onTechClick }) {
  return (
    <div className="tech-item" onClick={() => onTechClick?.(name)}>
      <img src={iconUrl} alt={name} style={{ cursor: 'pointer' }} />
      <span>{name}</span>
    </div>
  );
}
