// Career, newest first. The full detail lives in the downloadable résumés.
export const careerIntro = 'Each move added a layer: find the pattern, build it, model it, ship it.';

export type Role = {
  company: string;
  role: string;
  years: string;
  tag: string;
  body: string;
  highlights?: string[];
  more?: { group: string; items: string[] }[];
  note?: string;
  link?: { label: string; href: string };
};

export const roles: Role[] = [
  {
    company: 'UC Berkeley Haas',
    role: 'MBA · Scholarship recipient',
    years: '2026 — 2028',
    tag: 'Now',
    body: 'I’m at Haas to bring these layers together in product — building tools where technology, people and taste meet, and making things along the way.',
    highlights: ['Haas Tech & AI Club · Product Management Club', 'Building on the side: Living Storyboard, Baby Perfect (2nd place, SF Tech Week)'],
    link: { label: 'See projects', href: '/projects' },
  },
  {
    company: 'Plat4mation',
    role: 'Associate → Senior Consultant',
    years: '2022 — 2025',
    tag: 'Ship it',
    body: 'At Europe’s largest ServiceNow partner I owned products for HR, research and public-sector clients — roadmaps, releases and the hard calls in between.',
    highlights: [
      'Doubled adoption of a B2B HR & payroll product used by ~2,000 organizations',
      'Cut manual triage time 30% with automation across 5 ML models and 500K+ cases',
      'Promoted to Senior Consultant in 3 years, against a 5-year norm',
    ],
    more: [
      {
        group: 'Product ownership & roadmap',
        items: [
          'Owned the roadmap and quarterly releases for the B2B HR & payroll product of a leading Belgian HR services provider, from discovery through UAT and launch',
          'Prioritized an oversubscribed backlog across legal changes, customer requests and IT dependencies; shipped every regulatory change on deadline',
          'Redesigned customer service on the core platform of a leading Belgian HR services provider (3M+ records), merging 5 case types, 2 workspaces and 6 dashboards into one',
          'Rebuilt fragile CRM and IT change workflows at a global semiconductor R&D leader, retiring ~€150K in tech debt',
        ],
      },
      {
        group: 'AI & data products',
        items: [
          'Held back an ML model despite strong test scores after diagnosing overfitting; specified a new data field so the client could train a reliable one the next year',
          'Launched my office’s first AI enablement program as appointed AI Champion, training 70 consultants; Copilot adoption rose from 30% to 80% in 2 weeks',
        ],
      },
      {
        group: 'Customer impact & leadership',
        items: [
          'Pitched a reusable onboarding blueprint at a global semiconductor R&D leader, cutting per-onboarding cost ~50% and saving ~€200K',
          'Ran discovery with 20+ directorates of a major EU institution; shipped pilots in 2.5 months and won 14 directorates’ commitment to full rollout',
          'Won over the skeptical C-suite of a global semiconductor R&D leader with a live AI sandbox demo, helping secure a ~€2M annual license upgrade',
          'Led the firm’s first managed-capacity engagement for its largest account (~€2M ARR), running a 15-person team; the client renewed',
        ],
      },
    ],
  },
  {
    company: 'SENTEA',
    role: 'AI Research Intern · Fibre-optic sensing',
    years: 'Summer 2021',
    tag: 'Model it',
    body: 'SENTEA reached out, and I spent a summer improving how its sensing product made predictions — building models on interrogator signal data with the lead engineers and presenting the results to its COO. I learned to care less about the model and more about the decision it supports.',
    note: 'Alongside my BSc in Data Science & AI, 2019 — 2022',
  },
  {
    company: 'Blue Jay Eindhoven',
    role: 'AI Sub-Team Lead & Architect · promoted from Software Engineer',
    years: '2018 — 2019',
    tag: 'Build it',
    body: 'This is where I first met AI. I set up Blue Jay Eindhoven’s AI sub-team, seven engineers teaching a drone to spot people in distress, with the model running on the drone itself at a time when edge AI was still new. Taking it from raw data to a working drone, and teaching the team as we went, is where I found out I love AI.',
    highlights: ['Live demo at PSV Stadium for the city, university leaders and partners', 'Speaker at the Eindhoven Innovation Café on everyday AI and personal assistants (2019)'],
    link: { label: 'See the project', href: '/projects/blue-jay' },
  },
  {
    company: 'ASML',
    role: 'Intern · Data Science team',
    years: 'Summer 2018',
    tag: 'Find the pattern',
    body: 'My first taste of big data. ASML’s engineering teams ran simulations all over the world, but the data sat in silos, so teams were reinventing the wheel without knowing it. I dug through the raw data, experimented with MongoDB, and presented where the patterns and overlaps were.',
  },
];

export const creative = {
  intro: 'Alongside the main path, I art-direct campaigns and build brands.',
  items: [
    { title: 'Vodafone × Ziggo — “Welkom Online”', role: 'Co-director · +PlusOne Amsterdam · 2023', href: '/creative/welkom-online', text: 'Selected for Amsterdam’s +PlusOne creative leadership program (1 of 25). Co-directed a campaign film for older adults from script to edit; it aired on Dutch TV and station screens.' },
    { title: 'ASPIRA', role: 'Head of Marketing', text: 'Built positioning for an early-stage athleisure brand — manifesto, voice and visual identity — and launched an athlete-storytelling content program.' },
    { title: 'Treesistance', role: 'Brand & art direction', text: 'Shaped brand strategy and visuals for a rainforest NGO; the work carried into co-branded partnerships that raised funds for forest protectors.' },
  ],
  links: [
    { label: 'CASSETS', href: '/creative/cassets' },
    { label: 'Behance', href: 'https://www.behance.net/charchikasinha', external: true },
  ],
};
