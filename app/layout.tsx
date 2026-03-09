import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

// ─── GANTI SESUAI DATA LO ───────────────────────────────────
const YOUR_NAME = "Reziel"          // nama lo
const YOUR_TAGLINE = "Full Stack Dev"  // profesi/tagline singkat
// ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${YOUR_NAME} — Portfolio`,
  description: `${YOUR_TAGLINE} | Personal Portfolio`,
  openGraph: {
    title: `${YOUR_NAME} — Portfolio`,
    description: YOUR_TAGLINE,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
