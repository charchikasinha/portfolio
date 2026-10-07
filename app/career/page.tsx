import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResumeLinks from '@/components/ResumeLinks';
import { careerIntro, roles, creative } from '@/content/career';

export const metadata: Metadata = { title: 'Career' };

export default function CareerPage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="phead">
          <h1>Career</h1>
          <div className="side career-side">
            <ResumeLinks />
            <a href="#creative" className="u mono jump">Creative work ↓</a>
          </div>
        </div>
        <p className="journey-intro">{careerIntro}</p>
        <div className="tl">
          {roles.map(r => (
            <article className="entry" key={r.company}>
              <div className="mono entry-side">
                <span>{r.years}</span>
                <span className="muted">{r.tag}</span>
              </div>
              <div>
                <h3>{r.company}</h3>
                <div className="desc" style={{ marginTop: 12 }}>{r.role}</div>
                <p className="journey-body">{r.body}</p>
                {r.highlights && (
                  <ul className="hl">
                    {r.highlights.map(h => <li key={h}><span className="dot" />{h}</li>)}
                  </ul>
                )}
                {r.more && (
                  <details className="more">
                    <summary className="mono">See all the work <span aria-hidden="true">↓</span></summary>
                    {r.more.map(g => (
                      <div className="more-group" key={g.group}>
                        <div className="mono muted">{g.group}</div>
                        <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
                      </div>
                    ))}
                  </details>
                )}
                {r.note && <div className="mono muted entry-note">{r.note}</div>}
                {r.link && <Link className="u mono entry-link" href={r.link.href}>{r.link.label} →</Link>}
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
