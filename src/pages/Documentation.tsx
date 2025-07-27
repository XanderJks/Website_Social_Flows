import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Book, Code, Phone, Settings, BarChart3, Shield } from 'lucide-react';

export function Documentation() {
  return (
    <>
      <SEOHead 
        title="Documentatie - SocialFlows"
        description="Technische documentatie en handleidingen voor SocialFlows Voice AI implementatie."
        url="https://socialflows.nl/documentation"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Technische Documentatie
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Uitgebreide handleidingen en API documentatie voor SocialFlows Voice AI implementatie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Start Guide */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quick Start Guide</h3>
              <p className="text-gray-700 mb-4">
                Stap-voor-stap handleiding om binnen 15 minuten aan de slag te gaan met uw Voice AI assistent.
              </p>
              <a href="#quickstart" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Lees meer →
              </a>
            </div>
            
            {/* API Reference */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">API Reference</h3>
              <p className="text-gray-700 mb-4">
                Volledige API documentatie voor integratie met uw bestaande restaurant management systemen.
              </p>
              <a href="#api" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Bekijk API →
              </a>
            </div>
            
            {/* Phone Integration */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Telefoon Setup</h3>
              <p className="text-gray-700 mb-4">
                Configuratie van telefoonnummers, doorschakeling en voicemail integratie.
              </p>
              <a href="#phone" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Setup Guide →
              </a>
            </div>
            
            {/* Configuration */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Configuratie</h3>
              <p className="text-gray-700 mb-4">
                Menu-instellingen, openingstijden, speciale aanbiedingen en personalisatie opties.
              </p>
              <a href="#config" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Configureren →
              </a>
            </div>
            
            {/* Analytics */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-700 mb-4">
                Dashboard configuratie, custom reports en data export mogelijkheden.
              </p>
              <a href="#analytics" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Analytics →
              </a>
            </div>
            
            {/* Security */}
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Security & Compliance</h3>
              <p className="text-gray-700 mb-4">
                GDPR compliance, data encryption, access controls en security best practices.
              </p>
              <a href="#security" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                Security Guide →
              </a>
            </div>
          </div>
          
          {/* Support Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hulp nodig?</h2>
              <p className="text-gray-700 mb-6">
                Ons technische team staat klaar om u te helpen met implementatie en configuratie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@socialflows.nl" 
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+31638104765" 
                  className="px-6 py-3 bg-transparent border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100/50 transition-all duration-300"
                >
                  Bel Ons
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}