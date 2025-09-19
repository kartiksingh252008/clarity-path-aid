import { Brain, Heart, Shield, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-healing-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">MindCare AI</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering cognitive wellness through compassionate AI technology, helping families maintain independence and quality of life.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-white/80">Made with care</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-healing-green" />
                <span className="text-white/80">HIPAA Compliant</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Cognitive Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Memory Exercises</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Daily Routines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Progress Tracking</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Family Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clinical Studies</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@mindcareai.com</span>
              </div>
              <p className="text-sm">
                Available 24/7 for emergencies<br />
                Mon-Fri 8AM-6PM for general support
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2024 MindCare AI. All rights reserved. Designed for cognitive wellness.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;