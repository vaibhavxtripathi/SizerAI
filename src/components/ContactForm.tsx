
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-sizer-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sizer-text-secondary text-lg">
            Have questions or ready to implement SizerAI? Our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sizer-primary/10 flex items-center justify-center text-sizer-primary mr-4">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <a href="mailto:info@sizeraitech.com" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                    info@sizeraitech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sizer-primary/10 flex items-center justify-center text-sizer-primary mr-4">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sizer-primary/10 flex items-center justify-center text-sizer-primary mr-4">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Live Chat</h4>
                  <p className="text-sizer-text-secondary">
                    Available Monday-Friday<br />
                    9AM - 5PM EST
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium mb-3">Headquarters</h4>
              <address className="text-sizer-text-secondary not-italic">
                SizerAI Technologies Inc.<br />
                1234 Innovation Drive<br />
                San Francisco, CA 94103<br />
                United States
              </address>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sizer-text-primary mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-sizer-background border border-sizer-divider rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sizer-primary/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sizer-text-primary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-sizer-background border border-sizer-divider rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sizer-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-sizer-text-primary mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-sizer-background border border-sizer-divider rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sizer-primary/50"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sizer-text-primary mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-sizer-background border border-sizer-divider rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sizer-primary/50"
                >
                  <option value="">Select a subject</option>
                  <option value="demo">Request a Demo</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="integration">Integration Support</option>
                  <option value="other">Other Question</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sizer-text-primary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-sizer-background border border-sizer-divider rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sizer-primary/50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
