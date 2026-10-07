// Projects. Order here = order on the site.
// A project with `page` gets its own page; without it, the row shows a status instead of a link.

export type Section =
  | { kind: 'text'; heading: string; body: string[] }
  | { kind: 'steps'; heading: string; steps: { title: string; text: string }[] }
  | { kind: 'artifacts'; heading: string; items: { label: string; placeholder?: string; diagram?: 'takes-tree'; image?: string }[] }
  | { kind: 'gallery'; heading: string; aspect?: string; items: { src: string; caption: string; alt: string; video?: boolean; poster?: string }[] }
  | { kind: 'youtube'; heading: string; id: string; start?: number; end?: number; caption: string };

export type Project = {
  slug: string;
  title: string;
  meta: [string, string]; // two short metadata lines
  year: string;
  status?: string; // e.g. 'In progress', 'Page coming'
  page?: {
    summary: string;
    facts: { label: string; value: string; href?: string }[];
    hero: { kind: 'video'; caption: string; src?: string; poster?: string } | { kind: 'image'; src: string; alt: string };
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
      hero: { kind: 'video', src: '/projects/living-storyboard/demo.mp4', poster: '/projects/living-storyboard/demo-poster.jpg', caption: 'Directing a shot live, then redirecting a new take from mid-shot.' },
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
            { src: '/projects/living-storyboard/1-shelf.jpg', alt: 'The productions shelf', caption: 'The home shelf: every production, with the last one ready to resume.' },
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
    meta: ['AI / Rapid prototype', 'Satire · SF Tech Week'],
    year: '2026',
    status: '2nd place',
    page: {
      summary: 'Due diligence for baby names: run any name through a market-style forecast, pay to unlock more bad news, and never find one good enough.',
      facts: [
        { label: 'Context', value: 'Shark Tank: Most Unethical Hackathon, SF Tech Week, Oct 2026' },
        { label: 'Result', value: '2nd place' },
        { label: 'Role', value: 'Concept, product design, build' },
        { label: 'Built with', value: 'Lovable · Claude · React · Tailwind' },
        { label: 'Live demo', value: 'name-futures.lovable.app ↗', href: 'https://name-futures.lovable.app' },
      ],
      hero: { kind: 'video', src: '/projects/baby-perfect/demo.mp4', poster: '/projects/baby-perfect/demo-poster.jpg', caption: 'Shortlisting names, running the forecast, and comparing the least bad option.' },
      sections: [
        {
          kind: 'text',
          heading: 'Why I made it',
          body: [
            'Naming a baby is one of the first big decisions new parents make, and the internet is happy to turn it into a source of anxiety.',
            'The hackathon asked for the most unethical startup we could pitch for a $10M seed. Baby Perfect treats a name like a stock: type it in, get an analyst rating, and pay to find out what else is wrong with it.',
          ],
        },
        {
          kind: 'steps',
          heading: 'How it works',
          steps: [
            { title: 'Shortlist.', text: 'Add up to three names and where the baby will grow up.' },
            { title: 'Run the forecast.', text: 'A loading screen “consults LinkedIn, polls the school board and asks past mayors” before the verdict arrives.' },
            { title: 'Read the prospectus.', text: 'Every name gets a NameScore, a grade and an analyst rating somewhere between “Sell” and “Junk Bond.” Cards cover career, school, lifespan, happiness, love and the odds of becoming president.' },
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
            { title: 'Product & concept.', text: 'Framed the brief as a parenting product with a fintech skin. Defined the two-screen flow and the seven forecast cards, and designed the three-tier paywall around what parents would pay most to know.' },
            { title: 'Design.', text: 'Built the look from a moodboard: blush, cobalt and coral, heavy rounded type with brush-script accents, and hand-drawn jungle animals. It looks like a sweet baby brand, which makes the verdicts land harder.' },
            { title: 'Build & ship.', text: 'Built it in Lovable with Claude as my engineering partner during the three-hour event. The same name always gets the same verdict, so the live demo held no surprises. A tier switch let us flip plans mid-pitch, and a public link went to the judges.' },
          ],
        },
        {
          kind: 'gallery',
          heading: 'Inside the product',
          items: [
            { src: '/projects/baby-perfect/home.jpg', alt: 'Baby Perfect home page', caption: 'The home page: a sweet baby brand on the outside.' },
            { src: '/projects/baby-perfect/forecast.jpg', alt: 'Forecast cards: industry outlook, school and happiness', caption: 'The prospectus: industry outlook, school report and a happiness gauge stuck on “Permanent Monday.” All data simulated.' },
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
  {
    slug: 'blue-jay',
    title: 'Blue Jay Eindhoven',
    meta: ['AI / Hardware', 'Edge AI · Team lead'],
    year: '2018–19',
    page: {
      summary: 'An autonomous drone that goes where rescuers can’t, spots people in distress and calls for help — with the AI running on the drone itself.',
      facts: [
        { label: 'Context', value: 'Blue Jay Eindhoven, deep-tech drone venture' },
        { label: 'Role', value: 'Founder & lead of AI sub-team (7 engineers)' },
        { label: 'Built with', value: 'Python · TensorFlow · Computer vision · NLP · NVIDIA Jetson Nano' },
        { label: 'Partners', value: 'SAS · Philips' },
        { label: 'Press', value: 'Cursor, TU/e · June 2019 ↗', href: 'https://www.cursor.tue.nl/en/news/2019/juni/week-4/blue-jay-introduces-autonomous-drone-in-football-stadium' },
      ],
      hero: { kind: 'image', src: '/projects/blue-jay/psv-team.jpg', alt: 'The Blue Jay team with the drones on the pitch at PSV Stadium' },
      sections: [
        {
          kind: 'text',
          heading: 'Why it mattered',
          body: ['In search and rescue, some areas are too dangerous to send people into first. A drone can go ahead — but only if it can recognise who needs help on its own, without relying on a connection back to base.'],
        },
        {
          kind: 'steps',
          heading: 'How it works',
          steps: [
            { title: 'Fly in.', text: 'The drone navigates autonomously into areas rescuers can’t safely reach.' },
            { title: 'Detect distress.', text: 'An on-board vision model looks for people sitting or lying down, or showing signs of pain.' },
            { title: 'Report back.', text: 'When it finds someone, it sends a notification to the rescue team.' },
            { title: 'Talk to it.', text: 'It was designed as a friendly, interactive drone rather than a scary one. We explored NLP so people could talk to it and ask it things, like the weather.' },
            { title: 'Think on the edge.', text: 'The model runs on the drone itself, so it keeps working without a connection.' },
          ],
        },
        {
          kind: 'gallery',
          heading: 'The drone',
          aspect: '3 / 2',
          items: [
            { src: '/projects/blue-jay/main-drone.jpg', alt: 'The Blue Jay detection drone on display at an event stand', caption: 'The detection drone we built for the AI, with the Jetson on board.' },
            { src: '/projects/blue-jay/explaining.jpg', alt: 'Explaining the main Blue Jay drone to a guest at an event', caption: 'Walking a guest through our main drone.' },
          ],
        },
        {
          kind: 'steps',
          heading: 'What I did',
          steps: [
            { title: 'Built the AI team.', text: 'Started Blue Jay Eindhoven’s first AI sub-team and grew it to seven engineers.' },
            { title: 'Data & models.', text: 'We collected and hand-labelled our own training data and built the detection models in Python and TensorFlow, working with SAS and Philips on models and data.' },
            { title: 'Roadmap & feasibility.', text: 'Owned the AI backlog and sat with the other leads — hardware, software, human–technology interaction — to decide what the drone could realistically do.' },
            { title: 'Telling the story.', text: 'Presented the drone and gave talks at Dutch Design Week, the SAS Analytics Forum and Brainport events, explaining computer vision and edge AI to technical and non-technical audiences.' },
          ],
        },
        {
          kind: 'gallery',
          heading: 'From the project',
          aspect: '4 / 5',
          items: [
            { src: '/projects/blue-jay/psv-flight.mp4', poster: '/projects/blue-jay/psv-flight-poster.jpg', video: true, alt: 'Blue Jay drones flying inside PSV Stadium', caption: 'Demo day: the drones flying inside PSV Stadium.' },
            { src: '/projects/blue-jay/ai-on-edge-stand.jpg', alt: 'Blue Jay stand with the AI on Edge search-and-rescue poster', caption: '“AI on Edge”: presenting the search-and-rescue use case.' },
            { src: '/projects/blue-jay/lab.jpg', alt: 'Working at a computer with teammates in the Blue Jay lab', caption: 'In the lab with the team.' },
            { src: '/projects/blue-jay/showcase.jpg', alt: 'Showcasing the Blue Jay drone at an event stand', caption: 'Showing the drone to visitors.' },
          ],
        },
        {
          kind: 'youtube',
          heading: 'SAS Analytics Forum 2019',
          id: 'MTrIkXwpLXA',
          start: 56,
          end: 68,
          caption: 'From SAS Nederland’s video report of the SAS Analytics Forum 2019 — I appear from 0:56.',
        },
        {
          kind: 'text',
          heading: 'What happened next',
          body: ['We demoed the drone live at PSV Stadium for the city of Eindhoven, university leaders and guests from partners like Philips, SAS, IBM and Fourtress. That’s where crowd management came up as a possible next use case.'],
        },
        {
          kind: 'steps',
          heading: 'What I learned',
          steps: [
            { title: 'On edge AI.', text: 'This was my first real work in AI, and running it on the device itself was still new territory. We ran several feasibility checks as a team on which hardware to use and how it would fit. With the time we had, we couldn’t integrate everything into the main drone, so we mounted the Jetson on a separate drone just for detection. The lesson: hardware decides what the AI can do.' },
            { title: 'On data.', text: 'Off-the-shelf datasets didn’t show people in distress from above. Collecting and labelling our own data was slow, unglamorous, and the reason it worked.' },
            { title: 'On the full process.', text: 'I guided the ML process end to end, from collecting data to launch, and taught it to the team as we went. This is where I found out I love working with AI.' },
            { title: 'On leading.', text: 'Starting a team from zero meant deciding what not to build. Sitting with the other leads taught me that feasibility is a team conversation, not a solo call.' },
          ],
        },
      ],
    },
  },
  { slug: 'welkom-online', title: 'Welkom Online', meta: ['Campaign', 'Storytelling & direction'], year: '[Year]', status: 'Page coming' },
];
