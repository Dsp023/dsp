import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SERVICES } from '../data'

export function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="services" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div
          ref={headerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            marginBottom: '4rem',
            alignItems: 'start',
          }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '1rem', color: 'var(--subtle)', lineHeight: 1.7, maxWidth: '500px' }}
          >
            I take on focused projects with clear scope. These are the three things I do well
            right now — if your need fits one of them, let's talk.
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: import('../data').Service; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--bg)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        transition: 'background 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
    >
      {/* Number */}
      <span className="section-label">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: '1.05rem',
          color: 'var(--strong)',
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.85rem', color: 'var(--subtle)', lineHeight: 1.7 }}>
        {service.description}
      </p>

      {/* Deliverables */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {service.deliverables.map((d) => (
          <li
            key={d}
            style={{
              fontSize: '0.8rem',
              color: 'var(--muted)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: 'var(--border)', marginTop: '2px', flexShrink: 0 }}>—</span>
            {d}
          </li>
        ))}
      </ul>

      {/* Price */}
      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Starting at
        </span>
        <p style={{ fontSize: '1.25rem', color: 'var(--strong)', fontWeight: 500, marginTop: '4px' }}>
          {service.startingAt}
        </p>
      </div>
    </motion.div>
  )
}
