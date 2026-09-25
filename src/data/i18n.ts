/**
 * Shared UI strings only — content-specific text lives in data files or page files.
 * Used at build time via t(key, lang).
 */
export const translations: Record<string, { en: string; de: string }> = {
  'nav.projects':      { en: 'PROJECTS',      de: 'PROJEKTE' },
  'nav.blog':          { en: 'BLOG',          de: 'BLOG' },
  'nav.connect':       { en: 'CONNECT',       de: 'KONTAKT' },
  'footer.copyright':  { en: '\u00A9 2026 CAPSLOCKED.DEV', de: '\u00A9 2026 CAPSLOCKED.DEV' },
  'backToHome.label':  { en: 'BACK TO START', de: 'ZUR\u00DCCK ZUM START' },
  'filter.tags':       { en: 'FILTER',        de: 'FILTER' },
  'filter.status':     { en: 'STATUS',        de: 'STATUS' },
  'filter.all':        { en: 'ALL',           de: 'ALLE' },
  'filter.activeOnly': { en: 'ACTIVE_ONLY',   de: 'NUR_AKTIVE' },
  'filter.empty':      { en: '// NO_PROJECTS_MATCH', de: '// KEINE_PROJEKTE_GEFUNDEN' },
};

export function t(key: string, lang: string): string {
  return translations[key]?.[lang as 'en' | 'de'] || translations[key]?.['en'] || key;
}
