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
            ? 'w-auto px-6 py-3' 
            : 'w-auto px-8 py-4'
        }`}>
          {/* Dynamic Island Background */}
          <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-3xl border border-green-200/50 shadow-2xl' 
              : 'bg-white/80 backdrop-blur-2xl border border-green-200/30 shadow-xl'
          } ${
            isHovered 
              ? 'bg-white/98 border-green-300/50 shadow-2xl' 
              : ''
          }`}
          style={{
            borderRadius: isScrolled ? '32px' : '40px',
            boxShadow: isScrolled 
              ? '0 20px 60px rgba(0, 0, 0, 0.08), 0 0 40px rgba(34, 197, 94, 0.15)' 
              : '0 25px 80px rgba(0, 0, 0, 0.05), 0 0 50px rgba(34, 197, 94, 0.1)'
          }}
          ></div>
          
          {/* Navigation Content */}
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <img 
                  src="https://github.com/XanderJks/0011/blob/main/public/Naamloos.jpg?raw=true" 
                  alt="SocialFlows" 
                  className={`mr-3 transition-all duration-500 group-hover:scale-105 ${
                    isScrolled ? 'h-12 w-12' : 'h-16 w-16'
                  }`}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className={`flex items-center tracking-wider font-medium transition-all duration-500 ${
                isScrolled ? 'space-x-2 text-xs ml-4' : 'space-x-3 text-xs ml-6'
              }`}>
                <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative group px-1.5 py-0.5 rounded-full hover:bg-green-50/50">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative group px-1.5 py-0.5 rounded-full hover:bg-green-50/50">
                  Prijzen
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors duration-300 relative group px-1.5 py-0.5 rounded-full hover:bg-green-50/50">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* CTA Button */}
                <button 
                  onClick={() => scrollToSection('demo')} 
                  className={`relative group transition-all duration-500 overflow-hidden ${
                    isScrolled ? 'text-xs py-1 px-2' : 'text-xs py-1.5 px-3'
                  }`}
                  style={{ borderRadius: '20px' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-600/95 backdrop-blur-xl rounded-full border border-green-500/50 group-hover:bg-green-600/90 transition-all duration-300"></div>
                  <span className="relative z-10 font-bold text-white drop-shadow-lg">Start Nu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-green-600/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 -z-10"></div>
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                className="text-gray-800 hover:text-green-600 transition-colors rounded-full hover:bg-green-50/50 text-xs py-1 px-2"
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X size={14} className="transition-all duration-500" />
                ) : (
                  <Menu size={14} className="transition-all duration-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" onClick={toggleMenu}></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 max-w-sm">
            <div className="bg-white/95 backdrop-blur-3xl rounded-2xl border border-green-200/30 shadow-2xl p-2">
              <div className="space-y-1">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-1.5 py-0.5 text-xs text-gray-800 hover:bg-green-50/50 rounded-lg transition-colors font-medium"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="block w-full text-left px-1.5 py-0.5 text-xs text-gray-800 hover:bg-green-50/50 rounded-lg transition-colors font-medium"
                >
                  Proces
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-1.5 py-0.5 text-xs text-gray-800 hover:bg-green-50/50 rounded-lg transition-colors font-medium"
                >
                  Prijzen
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-1.5 py-0.5 text-xs text-gray-800 hover:bg-green-50/50 rounded-lg transition-colors font-medium"
                >
                  Contact
                </button>
                
                <div className="pt-2 border-t border-green-200/30">
                  <button 
                    onClick={() => scrollToSection('demo')}
                    className="w-full relative group text-xs px-1.5 py-0.5 overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-lg"></div>
                    <div className="absolute inset-0 bg-green-600/95 backdrop-blur-xl rounded-lg border border-green-500/50 group-hover:bg-green-600/90 transition-all duration-300"></div>
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