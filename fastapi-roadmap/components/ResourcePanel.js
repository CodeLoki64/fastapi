import { useEffect } from 'react';

const TAG = {
  doc:     { label: 'Docs',    bg: '#0c447c', color: '#b5d4f4' },
  video:   { label: 'Video',   bg: '#791F1F', color: '#f7c1c1' },
  article: { label: 'Article', bg: '#633806', color: '#FAC775' },
  course:  { label: 'Course',  bg: '#3C3489', color: '#CECBF6' },
};

const TIER = {
  beginner:     { label: 'Beginner',     bg: '#0F6E56', color: '#9FE1CB' },
  intermediate: { label: 'Intermediate', bg: '#3C3489', color: '#CECBF6' },
  advanced:     { label: 'Advanced',     bg: '#712B13', color: '#F5C4B3' },
};

export default function ResourcePanel({ node, tier, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const t = TIER[tier] || TIER.beginner;

  return (
    <div style={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={styles.panel} role="dialog" aria-modal="true">
        <button style={styles.close} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <span style={{ ...styles.badge, background: t.bg, color: t.color }}>{t.label}</span>
        <h2 style={styles.title}>{node.title}</h2>
        <p style={styles.desc}>{node.desc}</p>

        <div style={styles.resourceSection}>
          <p style={styles.resourceHeading}>Learning resources</p>
          <div style={styles.resourceList}>
            {node.resources.map((r, i) => {
              const tg = TAG[r.tag] || TAG.article;
              return (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={styles.resourceItem}
                   onMouseEnter={e => e.currentTarget.style.background = '#252521'}
                   onMouseLeave={e => e.currentTarget.style.background = '#1e1e1b'}>
                  <span style={{ ...styles.tag, background: tg.bg, color: tg.color }}>{tg.label}</span>
                  <span style={styles.resourceName}>{r.name}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '1rem',
  },
  panel: {
    background: '#1a1a17',
    border: '0.5px solid rgba(255,255,255,0.12)',
    borderRadius: '14px',
    width: '100%', maxWidth: '480px',
    maxHeight: '85vh', overflowY: 'auto',
    padding: '1.5rem',
    position: 'relative',
  },
  close: {
    position: 'absolute', top: '14px', right: '14px',
    background: 'none', border: 'none',
    color: 'rgba(255,255,255,0.4)',
    cursor: 'pointer', padding: '4px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: '6px',
    transition: 'color 0.15s',
  },
  badge: {
    display: 'inline-block',
    fontSize: '11px', fontWeight: 500,
    padding: '2px 9px',
    borderRadius: '99px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '20px', fontWeight: 600,
    color: '#f0efea',
    marginBottom: '8px',
    lineHeight: 1.3,
  },
  desc: {
    fontSize: '14px',
    color: '#9e9c94',
    lineHeight: 1.7,
    marginBottom: '20px',
  },
  resourceSection: {},
  resourceHeading: {
    fontSize: '11px', fontWeight: 600,
    color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    marginBottom: '8px',
  },
  resourceList: { display: 'flex', flexDirection: 'column', gap: '6px' },
  resourceItem: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '10px 12px',
    background: '#1e1e1b',
    border: '0.5px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background 0.15s',
  },
  tag: {
    fontSize: '11px', fontWeight: 600,
    padding: '2px 7px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  resourceName: {
    fontSize: '13px', color: '#d6d4cb',
    flex: 1,
  },
};
