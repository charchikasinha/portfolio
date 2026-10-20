import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResumeLinks from '@/components/ResumeLinks';
import { careerIntro, chapters, creative } from '@/content/career';

export const metadata: Metadata = { title: 'Career' };

const A = ({ href, children }: { href: string; children: React.ReactNode }) =>
  href.startsWith('#') ? <a className="u mono entry-link" href={href}>{children}</a> : <Link className="u mono entry-link" href={href}>{children}</Link>;

export default function CareerPage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="phead">
          <h1>Career</h1>
          <div className="side career-side">
            <ResumeLinks />
            <a href="#creative" className="u mono jump">Creative endeavours ↓</a>
          </div>
        </div>
        <div className="journey-intro">{careerIntro.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div className="tl">
          {chapters.map(c => (
            <article className="entry chapter" key={c.n}>
              <div className="mono entry-side">
                <span>{c.n}</span>
                <span className="muted">{c.years}</span>
              </div>
              <div>
                <h3>{c.title}</h3>
                <p className="org">{c.org}</p>
                {c.body.map((b, i) => <p className="journey-body" key={i}>{b}</p>)}
                {c.hats && (
                  <ul className="hats">
                    {c.hats.map(h => <li key={h.title}><b>{h.title}</b> {h.text}</li>)}
                  </ul>
                )}
                {c.list && <ul className="hl">{c.list.map(h => <li key={h}><span className="dot" />{h}</li>)}</ul>}
                {c.after?.map((b, i) => <p className="journey-body" key={i}>{b}</p>)}
                {(c.highlight || c.links) && (
                  <div className="chapter-links">
                    {c.links?.map(l => <A key={l.href} href={l.href}>{l.label} →</A>)}
                    {c.highlight && <span className="proof mono"><span className="dot" />{c.highlight}</span>}
                  </div>
                )}
                {c.next && (
                  <p className="next-line">→ {c.next.text}{c.next.link && <> <A href={c.next.link.href}>{c.next.link.label} →</A></>}</p>
                )}
              </div>
            </article>
          ))}
        </div>
        <div style={{ padding: '40px 0 0' }}><ResumeLinks /></div>

        <section id="creative" className="creative">
          <h2>Side creative endeavours</h2>
          <p className="journey-body">{creative.intro}</p>
          <div className="cgrid">
            {creative.items.map(c => (
              <div className="citem" key={c.title}>
                <h4>{c.title}</h4>
                <div className="mono muted">{c.role}</div>
                <p>{c.text}</p>
                {'href' in c && c.href && <Link className="u mono entry-link" href={c.href}>See the project →</Link>}
              </div>
            ))}
          </div>
          <div className="clinks mono">
            {creative.links.map(l => 'external' in l && l.external
              ? <a key={l.label} className="u" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
              : <Link key={l.label} className="u" href={l.href}>{l.label} →</Link>)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
