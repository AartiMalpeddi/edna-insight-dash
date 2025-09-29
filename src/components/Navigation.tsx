import { Button } from "@/components/ui/button";
import { Dna, Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <Dna className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HydroTrace</h1>
              <p className="text-xs text-muted-foreground">Marine Biodiversity Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#upload" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Upload
            </a>
            <a href="#analysis" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Analysis
            </a>
            <a href="#results" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Results
            </a>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex">
              Get Started
            </Button>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;