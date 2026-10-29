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
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--border)',
      }}
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
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--strong)',
            maxWidth: '820px',
            marginBottom: '2rem',
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
            fontSize: '1.05rem',
            color: 'var(--subtle)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '3rem',
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
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#work"
            id="hero-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.75rem 1.5rem',
              background: 'var(--white)',
              color: 'var(--bg)',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              borderRadius: '2px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View selected work
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
              padding: '0.75rem 1.5rem',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontWeight: 400,
              borderRadius: '2px',
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
            Let's work together
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
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
