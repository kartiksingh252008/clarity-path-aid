// Import button component and brain icon
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

// This is our website header/navigation bar
const Header = () => {
  return (
    // Sticky header that stays at top when scrolling
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left side - Logo and company name */}
        <div className="flex items-center gap-2">
          {/* Logo with brain icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-healing-blue to-healing-green rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          {/* Company name */}
          <span className="text-xl font-bold text-foreground">MindCare AI</span>
        </div>
        
        {/* Middle - Navigation menu (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Stories
          </a>
        </nav>
        
        {/* Right side - Login and signup buttons */}
        <div className="flex items-center gap-3">
          <Button variant="gentle" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;