'use client';
import { useEffect, useRef } from 'react';

type Props = {
  mode?: 'relief' | 'globe';
  src?: string; // photo for relief mode
  ink?: 'mono' | 'signal' | 'photo';
  inkColor?: string;
  pin?: { lat: number; lon: number; label: string }; // globe mode
  className?: string;
  label: string;
};

type Pt = [number, number, number, number, string];

/**
 * Turns a photo into a field of halftone dots with depth (darker = bigger, further forward),
 * which the visitor can drag to turn. Globe mode draws land as dots with a pinned signal.
 */
export default function DotArt({ mode = 'relief', src, ink = 'mono', inkColor = '#9E3B26', pin, className = 'art-canvas', label }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d')!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Globe starts with the pin a little left of centre, then rotates it into view.
    const s = mode === 'relief'
      ? { yaw: -0.45, pitch: 0.18 }
      : { yaw: ((pin ? -pin.lon : 0) - 40) * Math.PI / 180, pitch: 0.38 };
    let vy = 0;
    let drag: { x: number; y: number } | null = null;
    let pts: Pt[] | null = null;
    let land: [number, number][] | null = null;
    let cols = 92, aspect = 1.26, raf = 0;
    const t0 = performance.now();

    if (mode === 'relief' && src) {
      const im = new Image();
      im.onload = () => {
        const rows = Math.round((cols * im.height) / im.width);
        aspect = rows / cols;
        const c = document.createElement('canvas');
        c.width = cols; c.height = rows;
        const x = c.getContext('2d')!;
        x.drawImage(im, 0, 0, cols, rows);
        const d = x.getImageData(0, 0, cols, rows).data;
        const out: Pt[] = [];
        for (let r = 0; r < rows; r++)
          for (let q = 0; q < cols; q++) {
            const i = (r * cols + q) * 4, R = d[i], G = d[i + 1], B = d[i + 2];
            const l = (0.299 * R + 0.587 * G + 0.114 * B) / 255;
            out.push([q / cols - 0.5, (r / rows - 0.5) * aspect, (0.5 - l) * 0.34, 1 - l, `rgb(${R},${G},${B})`]);
          }
        pts = out;
      };
      im.src = src;
    }
    if (mode === 'globe') {
      fetch('/data/land.json').then(r => r.json()).then((p: [number, number][]) => {
        land = p.map(([a, b]) => [(a * Math.PI) / 180, (b * Math.PI) / 180]);
      }).catch(() => { land = []; });
    }

    const down = (e: PointerEvent) => { drag = { x: e.clientX, y: e.clientY }; cv.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      drag = { x: e.clientX, y: e.clientY };
      vy = dx * 0.006;
      if (mode === 'relief') {
        s.yaw = Math.max(-1.15, Math.min(1.15, s.yaw + vy));
        s.pitch = Math.max(-0.7, Math.min(0.7, s.pitch - dy * 0.005));
      } else {
        s.yaw += vy;
        s.pitch = Math.max(-1, Math.min(1, s.pitch + dy * 0.005));
      }
    };
    const up = () => { drag = null; };
    cv.addEventListener('pointerdown', down);
    cv.addEventListener('pointermove', move);
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);

    const color = ink === 'signal' ? inkColor : '#141413';

    const drawRelief = (w: number, h: number) => {
      if (!pts) return;
      if (!drag && !reduce) {
        vy *= 0.93;
        const t = (performance.now() - t0) / 1000, tg = Math.sin(t * 0.35) * 0.42;
        s.yaw += vy + (Math.abs(vy) < 0.002 ? (tg - s.yaw) * 0.012 : 0);
        s.pitch += (0.12 - s.pitch) * 0.01;
      }
      const cy0 = Math.cos(s.yaw), sy0 = Math.sin(s.yaw), cp = Math.cos(s.pitch), sp = Math.sin(s.pitch);
      const sc = Math.min(w, h / aspect) * 0.8, cell = sc / cols, cx = w / 2, cy = h / 2;
      if (ink !== 'photo') { ctx.fillStyle = color; ctx.beginPath(); }
      for (const p of pts) {
        const x1 = p[0] * cy0 - p[2] * sy0, z1 = p[0] * sy0 + p[2] * cy0;
        const y2 = p[1] * cp - z1 * sp, z2 = p[1] * sp + z1 * cp;
        const f = 2.4 / (2.4 + z2), rad = (0.12 + p[3] * 0.88) * cell * 0.56 * f;
        if (rad < 0.35 && ink !== 'photo') continue;
        const px = cx + x1 * sc * f, py = cy + y2 * sc * f;
        if (ink === 'photo') { ctx.fillStyle = p[4]; ctx.beginPath(); ctx.arc(px, py, Math.max(rad, cell * 0.38), 0, 6.2832); ctx.fill(); }
        else { ctx.moveTo(px + rad, py); ctx.arc(px, py, rad, 0, 6.2832); }
      }
      if (ink !== 'photo') ctx.fill();
    };

    const proj = (lat: number, lon: number, R: number, cx: number, cy: number) => {
      const lr = lon + s.yaw, cl = Math.cos(lat);
      const x = cl * Math.sin(lr), y = -Math.sin(lat), z = cl * Math.cos(lr);
      const cp = Math.cos(s.pitch), sp = Math.sin(s.pitch);
      return [cx + x * R, cy + (y * cp + z * sp) * R, -y * sp + z * cp];
    };
    const drawGlobe = (w: number, h: number) => {
      if (!land) return;
      if (!drag && !reduce) { vy *= 0.95; s.yaw += vy + 0.0018; s.pitch += (0.38 - s.pitch) * 0.008; }
      const cx = w / 2, cy = h / 2, R = Math.min(w, h) * 0.42;
      ctx.strokeStyle = 'rgba(20,20,19,.35)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.2832); ctx.stroke();
      const bk = new Path2D(), fr = new Path2D();
      for (const p of land) {
        const q = proj(p[0], p[1], R, cx, cy);
        if (q[2] < 0) { bk.moveTo(q[0] + 0.9, q[1]); bk.arc(q[0], q[1], 0.9, 0, 6.2832); }
        else { const rr = 1.1 + q[2] * 1.5; fr.moveTo(q[0] + rr, q[1]); fr.arc(q[0], q[1], rr, 0, 6.2832); }
      }
      ctx.fillStyle = 'rgba(20,20,19,.12)'; ctx.fill(bk);
      ctx.fillStyle = color; ctx.fill(fr);
      if (pin) {
        const q = proj((pin.lat * Math.PI) / 180, (pin.lon * Math.PI) / 180, R, cx, cy);
        if (q[2] > 0.05) {
          const pu = (((performance.now() - t0) / 1000) % 2) / 2;
          ctx.strokeStyle = `rgba(20,20,19,${0.6 * (1 - pu)})`;
          ctx.beginPath(); ctx.arc(q[0], q[1], 7 + pu * 18, 0, 6.2832); ctx.stroke();
          ctx.fillStyle = '#D6F04A'; ctx.strokeStyle = '#141413'; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.arc(q[0], q[1], 6, 0, 6.2832); ctx.fill(); ctx.stroke();
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(q[0] + 8, q[1] - 8); ctx.lineTo(q[0] + 40, q[1] - 40); ctx.lineTo(q[0] + 124, q[1] - 40); ctx.stroke();
          ctx.fillStyle = '#141413'; ctx.font = '500 10px "IBM Plex Mono", monospace';
          ctx.fillText(pin.label, q[0] + 44, q[1] - 46);
        }
      }
    };

    const loop = () => {
      const r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1;
      const W = Math.round(r.width * d), H = Math.round(r.height * d);
      if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, r.width, r.height);
      if (mode === 'relief') drawRelief(r.width, r.height); else drawGlobe(r.width, r.height);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      cv.removeEventListener('pointerdown', down);
      cv.removeEventListener('pointermove', move);
      cv.removeEventListener('pointerup', up);
      cv.removeEventListener('pointercancel', up);
    };
  }, [mode, src, ink, inkColor, pin]);

  return <canvas ref={ref} className={className} role="img" aria-label={label} />;
}
