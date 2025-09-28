import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, File, CheckCircle, XCircle, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    setUploadedFile(file);
    setUploadStatus('uploading');
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          toast({
            title: "Upload Complete",
            description: `${file.name} has been successfully uploaded and processed.`,
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleFileUpload(e.dataTransfer.files);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Data Upload & <span className="text-primary">Preprocessing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload your environmental DNA sequence files or select from our curated sample datasets
            to begin your biodiversity analysis journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* File Upload */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-primary" />
                Upload eDNA Files
              </CardTitle>
              <CardDescription>
                Support for FASTA and FASTQ file formats up to 500MB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed border-border/60 rounded-lg p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-input')?.click()}
              >
                {uploadStatus === 'idle' && (
                  <>
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-foreground font-medium mb-2">
                      Drag and drop your files here
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </>
                )}
                
                {uploadStatus === 'uploading' && (
                  <div className="space-y-4">
                    <div className="w-12 h-12 mx-auto mb-4 animate-spin border-4 border-primary/20 border-t-primary rounded-full" />
                    <p className="text-foreground font-medium">Uploading {uploadedFile?.name}</p>
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-muted-foreground text-sm">{uploadProgress}% complete</p>
                  </div>
                )}

                {uploadStatus === 'success' && uploadedFile && (
                  <div className="space-y-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <p className="text-foreground font-medium">Upload Complete!</p>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Filename:</span>
                        <span className="text-sm font-medium">{uploadedFile.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Size:</span>
                        <span className="text-sm font-medium">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <Badge variant="default" className="bg-green-500/10 text-green-700 border-green-500/20">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Processed
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <input
                id="file-input"
                type="file"
                accept=".fasta,.fastq,.fa,.fq"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
            </CardContent>
          </Card>

          {/* Sample Datasets */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-secondary" />
                Sample Datasets
              </CardTitle>
              <CardDescription>
                Explore our curated datasets from various marine environments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a sample dataset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coral-reef">Coral Reef Microbiome (Great Barrier Reef)</SelectItem>
                  <SelectItem value="deep-sea">Deep Sea Sediments (Mariana Trench)</SelectItem>
                  <SelectItem value="arctic">Arctic Ocean Waters</SelectItem>
                  <SelectItem value="hydrothermal">Hydrothermal Vent Communities</SelectItem>
                  <SelectItem value="coastal">Coastal Marine Plankton</SelectItem>
                </SelectContent>
              </Select>

              <div className="space-y-3">
                {[
                  { name: "Coral Reef Microbiome", sequences: "45,234", species: "892", env: "Tropical" },
                  { name: "Deep Sea Sediments", sequences: "78,901", species: "1,205", env: "Abyssal" },
                  { name: "Arctic Ocean Waters", sequences: "32,567", species: "654", env: "Polar" }
                ].map((dataset, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{dataset.name}</h4>
                      <Badge variant="outline" className="text-xs">{dataset.env}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Sequences:</span>
                        <span className="ml-2 font-medium">{dataset.sequences}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Species:</span>
                        <span className="ml-2 font-medium">{dataset.species}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="secondary" className="w-full">
                Load Selected Dataset
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;