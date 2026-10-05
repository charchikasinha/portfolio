import { site } from '@/content/site';
import ResumeLinks from './ResumeLinks';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap in mono">
        {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span className="muted">[email]</span>}
        <span className="links">
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={site.links.behance} target="_blank" rel="noopener noreferrer">Behance ↗</a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </span>
        <ResumeLinks />
      </div>
      <div className="wrap mono muted" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingBottom: 32 }}>
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.coordinates}</span>
      </div>
    </footer>
  );
}
