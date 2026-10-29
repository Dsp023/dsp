import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { PROJECTS, type Project } from '../data'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isPlaceholder = project.status === 'placeholder'

  return (
    <motion.article
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'start',
        opacity: isPlaceholder ? 0.5 : 1,
      }}
    >
      {/* Left: meta */}
      <div>
        <span className="section-label" style={{ display: 'block', marginBottom: '1rem' }}>
          {String(index + 1).padStart(2, '0')} — {project.category}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: '1.75rem',
            color: 'var(--strong)',
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--subtle)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {isPlaceholder ? '— project description coming soon —' : project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                padding: '3px 10px',
                borderRadius: '1px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {!isPlaceholder && (
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--strong)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--subtle)')}
              >
                Live demo
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M4 1h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--strong)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--subtle)')}
              >
                GitHub
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M4 1h5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right: preview */}
      <div
        style={{
          aspectRatio: '16/10',
          background: 'var(--bg-3)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {isPlaceholder ? (
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Screenshot coming soon
          </span>
        ) : project.image ? (
          project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', height: '100%', display: 'block', position: 'relative', overflow: 'hidden' }}
              title={`View ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease, filter 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)'
                  e.currentTarget.style.filter = 'brightness(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.filter = 'none'
                }}
              />
            </a>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          )
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Screenshot coming soon</span>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function Work() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="work" className="section">
      <div className="container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="section-label">Selected work</span>
        </motion.div>

        <div>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }} />
      </div>
    </section>
  )
}
