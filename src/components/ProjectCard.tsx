import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  isHighlighted?: boolean
}

export function ProjectCard({
  title,
  imageUrl,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm group">
      <Image
        src={imageUrl}
        alt={`Screenshot of ${title}`}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}