import { NumberTicker } from '../ui/number-ticker';

export default function AboutStat({ number, label }) {
  const match = number.match(/^([\d.]+)(.*)$/);
  const num = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';

  return (
    <div className="about-item">
      <div className="abt-text">
        <p className="large-text">
          <NumberTicker value={num} className="text-secondary dark:text-secondary" />
          {suffix}
        </p>
        <p className="small-text">
          {label[0]}
          <br />
          {label[1]}
        </p>
      </div>
    </div>
  );
}