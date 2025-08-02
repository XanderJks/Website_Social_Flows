import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Shield, Mail, Phone, MapPin, Building } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacyverklaring - SocialFlows"
        description="Lees hoe SocialFlows omgaat met uw persoonsgegevens. Transparante privacyverklaring conform AVG/GDPR wetgeving."
        keywords="privacy, privacyverklaring, AVG, GDPR, persoonsgegevens, SocialFlows"
        url="https://socialflows.nl/privacy"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 shadow-lg mb-6">
              <Shield className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-800">Privacy & Gegevensbescherming</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacyverklaring
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Social Flows International FZ-LLC
            </p>
            
            <p className="text-gray-500">
              <strong>Laatst bijgewerkt op:</strong> 2 augustus 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-green-200/30 shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 space-y-12">
              
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">1</span>
                  Wij gaan zorgvuldig om met jouw gegevens
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We doen er alles aan om jouw gegevens privé te houden. Welke gegevens we van je vragen en waarvoor we ze gebruiken, lees je hieronder. Ook zie je wat jouw rechten zijn, wie toegang heeft tot je gegevens en hoe lang we ze bewaren.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">2</span>
                  Wie is verantwoordelijk voor je gegevens?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Social Flows International FZ-LLC is verantwoordelijk voor de verwerking van jouw persoonsgegevens.
                </p>
                
                <div className="bg-green-50/50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Je kunt contact opnemen via:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Telefoon</p>
                        <p className="text-gray-600">+31 638 104 765</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">E-mail</p>
                        <p className="text-gray-600">contact@socialflows.nl</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Adres</p>
                        <p className="text-gray-600">VUET0899 Compass Building, Ras al Khaimah, UAE</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Registratienummer</p>
                        <p className="text-gray-600">47020429</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50/50 rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Let op:</strong> Omdat wij geen fysieke vestiging in de EU hebben, hebben we een officiële EU-vertegenwoordiger aangesteld. Contactgegevens daarvan vind je hieronder:
                  </p>
                  <div className="text-gray-600">
                    <p><strong>EU-vertegenwoordiger:</strong></p>
                    <p>[Naam Vertegenwoordiger]</p>
                    <p>[Adres EU-vertegenwoordiger]</p>
                    <p>[Telefoon]</p>
                    <p>[E-mail]</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">3</span>
                  Welke persoonsgegevens verwerken wij?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Wij verwerken de volgende categorieën persoonsgegevens:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Contactgegevens:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• E-mailadressen</li>
                      <li>• Voor- en achternamen</li>
                      <li>• Bedrijfsnamen (indien van toepassing)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50/50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Communicatiegegevens:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• E-mailberichten tussen ons en klanten</li>
                      <li>• Datum en tijd van communicatie</li>
                      <li>• Communicatiegeschiedenis</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">4</span>
                  Waarom verwerken wij jouw gegevens?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij verwerken jouw persoonsgegevens voor de volgende doeleinden:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Communicatie met (potentiële) klanten</strong> — om je vragen te beantwoorden en contact te onderhouden</li>
                  <li>• <strong>Dienstverlening</strong> — om onze services aan jou te kunnen leveren</li>
                  <li>• <strong>Klantenservice</strong> — om je te kunnen helpen bij vragen of problemen</li>
                  <li>• <strong>Administratie</strong> — om onze bedrijfsvoering te ondersteunen</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">5</span>
                  Waar worden jouw gegevens opgeslagen en hoe beveiligen wij ze?
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Opslaglocatie:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Database: Supabase EU Central (Frankfurt, Duitsland)</li>
                      <li>• Operationeel kantoor: Nederland (thuiswerken)</li>
                      <li>• Alle persoonsgegevens blijven binnen de Europese Unie opgeslagen en verwerkt.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Beveiligingsmaatregelen:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Encryptie van gegevens tijdens opslag en overdracht</li>
                      <li>• Toegangscontrole en autorisatie</li>
                      <li>• Regelmatige security-updates</li>
                      <li>• Logging en monitoring van toegang</li>
                      <li>• Gebruik van veilige verbindingen (SSL)</li>
                      <li>• Beperkte toegang tot persoonsgegevens binnen ons team</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">6</span>
                  Met welke partijen delen wij jouw gegevens?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij sluiten met al onze leveranciers verwerkersovereenkomsten om de vertrouwelijkheid en beveiliging van jouw gegevens te waarborgen. Zij handelen uitsluitend in onze opdracht en zijn gebonden aan een geheimhoudingsplicht.
                </p>
                
                <div className="bg-gray-50/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Belangrijke leveranciers:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Supabase (databasehosting in EU)</li>
                    <li>• E-mailproviders voor communicatie</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Sommige softwareleveranciers verwerken gegevens buiten de Europese Economische Ruimte (bijv. de VS). Indien dit het geval is, zorgen wij voor passende waarborgen, zoals de standaardcontractbepalingen van de Europese Commissie.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">7</span>
                  Hoe lang bewaren wij jouw gegevens?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wij bewaren jouw persoonsgegevens niet langer dan nodig is voor het doel waarvoor we ze hebben ontvangen.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Voor mailings:</strong> Uitschrijven betekent dat je gegevens uiterlijk aan het einde van die maand uit het mailsysteem worden verwijderd.</li>
                  <li>• <strong>Gegevens in onze administratie</strong> bewaren wij ten minste 7 jaar, zoals wettelijk verplicht. Daarna verwijderen wij ze binnen 1 jaar, tenzij een andere bewaarplicht geldt.</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">8</span>
                  Wat zijn jouw rechten?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jij blijft altijd de baas over jouw gegevens. Je hebt het recht om:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Je gegevens in te zien</li>
                  <li>• Je gegevens te corrigeren of te laten verwijderen</li>
                  <li>• De verwerking van je gegevens (tijdelijk) te beperken</li>
                  <li>• Je e-mailvoorkeuren aan te passen of toestemming in te trekken</li>
                  <li>• Bezwaar te maken tegen de verwerking van je gegevens</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Je kunt je rechten uitoefenen door contact op te nemen via <a href="mailto:contact@socialflows.nl" className="text-green-600 hover:text-green-700 font-medium">contact@socialflows.nl</a> of <a href="tel:+31638104765" className="text-green-600 hover:text-green-700 font-medium">+31 638 104 765</a>.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">9</span>
                  Klacht indienen?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Heb je een klacht over hoe wij omgaan met jouw persoonsgegevens? Dan lossen we dat graag samen op. Kom je er met ons niet uit, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens:
                </p>
                <p className="mt-2">
                  <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                    www.autoriteitpersoonsgegevens.nl
                  </a>
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-600 font-bold text-sm">10</span>
                  Wijzigingen in deze privacyverklaring
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Wij kunnen deze privacyverklaring af en toe aanpassen. De meest recente versie staat altijd op onze website. Bij belangrijke wijzigingen informeren wij je via e-mail.
                </p>
              </section>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-center text-gray-600 font-medium">
                  Deze privacyverklaring is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}