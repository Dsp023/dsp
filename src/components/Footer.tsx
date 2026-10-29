import { SITE } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          © {year} {SITE.name}
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          Designed & built by DSP
        </span>
      </div>
    </footer>
  )
}
