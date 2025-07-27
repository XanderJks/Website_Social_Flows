import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle, AlertCircle, Clock, Activity } from 'lucide-react';

export function SystemStatus() {
  return (
    <>
      <SEOHead 
        title="System Status - SocialFlows"
        description="Real-time status van SocialFlows Voice AI services en infrastructuur."
        url="https://socialflows.nl/system-status"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              System Status
            </h1>
            <p className="text-lg text-gray-700">
              Real-time status van onze Voice AI services
            </p>
          </div>
          
          {/* Overall Status */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl mb-8">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <span className="text-2xl font-bold text-green-600">Alle Systemen Operationeel</span>
            </div>
            <p className="text-center text-gray-700">
              Alle services functioneren normaal. Laatste update: {new Date().toLocaleString('nl-NL')}
            </p>
          </div>
          
          {/* Service Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Voice AI Engine</h3>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-semibold">Operationeel</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">Uptime: 99.98%</p>
              <p className="text-gray-700 text-sm">Response tijd: 1.2s gemiddeld</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Telefonie Platform</h3>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-semibold">Operationeel</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">Uptime: 99.99%</p>
              <p className="text-gray-700 text-sm">Actieve gesprekken: 247</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">API Services</h3>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-semibold">Operationeel</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">Uptime: 99.97%</p>
              <p className="text-gray-700 text-sm">Response tijd: 0.8s gemiddeld</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Analytics Dashboard</h3>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-semibold">Operationeel</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">Uptime: 99.95%</p>
              <p className="text-gray-700 text-sm">Data sync: Real-time</p>
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-green-600" />
              Performance Metrics (Laatste 24 uur)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.98%</div>
                <div className="text-gray-700">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1,247</div>
                <div className="text-gray-700">Gesprekken Verwerkt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">0.9s</div>
                <div className="text-gray-700">Gem. Response Tijd</div>
              </div>
            </div>
          </div>
          
          {/* Recent Incidents */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-green-600" />
              Recente Updates
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Systeem Update Voltooid</div>
                  <div className="text-gray-700 text-sm">Performance verbeteringen en nieuwe features geïmplementeerd</div>
                  <div className="text-gray-500 text-xs mt-1">19 januari 2025, 02:30 CET</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Geplande Onderhoud Voltooid</div>
                  <div className="text-gray-700 text-sm">Database optimalisatie en security updates</div>
                  <div className="text-gray-500 text-xs mt-1">15 januari 2025, 01:00 CET</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Nieuwe Datacenter Online</div>
                  <div className="text-gray-700 text-sm">Uitbreiding infrastructuur voor betere performance</div>
                  <div className="text-gray-500 text-xs mt-1">10 januari 2025, 14:00 CET</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subscribe to Updates */}
          <div className="mt-8 text-center">
            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-green-200/30 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Status Updates</h3>
              <p className="text-gray-700 mb-4">
                Ontvang automatische meldingen bij status wijzigingen
              </p>
              <a 
                href="mailto:contact@socialflows.nl?subject=Status Updates Abonnement"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 inline-block"
              >
                Abonneren op Updates
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}