// Notes: short writing, videos, or an image + a thought. Newest first.
export type Note = {
  id: string;
  title: string;
  format: string; // '3 min read', '01:14 video', 'Image + thought'
  date: string;
  topic: string;
  body: string;
  draft?: boolean;
  image?: string;
  video?: boolean;
};

export const notes: Note[] = [
  { id: '003', title: '[Something you noticed at SF Tech Week]', format: 'Image + thought', date: '05.10.26', topic: 'SF', body: '[One or two sentences. A note can be just an image and a thought.]', image: '/notes/placeholder.png' },
  { id: '002', title: 'Directing a model like a camera', format: '3 min read', date: '[Date]', topic: 'Building', body: 'Clip models make you prompt, wait and start over. Real-time video lets you direct takes. What changed when I built for directors instead of prompters.', draft: true },
  { id: '001', title: '[Living Storyboard in 74 seconds]', format: '01:14 video', date: '[Date]', topic: 'Video', body: '[A short walkthrough clip.]', video: true },
];
