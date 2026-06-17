import TechItem from './TechItem';

export default function TechGrid({ title, items, onTechClick }) {
  return (
    <>
      <h4 className="stat-title" style={{ paddingTop: '1.5rem', textAlign: 'left' }}>{title}</h4>
      <div className="tech-grid">
        {items.map((item) => (
          <TechItem
            key={item.name}
            name={item.name}
            iconUrl={item.icon}
            onTechClick={onTechClick}
          />
        ))}
      </div>
    </>
  );
}
