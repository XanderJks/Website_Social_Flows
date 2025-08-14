import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "SocialFlows - Voice AI Assistenten voor Restaurants",
  description = "Revolutioneer uw restaurant met SocialFlows Voice AI assistenten. Automatiseer reserveringen, bestellingen en klantenservice met geavanceerde spraaktechnologie.",
  keywords = "voice AI, restaurant automatisering, AI assistent, reserveringen, bestellingen, klantenservice, spraaktechnologie, Nederland, horeca",
  image = "https://raw.githubusercontent.com/XanderJks/0011/refs/heads/main/public/Naamloos.jpg?w=1200&h=630&fit=crop",
  url = "https://socialflows.nl",
  type = "website",
  author = "SocialFlows",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes('SocialFlows') ? title : `${title} | SocialFlows`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="nl" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SocialFlows" />
      <meta property="og:locale" content="nl_NL" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@SocialFlows" />
      <meta name="twitter:creator" content="@SocialFlows" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'Organization',
          ...(type === 'article' ? {
            headline: title,
            description: description,
            image: image,
            author: {
              "@type": "Person",
              name: author
            },
            publisher: {
              "@type": "Organization",
              name: "SocialFlows",
              logo: {
                "@type": "ImageObject",
                url: "https://github.com/XanderJks/0011/blob/main/public/Naamloos-Picsart-AiImageEnhancer.png?raw=true"
              }
            },
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url
            }
          } : {
            name: "SocialFlows",
            description: description,
            url: "https://socialflows.nl",
            logo: "https://github.com/XanderJks/0011/blob/main/public/Naamloos.jpg?raw=true",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+31-6-38104765",
              contactType: "customer service",
              availableLanguage: "Dutch"
            },
            sameAs: [
              "https://linkedin.com/company/socialflows",
              "https://twitter.com/socialflows"
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "NL",
              addressLocality: "Nederland"
            }
          })
        })}
      </script>
    </Helmet>
  );
};