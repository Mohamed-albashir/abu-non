
import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'كيف نعمل', href: '#how-it-works' },
    { name: 'للعاملات', href: '#for-workers' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      // Delay scrolling until component is rendered
      setTimeout(() => scrollToSection(href), 100);
    } else {
      scrollToSection(href);
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (currentView !== 'home') {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={handleLogoClick} className="flex items-center gap-2 text-right">
            <div>
              <img src="../../img/logo.jpeg" alt="" className="w-12 rounded-lg" />
            </div>
            <span className="text-2xl font-bold text-emerald-900">ابونون</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-700 hover:text-emerald-600 font-bold transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-sm"
            >
              احجز الآن
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-emerald-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-lg font-bold text-slate-700 hover:text-emerald-600 border-b border-slate-50 last:border-0"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <button 
                onClick={() => { onNavigate('booking'); setIsOpen(false); }}
                className="w-full bg-emerald-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-lg"
              >
                احجز الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
