import { Smartphone, Brain, ShoppingBag, Leaf, Ruler, Shirt } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "One Scan Measurement",
    description: "Capture precise body measurements with just a single smartphone scan. No specialized hardware required.",
    color: "from-purple-500 to-indigo-600",
    visual: (
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
        <Ruler className="w-6 h-6 text-indigo-300 animate-pulse" />
      </div>
    )
  },
  {
    icon: Brain,
    title: "AI Recommendation Engine",
    description: "Our advanced machine learning algorithms provide 97% accurate size recommendations across any brand.",
    color: "from-blue-500 to-cyan-400",
    visual: (
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
        <Shirt className="w-6 h-6 text-cyan-300 animate-pulse" />
      </div>
    )
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Integration",
    description: "Seamlessly integrate with your existing shopping platform via our SDK, API, or white-label solution.",
    color: "from-cyan-500 to-teal-400",
    visual: (
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
        <ShoppingBag className="w-6 h-6 text-teal-300 animate-pulse" />
      </div>
    )
  },
  {
    icon: Leaf,
    title: "Sustainability by Sizing",
    description: "Reduce returns by up to 30%, lowering carbon footprint and minimizing fashion waste.",
    color: "from-green-500 to-emerald-400",
    visual: (
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-14 h-14 bg-white/5 rounded-full flex items-center justify-center">
        <Leaf className="w-6 h-6 text-emerald-300 animate-pulse" />
      </div>
    )
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-sizer-surface/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features at a Glance</h2>
          <p className="text-sizer-text-secondary text-lg">
            Our AI-powered sizing technology transforms how customers shop for clothes, uniforms, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-6 card-hover relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sizer-text-secondary">{feature.description}</p>
              
              {/* Visual clothing element */}
              {feature.visual}
              
              {/* Decorative elements */}
              <div className="absolute -left-6 -bottom-6 w-12 h-12 rounded-full bg-gradient-to-br opacity-10 animate-spin-slow"></div>
            </div>
          ))}
        </div>
        
        {/* Decorative clothing elements */}
        <div className="mt-16 relative h-20 overflow-hidden">
          <div className="absolute inset-x-0 flex justify-around opacity-20">
            {[...Array(10)].map((_, i) => (
              <Shirt 
                key={i}
                size={48} 
                className="text-sizer-primary transform rotate-[15deg] animate-float" 
                style={{ 
                  animationDelay: `${i * 0.5}s`, 
                  opacity: 0.3 + (i % 2) * 0.3 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;