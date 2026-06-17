export default function AboutStat({ number, label }) {
  return (
    <div className="about-item">
      <div className="abt-text">
        <p className="large-text">{number}</p>
        <p className="small-text">
          {label[0]}
          <br />
          {label[1]}
        </p>
      </div>
    </div>
  );
}
