import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Headphones, BarChart3, CheckCircle, Star, ArrowRight, Play, Zap, Shield, Clock, Users } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-slate-800/80 backdrop-blur-xl border border-slate-600/30 text-slate-200 mb-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Shield className="w-4 h-4 mr-2 text-blue-400" />
              Enterprise AI Oplossingen
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Professionele AI-assistenten voor uw restaurant
            </h1>
            
            {/* Subheadline */}
            <p className={`text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Verhoog uw operationele efficiëntie met geavanceerde spraaktechnologie. Automatiseer reserveringen, bestellingen en klantenservice met bewezen AI-oplossingen.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={() => scrollToSection('demo')}
                className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center text-sm shadow-lg"
              >
                <Play className="w-4 h-4 mr-2" />
                Live Demo Bekijken
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-transparent border-2 border-slate-600 text-slate-200 font-semibold rounded-lg hover:bg-slate-800/50 transition-all duration-300 flex items-center text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Vrijblijvende Consultatie
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400 transition-all duration-800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                24/7 beschikbaar
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                Enterprise beveiliging
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                Snelle implementatie
              </div>
            </div>
            
            {/* Hero Feature Blocks */}
            <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-800 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* 24/7 Beschikbaarheid */}
              <div className="group relative p-8 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/60 transition-all duration-300">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">24/7 Beschikbaarheid</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Continue service zonder onderbrekingen, zelfs buiten openingstijden
                  </p>
                </div>
              </div>

              {/* 99% Uptime */}
              <div className="group relative p-8 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/60 transition-all duration-300">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Enterprise Betrouwbaarheid</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    99.9% uptime garantie met enterprise-grade infrastructuur
                  </p>
                </div>
              </div>

              {/* Snelle Setup */}
              <div className="group relative p-8 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/60 transition-all duration-300">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Snelle Implementatie</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Operationeel binnen 1-2 weken met volledige ondersteuning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Over SocialFlows
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Wij zijn gespecialiseerd in geavanceerde AI-technologie voor de horeca-industrie
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Company Story */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Wie zijn wij?</h3>
                <p className="text-slate-200 leading-relaxed">
                  SocialFlows is een innovatief technologiebedrijf dat zich richt op het revolutioneren van klanteninteractie in de horeca-industrie. Met jarenlange ervaring in AI-ontwikkeling en een diep begrip van restaurantprocessen, hebben wij een oplossing gecreëerd die echt werkt.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  Ons team bestaat uit AI-specialisten, software-engineers en horeca-experts die samen werken aan de toekomst van restaurantautomatisering. Wij geloven dat technologie de menselijke ervaring moet verbeteren, niet vervangen.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="text-2xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-sm text-slate-300">Tevreden klanten</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-sm text-slate-300">Uptime garantie</div>
                  </div>
                </div>
              </div>
              
              {/* Mission & Vision */}
              <div className="space-y-8">
                <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="w-4 h-4 text-blue-400" />
                    </div>
                    Onze Missie
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    Restaurants helpen hun operationele efficiëntie te verhogen door middel van intelligente automatisering, zodat zij zich kunnen focussen op wat zij het beste doen: geweldige ervaringen creëren voor hun gasten.
                  </p>
                </div>
                
                <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="w-4 h-4 text-indigo-400" />
                    </div>
                    Onze Visie
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    Een toekomst waarin elke restaurantinteractie naadloos, efficiënt en persoonlijk is, ondersteund door AI-technologie die de menselijke touch versterkt in plaats van vervangt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is AI Assistant Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Wat is een AI-assistent?
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ontdek hoe onze geavanceerde spraaktechnologie uw restaurant kan transformeren
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Explanation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Intelligente telefonische assistent</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Natuurlijke gesprekken</h4>
                      <p className="text-slate-300">Onze AI verstaat en spreekt Nederlands op native niveau, met natuurlijke intonatie en begrip van context.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Leert van elke interactie</h4>
                      <p className="text-slate-300">De AI wordt slimmer naarmate deze meer gesprekken voert en past zich aan uw specifieke bedrijfsbehoeften aan.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <Shield className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Altijd beschikbaar</h4>
                      <p className="text-slate-300">24/7 operationeel zonder pauzes, ziekteverzuim of vakantiedagen. Uw klanten krijgen altijd professionele service.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual representation */}
              <div className="relative">
                <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">Zo werkt het in de praktijk</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-700/30">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <p className="text-white font-medium">Klant belt uw restaurant</p>
                        <p className="text-slate-300 text-sm">AI neemt direct op met persoonlijke begroeting</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-700/30">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <p className="text-white font-medium">Natuurlijk gesprek</p>
                        <p className="text-slate-300 text-sm">AI begrijpt wensen en stelt relevante vragen</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-700/30">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <p className="text-white font-medium">Actie ondernemen</p>
                        <p className="text-slate-300 text-sm">Reservering maken of bestelling doorsturen</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-700/30">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <p className="text-white font-medium">Bevestiging & follow-up</p>
                        <p className="text-slate-300 text-sm">Automatische bevestiging en herinneringen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ons implementatieproces
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Van eerste gesprek tot volledige operationele AI-assistent in slechts 1-2 weken
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Week 1 - Day 1-3 */}
              <div className="relative">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl h-full">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Week 1: Analyse & Setup</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Intake gesprek en behoefteanalyse</li>
                    <li>• Menu en prijzen configuratie</li>
                    <li>• Bedrijfsspecifieke training data</li>
                    <li>• Telefoonnummer doorschakeling</li>
                  </ul>
                  <div className="mt-4 text-xs text-slate-400">Dag 1-3</div>
                </div>
              </div>
              
              {/* Week 1 - Day 4-5 */}
              <div className="relative">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl h-full">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">AI Training</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Stem en persoonlijkheid instellen</li>
                    <li>• Scenario's en gesprekstraining</li>
                    <li>• Integratie met bestaande systemen</li>
                    <li>• Eerste testgesprekken</li>
                  </ul>
                  <div className="mt-4 text-xs text-slate-400">Dag 4-5</div>
                </div>
              </div>
              
              {/* Week 2 - Day 1-3 */}
              <div className="relative">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl h-full">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Week 2: Testing</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Uitgebreide testfase met uw team</li>
                    <li>• Fine-tuning van responses</li>
                    <li>• Backup scenario's configureren</li>
                    <li>• Staff training en instructies</li>
                  </ul>
                  <div className="mt-4 text-xs text-slate-400">Dag 1-3</div>
                </div>
              </div>
              
              {/* Week 2 - Day 4-5 */}
              <div className="relative">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl h-full">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Go Live!</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Officiële lancering</li>
                    <li>• 24/7 monitoring eerste week</li>
                    <li>• Direct support beschikbaar</li>
                    <li>• Performance rapportage</li>
                  </ul>
                  <div className="mt-4 text-xs text-slate-400">Dag 4-5</div>
                </div>
              </div>
            </div>
            
            {/* Process Benefits */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-white font-semibold">Geen technische kennis vereist</span>
                <span className="mx-3 text-slate-400">•</span>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-white font-semibold">Volledige begeleiding</span>
                <span className="mx-3 text-slate-400">•</span>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-white font-semibold">Geen downtime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Waarom kiezen voor SocialFlows?
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ontdek de concrete voordelen die onze AI-assistenten bieden voor uw restaurant
              </p>
            </div>
            
            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">35% meer omzet</h3>
                <p className="text-slate-300 leading-relaxed">
                  Gemiddelde toename in telefonische bestellingen door 24/7 beschikbaarheid en professionele upselling.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">15 uur per week bespaard</h3>
                <p className="text-slate-300 leading-relaxed">
                  Minder tijd besteed aan telefonische reserveringen en bestellingen, meer focus op gasten in het restaurant.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">98% klanttevredenheid</h3>
                <p className="text-slate-300 leading-relaxed">
                  Consistente, vriendelijke service zonder wachttijden of miscommunicatie.
                </p>
              </div>
            </div>
            
            {/* Detailed Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1: Automatische Reserveringen */}
              <div className="group relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Slimme Reserveringen</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed text-base">
                    Automatische verwerking van reserveringen met real-time beschikbaarheidscontrole. Geen gemiste oproepen meer, zelfs tijdens drukke momenten.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      24/7 reserveringen mogelijk
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Automatische bevestiging per SMS/email
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Integratie met reserveringssysteem
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Telefoonbestellingen */}
              <div className="group relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Professionele Bestellingen</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed text-base">
                    Neem telefonische bestellingen op met intelligente suggesties en upselling. Verhoog uw gemiddelde bestelwaarde automatisch.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Complete menu met prijzen
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Slimme suggesties en upselling
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Directe doorstuur naar keuken
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Klantenservice */}
              <div className="group relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Uitstekende Klantenservice</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed text-base">
                    Beantwoord vragen over openingstijden, menu's, allergenen en meer. Altijd vriendelijk, geduldig en accuraat.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Volledige bedrijfsinformatie
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Doorverbinden bij complexe vragen
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Meertalige ondersteuning
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4: Geavanceerde Analytics */}
              <div className="group relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Waardevolle Inzichten</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed text-base">
                    Krijg inzicht in gesprekstrends, populaire gerechten en klantengedrag. Optimaliseer uw bedrijfsvoering met data.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Gedetailleerde gesprekrapporten
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Omzet en performance tracking
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Maandelijkse business reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                De concrete voordelen voor uw restaurant
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Meer dan alleen technologie - echte business impact voor uw restaurant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Financial Benefits */}
              <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Financiële voordelen</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    35% meer telefonische omzet
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    Geen gemiste bestellingen meer
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    Hogere gemiddelde bestelwaarde
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    ROI binnen 2-3 maanden
                  </li>
                </ul>
              </div>
              
              {/* Operational Benefits */}
              <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Operationele voordelen</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    15+ uur per week tijdsbesparing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    Minder stress voor personeel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    Consistente service kwaliteit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                    Geen fouten in bestellingen
                  </li>
                </ul>
              </div>
              
              {/* Customer Benefits */}
              <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Klantvoordelen</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-indigo-400 flex-shrink-0" />
                    Altijd bereikbaar, ook na sluitingstijd
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-indigo-400 flex-shrink-0" />
                    Geen wachttijden aan de telefoon
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-indigo-400 flex-shrink-0" />
                    Vriendelijke, professionele service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 text-indigo-400 flex-shrink-0" />
                    Snelle en accurate orderverwerking
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Success Story */}
            <div className="mt-16">
              <div className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Succesverhaal</h3>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-center">
                  <p className="text-lg text-slate-200 italic mb-6 leading-relaxed">
                    "Sinds we SocialFlows gebruiken, missen we geen enkele bestelling meer. Onze omzet is met 40% gestegen en ons personeel kan zich volledig focussen op de gasten in het restaurant. De AI klinkt zo natuurlijk dat klanten vaak niet eens doorhebben dat het geen mens is!"
                  </p>
                  <footer className="text-slate-300">
                    <strong>Marco van der Berg</strong><br />
                    <span className="text-sm">Eigenaar, Restaurant De Gouden Lepel, Amsterdam</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Voor en na SocialFlows
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Zie het verschil dat onze AI-assistent maakt voor uw dagelijkse operaties
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Before */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">❌ Zonder AI-assistent</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30">
                    <p className="text-slate-200 font-medium mb-2">Gemiste oproepen</p>
                    <p className="text-slate-300 text-sm">Tijdens drukke momenten gaat de telefoon over zonder dat iemand opneemt</p>
                  </div>
                  <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30">
                    <p className="text-slate-200 font-medium mb-2">Stress voor personeel</p>
                    <p className="text-slate-300 text-sm">Medewerkers moeten constant tussen keuken en telefoon schakelen</p>
                  </div>
                  <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30">
                    <p className="text-slate-200 font-medium mb-2">Inconsistente service</p>
                    <p className="text-slate-300 text-sm">Verschillende medewerkers geven verschillende informatie</p>
                  </div>
                  <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30">
                    <p className="text-slate-200 font-medium mb-2">Beperkte openingstijden</p>
                    <p className="text-slate-300 text-sm">Klanten kunnen alleen bellen tijdens openingstijden</p>
                  </div>
                </div>
              </div>
              
              {/* After */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">✅ Met SocialFlows</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/30">
                    <p className="text-slate-200 font-medium mb-2">Elke oproep beantwoord</p>
                    <p className="text-slate-300 text-sm">AI neemt binnen 2 seconden op, 24/7 beschikbaar</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/30">
                    <p className="text-slate-200 font-medium mb-2">Ontspannen personeel</p>
                    <p className="text-slate-300 text-sm">Team kan zich volledig focussen op gasten in het restaurant</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/30">
                    <p className="text-slate-200 font-medium mb-2">Professionele service</p>
                    <p className="text-slate-300 text-sm">Altijd dezelfde vriendelijke, accurate informatie</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/30">
                    <p className="text-slate-200 font-medium mb-2">Altijd bereikbaar</p>
                    <p className="text-slate-300 text-sm">Klanten kunnen 24/7 reserveren en bestellen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Enterprise Prijsmodellen
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Flexibele oplossingen die meegroeien met uw bedrijf. Alle plannen inclusief volledige ondersteuning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Starter Plan */}
              <div className="relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300 flex flex-col h-full">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">€289</span>
                    <span className="text-slate-400">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Tot 500 belminuten
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Maandelijkse verbruik overzicht
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Email/WA ticket support
                    </li>
                    <li className="flex items-center text-sm text-slate-300 opacity-0">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Spacer item
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-slate-700/50 hover:bg-slate-600/70 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-xl border border-slate-600/30 hover:border-slate-500/50">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative p-8 rounded-xl bg-slate-800/30 border border-orange-500/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300 flex flex-col h-full group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-1 rounded-lg text-xs font-semibold">
                    Aanbevolen
                  </span>
                </div>
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3">Pro</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">€349</span>
                    <span className="text-slate-400">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Tot 750 belminuten
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Maandelijkse rapportage (Verbruik, aantal calls, succes percentage, totale bestelwaarde)
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Email/WA ticket support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300 flex flex-col h-full">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3">Elite</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">€449</span>
                    <span className="text-slate-400">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Tot 1000 belminuten
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Maandelijkse rapportage (Compleet en gereed voor boekhouding)
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Priority support
                    </li>
                    <li className="flex items-center text-sm text-slate-300 opacity-0">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Spacer item
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-slate-700/50 hover:bg-slate-600/70 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-xl border border-slate-600/30 hover:border-slate-500/50">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Custom Plan */}
              <div className="relative p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300 flex flex-col h-full">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-white">Op maat</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Onbeperkte gesprekken
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Custom integraties
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      Dedicated support
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                      SLA garanties
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Contact Ons
                  </button>
                </div>
              </div>
            </div>
            
            {/* ADD ONS Section */}
            <div className="mt-16 text-center">
              <h4 className="text-xl font-bold text-white mb-6">Uitbreidingen</h4>
              <div className="space-y-4 text-slate-300 max-w-4xl mx-auto">
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                  <p className="text-sm">Complete financiële rapportage en bestelanalyse (ideaal voor boekhouding) <span className="text-blue-400 font-semibold">€29,99/maand</span></p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                  <p className="text-sm">Geïntegreerde AI Chatbot voor website (inclusief bonnenprinter synchronisatie) <span className="text-blue-400 font-semibold">€44,99/maand</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ervaar de technologie
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Ontdek hoe onze enterprise AI-oplossing uw operationele efficiëntie kan verhogen
            </p>
            
            <div className="relative">
              <div className="aspect-video bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-xl flex items-center justify-center">
                <button className="group flex items-center justify-center w-20 h-20 bg-blue-600/20 backdrop-blur-xl rounded-full border border-blue-500/30 hover:bg-blue-600/30 transition-all duration-300">
                  <Play className="w-8 h-8 text-blue-400 ml-1" />
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Live Demo
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-transparent border-2 border-slate-600 text-slate-200 font-semibold rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                >
                  Persoonlijke Demo
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
                Start uw digitale transformatie
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Neem contact op voor een vrijblijvende consultatie en ontdek hoe SocialFlows uw bedrijfsprocessen kan optimaliseren
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Direct contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Business Line</p>
                        <p className="text-slate-300">+31 20 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Enterprise Sales</p>
                        <p className="text-slate-300">enterprise@socialflows.nl</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Business Hours</p>
                        <p className="text-slate-300">Ma-Vr 9:00-18:00 CET</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-xl">
                  <h4 className="text-lg font-bold text-white mb-3">Enterprise Consultatie</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
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
                    <div className="p-4 rounded-lg bg-green-600/20 border border-green-500/30 backdrop-blur-xl">
                      <p className="text-green-400 text-sm font-semibold">
                        ✅ Bedankt! Uw bericht is verzonden. We nemen binnen 24 uur contact met u op.
                      </p>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-600/20 border border-red-500/30 backdrop-blur-xl">
                      <p className="text-red-400 text-sm font-semibold">
                        ❌ Er is een fout opgetreden. Probeer het opnieuw of neem direct contact op.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-800/50 transition-all duration-300 backdrop-blur-xl"
                        placeholder="Uw voornaam"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-800/50 transition-all duration-300 backdrop-blur-xl"
                        placeholder="Uw achternaam"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Zakelijk Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-800/50 transition-all duration-300 backdrop-blur-xl"
                      placeholder="naam@bedrijf.nl"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-semibold text-white mb-2">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-800/50 transition-all duration-300 backdrop-blur-xl"
                      placeholder="Naam van uw bedrijf"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Uw uitdaging
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-slate-800/50 transition-all duration-300 backdrop-blur-xl resize-none"
                      placeholder="Beschrijf uw huidige uitdagingen en doelstellingen..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Verzenden...
                      </>
                    ) : (
                      <>
                        Plan Consultatie
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
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">SocialFlows</h3>
                <p className="text-slate-300 mb-4 max-w-md">
                  Enterprise AI-oplossingen voor de moderne horeca. 
                  Bewezen technologie voor operationele excellentie.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-600/50 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-600/50 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-600/50 transition-colors cursor-pointer">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Oplossingen</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm">Enterprise AI</a></li>
                  <li><a href="#pricing" className="text-slate-300 hover:text-white transition-colors text-sm">Prijsmodellen</a></li>
                  <li><a href="#demo" className="text-slate-300 hover:text-white transition-colors text-sm">Live Demo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Enterprise</h4>
                <ul className="space-y-2">
                  <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact Sales</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Documentatie</a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">System Status</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 SocialFlows. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Security</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}