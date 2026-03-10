'use client'
import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    id: "01",
    title: "Project Name One",
    description: "Deskripsi project lo — apa yang dibuat, masalah apa yang dipecahin, kenapa project ini keren.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    liveUrl: "https://your-project.vercel.app",
    repoUrl: "https://github.com/yourusername/project-one",
  },
  {
    id: "02",
    title: "Project Name Two",
    description: "Project kedua lo. Bisa aplikasi web, landing page, dashboard, atau apa aja yang udah lo deploy.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-second-project.vercel.app",
    repoUrl: "https://github.com/yourusername/project-two",
  },
  {
    id: "03",
    title: "Project Name Three",
    description: "Project ketiga. Kalau lo punya lebih banyak, tinggal copy-paste object ini dan tambahin.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    liveUrl: "https://your-third-project.vercel.app",
    repoUrl: "",
  },
  {
    id: "04",
    title: "Project Name Four",
    description: "Project keempat. Feel free buat nambahin sebanyak-banyaknya ya bro.",
    tags: ["Next.js", "Supabase"],
    liveUrl: "https://your-fourth-project.vercel.app",
    repoUrl: "https://github.com/yourusername/project-four",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '8rem 0', position: 'relative', minHeight: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--neon), transparent)',
          opacity: 0.2
        }}
      />

      {/* Header */}
      <div className="reveal" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon)', marginBottom: '0.75rem' }}>
          02 / projects
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)' }}>
            Yang Udah Gw Bikin
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
            swipe →
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '1.5rem',
          padding: '0 1.5rem 2rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="reveal"
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              width: 'clamp(280px, 80vw, 480px)',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '2rem',
              position: 'relative',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,148,0.3)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
          >
            {/* Number watermark */}
            <span style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '5rem',
              fontWeight: 800,
              color: 'rgba(0,255,148,0.04)',
              lineHeight: 1,
              userSelect: 'none',
            }}>
              {project.id}
            </span>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon)', marginBottom: '1rem' }}>
              // project
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.75rem' }}>
              {project.title}
            </h3>

            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  padding: '0.25rem 0.75rem',
                  color: 'var(--neonBlue)',
                  background: 'rgba(0,212,255,0.06)',
                  border: '1px solid rgba(0,212,255,0.15)',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
                style={{ fontSize: '0.7rem' }}
              >
                Live ↗
              </a>
              {project.repoUrl && (
                
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '0.75rem 1.25rem',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
        {PROJECTS.map((_, i) => (
          <div key={i} style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i === 0 ? 'var(--neon)' : 'var(--border)',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>
    </section>
  )
}