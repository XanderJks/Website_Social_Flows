import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import { JsonLd, organizationSchema, serviceSchema, websiteSchema } from './components/JsonLd';

function App() {
  // Detect if user is on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Reduce number of particles on mobile
  const particleCount = isMobile ? 25 : 50;
  const starCount = isMobile ? 15 : 30;

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Global Structured Data */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={serviceSchema} />
        <JsonLd data={websiteSchema} />
        
        {/* Centered glow effects - reduced intensity */}
        <div className="fixed inset-0 z-0">
          {/* Main center glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[140px] animate-pulse"
            style={{ animationDuration: '6s' }}
          ></div>
          
          {/* Secondary center glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-purple-500/5 rounded-full blur-[130px] animate-pulse"
            style={{ animationDuration: '8s', animationDelay: '1s' }}
          ></div>

          {/* Accent glows */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[30rem] h-[30rem] bg-blue-500/3 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: '7s', animationDelay: '0.5s' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-[35rem] h-[35rem] bg-violet-500/3 rounded-full blur-[130px] animate-pulse"
            style={{ animationDuration: '9s', animationDelay: '1.5s' }}
          ></div>

          {/* Additional subtle glows */}
          <div 
            className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-cyan-500/4 rounded-full blur-[100px] animate-glow-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-pink-500/4 rounded-full blur-[120px] animate-glow-pulse"
            style={{ animationDuration: '12s', animationDelay: '3s' }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/3 w-[18rem] h-[18rem] bg-emerald-500/3 rounded-full blur-[90px] animate-glow-pulse"
            style={{ animationDuration: '14s', animationDelay: '4s' }}
          ></div>
        </div>
        
        {/* Animated background grid - reduced opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white animate-float"
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
        <div className="fixed inset-0 overflow-hidden opacity-40">
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
              <div className="w-1 h-1 bg-white rounded-full shadow-sm shadow-white/50"></div>
            </div>
          ))}
        </div>

        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;