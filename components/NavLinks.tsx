'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  ['/projects', 'Projects'],
  ['/career', 'Career'],
  ['/notes', 'Notes'],
  ['/about', 'About'],
] as const;

export default function NavLinks() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      {NAV.map(([href, label]) => (
        <Link key={href} href={href} aria-current={path.startsWith(href) ? 'page' : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
