export default function ThemeToggle({ onToggle }) {
  return (
    <div className="theme-btn" onClick={onToggle}>
      <i className="fas fa-adjust"></i>
    </div>
  );
}
