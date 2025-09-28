import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Database, 
  Brain, 
  BarChart3, 
  Microscope, 
  ArrowRight,
  CheckCircle,
  Zap,
  Target
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Introduction */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            🧬 What is eDNA Explorer?
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Unlock Marine Biodiversity Through
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
              Environmental DNA Analysis
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed">
            Our platform processes environmental DNA samples from marine ecosystems to identify known species, 
            discover novel taxa, and provide comprehensive biodiversity insights using advanced machine learning algorithms.
          </p>
        </div>

        {/* How It Works - Step by Step */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From sample upload to biodiversity insights in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Upload,
                title: "Upload Data",
                description: "Upload your eDNA sequence files (FASTA/FASTQ) or select from our curated marine datasets",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                icon: Database,
                title: "Processing",
                description: "Automated quality control, sequence filtering, and preprocessing with real-time progress tracking",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                icon: Brain,
                title: "ML Analysis",
                description: "DNABERT models classify sequences while clustering algorithms discover potential novel species",
                color: "from-green-500 to-teal-500"
              },
              {
                step: "04",
                icon: BarChart3,
                title: "Results",
                description: "Interactive visualizations, biodiversity metrics, and exportable reports with confidence scores",
                color: "from-orange-500 to-red-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What You Get - Results */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="outline" className="mb-4">
              Results & Insights
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What You'll Discover
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get comprehensive insights into marine ecosystems with detailed species identification, 
              biodiversity analysis, and potential novel taxa discoveries.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Taxonomic classification with confidence scores",
                "Novel species and genetic variant detection", 
                "Biodiversity indices and ecosystem health metrics",
                "Interactive visualizations and data export"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              Start Your Analysis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, label: "Species Identified", value: "1,200+", color: "text-blue-500" },
              { icon: Microscope, label: "Novel Taxa Found", value: "73", color: "text-purple-500" },
              { icon: Zap, label: "Analysis Speed", value: "< 5 min", color: "text-green-500" },
              { icon: Database, label: "Accuracy Rate", value: "99.7%", color: "text-orange-500" }
            ].map((metric, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Explore Marine Biodiversity?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join researchers worldwide using eDNA Explorer to uncover the hidden diversity of our oceans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Upload className="w-5 h-5 mr-2" />
              Upload Your Data
            </Button>
            <Button variant="outline" size="lg">
              Try Sample Dataset
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;