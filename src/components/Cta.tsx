
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section id="demo" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-sizer-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sizer-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sizer-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-sizer-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Sizing?
              </h2>
              <p className="text-sizer-text-secondary text-lg mb-6">
                Join leading brands using SizerAI to improve customer experience, reduce returns, and make sizing sustainable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary flex items-center justify-center">
                  Schedule Demo
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="#pricing" className="btn-outline flex items-center justify-center">
                  View Pricing
                </a>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="aspect-video bg-sizer-background rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sizer-text-secondary mb-3">Watch Demo</div>
                    <div className="w-16 h-16 rounded-full bg-sizer-primary/90 flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 glass px-2 py-1 rounded text-xs">
                  <span className="text-sizer-primary font-mono">00:05:24</span>
                </div>
              </div>
              
              {/* Stats bubbles */}
              <div className="absolute -bottom-6 -left-6 glass px-3 py-2 rounded-lg shadow-lg">
                <div className="text-xs text-sizer-text-secondary">Return Rate</div>
                <div className="text-sizer-primary font-bold">-30%</div>
              </div>
              
              <div className="absolute -top-6 -right-6 glass px-3 py-2 rounded-lg shadow-lg">
                <div className="text-xs text-sizer-text-secondary">Conversion Rate</div>
                <div className="text-sizer-secondary font-bold">+26%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
