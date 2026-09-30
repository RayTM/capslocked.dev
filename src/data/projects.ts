export interface Project {
  slug: string;
  highlighted: boolean;
  /** Drives the ACTIVE filter on the projects page — independent of the translated status label. */
  active: boolean;
  comingSoon?: boolean;
  image: { src: string; alt: { en: string; de: string } };
  tags: { en: string; de: string }[];
  translations: Record<string, { title: string; status: string; description: string }>;
}

export function projectHref(slug: string, lang: string): string {
  return lang === 'en' ? `/project/${slug}/` : `/de/project/${slug}/`;
}

/**
 * Home page teaser set: one highlight card on top, two cards below it.
 * Anything beyond those three only shows up on the projects page.
 */
export function homeTeasers(all: Project[] = projects): { highlight?: Project; secondary: Project[] } {
  const highlight = all.find((p) => p.highlighted) ?? all[0];
  const secondary = all.filter((p) => p !== highlight).slice(0, 2);
  return { highlight, secondary };
}

/** Unique tag labels in the given language, in the order projects declare them. */
export function projectTags(lang: string, all: Project[] = projects): string[] {
  const seen: string[] = [];
  for (const project of all) {
    for (const tag of project.tags) {
      const label = tag[lang as 'en' | 'de'] || tag.en;
      if (!seen.includes(label)) seen.push(label);
    }
  }
  return seen;
}

export const projects: Project[] = [
  {
    slug: 'capslocked-dev',
    highlighted: true,
    active: true,
    comingSoon: false,
    image: {
      src: '/images/capslocked-screenshot.png',
      alt: {
        en: 'Screenshot of the capslocked.dev homepage',
        de: 'Screenshot der capslocked.dev Startseite',
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
        description: 'This very site. A brutalist portfolio built with Astro, Tailwind, and zero apologies. Raw structure, terminal aesthetics, structural integrity — no rounded corners where they don’t belong.',
      },
      de: {
        title: 'CAPSLOCKED.DEV',
        status: 'AKTIV',
        description: 'Genau diese Seite. Ein brutalistisches Portfolio, gebaut mit Astro, Tailwind und null Entschuldigungen. Rohe Struktur, Terminal-Ästhetik, strukturelle Integrität — keine abgerundeten Ecken, wo sie nicht hingehören.',
      },
    },
  },
];
