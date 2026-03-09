'use client'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 0', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon)', marginBottom: '0.75rem' }}>
          03 / contact
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '2rem' }}>
          Let&apos;s Connect
        </h2>

        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '500px', marginBottom: '2rem' }}>
          Gw open buat website, atau sekadar ngobrol soal tech. Hit me up!
        </p>

        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--neon)', marginBottom: '0.5rem' }}>
          ielwebsite@email.com
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)', fontSize: '0.875rem' }}>
          GitHub: @rzdzyzs · Instagram: @rezieel · TikTok: @rezieel_
        </p>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid #1e1e1e' }}>
          Built with love by <span style={{ color: 'var(--neon)' }}>Reziel</span> · {new Date().getFullYear()}
        </p>

      </div>
    </section>
  )
}