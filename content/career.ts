// Career, told as a journey (oldest to newest). Full detail lives in the downloadable résumés.
export const careerIntro = [
  'I’m a full-time MBA student at Berkeley Haas. I come from data science and AI, and spent three years shipping B2B products at Europe’s largest ServiceNow partner.',
  'Now my focus is Tech × Creative. I go to the events, meet the builders, designers and creators shaping that space, then take those ideas home and build them into products that feel like an extension of the people who use them.',
];

export type Chapter = {
  n: string;
  years: string;
  title: string; // the moment
  org: string; // company intro · role
  body: string[];
  hats?: { title: string; text: string }[];
  list?: string[];
  after?: string[]; // paragraphs after hats/list
  highlight?: string;
  links?: { label: string; href: string }[];
  next?: { text: string; link?: { label: string; href: string } };
};

export const chapters: Chapter[] = [
  {
    n: '01',
    years: '2018',
    title: 'First contact with data',
    org: 'ASML, the Dutch company behind the machines that make the world’s most advanced chips · Data Science Intern',
    body: [
      'My first time working with real-world Big Data outside school, back when Big Data was the new buzzword, and at a global leader in its field. ASML’s engineering teams ran simulations all over the world, but the results weren’t shared in a structured way, so the same work was being done more than once. I analyzed their raw simulation data to find the patterns, and my findings helped start a new data-mining tool.',
      'It showed me how much value a multinational can get from structuring its data and drawing insight from it across teams and countries.',
    ],
    next: { text: 'Next, I wanted to build something that could act on data itself.' },
  },
  {
    n: '02',
    years: '2018 — 2019',
    title: 'Where I met AI',
    org: 'Blue Jay Eindhoven, a university-backed student team building autonomous drones · AI Team Lead & Architect',
    body: [
      'I joined as a software engineer and was asked to start the team’s first AI sub-team. I led its seven engineers in building a search-and-rescue drone that could spot people in distress, with the model running on the drone itself at a time when edge AI was still new. We took it from hand-labelled data to a live demo, and I taught the team the machine-learning process as we went.',
      'As one of the team’s architects, I also set the drone’s roadmap together with the other sub-team leads, each from our own expertise; mine was AI.',
      'This is where I first fell for AI, and for the role around the building: leading a team, deciding what to build, and working out with others what was actually feasible.',
    ],
    highlight: 'Live demo at PSV Stadium',
    links: [{ label: 'See the project', href: '/projects/blue-jay' }],
    next: { text: 'So I went back to study it fully, in Maastricht.' },
  },
  {
    n: '03',
    years: '2019 — 2022',
    title: 'Learning to model it',
    org: 'BSc Data Science & AI · SENTEA, a Belgian fiber-optic sensing company · AI Research Intern',
    body: [
      'I studied data science and AI, and spent a summer as SENTEA’s first AI researcher. With their lead engineers, I built machine-learning models to improve how their sensing device processed its signals, raising its prediction accuracy by 15% and adding real value to a deeply engineering-driven product.',
    ],
    next: { text: 'Then I wanted to see what happens when a product reaches thousands of people.' },
  },
  {
    n: '04',
    years: '2022 — 2025',
    title: 'Shipping it at scale',
    org: 'Plat4mation, Europe’s largest partner for ServiceNow, the enterprise workflow platform · Associate → Senior Consultant',
    body: [
      'Three years, often on three projects at once, for clients including a leading Belgian HR and payroll provider, a global semiconductor R&D leader and a major EU institution, among others. The role changed with every project:',
    ],
    hats: [
      { title: 'Product owner.', text: 'Owned a B2B HR product used by about 2,000 organizations: the quarterly roadmap, new modules from first workshop to production, and every bug and enhancement through maintenance. When the law changed, the roadmap changed with it, sometimes just weeks before a deadline.' },
      { title: 'Platform builder.', text: 'Helped redesign a customer-service platform holding millions of customers’ detailed, complex data into one shared system, and helped the whole organization through the change.' },
      { title: 'AI builder.', text: 'Built AI models across the platform, from case triage to document detection and user navigation, to name a few. I evaluated how useful each one really was and guided it into production for the business.' },
      { title: 'Delivery lead on tight timelines.', text: 'Delivered pilots for 20+ directorates of an EU institution in 2.5 months on a limited budget, each with its own systems and politics. Onboarded department after department for a fast-growing client adding 2,000 employees in a year.' },
      { title: 'Project manager.', text: 'Scoping work, estimating effort, writing statements of work and running demos and proofs of concept were part of the everyday job. On top of that, I kept an eye on budgets, managed timelines closely and handled resourcing.' },
      { title: 'Pre-sales.', text: 'Worked with our sales team on long-term roadmaps for client companies, and represented those roadmaps in C-suite discussions.' },
      { title: 'Account lead.', text: 'One of the first consultants embedded full-time with a client under a new model the firm designed with its board. I ran the account’s roadmap and a 15-person team.' },
    ],
    after: [
      'Through all of it I juggled many stakeholders at once: client business leads, their IT teams, outside vendors and our own developers. One client asked for me by name to lead all their future projects. I was promoted twice in three years, and along the way I became my office’s AI Champion.',
    ],
    next: { text: 'All along I kept making things too: illustration, art direction, even co-directing a national TV campaign.', link: { label: 'See creative endeavours', href: '#creative' } },
  },
  {
    n: '05',
    years: '2026 — 2028',
    title: 'Bringing it together',
    org: 'UC Berkeley Haas · Full-time MBA',
    body: ['Here to bring the builder and the creative together in product.'],
    list: ['Haas Tech & AI Club · Product Management Club · Digital Media & Entertainment Club', 'Academic Rep for my cohort'],
    after: ['You’ll find me around SF and Haas, so say hi. In the meantime, see what I’ve built.'],
    links: [{ label: 'See projects', href: '/projects' }],
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
