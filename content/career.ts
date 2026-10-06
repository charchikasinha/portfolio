// Career, told as a journey. The full detail lives in the downloadable résumés.
export const careerIntro = 'Each move added a layer — build it, model it, ship it, tell its story.';

export type Chapter = {
  n: string;
  years: string;
  title: string;
  where: string;
  body: string;
  proof?: string;
};

export const chapters: Chapter[] = [
  {
    n: '01',
    years: '2018 — 2019',
    title: 'Building',
    where: 'Blue Jay Eindhoven · AI sub-team lead',
    body: 'My first product team was a deep-tech drone venture. I set up its AI sub-team, seven engineers, and we built an edge-AI search-and-rescue drone. Showing it to city leaders and at Dutch Design Week taught me early that a product only lands when people understand what it does for them.',
    proof: 'Live demo at PSV Stadium',
  },
  {
    n: '02',
    years: '2019 — 2022',
    title: 'Modeling',
    where: 'Data science & AI · SENTEA',
    body: 'I studied data science and AI, and applied it at SENTEA, improving how a fibre-optic sensing product made its predictions and presenting the results to its COO. I learned to care less about the model and more about the decision it supports.',
  },
  {
    n: '03',
    years: '2022 — 2025',
    title: 'Shipping',
    where: 'Plat4mation · Associate → Senior Consultant',
    body: 'At Europe’s largest ServiceNow partner I owned products for HR, research and public-sector clients — roadmaps, releases and the hard calls in between, like holding back an ML model that tested well but wasn’t ready. I also led my office’s first AI enablement program. Promoted twice in three years.',
    proof: 'Doubled adoption of a B2B HR product used by ~2,000 organizations',
  },
  {
    n: '04',
    years: '2022 — 2025',
    title: 'Telling the story',
    where: 'Independent creative direction · ASPIRA',
    body: 'Alongside all of it, I art-directed campaigns and identities — co-directing Vodafone × Ziggo’s “Welkom Online” campaign through Amsterdam’s +PlusOne program, shaping a rainforest NGO’s brand, and building an athleisure brand’s positioning as its Head of Marketing.',
    proof: 'National TV campaign, Netherlands',
  },
  {
    n: '05',
    years: '2026 — 2028',
    title: 'Now',
    where: 'UC Berkeley Haas · MBA',
    body: 'I’m at Haas to bring these layers together in product — building tools where technology, people and taste meet, and making things along the way.',
  },
];
