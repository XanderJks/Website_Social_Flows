import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function TermsOfService() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - SocialFlows"
        description="Algemene voorwaarden van SocialFlows Voice AI diensten voor restaurants."
        url="https://socialflows.nl/terms-of-service"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Algemene Voorwaarden</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                Laatst bijgewerkt: 20 januari 2025
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. Definities</h2>
              <p className="text-gray-700 mb-6">
                In deze algemene voorwaarden wordt verstaan onder:
                <br />
                - "SocialFlows": de dienstverlener van Voice AI oplossingen
                <br />
                - "Klant": de afnemer van onze diensten
                <br />
                - "Diensten": Voice AI assistenten en gerelateerde services
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. Toepasselijkheid</h2>
              <p className="text-gray-700 mb-6">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen SocialFlows en de klant, 
                tenzij partijen uitdrukkelijk en schriftelijk anders zijn overeengekomen.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. Dienstverlening</h2>
              <p className="text-gray-700 mb-6">
                SocialFlows levert Voice AI diensten voor restaurants, inclusief maar niet beperkt tot automatische reserveringen, 
                bestellingen en klantenservice. Wij streven naar een uptime van 99.9% maar kunnen geen absolute garantie geven.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. Prijzen en Betaling</h2>
              <p className="text-gray-700 mb-6">
                Alle prijzen zijn exclusief BTW tenzij anders vermeld. Betaling geschiedt maandelijks vooraf via automatische incasso of creditcard. 
                Bij niet-betaling behouden wij ons het recht voor om de dienstverlening op te schorten.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. Aansprakelijkheid</h2>
              <p className="text-gray-700 mb-6">
                Onze aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door onze verzekeraar wordt uitgekeerd, 
                vermeerderd met het eigen risico. In geen geval zal onze aansprakelijkheid meer bedragen dan het bedrag van de 
                in het betreffende jaar door de klant betaalde vergoeding.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. Opzegging</h2>
              <p className="text-gray-700 mb-6">
                De overeenkomst kan door beide partijen worden opgezegd met inachtneming van een opzegtermijn van één maand. 
                Opzegging dient schriftelijk te geschieden.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. Toepasselijk recht</h2>
              <p className="text-gray-700 mb-6">
                Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">8. Contact</h2>
              <p className="text-gray-700 mb-6">
                Voor vragen over deze voorwaarden kunt u contact opnemen via:
                <br />
                Email: contact@socialflows.nl
                <br />
                Telefoon: +31 6 38104765
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}