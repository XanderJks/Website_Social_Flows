import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Dynamic Island Navigation */}
      <nav 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'scale-95' 
            : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative transition-all duration-700 ease-in-out ${
          isScrolled || isHovered
            ? 'w-auto px-8 py-4' 
            : 'w-auto px-12 py-5'
        }`}>
          {/* Dynamic Island Background */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isScrolled 
              ? 'bg-black/95 backdrop-blur-3xl border border-white/30 shadow-2xl' 
              : 'bg-black/80 backdrop-blur-2xl border border-white/20 shadow-xl'
          } ${
            isHovered 
              ? 'bg-black/98 border-white/40 shadow-2xl' 
              : ''
          }`}
          style={{
            borderRadius: isScrolled ? '32px' : '40px',
            boxShadow: isScrolled 
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1)' 
              : '0 25px 80px rgba(0, 0, 0, 0.4), 0 0 50px rgba(59, 130, 246, 0.05)'
          }}
          ></div>
          
          {/* Navigation Content */}
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center group">
                <span className={`font-bold tracking-wider text-white group-hover:scale-105 transition-all duration-500 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>
                  SocialFlows
                </span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className={`flex items-center tracking-wider font-medium transition-all duration-500 ${
                isScrolled ? 'space-x-4 text-xs' : 'space-x-6 text-sm'
              }`}>
                <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-3 py-2 rounded-full hover:bg-white/10">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-3 py-2 rounded-full hover:bg-white/10">
                  Prijzen
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('demo')} className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-3 py-2 rounded-full hover:bg-white/10">
                  Demo
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-3 py-2 rounded-full hover:bg-white/10">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* CTA Button */}
                <button 
                  onClick={() => scrollToSection('demo')} 
                  className={`relative group transition-all duration-500 overflow-hidden ${
                    isScrolled ? 'text-xs py-2 px-4' : 'text-sm py-2.5 px-5'
                  }`}
                  style={{ borderRadius: '20px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full"></div>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300"></div>
                  <span className="relative z-10 font-bold text-white drop-shadow-lg">Start Nu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/50 to-slate-600/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 -z-10"></div>
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                  isScrolled ? 'text-xs py-1.5 px-3' : 'text-sm py-2 px-4'
                aria-label="Toggle mobile menu"
              >
              isScrolled ? 'space-x-3 text-xs' : 'space-x-4 text-sm'
                  <X size={isScrolled ? 18 : 20} className="transition-all duration-500" />
                ) : (
                  <Menu size={isScrolled ? 18 : 20} className="transition-all duration-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={toggleMenu}></div>
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-80 max-w-sm">
            <div className="bg-black/90 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl p-6">
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                >
                  Proces
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                >
                  Prijzen
                </button>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                >
                  Demo
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                >
                  Contact
                </button>
                
                <div className="pt-4 border-t border-white/10">
                  <button 
                    onClick={() => scrollToSection('demo')}
                    className="w-full relative group text-sm px-6 py-3 overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl"></div>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 group-hover:bg-white/30 transition-all duration-300"></div>
                    <span className="relative z-10 font-bold text-white drop-shadow-lg flex items-center justify-center">
                      Start Nu
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}