import React from 'react';
import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - SocialFlows"
        description="Privacy beleid van SocialFlows. Lees hoe wij uw persoonlijke gegevens beschermen en verwerken."
        url="https://socialflows.nl/privacy-policy"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-green-200/30 shadow-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                Laatst bijgewerkt: 20 januari 2025
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. Inleiding</h2>
              <p className="text-gray-700 mb-6">
                SocialFlows ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. 
                Dit privacybeleid legt uit hoe wij uw informatie verzamelen, gebruiken en beschermen wanneer u onze Voice AI diensten gebruikt.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. Gegevens die wij verzamelen</h2>
              <p className="text-gray-700 mb-4">Wij verzamelen de volgende soorten gegevens:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Contactgegevens (naam, email, telefoonnummer)</li>
                <li>Bedrijfsinformatie (bedrijfsnaam, adres)</li>
                <li>Gesprekgegevens voor kwaliteitsverbetering</li>
                <li>Technische gegevens (IP-adres, browser informatie)</li>
              </ul>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. Hoe wij uw gegevens gebruiken</h2>
              <p className="text-gray-700 mb-4">Wij gebruiken uw gegevens voor:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Het leveren van onze Voice AI diensten</li>
                <li>Klantenservice en ondersteuning</li>
                <li>Verbetering van onze diensten</li>
                <li>Communicatie over updates en nieuwe functies</li>
              </ul>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. Gegevensbescherming</h2>
              <p className="text-gray-700 mb-6">
                Wij implementeren passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen tegen 
                ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging. Alle gegevens worden versleuteld opgeslagen en verzonden.
              </p>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. Uw rechten</h2>
              <p className="text-gray-700 mb-4">Onder de AVG heeft u het recht om:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Toegang te vragen tot uw persoonlijke gegevens</li>
                <li>Correctie van onjuiste gegevens te vragen</li>
                <li>Verwijdering van uw gegevens te vragen</li>
                <li>Bezwaar te maken tegen verwerking</li>
                <li>Gegevensoverdraagbaarheid te vragen</li>
              </ul>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. Contact</h2>
              <p className="text-gray-700 mb-6">
                Voor vragen over dit privacybeleid kunt u contact opnemen via:
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