import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { notes, notesLive } from '@/content/notes';

export const metadata: Metadata = { title: 'Notes' };

export default function NotesPage() {
  if (!notesLive) notFound();
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="phead">
          <h1>Notes</h1>
          <div className="side mono">
            <span>Short things — written, filmed or noticed</span>
            <span className="muted">{notes.length} entries</span>
          </div>
        </div>
        <div className="notes">
          {notes.map(n => (
            <article className="note" key={n.id}>
              <div className="mono">
                <div>Note {n.id}</div>
                <div className="muted" style={{ marginTop: 6 }}>{n.format}</div>
                <div className="muted" style={{ marginTop: 6 }}>{n.date}</div>
              </div>
              <div>
                <h3>{n.title}{n.draft && <span className="badge">DRAFT IDEA</span>}</h3>
                <p>{n.body}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {n.image && <img className="fig" src={n.image} alt="" />}
                {n.video && (
                  <div className="fig video" style={{ aspectRatio: '16/9', width: 'min(360px,100%)' }}>
                    <div className="play" aria-hidden="true" style={{ width: 44, height: 44 }}>▶</div>
                  </div>
                )}
              </div>
              <span className="mono muted end">{n.topic}</span>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
