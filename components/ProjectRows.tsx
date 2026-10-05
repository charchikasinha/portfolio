'use client';
import Link from 'next/link';
import { useRef } from 'react';
import type { Project } from '@/content/projects';

// Numbered project rows. On desktop, hovering a row with a page shows a small preview by the cursor.
export default function ProjectRows({ projects, previews }: { projects: Project[]; previews: Record<string, string> }) {
  const peek = useRef<HTMLDivElement>(null);
  const fine = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  return (
    <>
      <div className="rows">
        {projects.map((p, i) => {
          const n = String(i + 1).padStart(2, '0');
          const inner = (
            <>
              <span className="n">{n}</span>
              <span className="t">
                {p.title}
                {p.status && <span className="status">{p.status.toUpperCase()}</span>}
              </span>
              <span className="m">{p.meta[0]}<br />{p.meta[1]}</span>
              <span className="y">{p.year}</span>
            </>
          );
          if (!p.page) return <div key={p.slug} className="row static">{inner}</div>;
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="row"
              onMouseEnter={() => {
                if (!fine() || !peek.current) return;
                const src = previews[p.slug];
                peek.current.innerHTML = src ? `<img src="${src}" alt="">` : '<div class="dith" style="height:100%"></div>';
                peek.current.classList.add('on');
              }}
              onMouseMove={e => {
                if (!peek.current) return;
                peek.current.style.left = e.clientX + 140 + 'px';
                peek.current.style.top = e.clientY + 'px';
              }}
              onMouseLeave={() => peek.current?.classList.remove('on')}
            >
              {inner}
            </Link>
          );
        })}
      </div>
      <div className="peek" ref={peek} aria-hidden="true" />
    </>
  );
}
