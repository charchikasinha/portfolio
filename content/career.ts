// Career timeline. Tags drive the Product / Tech / Leadership / Strategy highlight buttons.
export type Tag = 'product' | 'tech' | 'leadership' | 'strategy';
export type Bullet = { text: string; tag: Tag };
export type Entry = { dates: string; org: string; role: string; desc: string; groups?: { title: string; bullets: Bullet[] }[]; bullets?: Bullet[] };

// TODO before launch: confirm these figures (your résumé checklist flags them).
export const evidence = [
  { label: 'Adoption', value: '2×', text: 'client adoption of a B2B HR product in two years' },
  { label: 'AI in production', value: '−30%', text: 'manual triage time across 5 ML models, 500K+ cases' },
  { label: 'Enablement', value: '30→80%', text: 'Copilot adoption among 70 consultants in two weeks' },
  { label: 'Savings', value: '~€200K', text: 'from a reusable onboarding blueprint I pitched' },
];

export const career: Entry[] = [
  { dates: '2026 — 2028', org: 'UC Berkeley, Haas School of Business', role: 'MBA, Scholarship recipient', desc: 'Berkeley, CA · Product Management Club · Tech & AI Club' },
  {
    dates: 'Dec 2022 — Dec 2025',
    org: 'Plat4mation',
    role: 'Senior Consultant · Consultant · Associate Consultant',
    desc: 'Belgium · Europe’s largest ServiceNow Elite Partner · promoted twice in 3 years vs. ~5-year norm',
    groups: [
      {
        title: 'Product ownership',
        bullets: [
          { text: 'Owned roadmap and quarterly releases for Acerta’s Connect HR Office, a B2B HR product used by ~2,000 organizations; doubled client adoption in 2 years.', tag: 'product' },
          { text: 'Prioritized an oversubscribed backlog across legal changes, customer requests and IT dependencies; shipped every regulatory change on deadline.', tag: 'product' },
          { text: 'Merged 5 siloed case types, 2 agent workspaces and 6 dashboards into one workspace on a platform with 3M+ customer records.', tag: 'product' },
        ],
      },
      {
        title: 'AI & data products',
        bullets: [
          { text: 'Built case-triage automation across 5 ML models and 500K+ cases, from discovery to error analysis; cut manual triage time 30%.', tag: 'tech' },
          { text: 'Held back an ML model launch despite strong test scores after diagnosing overfitting; specified the data field that made a reliable model possible.', tag: 'tech' },
          { text: 'Launched the Belgian entity’s first AI enablement program for 70 consultants; Copilot adoption rose from 30% to 80% in 2 weeks.', tag: 'leadership' },
        ],
      },
      {
        title: 'Customers & go-to-market',
        bullets: [
          { text: 'Ran discovery with 20+ European Commission directorates; shipped tailored pilots in 2.5 months and won 14 directorates’ commitment to rollout.', tag: 'strategy' },
          { text: 'Pitched a reusable onboarding blueprint at IMEC and absorbed the first build to prove it; cut per-onboarding cost ~50%, saving ~€200K.', tag: 'strategy' },
          { text: 'Led the firm’s first managed-capacity engagement for its largest account, co-designing the model with the board; the client renewed.', tag: 'leadership' },
        ],
      },
    ],
  },
  {
    dates: 'Jul 2022 — Dec 2025',
    org: 'Independent creative direction',
    role: 'Art Director & Designer',
    desc: 'Netherlands / Belgium · freelance, alongside full-time work',
    bullets: [
      { text: 'Selected for Amsterdam’s +PlusOne creative leadership program; co-directed Vodafone × Ziggo’s “Welkom Online” campaign, aired on Dutch TV.', tag: 'leadership' },
      { text: 'Shaped brand strategy and visuals for rainforest NGO Treesistance, carried into partnerships with Dilmah and Paper on the Rocks.', tag: 'strategy' },
      { text: 'Brand identity, art direction and album artwork for startups, cultural organizations and international musicians.', tag: 'product' },
    ],
  },
  {
    dates: 'Jul 2023 — Dec 2023',
    org: 'ASPIRA',
    role: 'Head of Marketing',
    desc: 'Early-stage DTC athleisure brand',
    bullets: [
      { text: 'Built positioning from audience research and a competitor teardown: manifesto, voice, persona and visual identity in one brand book.', tag: 'strategy' },
      { text: 'Launched an athlete-storytelling content program; founders ran the calendar and site on the toolkit after handoff.', tag: 'leadership' },
    ],
  },
  {
    dates: '2019 — 2022',
    org: 'Maastricht University',
    role: 'BSc, Data Science and Artificial Intelligence',
    desc: 'Maastricht, NL',
    bullets: [{ text: 'AI Research Intern at SENTEA: applied ML to improve the prediction accuracy of a fiber-optic interrogator; presented to the COO.', tag: 'tech' }],
  },
  {
    dates: 'Jan 2018 — Jul 2019', // TODO: confirm (résumés disagree)
    org: 'Blue Jay Eindhoven',
    role: 'AI Sub-Team Lead & Architect',
    desc: 'Eindhoven, NL · university-backed autonomous-drone venture',
    bullets: [
      { text: 'Founded and led the first AI sub-team (7 engineers); delivered an edge-AI search-and-rescue drone demo at PSV Stadium.', tag: 'tech' },
      { text: 'Presented at Dutch Design Week, SAS Analytics Forum and Brainport events for technical and non-technical audiences.', tag: 'leadership' },
    ],
  },
  {
    dates: 'Community',
    org: 'Sampurna Shiksha Kavach',
    role: 'Dumka, India',
    desc: '',
    bullets: [{ text: 'Led adoption of an ed-tech platform for rural schools with the district administration; engagement rose from 64% to 80%, attendance +23%.', tag: 'leadership' }],
  },
];
