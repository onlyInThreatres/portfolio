interface ProjectCase {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics?: {
    performance?: string;
    scalability?: string;
    efficiency?: string;
  };
} 

// src/components/projects/ProjectCard.tsx
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
}: Pick<ProjectCardProps, 'title' | 'imageUrl'>) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm">
      <Image
        src={imageUrl}
        alt={`Screenshot of ${title}`}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}