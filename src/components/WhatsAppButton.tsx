import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "31201234567"; // Nederlands telefoonnummer zonder + en spaties
  const message = "Hallo! Ik ben geïnteresseerd in SocialFlows AI-assistenten voor mijn restaurant. Kunnen jullie mij meer informatie geven?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      {/* Main button */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Button background */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat via WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </button>
  );
}