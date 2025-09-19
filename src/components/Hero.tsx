import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-dementia-care.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-blue via-background to-sage-green">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-healing-blue font-medium">
                <Heart className="w-5 h-5" />
                <span>AI-Powered Dementia Care</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Slow Down
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-blue to-healing-green"> Memory Loss</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Our AI-driven platform provides personalized cognitive exercises, memory training, and therapeutic activities designed to help maintain and improve cognitive function.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="gentle" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-healing-green" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span> families helped
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Elderly person using AI-powered dementia care technology with gentle, hopeful expression" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-healing-blue/20 to-transparent"></div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-warm-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-healing-green/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;