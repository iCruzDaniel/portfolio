import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { dict as dictEs } from './es';
import { dict as dictEn } from './en';
import { dict as dictPt } from './pt';

export const LANGS = ['es', 'en', 'pt'];
const STORAGE_KEY = 'lang';

const dicts = { es: dictEs, en: dictEn, pt: dictPt };

const LANG_LABELS = { es: 'ESP', en: 'ENG', pt: 'PTG' };

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGS.includes(saved)) return saved;
  } catch (_) {
    /* private browsing */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language?.toLowerCase() : '';
  if (nav?.startsWith('es')) return 'es';
  if (nav?.startsWith('pt')) return 'pt';
  return 'en';
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {
      /* private browsing */
    }
  }, []);

  const value = useMemo(() => {
    const resolve = (path) => {
      const walk = (dict) =>
        path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), dict);
      return walk(dicts[lang]) ?? walk(dicts.en) ?? path;
    };
    const tr = (field) => {
      if (field == null) return '';
      if (typeof field === 'string') return field;
      return field[lang] ?? field.en ?? '';
    };
    const cycleLang = () => {
      const next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
      setLang(next);
    };
    return { lang, setLang, cycleLang, t: resolve, tr, langLabel: LANG_LABELS[lang] };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}
