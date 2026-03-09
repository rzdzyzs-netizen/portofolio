'use client'
import { useEffect, useRef } from 'react'

// ─── EDIT SEMUA DATA DI BAWAH INI ───────────────────────────
const ABOUT_DATA = {
  // Paragraf about lo — ceritain diri lo, passion, gaya kerja, dll
  bio: [
    "Gw seorang developer yang udah berkutat sama dunia coding sejak [2024]. Buat gw, coding bukan cuma kerjaan — ini cara gw nyiptain sesuatu yang bisa dipake orang banyak.",
    "Gw paling enjoy waktu nge-tackle masalah yang kompleks dan nemu solusi yang elegan. Filosofi gw simpel: bikin yang simple tapi powerful, bukan yang ribet tapi ga jelas.",
    "Di luar ngoding, gw suka [Design Graphics]. Because a dev needs balance too, right? 😤",
  ],

  // Stats yang mau lo tampilin
  stats: [
    { value: "10+", label: "Projects Built" },
    { value: "3+", label: "Years Coding" },
    { value: "∞", label: "Coffee Consumed" },
    { value: "100%", label: "Passion" },
  ],

  // Tech stack lo — edit sesuai yang lo kuasai
  techStack: [
    { category: "Frontend", techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", techs: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
    { category: "Tools", techs: ["Git", "Docker", "Figma", "VS Code"] },
    { category: "Deploy", techs: ["Vercel", "Railway", "Netlify", "AWS"] },
  ],
}
// ────────────────────────────────────────────────────────────

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--neon)' }}>
            01 / about
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
          >
            Siapa Gw?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Bio */}
          <div className="space-y-6">
            {ABOUT_DATA.bio.map((paragraph, i) => (
              <p
                key={i}
                className="reveal text-base leading-relaxed"
                style={{
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-body)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Stats grid */}
            <div className="reveal grid grid-cols-2 gap-4 mt-8">
              {ABOUT_DATA.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-5 rounded-none"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="font-heading text-3xl font-bold neon-text"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono text-xs uppercase tracking-wider mt-1"
                    style={{ color: 'var(--muted)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tech Stack */}
          <div className="reveal space-y-6">
            <h3
              className="font-mono text-sm uppercase tracking-widest"
              style={{ color: 'var(--neon)' }}
            >
              // tech stack
            </h3>

            {ABOUT_DATA.techStack.map((group, i) => (
              <div key={i} className="space-y-3">
                <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: 'var(--muted)' }}
                >
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 border"
                      style={{
                        borderColor: 'var(--border)',
                        color: 'var(--text)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.borderColor = 'var(--neon)'
                        el.style.color = 'var(--neon)'
                        el.style.background = 'rgba(0,255,148,0.05)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.borderColor = 'var(--border)'
                        el.style.color = 'var(--text)'
                        el.style.background = 'transparent'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
