import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

export function TermsOfService() {
  return (
    <>
      <SEOHead 
        title="Algemene Voorwaarden - SocialFlows"
        description="Lees de algemene voorwaarden van SocialFlows. Transparante voorwaarden voor het gebruik van onze Voice AI diensten."
        keywords="algemene voorwaarden, terms of service, voorwaarden, SocialFlows, AI diensten"
        url="https://socialflows.nl/terms"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 shadow-lg mb-6">
              <FileText className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-800">Algemene Voorwaarden</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Social Flows International FZ-LLC
            </p>
            
            <p className="text-gray-500">
              <strong>Laatst bijgewerkt op:</strong> 2 januari 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-green-200/30 shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">1</span>
                  Acceptatie van Voorwaarden
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Door gebruik te maken van de diensten van SocialFlows, gaat u akkoord met deze algemene voorwaarden. 
                  Als u niet akkoord gaat met deze voorwaarden, mag u onze diensten niet gebruiken.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">2</span>
                  Dienstverlening
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SocialFlows biedt Voice AI assistenten voor restaurants, inclusief:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Automatische telefonische reserveringen</li>
                  <li>• AI-gestuurde bestellingen</li>
                  <li>• 24/7 klantenservice</li>
                  <li>• Meertalige ondersteuning</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">3</span>
                  Gebruikersverplichtingen
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">U verplicht zich om:</p>
                  <ul className="text-gray-700 space-y-2 ml-6">
                    <li>• Correcte en actuele informatie te verstrekken</li>
                    <li>• De diensten alleen voor legitieme zakelijke doeleinden te gebruiken</li>
                    <li>• Geen misbruik te maken van onze systemen</li>
                    <li>• Tijdig te betalen volgens het gekozen abonnement</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">4</span>
                  Prijzen en Betalingen
                </h2>
                <div className="bg-blue-50/50 rounded-xl p-6 mb-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Alle prijzen zijn exclusief BTW (indien van toepassing)</li>
                    <li>• Betalingen worden maandelijks vooraf gefactureerd</li>
                    <li>• Bij niet-betaling kunnen diensten worden opgeschort</li>
                    <li>• Prijswijzigingen worden 30 dagen van tevoren aangekondigd</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">5</span>
                  Service Level Agreement
                </h2>
                <div className="bg-green-50/50 rounded-xl p-6">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      99.9% uptime garantie
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      24/7 technische ondersteuning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maximaal 4 uur responstijd voor kritieke issues
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">6</span>
                  Opzegging
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beide partijen kunnen het contract opzeggen:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Met een opzegtermijn van 30 dagen</li>
                  <li>• Opzegging dient schriftelijk te gebeuren</li>
                  <li>• Bij opzegging vervallen alle openstaande verplichtingen niet</li>
                  <li>• Reeds betaalde bedragen worden niet terugbetaald</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">7</span>
                  Aansprakelijkheid
                </h2>
                <div className="bg-yellow-50/50 rounded-xl p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        <strong>Beperkte aansprakelijkheid:</strong>
                      </p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Onze aansprakelijkheid is beperkt tot het maandelijkse abonnementsbedrag</li>
                        <li>• Wij zijn niet aansprakelijk voor indirecte schade</li>
                        <li>• Gebruiker is verantwoordelijk voor backup van eigen gegevens</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">8</span>
                  Intellectueel Eigendom
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Alle intellectuele eigendomsrechten op onze software, AI-modellen en diensten blijven eigendom van SocialFlows. 
                  Gebruikers krijgen alleen een gebruiksrecht voor de duur van het contract.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">9</span>
                  Toepasselijk Recht
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Op deze voorwaarden is Nederlands recht van toepassing. 
                  Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">10</span>
                  Contact
                </h2>
                <div className="bg-gray-50/50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    Voor vragen over deze voorwaarden kunt u contact opnemen:
                  </p>
                  <div className="text-gray-600">
                    <p><strong>Social Flows International FZ-LLC</strong></p>
                    <p>E-mail: contact@socialflows.nl</p>
                    <p>Telefoon: +31 638 104 765</p>
                    <p>Adres: VUET0899 Compass Building, Ras al Khaimah, UAE</p>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-center text-gray-600 font-medium">
                  Deze algemene voorwaarden zijn opgesteld conform Nederlands recht en zijn van kracht vanaf 2 januari 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}