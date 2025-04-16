
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, FashionBrand Inc.",
    image: "avatar-1.svg",
    quote: "Implementing SizerAI has transformed our online shopping experience. Our return rates dropped by 32% in just three months, and customer satisfaction scores are at an all-time high.",
    stars: 5
  },
  {
    name: "Michael Chen",
    position: "Head of Digital, StyleWear",
    image: "avatar-2.svg",
    quote: "The accuracy of SizerAI's recommendations is remarkable. Our customers love the confidence it gives them when making purchases, and we've seen a significant boost in conversion rates.",
    stars: 5
  },
  {
    name: "Elena Rodriguez",
    position: "CEO, Uniform Solutions",
    image: "avatar-3.svg",
    quote: "SizerAI streamlined our entire uniform ordering process. What used to take weeks with multiple fittings now happens instantly with incredible precision.",
    stars: 4
  },
  {
    name: "David Kim",
    position: "Director of E-commerce, FitPerfect",
    image: "avatar-4.svg",
    quote: "As an e-commerce platform with multiple brands, SizerAI's ability to work across different sizing standards has been invaluable. It's become our secret weapon for customer retention.",
    stars: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Are Saying</h2>
          <p className="text-sizer-text-secondary text-lg">
            Hear from the brands and businesses using SizerAI to transform their fitting experience.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Control buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-sizer-surface border border-sizer-divider flex items-center justify-center text-sizer-text-secondary hover:text-sizer-primary transition-colors -ml-5 lg:-ml-12"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-sizer-surface border border-sizer-divider flex items-center justify-center text-sizer-text-secondary hover:text-sizer-primary transition-colors -mr-5 lg:-mr-12"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass rounded-xl p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      {/* Avatar placeholder */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sizer-primary to-purple-600 flex items-center justify-center text-white font-semibold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sizer-text-secondary text-sm">{testimonial.position}</p>
                      </div>
                      
                      <div className="ml-auto flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-sizer-text-secondary"} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic text-sizer-text-secondary">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index 
                    ? 'bg-sizer-primary' 
                    : 'bg-sizer-divider hover:bg-sizer-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
