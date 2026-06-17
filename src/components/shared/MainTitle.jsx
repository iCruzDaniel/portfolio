export default function MainTitle({ prefix, highlighted, bgText }) {
  return (
    <div className="main-title">
      <h2>
        {prefix} <span>{highlighted}</span>
        <span className="bg-text">{bgText}</span>
      </h2>
    </div>
  );
}
