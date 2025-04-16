
import { useState } from 'react';
import { ShoppingBag, Users, Scissors, Store } from 'lucide-react';

const industries = [
  {
    id: "fashion",
    icon: ShoppingBag,
    name: "Fashion Brands",
    description: "Reduce returns by 30% and increase customer satisfaction. Our technology integrates seamlessly with your e-commerce platform, providing customers with accurate sizing recommendations.",
    stats: [
      { value: "30%", label: "Reduced Returns" },
      { value: "26%", label: "Conversion Increase" },
      { value: "97%", label: "Size Accuracy" }
    ],
    image: "fashion-dashboard.svg"
  },
  {
    id: "uniform",
    icon: Users,
    name: "Uniform Providers",
    description: "Streamline uniform ordering processes for corporate, healthcare, and educational institutions. Eliminate the need for in-person measurements and reduce reorders due to sizing issues.",
    stats: [
      { value: "85%", label: "Faster Ordering" },
      { value: "42%", label: "Fewer Exchanges" },
      { value: "99%", label: "Client Satisfaction" }
    ],
    image: "uniform-dashboard.svg"
  },
  {
    id: "tailors",
    icon: Scissors,
    name: "Tailors & Custom Clothing",
    description: "Perfect for made-to-measure and bespoke clothing. Capture precise measurements remotely and create truly personalized garments without in-person fittings.",
    stats: [
      { value: "62%", label: "Time Saved" },
      { value: "3x", label: "Customer Reach" },
      { value: "0.5cm", label: "Measurement Precision" }
    ],
    image: "tailor-dashboard.svg"
  },
  {
    id: "ecommerce",
    icon: Store,
    name: "E-commerce Platforms",
    description: "Offer sizing as a service to your merchants. Differentiate your platform with embedded AI sizing technology that works across product categories and brands.",
    stats: [
      { value: "18%", label: "GMV Increase" },
      { value: "41%", label: "Return Rate Reduction" },
      { value: "65%", label: "Shopper Confidence" }
    ],
    image: "ecommerce-dashboard.svg"
  }
];

const IndustrySolutions = () => {
  const [activeTab, setActiveTab] = useState("fashion");
  
  const activeIndustry = industries.find(industry => industry.id === activeTab);
  
  return (
    <section id="solutions" className="py-20 md:py-32 bg-sizer-surface/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-sizer-text-secondary text-lg">
            Tailored sizing technology for various industries and use cases.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeTab === industry.id
                  ? 'bg-sizer-primary text-white shadow-lg shadow-sizer-primary/20'
                  : 'bg-sizer-surface text-sizer-text-secondary hover:bg-sizer-surface/70'
              }`}
            >
              <industry.icon size={18} className="mr-2" />
              {industry.name}
            </button>
          ))}
        </div>
        
        {/* Content */}
        {activeIndustry && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center glass rounded-xl p-8 animate-fade-in">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold gradient-text">
                <activeIndustry.icon size={24} className="inline-block mr-2 mb-1" />
                {activeIndustry.name}
              </h3>
              
              <p className="text-sizer-text-secondary">
                {activeIndustry.description}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                {activeIndustry.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-sizer-primary">{stat.value}</div>
                    <div className="text-sm text-sizer-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary mt-4">
                Learn More
              </button>
            </div>
            
            <div className="lg:col-span-3 bg-sizer-background rounded-xl p-4 h-80 flex items-center justify-center">
              {/* Placeholder for dashboard image */}
              <div className="text-center">
                <div className="text-sizer-text-secondary mb-4">Interactive Dashboard Preview</div>
                <div className="glass rounded-md p-4 mb-4 w-full max-w-md mx-auto">
                  <div className="h-4 w-3/4 bg-sizer-primary/20 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-sizer-primary/20 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                  <div className="glass rounded-md p-3">
                    <div className="h-3 w-full bg-sizer-secondary/20 rounded mb-2"></div>
                    <div className="h-8 w-8 rounded-full bg-sizer-primary/30 mx-auto"></div>
                  </div>
                  <div className="glass rounded-md p-3">
                    <div className="h-3 w-full bg-sizer-secondary/20 rounded mb-2"></div>
                    <div className="h-8 w-8 rounded-full bg-sizer-secondary/30 mx-auto"></div>
                  </div>
                  <div className="glass rounded-md p-3">
                    <div className="h-3 w-full bg-sizer-secondary/20 rounded mb-2"></div>
                    <div className="h-8 w-8 rounded-full bg-purple-500/30 mx-auto"></div>
                  </div>
                  <div className="glass rounded-md p-3">
                    <div className="h-3 w-full bg-sizer-secondary/20 rounded mb-2"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-500/30 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustrySolutions;
