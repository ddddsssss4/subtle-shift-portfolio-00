import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:opscode90@gmail.com",
    label: "opscode90@gmail.com"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ddddsssss4",
    label: "github.com/ddddsssss4"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/opscode-690404236/",
    label: "linkedin.com/in/OpsCode/"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/OpsCode3",
    label: "@OpsCode3"
  }
];

export function Connect() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-light mb-12 text-center">Let's Connect</h2>
        
        <div className="text-center mb-12">
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            Always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlowCard className="hover-lift h-full">
                <div className="flex items-center gap-4 p-6 group">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  <div className="text-left">
                    <div className="font-medium text-sm">{link.name}</div>
                    <div className="text-muted-foreground text-sm">{link.label}</div>
                  </div>
                </div>
              </GlowCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}