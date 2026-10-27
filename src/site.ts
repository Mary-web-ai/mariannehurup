// Fælles oplysninger. Ret her, så opdateres hele siden.
export type NavItem = { href?: string; label: string; match?: string; children?: { href: string; label: string }[] };

export const site = {
  name: 'Marianne Hurup',
  tagline: 'Fysioterapeut og FysioCoach',
  url: 'https://mariannehurup.dk',
  phone: '29 92 15 22',
  phoneHref: '+4529921522',
  email: 'mh@mariannehurup.dk',
  place: 'Pandrup og Aalborg',
  // Valgfrit: udfyld, så vises de i bunden af siden.
  cvr: '',
  credentials: '',
  nav: [
    { href: '/marianne-hurup/', label: 'Om mig' },
    { href: '/fysisk-arbejdsmiljo/', label: 'Virksomheder' },
    {
      label: 'Kvinder 40+',
      match: '/kvinder-40-',
      children: [
        { href: '/kvinder-40-forlob-pandrup/', label: 'Pandrup' },
        { href: '/kvinder-40-forlob-aalborg/', label: 'Aalborg' },
      ],
    },
    { href: '/referencer/', label: 'Referencer' },
    { href: '/kontakt/', label: 'Kontakt' },
  ] as NavItem[],
};

// Designforslag til gennemsyn (kun på ux-redesign-grenen).
export const designs = [
  { id: 'current', label: 'Nuværende (forbedret)' },
  { id: 'nordic-calm', label: '1 · Nordisk ro' },
  { id: 'editorial-serif', label: '2 · Redaktionel' },
  { id: 'clinic-navy', label: '3 · Klinisk marineblå' },
  { id: 'rose-studio', label: '4 · Rosa atelier' },
  { id: 'studio-teal', label: '5 · Frisk moderne' },
];
