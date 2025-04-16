
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How accurate is SizerAI's measurement technology?",
    answer: "SizerAI's technology delivers 97% accuracy in body measurements and size recommendations. Our AI algorithms have been trained on diverse body data from millions of scans to ensure precision across all body types and demographics."
  },
  {
    question: "What devices are compatible with SizerAI?",
    answer: "SizerAI works on any modern smartphone or tablet with a camera. There's no need for specialized hardware or depth sensors. Our technology is optimized for iOS and Android devices manufactured within the last 5 years."
  },
  {
    question: "How easy is it to integrate SizerAI with my existing platform?",
    answer: "We offer multiple integration options to suit different needs. Our SDK can be implemented in mobile apps within days, while our API allows for custom backend integrations. For e-commerce platforms, we offer plug-and-play solutions for major platforms like Shopify, WooCommerce, and Magento."
  },
  {
    question: "Do users need to create an account to use SizerAI?",
    answer: "No, users can get immediate size recommendations without creating an account. However, account creation allows users to save their measurements for future shopping sessions and receive more personalized recommendations over time."
  },
  {
    question: "How does SizerAI handle user privacy and data security?",
    answer: "Privacy is a top priority. We employ bank-level encryption for all user data, and users always maintain control over their information. We are GDPR and CCPA compliant, and we never sell personal data to third parties. Measurements are stored securely and can be deleted at the user's request."
  },
  {
    question: "Can SizerAI work with my existing size charts?",
    answer: "Absolutely! Our system can be calibrated to work with any brand's specific size charts and fit preferences. During onboarding, we'll map your existing size data to our measurement system for seamless compatibility."
  },
  {
    question: "What kind of return on investment can I expect?",
    answer: "Most clients see ROI within 3-6 months through reduced return rates (typically 25-30% reduction), increased conversion rates (15-20% increase), and higher customer satisfaction scores. Our analytics dashboard helps track these metrics so you can measure the impact directly."
  },
  {
    question: "Is there a limit to how many products SizerAI can work with?",
    answer: "There are no product limits in our Growth and Enterprise plans. The technology works across apparel categories including tops, bottoms, dresses, footwear, and accessories. We can handle large catalogs with thousands of SKUs."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 md:py-32 bg-sizer-surface/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-sizer-text-secondary text-lg">
            Get answers to common questions about SizerAI's technology and implementation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-sizer-divider">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-xl font-medium pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-sizer-primary" size={20} />
                  ) : (
                    <ChevronDown className="text-sizer-text-secondary" size={20} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-3 text-sizer-text-secondary pr-8 animate-slide-up">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sizer-text-secondary mb-4">
            Still have questions?
          </p>
          <a href="#contact" className="btn-outline inline-flex items-center">
            Contact Our Support Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
