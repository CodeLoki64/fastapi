import Head from 'next/head';
import { useState } from 'react';
import { ROADMAP } from '../data/roadmap';
import RoadmapNode from '../components/RoadmapNode';
import ResourcePanel from '../components/ResourcePanel';

const TIER_META = {
  beginner: {
    label: 'Beginner',
    color: '#1D9E75',
    dimColor: '#0d2e22',
    borderColor: 'rgba(29,158,117,0.25)',
    desc: 'Start here — core concepts and setup',
  },
  intermediate: {
    label: 'Intermediate',
    color: '#7F77DD',
    dimColor: '#1a1838',
    borderColor: 'rgba(127,119,221,0.25)',
    desc: 'Build production-ready features',
  },
  advanced: {
    label: 'Advanced',
    color: '#D85A30',
    dimColor: '#2a1208',
    borderColor: 'rgba(216,90,48,0.25)',
    desc: 'Scale, secure, and ship',
  },
};

export default function Home() {
  const [active, setActive] = useState(null);

  const totalNodes = ROADMAP.reduce((acc, t) => acc + t.nodes.length, 0);

  return (
    <>
      <Head>
        <title>FastAPI Roadmap</title>
        <meta name="description" content="A visual roadmap for learning FastAPI — from setup to production microservices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
      </Head>

      <div style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <div style={styles.logoRow}>
              <span style={styles.logo}>⚡</span>
              <span style={styles.logoText}>FastAPI Roadmap</span>
            </div>
            <p style={styles.headerSub}>
              {totalNodes} topics · from first route to production microservices
            </p>
          </div>
        </header>

        {/* Legend */}
        <div style={styles.legendRow}>
          {Object.entries(TIER_META).map(([key, m]) => (
            <div key={key} style={styles.legendItem}>
              <span style={{ ...styles.legendDot, background: m.color }} />
              <span style={styles.legendLabel}>{m.label}</span>
            </div>
          ))}
        </div>

        {/* Roadmap tiers */}
        <main style={styles.main}>
          {ROADMAP.map((tier) => {
            const meta = TIER_META[tier.tier];
            return (
              <section key={tier.tier} style={styles.tierSection}>
                {/* Tier header */}
                <div style={styles.tierHeader}>
                  <div style={{ ...styles.tierLine, background: meta.color }} />
                  <div style={styles.tierLabelWrap}>
                    <span style={{ ...styles.tierBadge, background: meta.dimColor, color: meta.color, border: `1px solid ${meta.color}44` }}>
                      {meta.label}
                    </span>
                    <span style={styles.tierDesc}>{meta.desc}</span>
                  </div>
                </div>

                {/* Node grid */}
                <div style={styles.grid}>
                  {tier.nodes.map((node) => (
                    <RoadmapNode
                      key={node.id}
                      node={node}
                      tier={tier.tier}
                      onClick={(n, t) => setActive({ node: n, tier: t })}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            Click any topic to see a description and free learning resources.
            Built with Next.js · Inspired by{' '}
            <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer"
               style={{ color: '#5DCAA5', textDecoration: 'none' }}>
              roadmap.sh
            </a>
          </p>
        </footer>
      </div>

      {active && (
        <ResourcePanel
          node={active.node}
          tier={active.tier}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0e0e0c',
  },
  header: {
    borderBottom: '0.5px solid rgba(255,255,255,0.07)',
    padding: '3rem 1.5rem 2rem',
  },
  headerInner: {
    maxWidth: '860px',
    margin: '0 auto',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  logo: {
    fontSize: '28px',
    lineHeight: 1,
  },
  logoText: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#f0efea',
    letterSpacing: '-0.02em',
  },
  headerSub: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.35)',
    marginLeft: '38px',
  },
  legendRow: {
    display: 'flex',
    gap: '20px',
    padding: '12px 1.5rem',
    maxWidth: '860px',
    margin: '0 auto',
    borderBottom: '0.5px solid rgba(255,255,255,0.05)',
  },
  legendItem: {
    display: 'flex', alignItems: 'center', gap: '6px',
  },
  legendDot: {
    width: '7px', height: '7px', borderRadius: '50%',
  },
  legendLabel: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
  },
  main: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  tierSection: {},
  tierHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '14px',
  },
  tierLine: {
    width: '3px',
    height: '36px',
    borderRadius: '2px',
    flexShrink: 0,
  },
  tierLabelWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  tierBadge: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '3px 10px',
    borderRadius: '99px',
  },
  tierDesc: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '8px',
  },
  footer: {
    borderTop: '0.5px solid rgba(255,255,255,0.06)',
    padding: '1.5rem',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.22)',
  },
};
