// Signals. The newest one (first in the list) appears on the landing page.
// The image is turned into the drag-to-turn dot sculpture automatically.
export type Signal = {
  id: string; // '001'
  title: string;
  place: string;
  date: string; // DD.MM.YY
  thought: string;
  kind: string;
  image: string;
  ink: 'mono' | 'signal' | 'photo';
  inkColor?: string; // used when ink = 'signal'
  link?: { label: string; href: string };
};

export const signals: Signal[] = [
  {
    id: '003',
    title: 'Gishbeu',
    place: 'Berkeley Haas',
    date: '29.10.26',
    thought: 'Some things take 14 years. Roza Marchenko and Marco de Molina taught us Gishbeu at Haas, a toast to everyone who got you here. In the middle of a fast MBA, slowing down to say thank you felt really good.',
    kind: 'Talk / Tasting',
    image: '/signals/003.jpg',
    ink: 'photo',
  },
  {
    id: '002',
    title: 'Bix',
    place: 'Jackson Square, San Francisco',
    date: '21.10.26',
    thought: 'First jazz encounter in the Bay. French food, live jazz and a speakeasy: everything I love in an evening, full of surprises.',
    kind: 'Place / Evening',
    image: '/signals/002.jpg',
    ink: 'mono',
  },
  {
    id: '001',
    title: 'SF Tech Week',
    place: 'San Francisco',
    date: '05.10.26',
    thought: 'Built my first unethical product at SF Tech Week. On purpose.',
    link: { label: 'See Baby Perfect', href: '/projects/baby-perfect' },
    kind: 'Place / Event',
    image: '/signals/001.jpg', // stand-in still life (rendered); replace with a real photo
    ink: 'mono',
  },
];
