
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center animated-gradient overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sizer-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sizer-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-10 px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">97% Accurate</span> AI Body Measuring Technology
            </h1>
            <p className="text-xl md:text-2xl text-sizer-text-secondary mb-8 max-w-xl">
              Empower your customers with sizing that just fits. Reduce returns, increase satisfaction, and make sizing sustainable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#tech" className="btn-outline flex items-center justify-center">
                Explore Technology
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative glass rounded-2xl p-2 mx-auto max-w-md overflow-hidden">
              {/* Animation showing mobile body scan */}
              <div className="aspect-[9/16] bg-sizer-background rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-80">
                    {/* Human silhouette with scan effect */}
                    <svg 
                      viewBox="0 0 100 200" 
                      className="w-full h-full opacity-80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M50,30 C60,30 65,25 65,15 C65,5 57.5,-2.5 50,2.5 C42.5,-2.5 35,5 35,15 C35,25 40,30 50,30 Z M30,60 C30,45 40,35 50,35 C60,35 70,45 70,60 L70,110 C70,120 65,130 65,130 L65,190 C65,195 60,195 60,190 L60,140 L55,140 L55,190 C55,195 50,195 50,190 L50,140 L45,140 L45,190 C45,195 40,195 40,190 L40,140 L35,140 L35,190 C35,195 30,195 30,190 L30,130 C30,130 25,120 25,110 L25,60 Z"
                        className="stroke-sizer-primary"
                        strokeWidth="0.5"
                        fill="rgba(132, 92, 255, 0.2)"
                      />
                      
                      {/* Scanning effect - horizontal line that moves up and down */}
                      <line 
                        x1="10" 
                        y1="100" 
                        x2="90" 
                        y2="100" 
                        stroke="#39D0FF" 
                        strokeWidth="1" 
                        strokeDasharray="3,2"
                        className="animate-[scanLine_3s_ease-in-out_infinite]"
                      />
                      
                      {/* Measurement points */}
                      <circle cx="35" cy="60" r="1" fill="#39D0FF" className="pulse-glow" />
                      <circle cx="65" cy="60" r="1" fill="#39D0FF" className="pulse-glow" />
                      <circle cx="50" cy="90" r="1" fill="#39D0FF" className="pulse-glow" />
                      <circle cx="30" cy="110" r="1" fill="#39D0FF" className="pulse-glow" />
                      <circle cx="70" cy="110" r="1" fill="#39D0FF" className="pulse-glow" />
                      <circle cx="45" cy="140" r="1" fill="#39D0FF" className="pulse-glow" />
                      <circle cx="55" cy="140" r="1" fill="#39D0FF" className="pulse-glow" />
                    </svg>
                    
                    {/* Measurement data floating around */}
                    <div className="absolute top-1/4 -right-14 glass px-2 py-1 rounded text-xs font-mono text-sizer-secondary animate-pulse">
                      Shoulder: 42cm
                    </div>
                    <div className="absolute top-1/2 -left-14 glass px-2 py-1 rounded text-xs font-mono text-sizer-secondary animate-pulse delay-300">
                      Waist: 76cm
                    </div>
                    <div className="absolute bottom-1/4 -right-12 glass px-2 py-1 rounded text-xs font-mono text-sizer-secondary animate-pulse delay-700">
                      Inseam: 81cm
                    </div>
                  </div>
                </div>
                
                {/* UI Elements overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-sizer-surface/80 backdrop-blur rounded-lg p-3 border border-sizer-primary/30">
                    <div className="text-sm font-medium text-sizer-text-primary mb-2">Size Recommendation</div>
                    <div className="flex justify-between items-center">
                      <div className="text-sizer-primary text-lg font-bold">Medium</div>
                      <div className="text-xs text-sizer-text-secondary">97% match</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sizer-primary/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -z-10 top-1/4 left-1/3 w-32 h-32 bg-sizer-secondary/20 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
