/**
 * Shared UI strings only — content-specific text lives in data files or page files.
 * Used at build time via t(key, lang).
 */
export const translations: Record<string, { en: string; de: string }> = {
  'nav.projects':     { en: 'PROJECTS',   de: 'PROJEKTE' },
  'nav.blog':         { en: 'BLOG',       de: 'BLOG' },
  'nav.connect':      { en: 'CONNECT',    de: 'KONTAKT' },
  'footer.copyright': { en: '\u00A9 2024 CAPSLOCKED.DEV // ROOT ACCESS ONLY', de: '\u00A9 2024 CAPSLOCKED.DEV // NUR ROOT-ZUGANG' },
  'backToHome.label': { en: 'BACK TO ROOT', de: 'ZUR\u00DCCK ZUM URSPRUNG' },
  'construction.ping': { en: 'Ping Status', de: 'Status pingen' },
};

export function t(key: string, lang: string): string {
  return translations[key]?.[lang as 'en' | 'de'] || translations[key]?.['en'] || key;
}
