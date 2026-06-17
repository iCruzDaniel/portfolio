const navItems = [
  { id: 'home', icon: 'fas fa-home' },
  { id: 'about', icon: 'fas fa-user' },
  { id: 'portfolio', icon: 'fas fa-briefcase' },
  // blog hidden but kept for future use
  // { id: 'blogs', icon: 'far fa-newspaper' },
  { id: 'contact', icon: 'fas fa-envelope-open' },
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
          <i className={item.icon}></i>
        </div>
      ))}
    </div>
  );
}
