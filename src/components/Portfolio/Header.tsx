export function Header() {
  return (
    <header className="max-w-4xl mx-auto px-6 pt-16 pb-8">
      <div className="animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 bg-surface rounded-full flex items-center justify-center border border-border hover-lift overflow-hidden">
          <img alt="OpsCode" src="/Portfolio.jpeg" className="w-full h-full object-cover rounded-full" />
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            OpsCode
          </h1>
          <p className="text-lg font-light">
          Web3 Full Stack Developer & <span className="text-pink-500"> Designer</span>
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Building digital experiences with clean code and thoughtful design. 
            Focused on creating meaningful and accessible web applications.
          </p>
        </div>
      </div>
    </header>
  );
}