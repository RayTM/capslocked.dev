export interface Post {
  slug: string;
  translations: Record<string, { title: string; date: string }>;
}

export function postHref(slug: string, lang: string): string {
  return lang === 'en' ? `/blog/${slug}` : `/de/blog/${slug}`;
}

/**
 * Dates are stored ISO (YYYY-MM-DD) so they stay sortable, and rendered as
 * DD.MM.YYYY everywhere — listing rows and detail badges alike. Every date on
 * the site goes through here; no page formats one on its own.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-');
  return day ? `${day}.${month}.${year}` : iso;
}

export const posts: Post[] = [
  {
    slug: 'opencode-experience',
    translations: {
      en: { title: 'I Let a Machine Build This: My First OpenCode Session', date: '2026-08-20' },
      de: { title: 'Ich ließ das eine Maschine bauen: Meine Erste OpenCode-Session', date: '2026-08-20' },
    },
  },
];
