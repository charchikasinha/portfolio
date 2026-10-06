import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResumeLinks from '@/components/ResumeLinks';
import { careerIntro, chapters } from '@/content/career';

export const metadata: Metadata = { title: 'Career' };

export default function CareerPage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="phead">
          <h1>Career</h1>
          <div className="side"><ResumeLinks /></div>
        </div>
        <p className="journey-intro">{careerIntro}</p>
        <div className="tl">
          {chapters.map(c => (
            <article className="entry" key={c.n}>
              <div className="mono" style={{ paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>{c.n}</span>
                <span className="muted">{c.years}</span>
              </div>
              <div>
                <h3>{c.title}</h3>
                <div className="desc" style={{ marginTop: 12 }}>{c.where}</div>
                <p className="journey-body">{c.body}</p>
                {c.proof && <div className="proof mono"><span className="dot" />{c.proof}</div>}
              </div>
            </article>
          ))}
        </div>
        <div style={{ padding: '40px 0 0' }}><ResumeLinks /></div>
      </main>
      <Footer />
    </>
  );
}
