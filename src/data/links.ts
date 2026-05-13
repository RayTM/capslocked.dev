export interface Link {
  href: string;
  external?: boolean;
  icon?: string;
  translations: Record<string, { label: string; description: string }>;
}

export const links: Link[] = [
  {
    href: 'https://github.com',
    external: true,
    icon: 'open_in_new',
    translations: {
      en: { label: '>GITHUB', description: 'Source code & contributions' },
      de: { label: '>GITHUB', description: 'Quellcode & Beitr\u00E4ge' },
    },
  },
  {
    href: 'https://linkedin.com',
    external: true,
    icon: 'open_in_new',
    translations: {
      en: { label: '>LINKEDIN', description: 'Professional network & resume' },
      de: { label: '>LINKEDIN', description: 'Professionelles Netzwerk & Lebenslauf' },
    },
  },
];
