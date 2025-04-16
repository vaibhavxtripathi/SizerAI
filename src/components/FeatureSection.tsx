
import { Smartphone, Brain, ShoppingBag, Leaf } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "One Scan Measurement",
    description: "Capture precise body measurements with just a single smartphone scan. No specialized hardware required.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: Brain,
    title: "AI Recommendation Engine",
    description: "Our advanced machine learning algorithms provide 97% accurate size recommendations across any brand.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Integration",
    description: "Seamlessly integrate with your existing shopping platform via our SDK, API, or white-label solution.",
    color: "from-cyan-500 to-teal-400"
  },
  {
    icon: Leaf,
    title: "Sustainability by Sizing",
    description: "Reduce returns by up to 30%, lowering carbon footprint and minimizing fashion waste.",
    color: "from-green-500 to-emerald-400"
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
              className="glass rounded-xl p-6 card-hover"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sizer-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
