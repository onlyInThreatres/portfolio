"use client"

import React from 'react'
import { Project } from '@/types'
import { ProjectCard } from '@/components/ProjectCard'

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and TailwindCSS, featuring dark mode, responsive design, and smooth animations',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&h=800&fit=crop',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com'
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&h=800&fit=crop',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://yourecommerce.com'
  },
  {
    id: '3',
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses',
    technologies: ['React', 'OpenAI', 'Firebase', 'TailwindCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&h=800&fit=crop',
    githubUrl: 'https://github.com/yourusername/ai-chat'
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background/95 pt-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, ranging from web applications to full-stack solutions
          </p>
        </header>

        <div className="flex flex-col gap-32 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-3/5 group">
                <ProjectCard {...project} />
              </div>
              <div className="w-full lg:w-2/5 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 