import { GlowCard } from "@/components/ui/GlowCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

/**
 * Small mapping and helper to render brand icons from Simple Icons CDN.
 * We render the SVG as a CSS mask so the icon takes `currentColor` and
 * automatically matches the site's theme / text color.
 */
const ICON_SLUGS: Record<string, string> = {
  React: "react",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  Stripe: "stripe",
  "Next.js": "nextdotjs",
  Prisma: "prisma",
  PostgreSQL: "postgresql",
  "Socket.io": "socketdotio",
  Storybook: "storybook",
  Figma: "figma",
  "CSS-in-JS": "styled-components",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Redis: "redis",
  MySQL: "mysql",
  Express: "express",
  "Node.js": "node.js",
  "React Native": "react",
  Vite: "vite",
  CSS:"css"
};

/** Fallback slug generator for less-common names */
function slugifyTech(name: string) {
  const mapped = ICON_SLUGS[name];
  if (mapped) return mapped;
  return name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "dot")
    .replace(/[@\/]/g, "")
    .replace(/[^a-z0-9-]/g, "");
}

/** Renders an icon using the simpleicons CDN and CSS masking to color it via currentColor */
function TechIcon({ tech, size = 16 }: { tech: string; size?: number }) {
  const slug = slugifyTech(tech);
  const url = `https://cdn.simpleicons.org/${slug}`;
  // Inline style using mask so the icon inherits currentColor from text
  const style: React.CSSProperties = {
    width: size,
    height: size,
    display: "inline-block",
    backgroundColor: "currentColor",
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    flexShrink: 0,
  };
  return <span aria-hidden style={style} />;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution built with React and TypeScript. Features include product catalog, shopping cart, and secure checkout.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A minimal task management application with drag-and-drop functionality and real-time collaboration features.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    link: "#",
  },
  {
    title: "Design System",
    description:
      "A comprehensive design system with reusable components, documentation, and design tokens for consistent UI development.",
    tech: ["React", "Storybook", "Figma", "CSS"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-light mb-12 text-center">
          Selected Projects
        </h2>

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
                    <h3 className="text-xl font-medium mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground  mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted rounded-md text-muted-foreground font-medium inline-flex items-center"
                        >
                          <TechIcon tech={tech} size={16} />
                          <span className="ml-2">{tech}</span>
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
