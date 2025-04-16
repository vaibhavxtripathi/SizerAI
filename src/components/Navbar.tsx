
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-lg bg-sizer-background/90 shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          {/* <span className="text-2xl font-bold gradient-text">SizerAI</span> */}
          <img className="invert" src={logo}></img>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
            How It Works
          </a>
          <a href="#solutions" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
            Solutions
          </a>
          <a href="#pricing" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sizer-text-secondary hover:text-sizer-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#contact" className="btn-outline">
            Contact
          </a>
          <a href="#demo" className="btn-primary">
            Schedule Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sizer-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 mb-6">
            <a 
              href="#features" 
              className="text-sizer-text-primary hover:text-sizer-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sizer-text-primary hover:text-sizer-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#solutions" 
              className="text-sizer-text-primary hover:text-sizer-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#pricing" 
              className="text-sizer-text-primary hover:text-sizer-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-sizer-text-primary hover:text-sizer-primary transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </nav>
          <div className="flex flex-col space-y-3">
            <a 
              href="#contact" 
              className="btn-outline w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#demo" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
