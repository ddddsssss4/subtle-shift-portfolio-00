import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Map of common skill display names to simple-icons slugs.
 * Add or tweak entries here if a slug doesn't match the simple-icons CDN name.
 */
const SKILL_ICON_SLUGS: Record<string, string> = {
  React: "react",
  TypeScript: "typescript",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodedotjs",
  Express: "express",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Redis: "redis",
  MySQL: "mysql",
  Azure: "microsoftazure",
  Git: "git",
  Docker: "docker",
  Figma: "figma",
  Jest: "jest",
  Vitest: "vitest",
  "Ethereum.js": "ethereum",
  Viem: "viem",
  Solana: "solana",
  "Web3.js": "web3dotjs",
  "@Solana/Kit": "solana",
  "Basic Anchor": "anchor",
  Prisma: "prisma",
  "Socket.io": "socketdotio",
  Stripe: "stripe",
  Storybook: "storybook",
  "CSS-in-JS": "styledcomponents",
};

/**
 * Tech icon component that uses the Simple Icons CDN SVG as a mask so the icon
 * color follows the surrounding text color (currentColor). This ensures icons
 * match the site's theme (light/dark) and won't clash with your design.
 */
function TechIcon({ name }: { name: string }) {
  const slug =
    SKILL_ICON_SLUGS[name] ??
    name
      .toLowerCase()
      .replace(/[@\s+\/\.]+/g, "")
      .replace(/\+/g, "plus");

  const url = `https://cdn.simpleicons.org/${encodeURIComponent(slug)}`;

  return (
    <span
      className="inline-block w-4 h-4 mr-2 align-middle"
      style={{
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: "currentColor",
      }}
      aria-hidden
    />
  );
}

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Azure",
    ],
  },
  {
    title: "BlockChain",
    skills: [
      "Ethereum.js",
      "Viem",
      "Solana",
      "Web3.js",
      "@Solana/Kit",
      "Basic Anchor",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Figma", "Jest", "Vitest"],
  },
];

export function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-emerge" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-2xl font-light mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-emerge"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-medium mb-4 text-center text-secondary">
                {category.title}
              </h3>
              <div className="relative">
                <Carousel
                  opts={{
                    align: "center",
                    dragFree: true,
                    containScroll: "trimSnaps",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="justify-center gap-2">
                    {category.skills.map((skill) => (
                      <CarouselItem key={skill} className="px-1 basis-auto">
                        <div className="py-2 px-4 bg-surface/70 rounded-md text-sm font-medium text-foreground border border-border hover-lift whitespace-nowrap flex items-center">
                          <TechIcon name={skill} />
                          <span className="align-middle">{skill}</span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-surface/80 border-border hover:bg-surface" />
                  <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-surface/80 border-border hover:bg-surface" />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
