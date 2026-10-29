import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data'

const NAV_LINKS = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(14,14,14,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.04em',
              color: 'var(--strong)',
            }}
          >
            {SITE.initials}
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--subtle)',
                  transition: 'color 0.2s ease',
                  fontWeight: 400,
                }}
                className="nav-link"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--strong)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--subtle)')}
              >
                {link.label}
              </a>
            ))}

            {/* Availability pill */}
            {SITE.available && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  color: 'var(--subtle)',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#4ade80',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }}
                />
                Available
              </span>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
              color: 'var(--text)',
            }}
            id="mobile-menu-btn"
          >
            <span style={{ display: 'block', width: '20px', height: '1px', background: 'currentColor', transition: 'transform 0.2s' }} />
            <span style={{ display: 'block', width: '20px', height: '1px', background: 'currentColor', transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: '20px', height: '1px', background: 'currentColor', transition: 'transform 0.2s' }} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'var(--bg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontSize: '1.5rem',
                color: 'var(--subtle)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--strong)',
                  fontWeight: 400,
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline responsive styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 640px) {
          header nav { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
