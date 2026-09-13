import { TypingAnimation } from '../ui/typing-animation';

export default function MainTitle({ prefix, highlighted, bgText, isActive = true }) {
  return (
    <div className="main-title">
      <h2>
        <TypingAnimation
          key={isActive ? 'active' : 'idle'}
          as="span"
          words={[`${prefix} ${highlighted}`]}
          duration={60}
          delay={100}
          amount={1}
          highlight={highlighted}
          className="leading-none"
          style={{ color: 'inherit' }}
        />
        <span className="bg-text">{bgText}</span>
      </h2>
    </div>
  );
}
