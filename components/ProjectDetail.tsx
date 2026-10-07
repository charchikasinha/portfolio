import Link from 'next/link';
import TakesTree from '@/components/TakesTree';
import Gallery from '@/components/Gallery';
import type { Project } from '@/content/projects';

// Shared case-study layout for project and creative pages.
export default function ProjectDetail({ p, crumb }: { p: Project; crumb: { href: string; label: string; tail: string } }) {
  const pg = p.page!;
  return (
    <>
        <div className="crumb mono muted">
          <Link href={crumb.href} className="u">{crumb.label}</Link><span>/</span><span>{crumb.tail}</span>
        </div>
        <div className="ptitle">
          <h1>{p.title}</h1>
          <p>{pg.summary}</p>
        </div>
        <div className="meta mono">
          {pg.facts.map(f => (
            <div key={f.label}>
              <span className="muted">{f.label}</span>
              <span>{f.href ? <a className="u" href={f.href} target="_blank" rel="noopener noreferrer">{f.value}</a> : f.value}</span>
            </div>
          ))}
        </div>
        <div className="hero">
          {pg.hero.kind === 'video' ? (
            pg.hero.src ? (
              <figure style={{ margin: 0 }}>
                <video src={pg.hero.src} poster={pg.hero.poster} autoPlay muted loop playsInline controls preload="metadata" aria-label={pg.hero.caption} style={{ width: '100%', display: 'block', border: '1px solid var(--ink)', background: 'var(--ink)' }} />
                <figcaption className="mono muted" style={{ marginTop: 10 }}>{pg.hero.caption}</figcaption>
              </figure>
            ) : (
              <div className="video"><div className="play" aria-hidden="true">▶</div><span className="mono">{pg.hero.caption}</span></div>
            )
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={pg.hero.src} alt={pg.hero.alt} style={{ width: '100%', border: '1px solid var(--ink)' }} />
          )}
        </div>
        {pg.sections.map(s => s.kind === 'gallery' ? (
          <section className="gsec" key={s.heading}>
            <h2 className="mono" style={{ margin: '0 0 24px', fontWeight: 500 }}>{s.heading}</h2>
            <Gallery items={s.items} aspect={s.aspect} />
          </section>
        ) : s.kind === 'youtube' ? (
          <section className="sec" key={s.heading}>
            <h2>{s.heading}</h2>
            <figure style={{ margin: 0 }}>
              <div style={{ aspectRatio: '16 / 9', border: '1px solid var(--ink)', background: 'var(--ink)' }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${s.id}?start=${s.start ?? 0}${s.end ? `&end=${s.end}` : ''}&rel=0&modestbranding=1`}
                  title={s.heading}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                />
              </div>
              <figcaption className="mono muted" style={{ marginTop: 10, lineHeight: 1.7 }}>{s.caption}</figcaption>
            </figure>
          </section>
        ) : (
          <section className="sec" key={s.heading}>
            <h2>{s.heading}</h2>
            {s.kind === 'text' && <div className="body">{s.body.map((b, i) => <p key={i}>{b}</p>)}</div>}
            {s.kind === 'steps' && (
              <div className="body steps">
                {s.steps.map((st, i) => (
                  <div key={i}><span className="mono muted">{String(i + 1).padStart(2, '0')}</span><span><b>{st.title}</b> {st.text}</span></div>
                ))}
              </div>
            )}
            {s.kind === 'artifacts' && (
              <div className="arts">
                {s.items.map(a => (
                  <div className="art" key={a.label}>
                    {a.diagram === 'takes-tree' ? (
                      <div className="f" style={{ border: '1px solid var(--ink)', padding: 18, display: 'flex', alignItems: 'center' }}><TakesTree /></div>
                    ) : a.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="f" src={a.image} alt={a.label} style={{ objectFit: 'cover', border: '1px solid var(--ink)' }} />
                    ) : (
                      <div className="f ph mono">{a.placeholder}</div>
                    )}
                    <span className="mono muted">{a.label}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
    </>
  );
}
