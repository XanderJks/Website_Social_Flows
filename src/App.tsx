import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import { JsonLd, organizationSchema, serviceSchema, websiteSchema } from './components/JsonLd';

function App() {
  // Consistent particle count for all devices
  const particleCount = 50;
  const starCount = 30;

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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gray-400/8 rounded-full blur-[140px] animate-pulse"
            style={{ animationDuration: '6s' }}
          ></div>
          
          {/* Secondary center glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-slate-400/8 rounded-full blur-[130px] animate-pulse"
            style={{ animationDuration: '8s', animationDelay: '1s' }}
          ></div>

          {/* Accent glows */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[30rem] h-[30rem] bg-gray-500/6 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: '7s', animationDelay: '0.5s' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 w-[35rem] h-[35rem] bg-slate-500/6 rounded-full blur-[130px] animate-pulse"
            style={{ animationDuration: '9s', animationDelay: '1.5s' }}
          ></div>

          {/* Additional subtle glows */}
          <div 
            className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-gray-400/6 rounded-full blur-[100px] animate-glow-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-slate-400/6 rounded-full blur-[120px] animate-glow-pulse"
            style={{ animationDuration: '12s', animationDelay: '3s' }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/3 w-[18rem] h-[18rem] bg-gray-500/5 rounded-full blur-[90px] animate-glow-pulse"
            style={{ animationDuration: '14s', animationDelay: '4s' }}
          ></div>
        </div>
        
        {/* Animated background grid - reduced opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white animate-float"
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
        <div className="fixed inset-0 overflow-hidden opacity-50">
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
              <div className="w-1 h-1 bg-white rounded-full shadow-sm shadow-white/60"></div>
            </div>
          ))}
        </div>

        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      {/* Vapi AI Widget */}
      <div id="vapi-widget-container">
        <vapi-widget
          public-key="13c0731f-dbde-4236-a9cd-fce5225d4b3d"
          assistant-id="87fc75bc-db4e-4ca1-97de-e3cb516232ea"
          mode="voice"
          theme="dark"
          base-bg-color="#000000"
          accent-color="#14B8A6"
          cta-button-color="#000000"
          cta-button-text-color="#ffffff"
          border-radius="large"
          size="full"
          position="bottom-right"
          title="TALK WITH AI"
          start-button-text="Start"
          end-button-text="End Call"
          chat-first-message="Hey, How can I help you today?"
          chat-placeholder="Type your message..."
          voice-show-transcript="true"
          consent-required="true"
          consent-title="Terms and conditions"
          consent-content="By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
          consent-storage-key="vapi_widget_consent"
        ></vapi-widget>
      </div>
    </HelmetProvider>
  );
}

export default App;