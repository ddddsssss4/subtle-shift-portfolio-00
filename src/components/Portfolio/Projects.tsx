import { GlowCard } from "@/components/ui/GlowCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and TypeScript. Features include product catalog, shopping cart, and secure checkout.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A minimal task management application with drag-and-drop functionality and real-time collaboration features.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    link: "#"
  },
  {
    title: "Design System",
    description: "A comprehensive design system with reusable components, documentation, and design tokens for consistent UI development.",
    tech: ["React", "Storybook", "Figma", "CSS-in-JS"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-light mb-12 text-center">Selected Projects</h2>
        
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <GlowCard
              key={index}
              className="hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted rounded-md text-muted-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.link && (
                    <div className="flex-shrink-0">
                      <a 
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors duration-200"
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}