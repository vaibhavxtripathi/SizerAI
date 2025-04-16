
import { Camera, BarChart2, Shirt } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Scan",
    description: "Users take a quick body scan with any smartphone camera through your app or website.",
    color: "from-sizer-primary to-purple-600"
  },
  {
    icon: BarChart2,
    title: "Analyze",
    description: "Our AI engine precisely analyzes body measurements and dimensions in real-time.",
    color: "from-violet-500 to-sizer-primary"
  },
  {
    icon: Shirt,
    title: "Recommend",
    description: "Users receive personalized size recommendations for perfect fit, every time.",
    color: "from-blue-500 to-sizer-secondary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-sizer-text-secondary text-lg">
            Our simple three-step process delivers accurate sizing with minimal friction.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sizer-primary via-purple-600 to-sizer-secondary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sizer-text-secondary max-w-xs">{step.description}</p>
                
                {/* Step number */}
                <div className="w-10 h-10 rounded-full border-2 border-sizer-primary flex items-center justify-center mt-6 text-sizer-primary font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Example animation */}
        <div className="mt-20 glass rounded-xl p-8 mx-auto max-w-4xl">
          <div className="aspect-video relative bg-sizer-background rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-sizer-text-secondary">Interactive Demo</div>
              <div className="text-xl gradient-text font-semibold mb-4">See SizerAI in Action</div>
              <button className="btn-primary">
                Watch Demo
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-4 left-4 glass px-3 py-2 rounded-lg text-xs font-mono text-sizer-secondary">
              Scanning complete: 97% accuracy
            </div>
            
            <div className="absolute top-4 right-4 glass px-3 py-2 rounded-lg text-xs flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              <span className="text-sizer-text-secondary">Live Demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
