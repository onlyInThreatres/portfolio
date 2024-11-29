"use client"

import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-4xl">
        <p className="font-mono text-[#64ffda] mb-4 text-sm">
          Hi, my name is
        </p>
        
        <h1 className="text-[#ccd6f6] text-6xl font-bold mb-2">
          Mustafa Hassan.
        </h1>
        
        <h2 className="text-[#8892b0] text-6xl font-bold mb-6">
          I build solutions for telecom.
        </h2>
        
        <p className="text-[#8892b0] text-lg max-w-xl mb-12 leading-relaxed">
          I&apos;m a telecommunications engineer specializing in building (and occasionally designing) 
          exceptional digital infrastructures. Currently, I&apos;m focused on building accessible, 
          human-centered solutions at Telecom.
        </p>
        
        <a 
          href="/projects" 
          className="font-mono text-[#64ffda] border border-[#64ffda] px-6 py-4 rounded inline-block
                     hover:bg-[#64ffda]/10 transition-colors"
        >
          Check out my work!
        </a>
      </div>
    </div>
  )
} 