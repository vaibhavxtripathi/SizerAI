
import { Leaf, RotateCcw, Truck } from 'lucide-react';

const SustainabilityImpact = () => {
  return (
    <section className="py-20 md:py-32 bg-sizer-surface/50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-0 left-0 right-0 h-full">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-green-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-sizer-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sizing Means Sustainability</h2>
          <p className="text-sizer-text-secondary text-lg">
            30% fewer returns = reduced waste & carbon footprint
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-xl p-6 text-center animate-slide-up">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mx-auto mb-6">
              <RotateCcw size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reduce Returns</h3>
            <p className="text-sizer-text-secondary">
              By providing accurate size recommendations, we help reduce return rates by up to 30%, decreasing packaging waste and shipping emissions.
            </p>
            <div className="mt-4 text-3xl font-bold text-green-500">-30%</div>
            <div className="text-sm text-sizer-text-secondary">return rate</div>
          </div>
          
          <div className="glass rounded-xl p-6 text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lower Emissions</h3>
            <p className="text-sizer-text-secondary">
              Fewer shipments mean a significant reduction in transportation-related CO2 emissions across the supply chain.
            </p>
            <div className="mt-4 text-3xl font-bold text-blue-500">42K</div>
            <div className="text-sm text-sizer-text-secondary">tons CO2 saved annually</div>
          </div>
          
          <div className="glass rounded-xl p-6 text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white mx-auto mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Less Waste</h3>
            <p className="text-sizer-text-secondary">
              Accurate sizing reduces the number of unwearable returns that often end up in landfills, promoting sustainable fashion practices.
            </p>
            <div className="mt-4 text-3xl font-bold text-amber-500">5.2M</div>
            <div className="text-sm text-sizer-text-secondary">garments saved from landfills</div>
          </div>
        </div>
        
        {/* Environmental impact visualization */}
        <div className="mt-20 max-w-4xl mx-auto glass rounded-xl p-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Environmental Impact</h3>
              <p className="text-sizer-text-secondary mb-6">
                Our technology has a measurable impact on environmental sustainability metrics for our partner brands.
              </p>
              
              {/* Progress bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Carbon Footprint Reduction</span>
                    <span className="text-green-500">32%</span>
                  </div>
                  <div className="h-2 bg-sizer-surface/70 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Packaging Material Saved</span>
                    <span className="text-green-500">28%</span>
                  </div>
                  <div className="h-2 bg-sizer-surface/70 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Water Conservation</span>
                    <span className="text-green-500">18%</span>
                  </div>
                  <div className="h-2 bg-sizer-surface/70 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-52 md:h-64">
              {/* Animated globe visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-4 border-green-500/20 border-dashed rounded-full animate-spin-slow relative">
                  <div className="absolute w-full h-full rounded-full bg-gradient-to-b from-green-500/10 to-transparent"></div>
                  
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-10 right-10 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="absolute bottom-12 right-8 w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="absolute bottom-8 left-12 w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;
