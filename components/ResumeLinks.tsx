import { site } from '@/content/site';

export default function ResumeLinks() {
  return (
    <div className="resume">
      <span className="mono">Download résumé ↓</span>
      <div className="toggle" role="group" aria-label="Résumé version">
        <a href={site.resume.PM} download>PM</a>
        <a href={site.resume.PMM} download>PMM</a>
      </div>
    </div>
  );
}
