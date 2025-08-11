import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Python", "Django", "FastAPI", "Redis", "MySQL", "Firebase", "AWS", "Docker"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Figma", "Webpack", "Jest"]
  }
];

export function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-emerge" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-2xl font-light mb-12 text-center">Skills & Technologies</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="animate-emerge"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-medium mb-4 text-center text-secondary">{category.title}</h3>
              <div className="relative">
                <Carousel opts={{ align: "center", dragFree: true, containScroll: 'trimSnaps' }} className="w-full">
                  <CarouselContent className="justify-center gap-2">
                    {category.skills.map((skill) => (
                      <CarouselItem key={skill} className="px-1 basis-auto">
                        <div className="py-2 px-4 bg-surface/70 rounded-md text-sm font-medium text-foreground border border-border hover-lift whitespace-nowrap">
                          {skill}
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