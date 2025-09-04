import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Headphones, BarChart3, CheckCircle, Star, ArrowRight, Play, Zap, Shield, Clock, Users, Mic, ShoppingBag, Truck, Settings } from 'lucide-react';
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
        title="SocialFlows - Voice AI Assistenten voor Bedrijven"
        description="Transformeer uw bedrijf met SocialFlows Voice AI assistenten. Automatiseer klantenservice, verkoop en communicatie met geavanceerde spraaktechnologie voor alle sectoren."
        keywords="voice AI, bedrijfsautomatisering, AI assistent, klantenservice, verkoop, communicatie, spraaktechnologie, Nederland, zakelijk"
        url="https://socialflows.nl"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-50/80 backdrop-blur-xl border border-green-200/50 text-green-700 mb-8 transition-all duration-800 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              Voice AI voor Alle Bedrijven
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent mb-8 leading-tight transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Voice AI assistenten voor elk bedrijf
            </h1>
            
            {/* Subheadline */}
            <p className={`text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Transformeer uw bedrijfsprocessen met geavanceerde spraaktechnologie. Van klantenservice tot verkoop - onze AI-assistenten passen zich aan elke sector aan.
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
                Voice AI voor elke sector
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Onze AI-assistenten passen zich aan uw specifieke bedrijfsbehoeften aan, ongeacht de sector
              </p>
            </div>
            
            {/* Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Restaurants */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <ShoppingBag className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Restaurants & Horeca</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Automatiseer reserveringen, bestellingen en klantenservice. Verhoog uw omzet en verbeter de klantervaring.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Telefonische bestellingen
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tafelreserveringen
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Bezorgcoördinatie
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a 
                      href="/restaurants" 
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm"
                    >
                      Meer over restaurants
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* E-commerce */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">E-commerce & Retail</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Verbeter uw klantenservice en verhoog conversies met intelligente voice assistenten voor online winkels.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Orderondersteuning
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Productadvies
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Retourverwerking
                    </li>
                  </ul>
                </div>
              </div>

              {/* Healthcare */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Zorgverlening</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Automatiseer afspraakplanning en patiëntencommunicatie. Verbeter toegankelijkheid en efficiëntie in de zorg.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Afspraak planning
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Medicatie herinneringen
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Patiënt screening
                    </li>
                  </ul>
                </div>
              </div>

              {/* Real Estate */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Makelaardij</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Automatiseer bezichtigingen en lead kwalificatie. Verhoog uw conversie en bespaar tijd op administratie.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Bezichtiging planning
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Lead kwalificatie
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Woningmatching
                    </li>
                  </ul>
                </div>
              </div>

              {/* Professional Services */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Professionele Diensten</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Voor advocaten, accountants, consultants. Automatiseer intake gesprekken en afspraakplanning.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Intake gesprekken
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Consultatie planning
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Document opvolging
                    </li>
                  </ul>
                </div>
              </div>

              {/* Custom Solutions */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Maatwerk Oplossingen</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Uw sector niet hierboven? Wij ontwikkelen custom AI-assistenten voor elke bedrijfstak.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Sector-specifieke training
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Custom integraties
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Dedicated support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Core Features */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kernfunctionaliteiten voor alle sectoren</h3>
              <p className="text-gray-600">Onze AI-assistenten bieden deze basisfuncties, aangepast aan uw specifieke behoeften</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">24/7 Beschikbaarheid</h4>
                <p className="text-sm text-gray-600">Altijd bereikbaar voor uw klanten</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Meertalig</h4>
                <p className="text-sm text-gray-600">Nederlands, Engels en meer</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Analytics</h4>
                <p className="text-sm text-gray-600">Gedetailleerde rapportage</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Veilig</h4>
                <p className="text-sm text-gray-600">GDPR compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Waarom bedrijven kiezen voor SocialFlows
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Bewezen resultaten en enterprise-grade oplossingen voor moderne bedrijven
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bewezen ROI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gemiddeld 40% verbetering in klantenservice efficiency binnen de eerste maand van implementatie.
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

        {/* Pricing Overview Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Transparante Prijzen voor Elke Sector
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Onze prijzen zijn gebaseerd op gebruik en functionaliteit, niet op uw sector. Transparant en eerlijk.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-green-200/50 shadow-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basis</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">€200</div>
                <div className="text-gray-500 mb-6">per maand</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Eén AI-assistent
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    24/7 beschikbaarheid
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Basis rapportage
                  </li>
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Start Nu
                </button>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl border-2 border-green-300/50 shadow-2xl p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    POPULAIR
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Professioneel</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">€350</div>
                <div className="text-gray-500 mb-6">per maand</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Meerdere AI-assistenten
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Geavanceerde integraties
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Uitgebreide analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Priority support
                  </li>
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  Kies Professioneel
                </button>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-green-200/50 shadow-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">Custom</div>
                <div className="text-gray-500 mb-6">op aanvraag</div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Onbeperkte AI-assistenten
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Maatwerk ontwikkeling
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                    SLA garanties
                  </li>
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Ons
                </button>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Alle plannen inclusief setup, training en ondersteuning. Geen verborgen kosten.
              </p>
              <p className="text-sm text-gray-500">
                Prijzen zijn afhankelijk van gebruik en gewenste functionaliteiten. 
                <a href="/restaurants" className="text-green-600 hover:text-green-700 ml-1">
                  Bekijk restaurant-specifieke prijzen →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Wat onze klanten uit verschillende sectoren zeggen
              </h2>
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Restaurant Testimonial */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl text-green-500/20 mb-4">"</div>
                  <blockquote className="text-base text-gray-700 leading-relaxed mb-6 italic">
                    Sinds we de AI Assistent gebruiken, missen we geen enkel telefoontje meer. Dit is echt de beste investering geweest voor onze zaak.
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-gray-800">Zakariya Aachboune</div>
                      <div className="text-gray-600 text-sm">Restaurant Eigenaar</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* E-commerce Testimonial */}
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl text-green-500/20 mb-4">"</div>
                  <blockquote className="text-base text-gray-700 leading-relaxed mb-6 italic">
                    Onze klantenservice is 24/7 beschikbaar geworden zonder extra personeel. De AI begrijpt onze producten perfect.
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-gray-800">Sarah van der Berg</div>
                      <div className="text-gray-600 text-sm">E-commerce Manager</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Start uw Voice AI transformatie
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Neem contact op voor een vrijblijvend gesprek en ontdek hoe SocialFlows uw bedrijf kan transformeren
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Direct contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">WhatsApp Business</p>
                        <p className="text-gray-700">+31 6 38104765</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">Telefoon</p>
                        <p className="text-gray-700">+31 6 38104765</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">Zakelijke Verkoop</p>
                        <p className="text-gray-700">contact@socialflows.nl</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Persoonlijk Gesprek</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Persoonlijke analyse van uw bedrijfsprocessen en een op maat gemaakte implementatiestrategie. 
                    Volledig vrijblijvend en gebaseerd op bewezen methodieken.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="relative">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 backdrop-blur-xl">
                      <p className="text-green-700 text-sm font-semibold">
                        ✅ Bedankt! Uw bericht is verzonden. We nemen binnen 24 uur contact met u op.
                      </p>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 backdrop-blur-xl">
                      <p className="text-red-700 text-sm font-semibold">
                        ❌ Er is een fout opgetreden. Probeer het opnieuw of neem direct contact op.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                        placeholder="Uw voornaam"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-2">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                        placeholder="Uw achternaam"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Zakelijk Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                      placeholder="naam@bedrijf.nl"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-800 mb-2">
                      Bedrijf & Sector
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                      placeholder="Bedrijfsnaam & sector (bijv. Restaurant De Smaak)"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                      Uw uitdaging
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl resize-none shadow-sm"
                      placeholder="Beschrijf uw huidige uitdagingen en doelstellingen..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Verzenden...
                      </>
                    ) : (
                      <>
                        Plan Gesprek
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://github.com/XanderJks/0011/blob/main/public/Naamloos-Picsart-AiImageEnhancer.png?raw=true" 
                    alt="SocialFlows" 
                    className="h-10 w-10"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="text-gray-700 mb-4 max-w-md">
                  Enterprise AI-oplossingen voor de moderne horeca. 
                  Bewezen technologie voor operationele excellentie.
                </p>
              </div>
              
              <div>
                <h4 className="text-gray-800 font-semibold mb-4">Oplossingen</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Professionele AI</a></li>
                  <li><a href="/restaurants" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Voor Restaurants</a></li>
                  <li><a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Prijsmodellen</a></li>
                  <li><a href="#demo" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Live Demo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-800 font-semibold mb-4">Zakelijk</h4>
                <ul className="space-y-2">
                  <li><a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Contact Verkoop</a></li>
                  <li><a href="/system-status" className="text-gray-700 hover:text-green-600 transition-colors text-sm">System Status</a></li>
                  <li><a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-green-200/30 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">
                © 2025 SocialFlows. Voice AI voor alle bedrijven.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Privacy Policy</a>
                <a href="/terms" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Terms of Service</a>
                <a href="/system-status" className="text-gray-600 hover:text-green-600 transition-colors text-sm">System Status</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        onClose={closeCheckout}
        checkoutUrl={checkoutModal.url}
        planName={checkoutModal.planName}
      />
    </>
  );
}