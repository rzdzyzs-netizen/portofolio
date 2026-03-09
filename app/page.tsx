import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="relative">
      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Nav */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </main>
  )
}
