import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SITE } from '../data'

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const links = [
    SITE.github && { label: 'GitHub', href: SITE.github },
    SITE.linkedin && { label: 'LinkedIn', href: SITE.linkedin },
    SITE.whatsapp && { label: 'WhatsApp', href: SITE.whatsapp },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div ref={ref} style={{ maxWidth: '680px' }}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: 'block', marginBottom: '2.5rem' }}
          >
            Get in touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--strong)',
              marginBottom: '1.5rem',
            }}
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '0.95rem', color: 'var(--subtle)', lineHeight: 1.8, marginBottom: '2.5rem' }}
          >
            I'm available for short-term freelance projects. Send me a brief message
            describing what you need — I'll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Email CTA */}
            <a
              href={`mailto:${SITE.email}`}
              id="contact-email"
              className="contact-cta-button"
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
              <span>{SITE.email}</span>
            </a>

            {/* Social links */}
            {links.length > 0 && (
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--strong)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--subtle)')}
                  >
                    {label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1 9L9 1M4 1h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
