import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Headphones, BarChart3, CheckCircle, Star, ArrowRight, Play, Zap, Shield, Clock, Users } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Shield className="w-3 h-3 mr-2" />
              Geavanceerde AI technologie
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Alles wat uw restaurant nodig heeft
            </h1>
            
            {/* Subheadline */}
            <p className={`text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              SocialFlows biedt een complete AI-assistent die uw restaurant helpt met telefonische bestellingen, reserveringen en klantenservice.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={() => scrollToSection('demo')}
                className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center text-sm"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Bekijk Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center text-sm backdrop-blur-xl"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Gratis Consultatie
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                24/7 beschikbaar
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Meertalig
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Geen setup kosten
              </div>
            </div>
            
            {/* Hero Feature Blocks */}
            <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* 24/7 Beschikbaarheid */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">24/7 Beschikbaar</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Uw AI-assistent neemt altijd op, ook buiten openingstijden
                  </p>
                </div>
              </div>

              {/* 99% Uptime */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 backdrop-blur-xl hover:border-green-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">99.9% Uptime</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Betrouwbare service met enterprise-grade infrastructuur
                  </p>
                </div>
              </div>

              {/* Snelle Setup */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Binnen 24u Live</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Snelle implementatie zonder complexe installaties
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Krachtige AI-functies voor uw restaurant
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Onze geavanceerde AI-assistent integreert naadloos met uw bestaande systemen
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1: Automatische Reserveringen */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Automatische Reserveringen</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Onze AI neemt telefonische reserveringen aan, checkt beschikbaarheid en bevestigt direct in uw systeem.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      24/7 beschikbaar
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Meertalige ondersteuning
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Agenda integratie
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Telefoonbestellingen */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Telefoonbestellingen</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Klanten kunnen hun favoriete gerechten bestellen via telefoon, compleet met personalisatie en upselling.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Menu integratie
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Upselling suggesties
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Betaling processing
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Klantenservice */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-teal-900/20 to-teal-800/10 border border-teal-500/20 backdrop-blur-xl hover:border-teal-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors duration-300">
                    <Headphones className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Klantenservice</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Beantwoord veelgestelde vragen, geef informatie over openingstijden en help klanten met hun behoeften.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      FAQ database
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Doorschakeling naar personeel
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Klantgeschiedenis
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4: Geavanceerde Analytics */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border border-indigo-500/20 backdrop-blur-xl hover:border-indigo-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors duration-300">
                    <BarChart3 className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Geavanceerde Analytics</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Krijg inzicht in gesprekken, populaire gerechten en klantgedrag om uw service te optimaliseren.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Gespreksanalyse
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Populariteit tracking
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Performance metrics
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Waarom kiezen voor SocialFlows?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ontdek de voordelen van onze geavanceerde AI-technologie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Snelle Implementatie</h3>
                <p className="text-gray-300 leading-relaxed">
                  Binnen 24 uur operationeel. Geen complexe installaties of lange wachttijden.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Betrouwbaar & Veilig</h3>
                <p className="text-gray-300 leading-relaxed">
                  Enterprise-grade beveiliging met 99.9% uptime garantie voor uw restaurant.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Persoonlijke Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Dedicated accountmanager en 24/7 technische ondersteuning voor uw succes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transparante Prijzen
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Kies het plan dat perfect past bij uw restaurant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-xl">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">€99</span>
                    <span className="text-gray-400">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Tot 500 gesprekken/maand
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Basis reserveringen
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Email ondersteuning
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors duration-300">
                    Start Gratis Trial
                  </button>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 backdrop-blur-xl transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Meest Populair
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">€199</span>
                    <span className="text-gray-400">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Tot 2000 gesprekken/maand
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Volledige functionaliteit
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Prioriteit ondersteuning
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Analytics dashboard
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 backdrop-blur-xl">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">Custom</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Onbeperkte gesprekken
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Custom integraties
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      Dedicated support
                    </li>
                    <li className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      SLA garanties
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-300">
                    Contact Ons
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Zie SocialFlows in actie
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ervaar zelf hoe onze AI-assistent uw restaurant kan transformeren
            </p>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-xl flex items-center justify-center">
                <button className="group flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Bekijk Demo
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                >
                  Plan een Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Klaar om te beginnen?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Neem contact op voor een gratis consultatie en ontdek hoe SocialFlows uw restaurant kan helpen
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Neem direct contact op</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Telefoon</p>
                        <p className="text-gray-300">+31 20 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">info@socialflows.nl</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Beschikbaarheid</p>
                        <p className="text-gray-300">Ma-Vr 9:00-18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 backdrop-blur-xl">
                  <h4 className="text-lg font-bold text-white mb-3">Gratis Consultatie</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Ontdek in een persoonlijk gesprek hoe SocialFlows uw restaurant kan helpen groeien. 
                    Geen verplichtingen, alleen waardevolle inzichten.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="relative">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                        placeholder="Uw voornaam"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                        placeholder="Uw achternaam"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-white mb-2">
                      Restaurant Naam
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl"
                      placeholder="Naam van uw restaurant"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl resize-none"
                      placeholder="Vertel ons over uw restaurant en hoe we kunnen helpen..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    Verstuur Bericht
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">SocialFlows</h3>
                <p className="text-gray-300 mb-4 max-w-md">
                  Revolutioneer uw restaurant met geavanceerde Voice AI technologie. 
                  Automatiseer reserveringen, bestellingen en klantenservice.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a></li>
                  <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">Prijzen</a></li>
                  <li><a href="#demo" className="text-gray-300 hover:text-white transition-colors text-sm">Demo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Documentatie</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Status</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 SocialFlows. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Voorwaarden</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}