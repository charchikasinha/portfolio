import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResumeLinks from '@/components/ResumeLinks';
import CareerTimeline from '@/components/CareerTimeline';
import { career, evidence } from '@/content/career';

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
        <div className="evid">
          {evidence.map(e => (
            <div key={e.label}>
              <span className="mono muted">{e.label}</span>
              <b>{e.value}</b>
              <span>{e.text}</span>
            </div>
          ))}
        </div>
        <CareerTimeline entries={career} />
      </main>
      <Footer />
    </>
  );
}
