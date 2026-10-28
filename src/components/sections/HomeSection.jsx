import { useCallback, useEffect, useRef, useState } from 'react';
import DownloadButton from '../shared/DownloadButton';
import ContactButton from '../shared/ContactButton';
import { useI18n } from '../../i18n';
import { TypingAnimation } from '../ui/typing-animation';

const MAX_ROWS = 4;

export default function HomeSection({ isActive, onNavigate }) {
  const { t, lang } = useI18n();
  const nameRef = useRef(null);
  const [nameScale, setNameScale] = useState(1);

  const recalcName = useCallback(() => {
    const el = nameRef.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const fs = parseFloat(cs.fontSize);
    if (!fs) return;
    const lh = cs.lineHeight === 'normal' ? fs * 1.2 : parseFloat(cs.lineHeight);
    const range = document.createRange();
    range.selectNodeContents(el);
    const rects = [...range.getClientRects()].filter((r) => r.width > 2 && r.height > 2);
    if (!rects.length) return;
    const firstTop = Math.min(...rects.map((r) => r.top));
    const rows = Math.round((Math.max(...rects.map((r) => r.top)) - firstTop) / lh) + 1;
    const scaleNow = nameScale || 1;

    if (rows > MAX_ROWS) {
      setNameScale(Number(Math.max(0.4, scaleNow * (MAX_ROWS / rows) * 0.98).toFixed(3)));
    } else if (rows <= MAX_ROWS - 1 && scaleNow < 1) {
      setNameScale(Number(Math.min(1, scaleNow * ((MAX_ROWS - 0.5) / rows)).toFixed(3)));
    }
  }, [nameScale]);

  useEffect(() => {
    const el = nameRef.current;
    if (el) el.style.setProperty('--name-scale', String(nameScale));
  }, [nameScale]);

  useEffect(() => {
    const host = nameRef.current?.parentElement;
    if (!host) return undefined;
    const ro = new ResizeObserver(recalcName);
    ro.observe(host);
    recalcName();
    document.fonts?.ready.then(recalcName);
    return () => ro.disconnect();
  }, [recalcName]);

  useEffect(() => {
    setNameScale(1);
  }, [lang]);

  return (
    <header className={`container header${isActive ? ' active' : ''}`} id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img
              style={{ borderRadius: '12px' }}
              src="img/Perfil.webp"
              alt="Daniel Cruz"
              width={749}
              height={748}
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
        <div className="right-header">
          <div className="rt-heading">
            <h1 className="name" ref={nameRef}>
              <span className="name-seg-a">{t('home.greeting')}</span>{' '}
              <span className="name-seg-b">
                {t('home.self')}{' '}
                <TypingAnimation
                  key={`name-${lang}-${isActive ? 'active' : 'idle'}`}
                  as="span"
                  words={['Daniel Cruz.']}
                  duration={70}
                  delay={700}
                  startOnView={false}
                  className="name-typing leading-none"
                />
              </span>{' '}
              <span className="name-seg-c">{t('home.role')}</span>
            </h1>
          </div>
          <div className="rt-cta">
            <ContactButton onNavigate={onNavigate} label={t('buttons.letsTalk')} />
            <DownloadButton />
          </div>
          <div className="rt-paragraph">
            <p>{t('home.bio')}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
