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
  { slug: 'tech-week-hackathon', title: '[Tonight’s build]', meta: ['AI / Rapid prototype', 'SF Tech Week hackathon'], year: '2026', status: 'In progress' },
  { slug: 'this-site', title: 'This site', meta: ['Web / Generative', 'Design & build'], year: '2026', status: 'In progress' },
  { slug: 'blue-jay', title: 'Blue Jay', meta: ['AI / Hardware', 'Team lead'], year: '2018–19', status: 'Page coming' },
  { slug: 'welkom-online', title: 'Welkom Online', meta: ['Campaign', 'Storytelling & direction'], year: '[Year]', status: 'Page coming' },
];
