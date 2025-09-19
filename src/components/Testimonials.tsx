import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Thompson",
    age: "Age 72",
    content: "MindCare AI has given me confidence back. The daily exercises are enjoyable, and I can see my memory improving week by week. My family is amazed at my progress.",
    rating: 5,
    improvement: "40% improvement in memory recall"
  },
  {
    name: "Robert Chen", 
    age: "Age 68",
    content: "The personalized approach really works. The AI understands my pace and adjusts the activities accordingly. I actually look forward to my daily sessions.",
    rating: 5,
    improvement: "35% improvement in attention span"
  },
  {
    name: "Eleanor Davis",
    age: "Age 75", 
    content: "What I love most is how gentle and encouraging the program is. It never makes me feel frustrated, only supported. My doctor is impressed with my cognitive stability.",
    rating: 5,
    improvement: "Maintained cognitive function for 18 months"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-healing-blue to-healing-green">Hope & Progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from families who have experienced the transformative power of AI-driven cognitive care.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-card to-soft-blue/20 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warm-accent text-warm-accent" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-healing-blue/30" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.age}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 px-3 py-2 bg-healing-green/10 rounded-lg">
                    <p className="text-sm font-medium text-healing-green">
                      {testimonial.improvement}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Join <span className="font-semibold text-foreground">10,000+</span> families who have found hope and improvement through MindCare AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;