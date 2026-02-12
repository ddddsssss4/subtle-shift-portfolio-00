import { GlowCard } from "@/components/ui/GlowCard";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  // support multiple bullet points for each experience entry
  description: string[];
  // optional location (e.g. "Remote")
  location?: string;
}

const experiences: ExperienceItem[] = [
  {
    
  
    title: "Tech Summer Analyst",
    company: "Citi Bank",
    period: "June 2025 - July 2025",
    description: [
      "Developed Citi’s first speech-to-text module integrated with Salesforce to transcribe call recordings.",
      "Used Citi’s ICG Design System for frontend, Zustand for state management, and optimized performance via batch audio processing, throttling, and debouncing with Lodash.",
      "Built backend with Express.js to handle audio chunks via Vosk, stored data in MongoDB, and used Google Vertex AI for context-aware content generation.",
    ],
  },
  {
    title: "Backend Developer and Generative AI Engineer",
    company: "Giglio-AI",
    period: "August 2024 - May 2025",
    location: "Remote",
    description: [
      "Developed AI teaching assistant for primary students, creating personalized content with OpenAI to improve engagement and learning outcomes.",
      "Integrated Azure AI to measure pronunciation accuracy, focusing on inclusivity.",
      "Built backend architecture and designed a custom speech engine for enhanced recognition accuracy.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Edge&Roots",
    period: "February 2024 – May 2024",
    location: "Remote",
    description: [
      "Transitioned the entire codebase from HTML, CSS, and JavaScript to React, enhancing maintainability and performance.",
      "Improved user experience by implementing responsive design and optimizing load times.",
      "Collaborated with the design team to ensure seamless integration of UI/UX elements into the new framework.",
    ],
  },
];

export function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-light mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <GlowCard
              key={index}
              className="hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <div className="text-sm text-muted-foreground font-medium text-right">
                    <div>{exp.period}</div>
                    {exp.location && (
                      <div className="text-xs text-muted-foreground italic">
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-secondary font-medium mb-3">{exp.company}</p>
                <div className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-1">
                    {exp.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
