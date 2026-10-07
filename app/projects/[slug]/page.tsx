import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { productProjects as projects } from '@/content/projects';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter(p => p.page).map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  return p ? { title: p.title, description: p.page?.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const idx = projects.findIndex(x => x.slug === slug);
  const p = projects[idx];
  if (!p?.page) notFound();
  const next = projects.slice(idx + 1).concat(projects.slice(0, idx)).find(x => x.page);

  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <ProjectDetail p={p} crumb={{ href: '/projects', label: 'Projects', tail: String(idx + 1).padStart(2, '0') }} />
        {next && next.slug !== p.slug && (
          <Link className="next" href={`/projects/${next.slug}`}>
            <span className="mono muted">Next</span><span className="t">{next.title} →</span>
          </Link>
        )}
      </main>
      <Footer />
    </>
  );
}
