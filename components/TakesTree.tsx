export default function TakesTree() {
  return (
    <svg viewBox="0 0 240 110" width="100%" role="img" aria-label="Diagram: take T1 with branches T2 and T3 starting from later moments">
      <line x1="10" y1="30" x2="230" y2="30" stroke="#141413" strokeWidth="1.2" />
      <text x="10" y="20" fontFamily="IBM Plex Mono" fontSize="9" fill="#6B6A64">T1</text>
      <path d="M90 30 C 110 30, 110 62, 130 62 L 230 62" fill="none" stroke="#141413" strokeWidth="1.2" />
      <text x="132" y="55" fontFamily="IBM Plex Mono" fontSize="9" fill="#6B6A64">T2</text>
      <path d="M160 62 C 176 62, 176 92, 192 92 L 230 92" fill="none" stroke="#141413" strokeWidth="1.2" />
      <text x="194" y="86" fontFamily="IBM Plex Mono" fontSize="9" fill="#6B6A64">T3 ★</text>
      <circle cx="90" cy="30" r="3.5" fill="#D6F04A" stroke="#141413" />
      <circle cx="160" cy="62" r="3.5" fill="#D6F04A" stroke="#141413" />
    </svg>
  );
}
