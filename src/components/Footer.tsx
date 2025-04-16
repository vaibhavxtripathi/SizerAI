
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sizer-background border-t border-sizer-divider pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center mb-6">
          <img className="invert" src='../public/Sizer-logo.png.png'></img>
              
            </a>
            <p className="text-sizer-text-secondary mb-6 max-w-xs">
              Revolutionizing body measurement and fit prediction through AI technology for the fashion, retail, and uniform industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Fashion Brands
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Uniform Providers
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Tailors & Custom Clothing
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  E-commerce Platforms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  SDK Guides
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-sizer-divider flex flex-col md:flex-row justify-between items-center">
          <div className="text-sizer-text-secondary text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SizerAI. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
