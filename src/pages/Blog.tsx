import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'De Toekomst van AI in de Horeca: Waarom Voice AI de Game Changer is',
    excerpt: 'Ontdek hoe Voice AI de horecabranche revolutioneert en waarom restaurants die nu investeren in deze technologie een concurrentievoordeel behalen.',
    content: `
      <p>De horecabranche staat aan de vooravond van een technologische revolutie. Terwijl restaurants worstelen met personeelstekorten en stijgende kosten, biedt Voice AI een innovatieve oplossing die niet alleen efficiëntie verhoogt, maar ook de klantenervaring verbetert.</p>
      
      <h3>Waarom Voice AI nu zo belangrijk is</h3>
      <p>De COVID-19 pandemie heeft de digitale transformatie in de horeca versneld. Klanten verwachten nu naadloze, contactloze service, terwijl restaurants zoeken naar manieren om operationeel efficiënter te worden. Voice AI combineert beide behoeften perfect.</p>
      
      <h3>De voordelen van Voice AI voor restaurants</h3>
      <ul>
        <li><strong>24/7 beschikbaarheid:</strong> Uw restaurant is altijd bereikbaar, zelfs buiten openingstijden</li>
        <li><strong>Consistente service:</strong> Elke klant krijgt dezelfde professionele behandeling</li>
        <li><strong>Kostenreductie:</strong> Minder personeel nodig voor telefonische taken</li>
        <li><strong>Verhoogde omzet:</strong> Geen gemiste oproepen betekent meer bestellingen</li>
      </ul>
      
      <h3>Praktijkvoorbeeld: Restaurant De Gouden Lepel</h3>
      <p>Restaurant De Gouden Lepel implementeerde Voice AI en zag binnen een maand een toename van 40% in telefonische bestellingen. "We missen geen enkel telefoontje meer, en ons personeel kan zich focussen op wat ze het beste doen: geweldige service verlenen aan onze gasten," aldus eigenaar Marco van der Berg.</p>
      
      <h3>De toekomst is nu</h3>
      <p>Restaurants die nu investeren in Voice AI, positioneren zichzelf als innovatieve leiders in hun markt. De technologie wordt alleen maar beter en toegankelijker, maar de early adopters zullen het grootste voordeel behalen.</p>
    `,
    author: 'Sarah van der Berg',
    publishDate: '2025-01-15',
    readTime: '5 min',
    category: 'Technologie',
    tags: ['Voice AI', 'Horeca', 'Innovatie', 'Automatisering'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: '5 Manieren Waarop AI Uw Restaurant Winstgevender Maakt',
    excerpt: 'Leer hoe kunstmatige intelligentie niet alleen kosten bespaart, maar ook actief bijdraagt aan hogere omzetten en betere marges.',
    content: `
      <p>Kunstmatige intelligentie is niet langer science fiction - het is een praktische business tool die restaurants helpt hun winstgevendheid te verhogen. Hier zijn vijf concrete manieren waarop AI uw bottom line kan verbeteren.</p>
      
      <h3>1. Intelligente Upselling</h3>
      <p>AI kan klantvoorkeuren analyseren en gepersonaliseerde aanbevelingen doen. Dit verhoogt de gemiddelde bestelwaarde met 15-25% zonder dat het opdringerig aanvoelt.</p>
      
      <h3>2. Optimale Personeelsplanning</h3>
      <p>Door historische data te analyseren, kan AI voorspellen wanneer het druk wordt. Dit helpt bij het optimaal inplannen van personeel, waardoor loonkosten dalen en service verbetert.</p>
      
      <h3>3. Voorraadoptimalisatie</h3>
      <p>AI voorkomt voedselverspilling door nauwkeurig te voorspellen welke ingrediënten wanneer nodig zijn. Dit kan voedselkosten met 10-20% verlagen.</p>
      
      <h3>4. Dynamische Prijsstelling</h3>
      <p>Geavanceerde AI-systemen kunnen prijzen aanpassen op basis van vraag, weer, evenementen en andere factoren om de omzet te maximaliseren.</p>
      
      <h3>5. Klantretentie</h3>
      <p>AI kan patronen herkennen die wijzen op klanten die mogelijk weggaan, zodat u proactief actie kunt ondernemen om ze te behouden.</p>
      
      <h3>ROI van AI-investeringen</h3>
      <p>Restaurants die AI implementeren zien gemiddeld een ROI van 300% binnen het eerste jaar. De initiële investering wordt snel terugverdiend door verhoogde efficiëntie en omzet.</p>
    `,
    author: 'Tom Janssen',
    publishDate: '2025-01-10',
    readTime: '4 min',
    category: 'Business',
    tags: ['ROI', 'Winstgevendheid', 'AI', 'Strategie'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Implementatie van Voice AI: Een Stap-voor-Stap Gids',
    excerpt: 'Alles wat u moet weten over het succesvol implementeren van Voice AI in uw restaurant, van voorbereiding tot go-live.',
    content: `
      <p>Het implementeren van Voice AI in uw restaurant hoeft niet complex te zijn. Met de juiste aanpak en voorbereiding kunt u binnen enkele weken profiteren van deze krachtige technologie.</p>
      
      <h3>Stap 1: Voorbereiding (Week 1)</h3>
      <p>Begin met het verzamelen van alle benodigde informatie:</p>
      <ul>
        <li>Actueel menu met prijzen</li>
        <li>Openingstijden en bezorggebieden</li>
        <li>Veelgestelde vragen van klanten</li>
        <li>Bedrijfsinformatie en contactgegevens</li>
      </ul>
      
      <h3>Stap 2: Configuratie (Week 2)</h3>
      <p>Ons team configureert uw AI-assistent:</p>
      <ul>
        <li>Menu-integratie en prijsinstellingen</li>
        <li>Reserveringssysteem koppeling</li>
        <li>Kassasysteem integratie</li>
        <li>Aangepaste scripts voor uw restaurant</li>
      </ul>
      
      <h3>Stap 3: Testing (Week 3)</h3>
      <p>Uitgebreide tests om perfecte werking te garanderen:</p>
      <ul>
        <li>Interne tests met verschillende scenario's</li>
        <li>Feedback verwerking en optimalisaties</li>
        <li>Training van uw team</li>
        <li>Backup procedures instellen</li>
      </ul>
      
      <h3>Stap 4: Go-Live (Week 4)</h3>
      <p>De officiële lancering:</p>
      <ul>
        <li>Geleidelijke uitrol met monitoring</li>
        <li>Real-time ondersteuning</li>
        <li>Performance tracking</li>
        <li>Klantfeedback verzameling</li>
      </ul>
      
      <h3>Tips voor Succes</h3>
      <p>Communiceer de verandering naar uw klanten, train uw personeel goed, en monitor de eerste weken intensief. Met de juiste aanpak wordt Voice AI snel een onmisbaar onderdeel van uw restaurant.</p>
    `,
    author: 'Lisa de Vries',
    publishDate: '2025-01-05',
    readTime: '6 min',
    category: 'Implementatie',
    tags: ['Implementatie', 'Gids', 'Voice AI', 'Setup'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  }
];

export function Blog() {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    return (
      <>
        <SEOHead 
          title={`${selectedPost.title} - SocialFlows Blog`}
          description={selectedPost.excerpt}
          keywords={selectedPost.tags.join(', ')}
          url={`https://socialflows.nl/blog/${selectedPost.id}`}
          type="article"
          author={selectedPost.author}
          publishedTime={selectedPost.publishDate}
        />
        
        <main className="relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Terug naar blog
            </button>

            {/* Article Header */}
            <article className="bg-white/90 backdrop-blur-xl rounded-2xl border border-green-200/30 shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(selectedPost.publishDate)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedPost.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {selectedPost.author}
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedPost.title}
                </h1>

                <div 
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-500" />
                    {selectedPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Blog - SocialFlows"
        description="Lees de laatste inzichten over Voice AI, restaurant automatisering en innovaties in de horeca. Expert tips en praktische gidsen voor restauranteigenaren."
        keywords="blog, Voice AI, horeca, restaurant automatisering, AI tips, innovatie"
        url="https://socialflows.nl/blog"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SocialFlows Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek de laatste inzichten over Voice AI, restaurant automatisering en innovaties in de horeca
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    
                    <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors text-sm font-medium">
                      Lees meer
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-green-200/30 shadow-xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Blijf op de hoogte
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Ontvang de nieuwste inzichten over Voice AI en restaurant automatisering direct in uw inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Uw email adres"
                  className="flex-1 px-4 py-3 bg-white border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
                  Aanmelden
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}