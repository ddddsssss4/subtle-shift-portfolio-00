import { Header } from "@/components/Portfolio/Header";
import { Projects } from "@/components/Portfolio/Projects";
import { Skills } from "@/components/Portfolio/Skills";
import { Experience } from "@/components/Portfolio/Experience";
import { Connect } from "@/components/Portfolio/Connect";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-background">
      <ThemeToggle />
      
      <main className="relative">
        <div className="animate-emerge" style={{ animationDelay: "0.1s" }}>
          <Header />
        </div>
        <div className="animate-emerge" style={{ animationDelay: "0.3s" }}>
          <Projects />
        </div>
        <Skills />
        <div className="animate-emerge" style={{ animationDelay: "0.9s" }}>
          <Experience />
        </div>
        <div className="animate-emerge" style={{ animationDelay: "1.1s" }}>
          <Connect />
        </div>
        
        <footer className="max-w-4xl mx-auto px-6 py-12 text-center animate-emerge" style={{ animationDelay: "1.3s" }}>
          <p className="text-sm text-muted-foreground">
            © 2024 Your Name. Built with React & TypeScript.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
