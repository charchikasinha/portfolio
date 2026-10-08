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
