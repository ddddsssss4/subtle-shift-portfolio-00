export function Header() {
  return (
    <header className="max-w-4xl mx-auto px-6 pt-16 pb-8">
      <div className="animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 bg-surface rounded-full flex items-center justify-center border border-border hover-lift">
          <img alt="YN" src="https://media.licdn.com/dms/image/v2/D4D03AQEjoId_HlASNA/profile-displayphoto-scale_400_400/B4DZq1dc5oIMAg-/0/1763980989666?e=1772668800&v=beta&t=Jk3mT4ouj52ZE8Y-IXjhrxQfyUARilGQ3tpeCr6BNh4" />
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            OpsCode
          </h1>
          <p className="text-lg font-light">
          Web3 Full Stack Developer & <span className="text-pink-500"> Designer</span>
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