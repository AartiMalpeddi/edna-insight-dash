import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Database, Microscope, Activity } from "lucide-react";

const StatsGrid = () => {
  const stats = [
    {
      label: "Total Sequences",
      value: "2.4M",
      change: "+12.3%",
      changeType: "positive" as const,
      icon: Database,
      color: "text-chart-1"
    },
    {
      label: "Species Identified",
      value: "1,247",
      change: "+8.7%",
      changeType: "positive" as const,
      icon: Microscope,
      color: "text-chart-2"
    },
    {
      label: "Novel Taxa",
      value: "73",
      change: "+15.2%",
      changeType: "positive" as const,
      icon: TrendingUp,
      color: "text-chart-3"
    },
    {
      label: "Active Analyses",
      value: "24",
      change: "Live",
      changeType: "neutral" as const,
      icon: Activity,
      color: "text-chart-4"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={
                      stat.changeType === "positive" 
                        ? "text-green-700 border-green-200 bg-green-50" 
                        : "text-blue-700 border-blue-200 bg-blue-50"
                    }
                  >
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;