// Projects. Order here = order on the site.
// A project with `page` gets its own page; without it, the row shows a status instead of a link.

export type Section =
  | { kind: 'text'; heading: string; body: string[] }
  | { kind: 'steps'; heading: string; steps: { title: string; text: string }[] }
  | { kind: 'artifacts'; heading: string; items: { label: string; placeholder?: string; diagram?: 'takes-tree'; image?: string }[] };

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
        { label: 'Built with', value: 'Next.js · Reactor SDK · Gemini' },
        { label: 'Code', value: 'GitHub ↗', href: 'https://github.com/charchikasinha/living-storyboard' },
      ],
      hero: { kind: 'video', caption: 'Demo video — [link coming]' },
      sections: [
        {
          kind: 'text',
          heading: 'The idea',
          body: [
            'Treat a real-time video model as a camera on set. You set the scene, roll, and direct while the shot plays — each direction lands in about two seconds and the shot carries on. Every run is recorded, so you can rewind to any moment and branch a new take from there.',
          ],
        },
        {
          kind: 'text',
          heading: 'Why I made it',
          body: [
            'Directors don’t work in prompts; they work in takes — “again, slower”, “from there, have him turn around”. Static storyboards don’t move, and 3D previz takes days. Clip-based models make you prompt, wait, and start over when one thing is wrong.',
          ],
        },
        {
          kind: 'steps',
          heading: 'How it works',
          steps: [
            { title: 'Direct while it rolls.', text: 'Type, speak, or tap pills for camera, lens and mood; the live shot changes without restarting.' },
            { title: 'Redirect from here.', text: 'Scrub the tape, pick a moment, and branch T1 → T2 → T3 — a tree of takes instead of a pile of clips.' },
            { title: 'Build the board.', text: 'Star stills to make panels, reorder, caption, pick 2.39:1 or 16:9, and print or present.' },
          ],
        },
        {
          kind: 'text',
          heading: 'What I did',
          body: ['[Two or three lines in your words — how you framed the director’s workflow, the decisions you made about takes and branching, what you built vs. reused from the starter.]'],
        },
        {
          kind: 'artifacts',
          heading: 'Artifacts',
          items: [
            { label: 'A — Takes as a tree', diagram: 'takes-tree' },
            { label: 'B — Directing live', placeholder: '[Screenshot: live directing]' },
            { label: 'C — The storyboard', placeholder: '[Screenshot: storyboard sheet]' },
            { label: 'D — Process', placeholder: '[Early sketch or failed UI]' },
          ],
        },
        {
          kind: 'text',
          heading: 'What I learned',
          body: ['[One honest lesson — about real-time models, about directors, or about scoping a hackathon build.]'],
        },
      ],
    },
  },
  { slug: 'tech-week-hackathon', title: '[Tonight’s build]', meta: ['AI / Rapid prototype', 'SF Tech Week hackathon'], year: '2026', status: 'In progress' },
  { slug: 'this-site', title: 'This site', meta: ['Web / Generative', 'Design & build'], year: '2026', status: 'In progress' },
  { slug: 'blue-jay', title: 'Blue Jay', meta: ['AI / Hardware', 'Team lead'], year: '2018–19', status: 'Page coming' },
  { slug: 'welkom-online', title: 'Welkom Online', meta: ['Campaign', 'Storytelling & direction'], year: '[Year]', status: 'Page coming' },
];
