
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses getting started with AI sizing",
    features: [
      "Up to 1,000 scans per month",
      "Mobile SDK integration",
      "Basic analytics dashboard",
      "Email support",
      "99.5% uptime SLA"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    price: "$999",
    description: "Ideal for growing businesses with increasing sizing needs",
    features: [
      "Up to 10,000 scans per month",
      "Mobile SDK & API integration",
      "Advanced analytics",
      "Custom size charts",
      "Priority email & chat support",
      "99.9% uptime SLA"
    ],
    cta: "Choose Growth",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring custom solutions",
    features: [
      "Unlimited scans",
      "Full API access",
      "Custom integrations",
      "White-labeling options",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom SLA options"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
          <p className="text-sizer-text-secondary text-lg">
            Choose the plan that fits your business needs and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                glass rounded-xl overflow-hidden transition-all duration-300
                ${plan.popular ? 'border-2 border-sizer-primary relative -mt-4 shadow-lg shadow-sizer-primary/20' : 'border border-sizer-divider'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-sizer-primary text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-sizer-text-secondary ml-2">/month</span>
                  )}
                </div>
                
                <p className="text-sizer-text-secondary mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sizer-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`
                    w-full py-3 px-4 rounded-lg font-medium transition-all
                    ${plan.popular 
                      ? 'bg-sizer-primary text-white hover:shadow-lg hover:shadow-sizer-primary/20 hover:scale-105' 
                      : 'bg-sizer-surface border border-sizer-divider text-sizer-text-primary hover:bg-sizer-surface/70'}
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sizer-text-secondary mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#demo" className="btn-outline inline-flex items-center">
            Schedule Custom Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
