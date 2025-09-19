import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const benefits = [
  "14-day free trial with full access",
  "Personalized AI assessment included",
  "Family dashboard for caregivers", 
  "24/7 support from our care team",
  "HIPAA-compliant and secure"
];

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-healing-blue/5 via-background to-healing-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-card via-soft-blue/30 to-sage-green/30 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Ready to Begin Your 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-blue to-healing-green"> Cognitive Wellness Journey?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Take the first step towards maintaining and improving cognitive health with our compassionate AI-powered platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-healing-green flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button variant="hero" size="lg" className="group text-lg px-8">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="gentle" size="lg" className="text-lg px-8">
                  Schedule a Demo
                </Button>
              </div>
              
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions? Our care specialists are here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>1-800-MINDCARE</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>support@mindcareai.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;