import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Headphones, BarChart3, CheckCircle, Star, ArrowRight, Play, Zap, Shield, Clock, Users, Mic } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CheckoutModal } from '../components/CheckoutModal';

export function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [checkoutModal, setCheckoutModal] = useState<{
    isOpen: boolean;
    url: string;
    planName: string;
  }>({
    isOpen: false,
    url: '',
    planName: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const playDemoVideo = () => {
    const iframe = document.querySelector('iframe[src*="vimeo.com"]') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      // Send play command to Vimeo player
      iframe.contentWindow.postMessage('{"method":"play"}', '*');
      // Scroll to video
      scrollToSection('demo');
    } else {
      // Fallback: just scroll to demo section
      scrollToSection('demo');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      restaurant: formData.get('restaurant'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      source: 'SocialFlows Website'
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/goka38wdmp545joe0kjjn49i551w5kf7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const startVapiDemo = () => {
    // Check if Vapi is loaded
    if (typeof window !== 'undefined' && (window as any).vapiInstance) {
      try {
        // Start the voice call
        (window as any).vapiInstance.start();
      } catch (error) {
        console.error('Error starting Vapi demo:', error);
        alert('Demo is momenteel niet beschikbaar. Probeer het later opnieuw.');
      }
    } else {
      alert('Voice AI wordt geladen... Probeer het over een paar seconden opnieuw.');
    }
  };

  const openCheckout = (url: string, planName: string) => {
    setCheckoutModal({
      isOpen: true,
      url,
      planName
    });
  };

  const closeCheckout = () => {
    setCheckoutModal({
      isOpen: false,
      url: '',
      planName: ''
    });
  };

  return (
    <>
      <SEOHead 
        title="SocialFlows - Voice AI Assistenten voor Restaurants"
        description="Revolutioneer uw restaurant met SocialFlows Voice AI assistenten. Automatiseer reserveringen, bestellingen en klantenservice met geavanceerde spraaktechnologie."
        keywords="voice AI, restaurant automatisering, AI assistent, reserveringen, bestellingen, klantenservice, spraaktechnologie, Nederland, horeca"
        url="https://socialflows.nl"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-50/80 backdrop-blur-xl border border-green-200/50 text-green-700 mb-8 transition-all duration-800 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              Professionele AI Oplossingen
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent mb-8 leading-tight transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Professionele AI-assistenten voor uw restaurant
            </h1>
            
            {/* Subheadline */}
            <p className={`text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Verhoog uw operationele efficiëntie met geavanceerde spraaktechnologie. Automatiseer reserveringen, bestellingen en klantenservice met bewezen AI-oplossingen.
            </p>
            
            {/* Demo Video */}
            <div id="demo" className={`mb-10 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-video bg-white/90 rounded-xl border border-green-200/50 backdrop-blur-xl overflow-hidden shadow-lg">
                  <div style={{padding:"54.72% 0 0 0", position:"relative"}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1105099613?badge=0&autopause=0&player_id=0&app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                      title="Social Flow"
                    ></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-800 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={playDemoVideo}
                className="group relative px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center text-sm shadow-lg"
              >
                <Play className="w-4 h-4 mr-2" />
                Live Demo Bekijken
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100/50 transition-all duration-300 flex items-center text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Vrijblijvend Gesprek
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 transition-all duration-800 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                24/7 beschikbaar
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Enterprise beveiliging
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Snelle implementatie
              </div>
            </div>
            
            {/* Hero Feature Blocks */}
            <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-800 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* 24/7 Beschikbaarheid */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Beschikbaarheid</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Continue service zonder onderbrekingen, zelfs buiten openingstijden
                  </p>
                </div>
              </div>

              {/* 99% Uptime */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Betrouwbaarheid</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    99.9% uptime garantie met enterprise-grade infrastructuur
                  </p>
                </div>
              </div>

              {/* Snelle Setup */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Snelle Implementatie</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Operationeel binnen 1-2 weken met volledige ondersteuning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Professionele AI-oplossingen voor restaurants
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Betrouwbare technologie die naadloos integreert met uw bestaande systemen en processen
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1: Automatische Reserveringen */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Geautomatiseerde Reserveringen</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Professionele verwerking van telefonische reserveringen met real-time beschikbaarheidscontrole en naadloze systeemintegratie voor optimale efficiency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Continue beschikbaarheid
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Meertalige ondersteuning
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Volledige systeemintegratie
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Telefoonbestellingen */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Intelligente Bestellingen</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Professionele orderverwerking met gepersonaliseerde aanbevelingen en geoptimaliseerde upselling strategieën voor maximale omzetgroei.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Volledige menuintegratie
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      AI-gedreven upselling
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Veilige betalingsverwerking
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Klantenservice */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Professionele Klantenservice</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Consistente, professionele klanteninteractie met directe toegang tot complete klanthistorie en bedrijfsinformatie voor optimale service.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Uitgebreide kennisdatabase
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Intelligente escalatie
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Complete klanthistorie
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4: Geavanceerde Analytics */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Business Intelligence</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Uitgebreide analytics en rapportage voor datagedreven besluitvorming en continue bedrijfsoptimalisatie met real-time inzichten.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Real-time analytics
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Performance dashboards
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Gedetailleerde rapportage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Waarom professionals kiezen voor SocialFlows
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Bewezen resultaten en enterprise-grade oplossingen voor de moderne horeca
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bewezen ROI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gemiddeld 35% toename in telefonische bestellingen binnen de eerste maand van implementatie.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Professionele Beveiliging</h3>
                <p className="text-gray-700 leading-relaxed">
                  GDPR-compliant met end-to-end encryptie en 99.9% uptime garantie voor betrouwbare service.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dedicated Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Persoonlijke accountmanager en 24/7 professionele support voor continue bedrijfscontinuïteit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Flexibele Prijsmodellen
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Flexibele oplossingen die meegroeien met uw bedrijf. Alle plannen inclusief volledige ondersteuning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Starter Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">€289</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tot 500 belminuten
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maandelijkse verbruik overzicht
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Email/WA ticket support
                    </li>
                    <li className="flex items-center text-sm text-gray-700 opacity-0">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Spacer item
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                    <span 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openCheckout('https://buy.stripe.com/cNi6oJ5AwbkN8E956OabK03', 'Starter');
                      }}
                      onMouseDown={(e) => e.preventDefault()}
                      className="block cursor-pointer select-none"
                      role="button"
                      tabIndex={0}
                    >
                      Start Nu
                    </span>
                  </button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-500/50 backdrop-blur-xl hover:bg-white hover:border-green-600/70 transition-all duration-300 flex flex-col h-full group shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-lg text-xs font-semibold">
                    Aanbevolen
                  </span>
                </div>
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Pro</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">€349</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tot 750 belminuten
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maandelijkse rapportage (Verbruik, aantal calls, succes percentage, totale bestelwaarde)
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Email/WA ticket support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
                    <span 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openCheckout('https://buy.stripe.com/aFa7sNfb6ewZ6w17eWabK04', 'Pro');
                      }}
                      onMouseDown={(e) => e.preventDefault()}
                      className="block cursor-pointer text-white select-none"
                      role="button"
                      tabIndex={0}
                    >
                      Start Nu
                    </span>
                  </button>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Elite</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">€449</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tot 1000 belminuten
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maandelijkse rapportage (Compleet en gereed voor boekhouding)
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Priority support
                    </li>
                    <li className="flex items-center text-sm text-gray-700 opacity-0">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Spacer item
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                    <span 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openCheckout('https://buy.stripe.com/8x27sN5Aw0G91bH2YGabK05', 'Elite');
                      }}
                      onMouseDown={(e) => e.preventDefault()}
                      className="block cursor-pointer select-none"
                      role="button"
                      tabIndex={0}
                    >
                      Start Nu
                    </span>
                  </button>
                </div>
              </div>

              {/* Custom Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-800">Op maat</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Onbeperkte gesprekken
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Custom integraties
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Persoonlijke support
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Service garanties
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
                    <span onClick={() => scrollToSection('contact')}>Contact Ons</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* ADD ONS Section */}
            <div className="mt-16 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-8">Krachtige Uitbreidingen</h4>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                Breid uw AI-systeem uit met geavanceerde modules voor complete bedrijfsoptimalisatie
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* AI Chatbot Add-on */}
                <div className="group relative p-8 rounded-xl bg-white/95 border border-green-200/40 backdrop-blur-xl hover:bg-white hover:border-green-300/60 transition-all duration-300 shadow-lg hover:shadow-xl max-w-md mx-auto">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h5 className="text-lg font-bold text-gray-800 mb-2">AI Website Chatbot</h5>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        Geïntegreerde AI chatbot voor uw website met bonnenprinter synchronisatie. 
                        24/7 online klantenservice en automatische orderverwerking.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-green-600">€44,99</span>
                          <span className="text-gray-500 text-sm">/maand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Wat onze klanten zeggen
              </h2>
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl text-green-500/20 mb-4">"</div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                    Sinds we de AI Assistent gebruiken, missen we geen enkel telefoontje meer. Bestellingen komen foutloos binnen en de keuken krijgt meteen een bon — zelfs tijdens piekuren. Ik kan baliepersoneel eindelijk ook op andere vlaktes inzetten. Minder stress op de werkvloer en méér focus. Dit is echt de beste investering geweest voor onze zaak.
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-gray-800 text-lg">Zakariya Aachboune</div>
                      <div className="text-gray-600">Eigenaar van Sensei Sushi Culemborg</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-lg text-gray-700 max-w-3