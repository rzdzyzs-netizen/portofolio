import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <div className="scan-line" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}