import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components to avoid initial load issues
const Hero = dynamic(() => import('@/components/sections/Hero'))
const Experience = dynamic(() => import('@/components/sections/Experience'))
const Publications = dynamic(() => import('@/components/sections/Publications'))
const Projects = dynamic(() => import('@/components/sections/Projects'))

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background/95">
      <Hero />
      <Experience />
      <Publications />
      <Projects />
    </main>
  )
} 