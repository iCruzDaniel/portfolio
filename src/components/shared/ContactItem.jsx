import Icon from './Icon';
import { TypingAnimation } from '../ui/typing-animation';

export default function ContactItem({ icon, label, value, startDelay = 0 }) {
  return (
    <div className="contact-item">
      <div className="icon">
        <Icon name={icon} />
        <span>{label}</span>
      </div>
      <p>
        <span>
          <TypingAnimation
            as="span"
            words={[value]}
            duration={30}
            delay={startDelay}
            showCursor={false}
            className="leading-none"
          />
        </span>
      </p>
    </div>
  );
}
