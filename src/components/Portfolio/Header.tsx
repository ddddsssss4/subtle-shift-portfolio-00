export function Header() {
  return (
    <header className="max-w-4xl mx-auto px-6 pt-16 pb-8">
      <div className="animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 bg-surface rounded-full flex items-center justify-center border border-border hover-lift">
          <span className="text-2xl font-medium text-muted-foreground">YN</span>
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Your Name
          </h1>
          <p className="text-lg text-secondary font-light">
            Frontend Developer & Designer
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Building digital experiences with clean code and thoughtful design. 
            Focused on creating meaningful and accessible web applications.
          </p>
        </div>
      </div>
    </header>
  );
}