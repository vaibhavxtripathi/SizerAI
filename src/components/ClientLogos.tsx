
import { useEffect, useRef } from 'react';

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    
    let animationId: number;
    let scrollPos = 0;
    
    const scroll = () => {
      if (!scrollElement) return;
      
      scrollPos += 0.5;
      
      // Reset position when we've scrolled the width of the container
      if (scrollPos >= scrollElement.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollElement.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Array of mock company logos
  const clients = [
    { name: "FashionBrand", initial: "F" },
    { name: "StyleCorp", initial: "S" },
    { name: "FitWear", initial: "FW" },
    { name: "UniWear", initial: "UW" },
    { name: "MeasureTech", initial: "MT" },
    { name: "SizePerfect", initial: "SP" },
    { name: "FitTech", initial: "FT" },
    { name: "RetailPro", initial: "RP" },
  ];
  
  return (
    <section className="py-12 md:py-20 bg-sizer-background border-y border-sizer-divider">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-semibold text-center mb-8 text-sizer-text-primary">
          Trusted by Leading Brands Worldwide
        </h2>
        
        <div className="relative overflow-hidden mx-auto max-w-6xl">
          {/* Gradient fade on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-sizer-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-sizer-background to-transparent z-10"></div>
          
          {/* Scrolling logos container */}
          <div 
            className="flex space-x-12 overflow-x-hidden py-6"
            ref={scrollRef}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`client-${index}`} 
                className="flex-shrink-0 w-40 h-20 glass flex items-center justify-center rounded-lg transition-all duration-300 hover:border-sizer-primary/50 group"
              >
                <span className="text-sizer-text-secondary group-hover:text-sizer-primary text-xl font-semibold transition-colors">
                  {client.initial}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client, index) => (
              <div 
                key={`client-dup-${index}`} 
                className="flex-shrink-0 w-40 h-20 glass flex items-center justify-center rounded-lg transition-all duration-300 hover:border-sizer-primary/50 group"
              >
                <span className="text-sizer-text-secondary group-hover:text-sizer-primary text-xl font-semibold transition-colors">
                  {client.initial}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
