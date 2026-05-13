export interface Project {
  slug: string;
  highlighted: boolean;
  comingSoon?: boolean;
  image: { src: string; alt: { en: string; de: string } };
  tags: { en: string; de: string }[];
  translations: Record<string, { title: string; status: string; description: string }>;
}

export function projectHref(slug: string, lang: string): string {
  return lang === 'en' ? `/project/${slug}` : `/de/project/${slug}`;
}

export const projects: Project[] = [
  {
    slug: 'capslocked-dev',
    highlighted: true,
    comingSoon: false,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9hdDkWcogM3Ra6O2MBdgoVOJUlLg6G-sr6EAvbFiMGxY_yW_mgmTQ7y5nLIwzAUMVM2CaOgEbcCLRRmUE-fRnIO_6RycgydbnxReJ0N8MZaT26eBQNlHlDI4wGhaqYw11MLb_RgtcLWKcW1CkixQTJ9UolD7a2TKnsxsOKO4AMA13zDazYjJnuiV6W9Xa3P-hdr5qQwEIgaJRXkiNP4YGCXqKiK5-vChsjMzOshaQmO04fcuR88vfagifcg-3JnlINhi0BsaY8w',
      alt: {
        en: 'Terminal interface with brutalist design elements',
        de: 'Terminal-Oberfl\u00E4che mit brutalistischen Design-Elementen',
      },
    },
    tags: [
      { en: '#ASTRO', de: '#ASTRO' },
      { en: '#TAILWIND', de: '#TAILWIND' },
      { en: '#BRUTALISM', de: '#BRUTALISMUS' },
    ],
    translations: {
      en: {
        title: 'CAPSLOCKED.DEV',
        status: 'ACTIVE',
        description: 'This very site. A brutalist portfolio built with Astro, Tailwind, and zero apologies. Raw structure, terminal aesthetics, structural integrity \u2014 no rounded corners where they don\u2019t belong.',
      },
      de: {
        title: 'CAPSLOCKED.DEV',
        status: 'AKTIV',
        description: 'Genau diese Seite. Ein brutalistisches Portfolio, gebaut mit Astro, Tailwind und null Entschuldigungen. Rohe Struktur, Terminal-\u00C4sthetik, strukturelle Integrit\u00E4t \u2014 keine abgerundeten Ecken, wo sie nicht hingeh\u00F6ren.',
      },
    },
  },
];
