import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { creativeProjects } from '@/content/projects';

const p = creativeProjects.find(x => x.slug === 'welkom-online')!;
export const metadata: Metadata = { title: p.title, description: p.page?.summary };

export default function WelkomOnlinePage() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <ProjectDetail p={p} crumb={{ href: '/career#creative', label: 'Career', tail: 'Creative endeavours' }} />
        <Link className="next" href="/career#creative">
          <span className="mono muted">Back</span><span className="t">Creative endeavours →</span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
