interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Led the development of user-facing features for a SaaS platform serving 10k+ users. Collaborated with design and backend teams to deliver high-quality web applications."
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed responsive websites and web applications for various clients. Specialized in React development and performance optimization."
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    period: "2019 - 2020",
    description: "Built and maintained web applications using modern JavaScript frameworks. Gained experience in full-stack development and agile methodologies."
  }
];

export function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-light mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border-l-2 border-border pl-8 pb-8 last:pb-0 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="absolute -left-[41px] w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <p className="text-secondary font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}