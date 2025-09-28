import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dna, FileText, Settings, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Dna className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">eDNA Explorer</h1>
              <p className="text-xs text-muted-foreground">Marine Biodiversity Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#upload" className="text-muted-foreground hover:text-foreground transition-colors">
              Upload
            </a>
            <a href="#analysis" className="text-muted-foreground hover:text-foreground transition-colors">
              Analysis
            </a>
            <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden sm:flex">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              System Online
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;