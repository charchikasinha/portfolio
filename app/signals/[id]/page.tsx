import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DotArt from '@/components/DotArt';
import { signals } from '@/content/signals';

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return signals.map(s => ({ id: s.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const s = signals.find(x => x.id === id);
  return s ? { title: `Signal ${s.id} — ${s.title}` } : {};
}

const inkName = { mono: 'Mono', signal: 'Signal ink', photo: 'Photo colour' } as const;

export default async function SignalPage({ params }: Params) {
  const { id } = await params;
  const s = signals.find(x => x.id === id);
  if (!s) notFound();
  const isCurrent = signals[0].id === s.id;
  const swatch = s.ink === 'signal' ? s.inkColor ?? '#9E3B26' : '#141413';

  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="sigpage">
          <DotArt src={s.image} ink={s.ink} inkColor={s.inkColor} label={`Signal ${s.id}: ${s.title}, as a field of dots you can drag to turn.`} />
          <div>
            <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="dot" />{isCurrent ? 'Current Signal' : 'Signal'} / {s.id}
            </div>
            <h1>{s.title}</h1>
            <div className="mono muted">{s.place} — {s.date}</div>
            <p className="thought">{s.thought}</p>
            {s.link && <Link className="u mono entry-link" href={s.link.href}>{s.link.label} →</Link>}
            <div className="kv mono">
              <span className="muted">Kind</span><span>{s.kind}</span>
              <span className="muted">Ink</span><span><span className="swatch" style={{ background: swatch }} />{inkName[s.ink]}</span>
              <span className="muted">Render</span><span>Dot relief, drag to turn</span>
            </div>
          </div>
        </div>
        <div className="archive">
          <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>Signal archive</span><span className="muted">{signals.length} {signals.length === 1 ? 'entry' : 'entries'}</span>
          </div>
          {signals.map(x => (
            <Link className="arow" href={`/signals/${x.id}`} key={x.id}>
              <span className="mono">{x.id}</span>
              <span className="t">{x.title}</span>
              <span className="mono muted"><span className="swatch" style={{ background: x.ink === 'signal' ? x.inkColor ?? '#9E3B26' : '#141413' }} />{inkName[x.ink]}</span>
              <span className="mono muted">{x.date}</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
