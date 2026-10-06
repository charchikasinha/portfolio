import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResumeLinks from '@/components/ResumeLinks';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'About' };

const facts = [
  ['Now', 'MBA, UC Berkeley Haas, Class of 2028'],
  ['Based', site.location],
  ['Interested in', 'Creative tech products, and tools that make building feel seamless'],
  ['Off-screen', 'Club tennis, psychological thrillers, photography, themed dinners'],
  ['Languages', 'English, Hindi; Dutch and Spanish (intermediate)'],
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="about">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="portrait" src="/portrait.png" alt={`Portrait of ${site.name}`} style={{ width: '100%', objectFit: 'cover', imageRendering: 'pixelated' }} />
            <div className="mono muted" style={{ marginTop: 10 }}>Fig. 00 — Berkeley, 2026</div>
          </div>
          <div>
            <p className="lede">{site.statement}</p>
            <div className="bio">
              <p>I grew up aboard a merchant ship, docking in more than twenty countries before I was nine. Moving that often taught me to read new places quickly, and I’ve been crossing between worlds ever since.</p>
              <p>I studied data science and AI while keeping a long-running art practice. For three years I owned products at Plat4mation in Belgium — HR, research and public-sector platforms — and led AI adoption, while art-directing campaigns, identities and album covers on the side.</p>
              <p>Now I’m at Berkeley Haas, working toward product roles where technology and taste meet.</p>
            </div>
            <div style={{ marginTop: 28 }}><ResumeLinks /></div>
          </div>
        </div>

        <section className="cp">
          <div>
            <h2 className="mono">Creative practice</h2>
            <p>Alongside product work I’ve art-directed campaigns, identities and album covers. It’s where my eye for detail comes from.</p>
            <div className="mono" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <Link className="u" href="/creative/cassets">Cassets →</Link>
              <a className="u" href={site.links.behance} target="_blank" rel="noopener noreferrer">Behance ↗</a>
            </div>
          </div>
          <div className="covers">
            {['v06', 'v02', 'v04'].map(v => (
              <Link key={v} href="/creative/cassets">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/creative/cassets/${v}.jpg`} alt={`Cassets ${v.replace('v', 'Vol. ')}`} />
              </Link>
            ))}
          </div>
        </section>

        <div className="facts mono">
          {facts.map(([k, v]) => (
            <div key={k}><span className="muted">{k}</span><span>{v}</span></div>
          ))}
          <div>
            <span className="muted">Contact</span>
            <span>
              {site.email ? <a className="u" href={`mailto:${site.email}`}>{site.email}</a> : '[email]'} · <a className="u" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
