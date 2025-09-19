import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Settings, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description: "Complete a gentle assessment to help our AI understand your unique cognitive baseline and personal preferences."
  },
  {
    icon: Settings,
    step: "02", 
    title: "Personalized Plan",
    description: "Receive a customized daily routine with cognitive exercises, memory games, and therapeutic activities tailored just for you."
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Track Progress",
    description: "Watch your improvements over time with detailed progress reports that celebrate every milestone on your cognitive wellness journey."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-sage-green/20 via-background to-soft-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple Steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-blue to-healing-green">Better Cognitive Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Our compassionate approach guides you through every step of your cognitive wellness journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-healing-green rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-warm-accent rounded-full flex items-center justify-center text-sm font-bold text-foreground">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 z-10">
                  <ArrowRight className="w-6 h-6 text-healing-blue opacity-60" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Start Your Free Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;