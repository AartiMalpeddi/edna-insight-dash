import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Dna, 
  Brain, 
  GitBranch, 
  PieChart, 
  BarChart3, 
  Download,
  Microscope,
  TreePine,
  Waves
} from "lucide-react";

const AnalysisSection = () => {
  const [analysisProgress, setAnalysisProgress] = useState(85);
  const [selectedModel, setSelectedModel] = useState("dnabert");

  // Mock data for visualization
  const taxonomyData = [
    { species: "Calanus finmarchicus", confidence: 0.92, abundance: 34.2 },
    { species: "Pseudocalanus minutus", confidence: 0.87, abundance: 28.5 },
    { species: "Oithona similis", confidence: 0.94, abundance: 18.7 },
    { species: "Metridia lucens", confidence: 0.79, abundance: 12.1 },
    { species: "Acartia longiremis", confidence: 0.88, abundance: 6.5 }
  ];

  const biodiversityMetrics = {
    shannon: 3.42,
    simpson: 0.84,
    richness: 127,
    evenness: 0.71
  };

  const novelClusters = [
    { id: "Cluster_001", sequences: 234, avgSimilarity: 0.73, status: "Novel" },
    { id: "Cluster_007", sequences: 189, avgSimilarity: 0.68, status: "Potential Novel" },
    { id: "Cluster_015", sequences: 156, avgSimilarity: 0.71, status: "Novel" }
  ];

  return (
    <section id="analysis" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Analysis Pipeline
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Analysis Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            Real-time processing with machine learning classification, unsupervised clustering for novel species discovery, 
            and comprehensive biodiversity metrics with interactive visualizations.
          </p>
        </div>

        <Tabs defaultValue="classification" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="classification" className="flex items-center gap-2">
              <Dna className="w-4 h-4" />
              Classification
            </TabsTrigger>
            <TabsTrigger value="clustering" className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Clustering
            </TabsTrigger>
            <TabsTrigger value="biodiversity" className="flex items-center gap-2">
              <TreePine className="w-4 h-4" />
              Biodiversity
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Results
            </TabsTrigger>
          </TabsList>

          {/* Classification Tab */}
          <TabsContent value="classification" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Supervised Classification
                  </CardTitle>
                  <CardDescription>
                    Known taxa identification using machine learning models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <Select value={selectedModel} onValueChange={setSelectedModel}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="baseline">Baseline Model</SelectItem>
                          <SelectItem value="dnabert">DNABERT</SelectItem>
                          <SelectItem value="finetuned">Fine-tuned Model</SelectItem>
                        </SelectContent>
                      </Select>
                      <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/20">
                        {analysisProgress}% Complete
                      </Badge>
                    </div>
                    <Progress value={analysisProgress} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    {taxonomyData.map((taxa, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <p className="font-medium text-foreground italic">{taxa.species}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-muted-foreground">
                              Confidence: {(taxa.confidence * 100).toFixed(1)}%
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Abundance: {taxa.abundance}%
                            </span>
                          </div>
                        </div>
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-1000"
                            style={{ width: `${taxa.confidence * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Abundance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-secondary" />
                    Relative Abundance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {taxonomyData.slice(0, 4).map((taxa, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground truncate">{taxa.species.split(' ')[0]}</span>
                          <span className="font-medium">{taxa.abundance}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${taxa.abundance}%`,
                              backgroundColor: `hsl(${180 + index * 45}, 65%, 55%)`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Clustering Tab */}
          <TabsContent value="clustering" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-secondary" />
                    Unsupervised Clustering
                  </CardTitle>
                  <CardDescription>
                    Novel taxa discovery through clustering analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select clustering algorithm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kmeans">K-means</SelectItem>
                        <SelectItem value="dbscan">DBSCAN</SelectItem>
                        <SelectItem value="hdbscan">HDBSCAN</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center border border-dashed border-border">
                      <div className="text-center">
                        <Waves className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">UMAP Visualization</p>
                        <p className="text-sm text-muted-foreground/70">Interactive cluster plot will appear here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-accent" />
                    Novel Taxa Clusters
                  </CardTitle>
                  <CardDescription>
                    Potential new species discoveries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {novelClusters.map((cluster, index) => (
                      <div key={index} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{cluster.id}</h4>
                          <Badge 
                            variant="outline" 
                            className={
                              cluster.status === "Novel" 
                                ? "bg-accent/10 text-accent border-accent/20" 
                                : "bg-secondary/10 text-secondary border-secondary/20"
                            }
                          >
                            {cluster.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Sequences:</span>
                            <span className="ml-2 font-medium">{cluster.sequences}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Similarity:</span>
                            <span className="ml-2 font-medium">{(cluster.avgSimilarity * 100).toFixed(0)}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Biodiversity Tab */}
          <TabsContent value="biodiversity" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Shannon Index", value: biodiversityMetrics.shannon, icon: TreePine, color: "text-primary" },
                { label: "Simpson Index", value: biodiversityMetrics.simpson, icon: BarChart3, color: "text-secondary" },
                { label: "Species Richness", value: biodiversityMetrics.richness, icon: Microscope, color: "text-accent" },
                { label: "Evenness", value: biodiversityMetrics.evenness, icon: Waves, color: "text-chart-4" }
              ].map((metric, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                    <p className="text-2xl font-bold text-foreground mb-1">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Biodiversity Analysis</CardTitle>
                <CardDescription>
                  Comprehensive ecosystem diversity metrics and visualizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-muted/20 rounded-lg flex items-center justify-center border border-dashed border-border">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg">Interactive Charts</p>
                    <p className="text-sm text-muted-foreground/70">Abundance plots, heatmaps, and diversity indices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Classification Results", desc: "Taxonomic identifications and confidence scores", format: "CSV" },
                { title: "Novel Taxa Clusters", desc: "Potential new species and cluster analysis", format: "JSON" },
                { title: "Biodiversity Report", desc: "Complete diversity metrics and visualizations", format: "PDF" },
                { title: "Raw Data", desc: "Processed sequences and feature extractions", format: "FASTA" },
                { title: "Visualization Plots", desc: "All charts and graphs in high resolution", format: "PNG" },
                { title: "Analysis Pipeline", desc: "Complete workflow and parameter settings", format: "YAML" }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <Badge variant="outline">{item.format}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AnalysisSection;