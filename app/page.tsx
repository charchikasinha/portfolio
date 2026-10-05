import Link from 'next/link';
import Header from '@/components/Header';
import DotArt from '@/components/DotArt';
import { signals } from '@/content/signals';
import { site } from '@/content/site';

export default function Home() {
  const s = signals[0];
  return (
    <div className="landing">
      <Header showTagline />
      <main id="main">
        <DotArt src={s.image} ink={s.ink} inkColor={s.inkColor} label={`Current signal: ${s.title}, as a field of dots you can drag to turn.`} />
      </main>
      <div className="landfoot mono">
        <span className="muted">{site.location}</span>
        <Link className="sig" href={`/signals/${s.id}`}>
          <span className="dot" />Current Signal / {s.id} — {s.title} →
        </Link>
        <span className="end muted">Drag to turn</span>
      </div>
    </div>
  );
}
