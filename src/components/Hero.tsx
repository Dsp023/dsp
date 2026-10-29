import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { SITE } from '../data'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="hero-section"
    >
      <div className="container">
        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(2.1rem, 6.5vw, 4.5rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: 'var(--strong)',
            maxWidth: '820px',
            marginBottom: '1.5rem',
          }}
        >
          {SITE.tagline}
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            fontSize: '1rem',
            color: 'var(--subtle)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          {SITE.subTagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hero-cta-group"
        >
          <a
            href="#work"
            id="hero-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.8rem 1.6rem',
              background: 'var(--white)',
              color: 'var(--bg)',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              borderRadius: '3px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <span>View selected work</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#contact"
            id="hero-cta-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.8rem 1.6rem',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontWeight: 400,
              borderRadius: '3px',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--subtle)'
              e.currentTarget.style.color = 'var(--strong)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text)'
            }}
          >
            <span>Let's work together</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hero-scroll-indicator"
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              style={{ width: '100%', height: '100%', background: 'var(--subtle)', transformOrigin: 'top' }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
