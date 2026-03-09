'use client'
import { useEffect, useRef } from 'react'

// ─── EDIT SEMUA DATA DI BAWAH INI ───────────────────────────
const HERO_DATA = {
  greeting: "Halo, gw",                    // greeting opener
  name: "EL atau Reziel",                        // NAMA LO
  roles: [                                  // role/title lo, bisa tambah/kurang
    "Full Stack Developer",
    "UI Enthusiast",
    "Problem Solver",
    "Grapich Design",
  ],
  description:
    "Gw suka banget ngulik teknologi dan bikin hal-hal yang berguna. " +
    "Tiap line of code yang gw tulis punya purpose-nya masing-masing.",
  ctaText: "Lihat Projects",               // tombol CTA
  ctaHref: "#projects",
}
// ────────────────────────────────────────────────────────────

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null)
  const indexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    const roles = HERO_DATA.roles
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      const current = roles[indexRef.current]
      const el = roleRef.current
      if (!el) return

      if (!deletingRef.current) {
        el.textContent = current.slice(0, charRef.current + 1)
        charRef.current++
        if (charRef.current === current.length) {
          deletingRef.current = true
          timeout = setTimeout(type, 2000)
          return
        }
      } else {
        el.textContent = current.slice(0, charRef.current - 1)
        charRef.current--
        if (charRef.current === 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % roles.length
        }
      }

      timeout = setTimeout(type, deletingRef.current ? 50 : 80)
    }

    timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(0,255,148,0.06)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(0,212,255,0.05)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Greeting badge */}
          <div
            className="inline-flex items-center gap-2 border border-[var(--neon)] px-4 py-2 mb-8 font-mono text-xs uppercase tracking-widest"
            style={{ color: 'var(--neon)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--neon)] animate-pulse" />
            Available for work
          </div>

          {/* Main heading */}
          <h1
            className="font-heading mb-3 leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 800,
              color: 'var(--text)',
            }}
          >
            {HERO_DATA.greeting}{' '}
            <span className="neon-text">{HERO_DATA.name}</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="font-mono text-xl md:text-2xl mb-8 flex items-center gap-2"
            style={{ color: 'var(--muted)' }}
          >
            <span className="text-[var(--neonBlue)]">{'<'}</span>
            <span ref={roleRef} style={{ color: 'var(--neonBlue)' }} />
            <span
              className="w-0.5 h-6 bg-[var(--neonBlue)]"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
            <span className="text-[var(--neonBlue)]">{'/>'}</span>
          </div>

          {/* Description */}
          <p
            className="text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)' }}
          >
            {HERO_DATA.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href={HERO_DATA.ctaHref} className="btn-neon">
              {HERO_DATA.ctaText}
              <span>→</span>
            </a>
            <a href="#contact" className="btn-neon" style={{ borderColor: 'var(--muted)', color: 'var(--muted)' }}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, var(--neon), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
