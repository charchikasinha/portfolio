// Projects. Order here = order on the site.
// A project with `page` gets its own page; without it, the row shows a status instead of a link.

export type Section =
  | { kind: 'text'; heading: string; body: string[] }
  | { kind: 'steps'; heading: string; steps: { title: string; text: string }[] }
  | { kind: 'artifacts'; heading: string; items: { label: string; placeholder?: string; diagram?: 'takes-tree'; image?: string }[] }
  | { kind: 'gallery'; heading: string; items: { src: string; caption: string; alt: string }[] };

export type Project = {
  slug: string;
  title: string;
  meta: [string, string]; // two short metadata lines
  year: string;
  status?: string; // e.g. 'In progress', 'Page coming'
  page?: {
    summary: string;
    facts: { label: string; value: string; href?: string }[];
    hero: { kind: 'video'; caption: string } | { kind: 'image'; src: string; alt: string };
    sections: Section[];
  };
};

export const projects: Project[] = [
  {
    slug: 'living-storyboard',
    title: 'Living Storyboard',
    meta: ['AI / Product', 'Real-time video'],
    year: '2026',
    page: {
      summary: 'Previz you can direct — steer a live video model mid-shot, keep the takes that work, leave with a storyboard.',
      facts: [
        { label: 'Context', value: 'Visko Orbis Online Challenge, Sep 2026' },
        { label: 'Role', value: 'Concept, product design, build' },
        { label: 'Built with', value: 'Claude · Orbis via Reactor SDK · Gemini · Next.js · Pen.dev' },
        { label: 'Code', value: 'GitHub ↗', href: 'https://github.com/charchikasinha/living-storyboard' },
      ],
      hero: { kind: 'image', src: '/projects/living-storyboard/1-shelf.jpg', alt: 'Living Storyboard home: a shelf of productions with Ridgeline - SUV Ad featured' }, // swap to the demo video when ready
      sections: [
        {
          kind: 'text',
          heading: 'Why I made it',
          body: [
            'A director has to get a whole film out of their head and into everyone else’s — producers, actors, the camera team. The usual tool for that is a storyboard, drawn by hand, shot by shot, and it doesn’t move. Living Storyboard lets a director see the shot instead: describe it, watch it play, and steer it until it matches what they imagined.',
          ],
        },
        {
          kind: 'steps',
          heading: 'How it works',
          steps: [
            { title: 'Prep.', text: 'A co-writer turns a one-line brief into shot-by-shot prompts you can fire in order.' },
            { title: 'Direct live.', text: 'Type or speak a direction while the shot plays; it changes in about two seconds without restarting.' },
            { title: 'Keep every take.', text: 'Everything is recorded. Rewind to any moment and branch a new take from there — T1 → T2 → T3, like version control for a scene.' },
            { title: 'Build the board.', text: 'When a moment looks right, capture a still. Starred stills become a storyboard you can reorder, caption and share.' },
          ],
        },
        {
          kind: 'steps',
          heading: 'What I did',
          steps: [
            { title: 'Product & direction.', text: 'Framed the problem (previz is either static or slow), defined the director’s workflow from prep to shoot to board, and decided what to build.' },
            { title: 'Design.', text: 'Explored layouts and redesign ideas in Pen.dev, then chose and refined a paper-and-ink “poster” look in Claude so it feels like a tool on set, not a website.' },
            { title: 'Build & ship.', text: 'Built it with Claude as my engineering partner: tested live with Orbis, iterated on every screen, and shipped the repo, README and demo for the Visko Orbis challenge.' },
          ],
        },
        {
          kind: 'gallery',
          heading: 'Inside the tool',
          items: [
            { src: '/projects/living-storyboard/2-studio.jpg', alt: 'The studio with a shot on stage', caption: 'The studio: prep on the left, the live shot in the middle, direction and camera controls on the right.' },
            { src: '/projects/living-storyboard/3-tape-and-takes.jpg', alt: 'The tape and branched takes', caption: 'Every run is recorded to tape. Take 2 branched from Take 1 at 00:36.' },
            { src: '/projects/living-storyboard/4-storyboard.jpg', alt: 'The storyboard sheet', caption: 'Eight panels from two shots. Captions fill in from the direction at that moment.' },
            { src: '/projects/living-storyboard/5-present.jpg', alt: 'Present mode', caption: 'Present mode: the hand-off to cast and crew, shot by shot.' },
          ],
        },
        {
          kind: 'steps',
          heading: 'What I learned',
          steps: [
            { title: 'On usability.', text: 'The hardest part wasn’t the AI, it was restraint. Every control I added made the tool feel less like a camera on set. The breakthroughs were subtractions: cutting sliders, merging modes, and one rule (“if you can type in it, it looks typeable”) that made the whole interface click.' },
            { title: 'On real-time models.', text: 'A real-time model only moves forward, but directors live in rewind. The most valuable feature wasn’t generating video. It was letting a director go back to any moment and branch a new take from there.' },
            { title: 'On directors.', text: 'Directors don’t think in prompts, they think in takes: “again, slower,” “from there, have him turn.” Designing for that, instead of for the model, changed almost every decision.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'baby-perfect',
    title: 'Baby Perfect',
    meta: ['AI / Rapid prototype', 'Hackathon · 2nd place'],
    year: '2026',
    page: {
      summary: 'Due diligence for baby names — run any name through a market-style forecast, pay to unlock more bad news, and never find one good enough.',
      facts: [
        { label: 'Context', value: 'Most Unethical Hackathon & Pitch Competition, SF Tech Week, Oct 2026' },
        { label: 'Result', value: '2nd place' },
        { label: 'Role', value: 'Concept, product design, build' },
        { label: 'Team', value: '[Teammates]' },
        { label: 'Built with', value: 'Lovable · Claude · React · TanStack · Tailwind' },
        { label: 'Code', value: 'GitHub ↗', href: 'https://github.com/charchikasinha/name-futures' },
        { label: 'Live demo', value: 'Try a name ↗', href: 'https://name-futures.lovable.app' },
      ],
      hero: { kind: 'image', src: '/projects/baby-perfect/1-home.jpg', alt: 'Baby Perfect home: “Weigh every name before it’s forever.” on a cobalt band with pink jungle animals, above the name form and shortlist' },
      sections: [
        {
          kind: 'text',
          heading: 'Why I made it',
          body: [
            'Naming a baby is one of the first big decisions new parents make, and the internet is happy to turn it into a source of anxiety. The hackathon asked for the most unethical startup we could pitch for a $10M seed. Baby Perfect treats a name like a stock: type it in, get an analyst rating, and pay to find out what else is wrong with it.',
          ],
        },
        {
          kind: 'steps',
          heading: 'How it works',
          steps: [
            { title: 'Shortlist.', text: 'Add up to three names and where the baby will grow up.' },
            { title: 'Run the forecast.', text: 'A loading screen lowers expectations, consults “LinkedIn’s basement” and confirms no name is perfect before the verdict arrives.' },
            { title: 'Read the prospectus.', text: 'Every name gets a NameScore, a grade and an analyst rating somewhere between “Sell” and “Junk Bond,” with cards for career, school, lifespan, happiness, love and the odds of becoming president.' },
            { title: 'Pay for more bad news.', text: 'The free tier shows the score and the school report. Each paid tier unlocks more of the forecast, and the love forecast sits behind the top one. Premium puts the shortlist on a scale and crowns the least bad name.' },
          ],
        },
        {
          kind: 'text',
          heading: 'The unethical part',
          body: [
            'The joke is the business model. Every name fails, so parents keep trying new ones. Every upgrade buys more reasons to worry. The thing parents care about most, whether their child will find love, costs the most to see. It’s an ordinary freemium funnel aimed at the most anxious customer there is: a new parent.',
            'We drew one line. Scores come from a hash of the name, never from its perceived ethnicity, gender or origin. The product is unethical in what it sells, not in who it judges.',
          ],
        },
        {
          kind: 'steps',
          heading: 'What I did',
          steps: [
            { title: 'Product & concept.', text: 'Framed the brief as a parenting product with a fintech skin, defined the two-screen flow and the seven forecast cards, and designed the three-tier paywall around what parents would pay most to know.' },
            { title: 'Design.', text: 'Built the look from a moodboard: blush, cobalt and coral, heavy rounded type with brush-script accents, and hand-drawn jungle animals. It looks like a sweet baby brand, which makes the verdicts land harder.' },
            { title: 'Build & ship.', text: 'Built it in Lovable with Claude as my engineering partner during the three-hour event. The same name always gets the same verdict, so the live demo held no surprises; a tier switch let us flip plans mid-pitch, and a public link went to the judges.' },
          ],
        },
        {
          kind: 'gallery',
          heading: 'Inside the app',
          items: [
            { src: '/projects/baby-perfect/2-try-a-name.jpg', alt: 'The name form with a shortlist of Juniper, Theo and Mabel', caption: 'Try out a name. The shortlist holds up to three “equally questionable name assets.”' },
            { src: '/projects/baby-perfect/3-judging.jpg', alt: 'Loading screen reading “Confirming no name is perfect…”', caption: 'Every forecast starts by lowering expectations.' },
            { src: '/projects/baby-perfect/4-prospectus.jpg', alt: 'Mabel’s prospectus: NameScore 30/100, grade D+, analyst rating Sell', caption: 'Mabel’s prospectus: 30/100, a D+ and a “Sell.” Among the better results.' },
            { src: '/projects/baby-perfect/5-paywall.jpg', alt: 'Free plan: the school card is visible, other cards are blurred behind upgrade prompts', caption: 'The free plan shows only the school report. Everything else is blurred behind an upsell.' },
            { src: '/projects/baby-perfect/6-premium.jpg', alt: 'Premium cards: lifespan 66 years, a 13% chance of finding love, and local namesakes in office', caption: 'Premium unlocks the rest, including a 13% chance of “an adequate plus-one.”' },
            { src: '/projects/baby-perfect/7-compare.jpg', alt: 'Compare names: Mabel 30, Juniper 5, Theo 5, with Mabel marked least bad', caption: 'The scales: every name loses, and one is merely the least bad.' },
          ],
        },
        {
          kind: 'steps',
          heading: 'What I learned',
          steps: [
            { title: 'On satire.', text: 'The idea only worked once we stopped hedging. The first build let some names score well. Making every name fail turned a gimmick into a point about products that sell anxiety.' },
            { title: 'On paywalls.', text: 'The pricing tiers were the easiest part to design, which was the uncomfortable lesson. Locking the love forecast behind the top tier is the same call real freemium products make: put the thing people care about most behind the highest price.' },
            { title: 'On building with AI.', text: 'With Lovable and Claude, building was the fast part. The scarce skill was the spec: what to ask for, what to cut, and what had to work live on stage.' },
          ],
        },
      ],
    },
  },
  { slug: 'this-site', title: 'This site', meta: ['Web / Generative', 'Design & build'], year: '2026', status: 'In progress' },
  { slug: 'blue-jay', title: 'Blue Jay', meta: ['AI / Hardware', 'Team lead'], year: '2018–19', status: 'Page coming' },
  { slug: 'welkom-online', title: 'Welkom Online', meta: ['Campaign', 'Storytelling & direction'], year: '[Year]', status: 'Page coming' },
];
