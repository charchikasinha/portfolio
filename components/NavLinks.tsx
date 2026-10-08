'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { notesLive } from '@/content/notes';

const NAV = [
  ['/projects', 'Projects'],
  ['/career', 'Career'],
  ['/about', 'About'],
] as const;
const LINKS = notesLive ? [NAV[0], NAV[1], ['/notes', 'Notes'] as const, NAV[2]] : NAV;

export default function NavLinks() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      {LINKS.map(([href, label]) => (
        <Link key={href} href={href} aria-current={path.startsWith(href) ? 'page' : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
