import { useState } from 'react';

const TIER_COLORS = {
  beginner: {
    bg: '#0d2e22',
    border: '#1D9E75',
    title: '#9FE1CB',
    sub: '#5DCAA5',
    dot: '#1D9E75',
  },
  intermediate: {
    bg: '#1a1838',
    border: '#7F77DD',
    title: '#CECBF6',
    sub: '#AFA9EC',
    dot: '#7F77DD',
  },
  advanced: {
    bg: '#2a1208',
    border: '#D85A30',
    title: '#F5C4B3',
    sub: '#F0997B',
    dot: '#D85A30',
  },
};

export default function RoadmapNode({ node, tier, onClick }) {
  const [hovered, setHovered] = useState(false);
  const c = TIER_COLORS[tier] || TIER_COLORS.beginner;

  return (
    <button
      onClick={() => onClick(node, tier)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? c.bg : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? c.border : 'rgba(255,255,255,0.09)'}`,
        borderRadius: '10px',
        padding: '12px 16px',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        transition: 'all 0.18s ease',
        transform: hovered ? 'translateY(-1px)' : 'none',
        boxShadow: hovered ? `0 0 0 1px ${c.border}22, 0 4px 16px rgba(0,0,0,0.3)` : 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <span style={{
        width: '8px', height: '8px', borderRadius: '50%',
        background: c.dot, flexShrink: 0,
        boxShadow: hovered ? `0 0 8px ${c.dot}99` : 'none',
        transition: 'box-shadow 0.18s',
      }} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          display: 'block',
          fontSize: '13px', fontWeight: 600,
          color: hovered ? c.title : '#d0cec6',
          transition: 'color 0.18s',
          lineHeight: 1.3,
        }}>
          {node.title}
        </span>
        <span style={{
          display: 'block',
          fontSize: '11px',
          color: hovered ? c.sub : 'rgba(255,255,255,0.28)',
          marginTop: '2px',
          transition: 'color 0.18s',
        }}>
          {node.subtitle}
        </span>
      </span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
        style={{ flexShrink: 0, opacity: hovered ? 0.7 : 0.2, transition: 'opacity 0.18s' }}>
        <path d="M3 7h8M8 4l3 3-3 3" stroke={c.title} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
