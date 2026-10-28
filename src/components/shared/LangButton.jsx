import Icon from './Icon';
import { useI18n } from '../../i18n';
import { cn } from '@/lib/utils';

const LANG_LABELS = { es: 'ESP', en: 'ENG', pt: 'PTG' };

export default function LangButton({ variant = 'floating', className, ...props }) {
  const { lang, cycleLang, t } = useI18n();
  return (
    <button
      type="button"
      className={cn(variant === 'floating' ? 'lang-btn' : 'lang-dock-btn', className)}
      onClick={cycleLang}
      aria-label={t('lang.aria')}
      title={t('lang.aria')}
      {...props}
    >
      <Icon name="globe" />
      <span>{LANG_LABELS[lang] ?? lang.toUpperCase()}</span>
    </button>
  );
}
