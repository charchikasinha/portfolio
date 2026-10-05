import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Cassets', description: 'Six experimental magazine covers from Mars, 2150.' };

const VOLS = [
  ['v02', 'Vol. 02', '29.12.2021', 'Koi-9, an engineered fish that purifies water, is declared endangered.'],
  ['v03', 'Vol. 03', '06.01.2022', 'Zenoxis-white — a new recreational drug, made from the seeds of a pink flower.'],
  ['v04', 'Vol. 04', '20.01.2022', 'The first harvest of lab-made Diamond Gems, valued by the time spent on them.'],
  ['v05', 'Vol. 05', '30.01.2022', 'Glowing butterflies: synthetic insects to keep at home, for nostalgia.'],
  ['v06', 'Vol. 06', '19.02.2022', 'The Aam pattern — the last cover, devoted to South Asian culture.'],
];

export default function CassetsPage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="crumb mono muted"><Link href="/about" className="u">About</Link><span>/</span><span>Creative practice</span></div>
        <div className="ptitle">
          <h1>Cassets</h1>
          <p>Six experimental magazine covers from Mars, 2150 — life celebrated, mistakes repeated.</p>
        </div>
        <div className="meta mono">
          <div><span className="muted">Type</span><span>Illustration / editorial series</span></div>
          <div><span className="muted">Year</span><span>2021–22</span></div>
          <div><span className="muted">Covers</span><span>6 volumes</span></div>
          <div><span className="muted">Links</span><span><a className="u" href="https://www.behance.net/gallery/142175357/CASSETS" target="_blank" rel="noopener noreferrer">Behance ↗</a></span></div>
        </div>
        <section className="sec" style={{ borderTop: 0, marginTop: 24 }}>
          <h2>The idea</h2>
          <div className="body"><p>Imagine it’s 2150. Your great-great-grandparents moved to Mars; your kids write essays about saving it. Through the covers you peep into how humanity survives on art, the thirst for growth, vanity and recreational substances — positivity and advancement veiling the community’s repeated mistakes.</p></div>
        </section>
        <section className="sec">
          <h2>The name</h2>
          <div className="body"><p>From “cassettes” — an old way of recording, something to look back to. Space is usually boundless and hostile; these designs make it local and homely. Each cover breaks from magazine uniformity to fit its topic, carrying the date, volume and my CS stamp.</p></div>
        </section>
        <div className="vols">
          {VOLS.map(([k, vol, date, text]) => (
            <figure className="vol" key={k} style={{ margin: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/creative/cassets/${k}.jpg`} alt={`Cassets ${vol} cover`} loading="lazy" />
              <figcaption>
                <div className="h mono"><span>{vol}</span><span className="muted">{date}</span></div>
                <p style={{ marginTop: 8 }}>{text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link className="next" href="/about"><span className="mono muted">Back to</span><span className="t">About →</span></Link>
      </main>
      <Footer />
    </>
  );
}
