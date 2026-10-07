'use client';
import { useCallback, useEffect, useState } from 'react';

export type GalleryItem = { src: string; caption: string; alt: string; video?: boolean; poster?: string };

// Two-per-row screenshots; click to view full size, arrows/Esc to navigate.
export default function Gallery({ items, aspect }: { items: GalleryItem[]; aspect?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen(o => (o === null ? o : (o + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, close, step]);

  return (
    <>
      <div className={items.length === 1 ? 'gallery single' : 'gallery'}>
        {items.map((it, i) => (
          <figure key={it.src}>
            {it.video ? (
              <div className="gvid">
                <video src={it.src} poster={it.poster} autoPlay muted loop playsInline controls preload="metadata" aria-label={it.alt} style={aspect ? { aspectRatio: aspect, objectFit: 'cover' } : undefined} />
              </div>
            ) : (
              <button type="button" onClick={() => setOpen(i)} aria-label={`Enlarge: ${it.alt}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt} loading="lazy" style={aspect ? { aspectRatio: aspect, objectFit: 'cover' } : undefined} />
              </button>
            )}
            <figcaption><span className="mono muted">{String(i + 1).padStart(2, '0')}</span>{it.caption}</figcaption>
          </figure>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[open].alt} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {items[open].video
            ? <video src={items[open].src} autoPlay muted loop playsInline controls onClick={e => e.stopPropagation()} />
            : <img src={items[open].src} alt={items[open].alt} onClick={e => e.stopPropagation()} />}
          <div className="lb-bar mono" onClick={e => e.stopPropagation()}>
            <button type="button" onClick={() => step(-1)} aria-label="Previous">←</button>
            <span>{String(open + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} — {items[open].caption}</span>
            <button type="button" onClick={() => step(1)} aria-label="Next">→</button>
            <button type="button" onClick={close}>Close · Esc</button>
          </div>
        </div>
      )}
    </>
  );
}
