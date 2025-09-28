import { Button } from "@/components/ui/button";
import { Upload, Database, BarChart3, Microscope } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Microscope className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Marine Biodiversity Research Platform</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Deep-Sea eDNA
            <span className="block bg-gradient-to-r from-secondary-glow to-accent bg-clip-text text-transparent">
              Explorer
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed">
            Unlock the secrets of marine biodiversity through environmental DNA analysis.
            <span className="block mt-2">Taxonomy classification • Novelty discovery • Biodiversity insights</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Upload eDNA Data
            </Button>
            <Button variant="outline-hero" size="lg" className="group">
              <Database className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Sample Data
            </Button>
          </div>

          {/* Pipeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Upload, title: "Upload", desc: "FASTA/FASTQ files" },
              { icon: Database, title: "Process", desc: "QC & filtering" },
              { icon: BarChart3, title: "Analyze", desc: "ML classification" },
              { icon: Microscope, title: "Discover", desc: "Novel taxa" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating DNA strands animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full animate-bounce`}
            style={{
              left: `${20 + i * 30}%`,
              bottom: `${10 + i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;