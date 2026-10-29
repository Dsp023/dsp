import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
  },
  {
    label: 'AI & Automation',
    items: ['Groq API', 'Gemini API', 'OpenAI SDK', 'Anthropic SDK', 'n8n'],
  },
  {
    label: 'Tools & Infra',
    items: ['Git', 'Docker', 'Vercel', 'FFmpeg', 'Chrome Extensions (MV3)'],
  },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left col */}
          <div>
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              style={{ display: 'block', marginBottom: '2rem' }}
            >
              About
            </motion.span>

            {/* Grouped skills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '0.5rem',
                  }}>
                    {group.label}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--subtle)',
                          border: '1px solid var(--border)',
                          padding: '3px 10px',
                          borderRadius: '1px',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                color: 'var(--strong)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              I build software that does what it's supposed to.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <p style={{ fontSize: '1rem', color: 'var(--subtle)', lineHeight: 1.8 }}>
                I'm Devi Sri Prasad — a developer working on web applications and AI-powered
                tooling. I care about building things that are genuinely useful,
                not just technically interesting.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--subtle)', lineHeight: 1.8 }}>
                Most of my work lives at the intersection of web interfaces and AI — building
                tools around language models, automating workflows with n8n, and finding
                practical uses for local LLMs that actually save people time.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--subtle)', lineHeight: 1.8 }}>
                I work best with clear scope and honest communication. I'd rather ship something
                that works than something that looks good in a demo.
              </p>
            </motion.div>

            {/* What I do */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}
            >
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>
                What I do
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Business websites — responsive, fast, mobile-first',
                  'AI workflow automation — n8n, Node.js, LLM APIs',
                  'Content & creator workflow automation',
                ].map((item) => (
                  <p key={item} style={{ fontSize: '0.875rem', color: 'var(--subtle)', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--border)', flexShrink: 0 }}>—</span>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
