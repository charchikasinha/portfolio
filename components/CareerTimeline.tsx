'use client';
import { useState } from 'react';
import type { Bullet, Entry, Tag } from '@/content/career';

const FILTERS: [Tag | 'all', string][] = [['all', 'All'], ['product', 'Product'], ['tech', 'Tech'], ['leadership', 'Leadership'], ['strategy', 'Strategy']];

export default function CareerTimeline({ entries }: { entries: Entry[] }) {
  const [f, setF] = useState<Tag | 'all'>('all');
  const li = (b: Bullet, i: number) => (
    <li key={i} className={f !== 'all' && f !== b.tag ? 'dim' : ''}>
      <span>{b.text}</span>
      <span className="tg">{b.tag.toUpperCase()}</span>
    </li>
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Highlight by theme">
        {FILTERS.map(([k, l]) => (
          <button key={k} className="chip" aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <div className="tl">
        {entries.map(e => (
          <article className="entry" key={e.org}>
            <div className="mono muted" style={{ paddingTop: 8 }}>{e.dates}</div>
            <div>
              <h3>{e.org}</h3>
              <div className="role">{e.role}</div>
              {e.desc && <div className="desc">{e.desc}</div>}
              {e.groups?.map(g => (
                <div key={g.title}>
                  <div className="subh">{g.title}</div>
                  <ul>{g.bullets.map(li)}</ul>
                </div>
              ))}
              {e.bullets && <ul>{e.bullets.map(li)}</ul>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
