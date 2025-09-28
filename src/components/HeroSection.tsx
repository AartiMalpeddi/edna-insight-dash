import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Database, Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              🧬 Advanced Marine Genomics Platform
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Environmental DNA
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Analysis Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto font-light">
              Advanced machine learning pipeline for marine biodiversity discovery through 
              environmental DNA sequencing and taxonomic classification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Upload className="w-5 h-5 mr-2" />
                Start Analysis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-4 h-4 mr-2" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Data Processing",
                description: "Advanced QC pipeline with automated quality assessment and sequence filtering",
                icon: Database,
                stats: "99.7% accuracy"
              },
              {
                title: "ML Classification", 
                description: "State-of-the-art DNABERT models for taxonomic identification and confidence scoring",
                icon: Upload,
                stats: "1M+ species"
              },
              {
                title: "Novel Discovery",
                description: "Unsupervised clustering algorithms to identify potential new species and variants",
                icon: Database,
                stats: "Real-time analysis"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border group-hover:border-primary/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {feature.stats}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;