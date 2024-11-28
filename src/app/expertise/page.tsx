"use client"

import React from 'react'

export default function ExpertisePage() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#ccd6f6] text-4xl font-bold mb-8">Areas of Expertise</h1>
        <div className="space-y-12">
          <div>
            <h2 className="text-[#64ffda] font-mono text-xl mb-4">Cloud Architecture</h2>
            <p className="text-[#8892b0] text-lg leading-relaxed">
              Specialized in designing and implementing scalable cloud solutions, with a focus on AWS and Azure platforms.
            </p>
          </div>
          <div>
            <h2 className="text-[#64ffda] font-mono text-xl mb-4">5G Technologies</h2>
            <p className="text-[#8892b0] text-lg leading-relaxed">
              Expert in 5G network architecture, deployment, and optimization.
            </p>
          </div>
          <div>
            <h2 className="text-[#64ffda] font-mono text-xl mb-4">Network Infrastructure</h2>
            <p className="text-[#8892b0] text-lg leading-relaxed">
              Deep experience in designing and implementing large-scale network infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 