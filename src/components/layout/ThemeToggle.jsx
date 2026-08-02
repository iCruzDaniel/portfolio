import Icon from '../shared/Icon';

export default function ThemeToggle({ onToggle }) {
  return (
    <div className="theme-btn" onClick={onToggle}>
      <Icon name="adjust" />
    </div>
  );
}
