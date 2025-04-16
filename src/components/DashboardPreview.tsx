
import { Server, Smartphone, Code } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section id="tech" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Dashboard Preview</h2>
          <p className="text-sizer-text-secondary text-lg">
            Gain valuable insights with our advanced analytics and reporting tools.
          </p>
        </div>
        
        <div className="glass rounded-xl p-6 lg:p-10 overflow-hidden max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row flex-wrap gap-8">
            {/* Main Dashboard Panel */}
            <div className="lg:w-7/12 bg-sizer-background p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Sizing Analytics</h3>
                <div className="text-sizer-text-secondary text-sm">Last 30 days</div>
              </div>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="glass p-4 rounded-lg">
                  <div className="text-sizer-text-secondary text-sm mb-1">Total Scans</div>
                  <div className="text-2xl font-bold">12,458</div>
                  <div className="text-green-500 text-xs flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    24.3%
                  </div>
                </div>
                
                <div className="glass p-4 rounded-lg">
                  <div className="text-sizer-text-secondary text-sm mb-1">Accuracy Rate</div>
                  <div className="text-2xl font-bold">97.2%</div>
                  <div className="text-green-500 text-xs flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    1.5%
                  </div>
                </div>
                
                <div className="glass p-4 rounded-lg">
                  <div className="text-sizer-text-secondary text-sm mb-1">Returns Avoided</div>
                  <div className="text-2xl font-bold">3,421</div>
                  <div className="text-green-500 text-xs flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    32.8%
                  </div>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="h-48 bg-sizer-surface/70 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end px-4 pb-4">
                  {/* Mock bar chart */}
                  {[35, 45, 60, 52, 65, 75, 68, 80, 73, 88, 92, 86].map((height, index) => (
                    <div 
                      key={index} 
                      className="w-full mx-0.5 rounded-t bg-gradient-to-t from-sizer-primary/70 to-sizer-secondary/70"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                
                {/* Chart overlay data points */}
                <div className="absolute top-4 right-4 glass px-2 py-1 rounded text-xs">
                  <span className="text-sizer-secondary">Peak: 4,892 scans</span>
                </div>
              </div>
              
              {/* Size Distribution */}
              <div className="bg-sizer-surface/70 p-4 rounded-lg">
                <div className="text-sm font-medium mb-3">Size Distribution</div>
                <div className="grid grid-cols-5 gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size, i) => (
                    <div key={size} className="text-center">
                      <div className="h-16 bg-sizer-background rounded-md relative mb-1 overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sizer-primary to-sizer-primary/30"
                          style={{ height: `${[15, 25, 38, 22, 10][i]}%` }}
                        ></div>
                      </div>
                      <div className="text-xs">{size}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Integration Options */}
            <div className="lg:w-4/12 space-y-4">
              <div className="glass p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <Smartphone size={20} className="text-sizer-primary mr-2" />
                  <h3 className="font-medium">Mobile SDK</h3>
                </div>
                <p className="text-sm text-sizer-text-secondary mb-4">
                  Integrate our sizing technology directly into your mobile applications with our easy-to-use SDK.
                </p>
                <div className="text-xs font-mono bg-sizer-background/80 p-3 rounded overflow-x-auto">
                  <span className="text-green-400">import</span> <span className="text-sizer-secondary">SizerAI</span> <span className="text-green-400">from</span> <span className="text-amber-300">'sizer-ai-sdk'</span>;
                </div>
              </div>
              
              <div className="glass p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <Server size={20} className="text-sizer-primary mr-2" />
                  <h3 className="font-medium">Embedded Kiosk</h3>
                </div>
                <p className="text-sm text-sizer-text-secondary mb-4">
                  Perfect for retail locations. Our kiosk solution provides in-store sizing experiences.
                </p>
                <div className="bg-sizer-primary/10 p-2 rounded text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-green-400">5 Active Kiosks Online</span>
                  </div>
                </div>
              </div>
              
              <div className="glass p-5 rounded-lg">
                <div className="flex items-center mb-4">
                  <Code size={20} className="text-sizer-primary mr-2" />
                  <h3 className="font-medium">API Integration</h3>
                </div>
                <p className="text-sm text-sizer-text-secondary mb-4">
                  Connect to our powerful API for custom integration with your existing systems.
                </p>
                <div className="text-xs font-mono bg-sizer-background/80 p-3 rounded overflow-x-auto">
                  <span className="text-purple-400">GET</span> /api/v1/measurements/:user_id
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
