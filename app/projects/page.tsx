import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectRows from '@/components/ProjectRows';
import { projects } from '@/content/projects';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  const previews: Record<string, string> = {};
  for (const p of projects) {
    const h = p.page?.hero;
    if (h?.kind === 'image') previews[p.slug] = h.src;
    else if (h?.kind === 'video' && h.poster) previews[p.slug] = h.poster;
  }
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="phead" style={{ marginBottom: 24 }}>
          <h1>Projects</h1>
          <div className="side mono">
            <span>{String(projects.length).padStart(2, '0')} projects</span>
            <span className="muted">Updated {site.updated}</span>
          </div>
        </div>
        <ProjectRows projects={projects} previews={previews} />
      </main>
      <Footer />
    </>
  );
}
