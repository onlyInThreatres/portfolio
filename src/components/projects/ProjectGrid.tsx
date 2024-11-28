import { ProjectCard } from '../ProjectCard'

// Define the Project type to match ProjectCard props
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          {...project}
          isHighlighted={index === 0} // First project is highlighted
        />
      ))}
    </div>
  )
} 