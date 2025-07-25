import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "31612345678"; // Nederlands telefoonnummer zonder + en spaties
  const message = "Hallo! Ik ben geïnteresseerd in SocialFlows Voice AI assistenten voor mijn restaurant. Kunnen jullie mij meer informatie geven over de mogelijkheden en prijzen?";
  
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
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Button background */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" />
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:translate-y-1">
        <div className="bg-gray-900/95 backdrop-blur-xl text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl border border-gray-700/50">
          💬 Chat via WhatsApp
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
        </div>
      </div>
    </button>
  );
}