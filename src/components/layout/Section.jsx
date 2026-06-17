export default function Section({ id, isActive, className, children }) {
  const sectionClass = `container ${isActive ? 'active' : ''} ${className ?? ''}`.trim();
  return (
    <section className={sectionClass} id={id}>
      {children}
    </section>
  );
}
