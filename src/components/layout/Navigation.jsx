import Icon from '../shared/Icon';

const navItems = [
  { id: 'home', icon: 'home' },
  { id: 'about', icon: 'user' },
  { id: 'portfolio', icon: 'briefcase' },
  // blog hidden but kept for future use
  // { id: 'blogs', icon: 'newspaper' },
  { id: 'contact', icon: 'envelope-open' },
];

export default function Navigation({ activeSection, onNavigate }) {
  return (
    <div className="controls">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`control${activeSection === item.id ? ' active-btn' : ''}`}
          data-id={item.id}
          onClick={() => onNavigate(item.id)}
        >
          <Icon name={item.icon} />
        </div>
      ))}
    </div>
  );
}
