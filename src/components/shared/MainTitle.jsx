import { TypingAnimation } from '../ui/typing-animation';
import { useI18n } from '../../i18n';

export default function MainTitle({ prefix, highlighted, bgText, isActive = true }) {
  const { lang } = useI18n();
  const fullText = `${prefix ? `${prefix} ` : ''}${highlighted}`;
  return (
    <div className="main-title">
      <h2>
        <TypingAnimation
          key={`${lang}-${isActive ? 'active' : 'idle'}`}
          as="span"
          words={[fullText]}
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
