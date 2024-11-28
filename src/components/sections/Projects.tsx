import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FEATURED_PROJECTS } from '@/lib/constants'

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="outline">View Case Study</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 