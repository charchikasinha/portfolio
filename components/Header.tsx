import Link from 'next/link';
import { site } from '@/content/site';
import NavLinks from './NavLinks';

export default function Header({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <header className="top mono">
      <Link href="/" className="markwrap" style={{ letterSpacing: 0, textTransform: 'none' }}>
        <span className="mark">{site.name}</span>
        {showTagline && <span className="sub">{site.tagline}</span>}
      </Link>
      <NavLinks />
    </header>
  );
}
