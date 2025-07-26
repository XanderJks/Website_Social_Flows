import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useSubscription } from '../hooks/useSubscription';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/SEOHead';

export function Success() {
  const { refetch } = useSubscription();

  useEffect(() => {
    // Refetch subscription data after successful payment
    const timer = setTimeout(() => {
      refetch();
    }, 2000);

    return () => clearTimeout(timer);
  }, [refetch]);

  return (
    <>
      <SEOHead 
        title="Betaling Succesvol - SocialFlows"
        description="Uw betaling is succesvol verwerkt. Welkom bij SocialFlows!"
      />
      
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/50 shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Betaling Succesvol!
            </h1>
            
            <p className="text-gray-600 mb-8">
              Bedankt voor uw aankoop. Uw account wordt binnen enkele minuten geactiveerd. 
              U ontvangt een bevestigingsmail met alle details.
            </p>
            
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/dashboard">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Ga naar Dashboard
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link to="/">
                  Terug naar Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}