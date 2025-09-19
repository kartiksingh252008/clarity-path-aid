import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Calendar, Users, BarChart3, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Personalized Cognitive Training",
    description: "AI-tailored exercises that adapt to individual cognitive levels and progress, focusing on memory, attention, and problem-solving skills."
  },
  {
    icon: Calendar,
    title: "Daily Routine Support",
    description: "Smart reminders and scheduling assistance to help maintain independence and reduce anxiety about forgotten tasks."
  },
  {
    icon: Users,
    title: "Family Connection",
    description: "Keep loved ones informed with progress reports and provide tools for family members to support the care journey."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Detailed analytics show cognitive improvements over time, helping patients and caregivers make informed decisions."
  },
  {
    icon: Shield,
    title: "Medical-Grade Security",
    description: "HIPAA-compliant platform ensuring all personal health information remains private and secure."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Designed with empathy and understanding, creating a supportive environment for cognitive wellness."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Features That Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-blue to-healing-green">Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive AI platform provides everything needed to support cognitive health and independence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-card to-soft-blue/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-healing-blue to-healing-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;