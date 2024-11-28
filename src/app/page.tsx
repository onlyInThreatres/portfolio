import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Publications } from '@/components/sections/Publications'
import Expertise from '@/components/sections/Expertise'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background/95">
      <Hero />
      <Experience />
      <Publications />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  )
} 