'use client'
import { useEffect, useRef } from 'react'

// ─── EDIT DATA PROJECTS LO DI SINI ──────────────────────────
//  - title     : nama project
//  - description : deskripsi singkat
//  - tags      : tech yang dipake
//  - liveUrl   : link deploy (wajib)
//  - repoUrl   : link github (optional, isi "" kalau ga mau tampil)
//  - featured  : true = project utama (tampil lebih besar)
// ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "01",
    title: "Project Top Up Game",
    description:
      "Diperuntukan Untuk para store game untuk menyediakan layanan melalui website",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    liveUrl: "https://top-up-game-o4lv.vercel.app/",
    repoUrl: "https://github.com/rzdzyzs/topup-game",
    featured: true,
  },
  {
    id: "02",
    title: "Project Name Two",
    description:
      "Project kedua lo. Bisa aplikasi web, landing page, dashboard, atau apa aja yang udah lo deploy.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-second-project.vercel.app",
    repoUrl: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    id: "03",
    title: "Project Name Three",
    description:
      "Project ketiga. Kalau lo punya lebih banyak, tinggal copy-paste object ini dan tambahin.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    liveUrl: "https://your-third-project.vercel.app",
    repoUrl: "",
    featured: false,
  },
  {
    id: "04",
    title: "Project Name Four",
    description:
      "Project keempat. Feel free buat nambahin sebanyak-banyaknya ya bro.",
    tags: ["Next.js", "Supabase"],
    liveUrl: "https://your-fourth-project.vercel.app",
    repoUrl: "https://github.com/yourusername/project-four",
    featured: false,
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef}>
      {/* Subtle divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon), transparent)', opacity: 0.2 }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--neon)' }}>
            02 / projects
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
          >
            Yang Udah Gw Bikin
          </h2>
        </div>

        {/* Featured projects — tampil besar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <div
              key={project.id}
              className="reveal glass-card p-8 group relative overflow-hidden"
            >
              {/* Project number watermark */}
              <span
                className="absolute top-4 right-6 font-heading text-7xl font-bold select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'rgba(0,255,148,0.04)',
                  lineHeight: 1,
                }}
              >
                {project.id}
              </span>

              <div className="relative z-10">
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-3"
                  style={{ color: 'var(--neon)' }}
                >
                  // featured
                </p>

                <h3
                  className="font-heading text-2xl font-bold mb-3 group-hover:text-[var(--neon)] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--muted)' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1"
                      style={{
                        color: 'var(--neonBlue)',
                        background: 'rgba(0,212,255,0.06)',
                        border: '1px solid rgba(0,212,255,0.15)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon text-xs"
                  >
                    Live Demo ↗
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300 hover:border-[var(--text)]"
                      style={{
                        borderColor: 'var(--border)',
                        color: 'var(--muted)',
                      }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects — tampil lebih kecil */}
        {others.length > 0 && (
          <>
            <p className="reveal font-mono text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
              other builds
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project) => (
                <div key={project.id} className="reveal glass-card p-6 group">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="font-mono text-xs"
                      style={{ color: 'var(--neon)' }}
                    >
                      [{project.id}]
                    </span>
                    <div className="flex gap-3">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono transition-colors hover:text-[var(--neon)]"
                          style={{ color: 'var(--muted)' }}
                        >
                          repo ↗
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono transition-colors hover:text-[var(--neon)]"
                        style={{ color: 'var(--muted)' }}
                      >
                        live ↗
                      </a>
                    </div>
                  </div>

                  <h3
                    className="font-heading text-lg font-bold mb-2 group-hover:text-[var(--neon)] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: 'var(--muted)' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5"
                        style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
