import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Database, Play, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-semibold">Advanced Marine Genomics Platform</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.9]">
            Discover Ocean Life
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
              Through DNA
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-5xl mx-auto font-light leading-relaxed">
            Revolutionary environmental DNA analysis platform that identifies marine species, 
            discovers new life forms, and maps ocean biodiversity using cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
              <Upload className="w-6 h-6 mr-3" />
              Start Discovery
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-primary/5">
              <Play className="w-5 h-5 mr-3" />
              Watch Demo
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "2.4M+", label: "Sequences Analyzed" },
              { number: "1,200+", label: "Species Identified" },
              { number: "73", label: "New Discoveries" },
              { number: "99.7%", label: "Accuracy Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;