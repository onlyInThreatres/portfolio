"use client"

import React from 'react'

const PROJECTS = [
  {
    id: '1',
    title: 'Cloud RAN Innovation',
    description: 'Led the architecture and deployment of a cutting-edge Cloud RAN solution, improving network efficiency by 40%.'
  },
  {
    id: '2',
    title: '5G Network Rollout',
    description: 'Spearheaded the deployment of a city-wide 5G network, enhancing connectivity for over 1 million users.'
  },
  {
    id: '3',
    title: 'Microservices Migration',
    description: 'Successfully migrated a monolithic telecom application to a microservices architecture, reducing operational costs by 30%.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-[#ccd6f6]">
          Featured Projects
        </h2>
        <div className="space-y-20">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#ccd6f6]">
                {project.title}
              </h3>
              <p className="text-xl text-[#8892b0] max-w-3xl">
                {project.description}
              </p>
              <div className="pt-2">
                <a 
                  href="#" 
                  className="font-mono text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded inline-block
                           hover:bg-[#64ffda]/10 transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 