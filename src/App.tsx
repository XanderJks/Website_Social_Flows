import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Restaurants } from './pages/Restaurants';
import SystemStatus from './pages/SystemStatus';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { HelmetProvider } from 'react-helmet-async';
import { JsonLd, organizationSchema, serviceSchema, websiteSchema } from './components/JsonLd';

function App() {
  // Consistent particle count for all devices
  const particleCount = 50;
  const starCount = 30;

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
        {/* Global Structured Data */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={serviceSchema} />
        <JsonLd data={websiteSchema} />
        
        {/* Centered glow effects - blue accents */}
        <div className="fixed inset-0 z-0">
          {/* Main center glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-[140px] animate-pulse"
            style={{ animationDuration: '6s' }}
          ></div>
          
          {/* Secondary center glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-green-400/8 rounded-full blur-[130px] animate-pulse"
            style={{ animationDuration: '8s', animationDelay: '1s' }}
          ></div>

          {/* Accent glows */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[30rem] h-[30rem] bg-green-300/6 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: '7s', animationDelay: '0.5s' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-[35rem] h-[35rem] bg-green-200/8 rounded-full blur-[130px] animate-pulse"
            style={{ animationDuration: '9s', animationDelay: '1.5s' }}
          ></div>

          {/* Additional subtle glows */}
          <div 
            className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-green-400/12 rounded-full blur-[100px] animate-glow-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-green-500/10 rounded-full blur-[120px] animate-glow-pulse"
            style={{ animationDuration: '12s', animationDelay: '3s' }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/3 w-[18rem] h-[18rem] bg-green-300/8 rounded-full blur-[90px] animate-glow-pulse"
            style={{ animationDuration: '14s', animationDelay: '4s' }}
          ></div>
        </div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-0.5 bg-green-400 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Twinkling stars */}
        <div className="fixed inset-0 overflow-hidden opacity-30">
          {[...Array(starCount)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-green-400 rounded-full shadow-sm shadow-green-400/60"></div>
            </div>
          ))}
        </div>

        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/system-status" element={<SystemStatus />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}

export default App;