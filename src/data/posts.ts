export interface Post {
  slug: string;
  icon?: string;
  translations: Record<string, { title: string; date: string }>;
}

export function postHref(slug: string, lang: string): string {
  return lang === 'en' ? `/blog/${slug}` : `/de/blog/${slug}`;
}

export const posts: Post[] = [
  {
    slug: 'opencode-experience',
    icon: 'arrow_forward',
    translations: {
      en: { title: 'Building with Silicon: My First OpenCode Session', date: '2025.05.10' },
      de: { title: 'Bauen mit Silizium: Meine Erste OpenCode-Session', date: '2025.05.10' },
    },
  },
];
