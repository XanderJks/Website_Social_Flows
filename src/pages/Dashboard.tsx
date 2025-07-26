import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { SEOHead } from '../components/SEOHead';
import { stripeProducts } from '../stripe-config';
import { supabase } from '../lib/supabase';
import { CreditCard, User, LogOut, ShoppingCart, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const { user, signOut } = useAuth();
  const { subscription, loading: subscriptionLoading, getSubscriptionPlan, isActive } = useSubscription();
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignOut = async () => {
    await signOut();
  };

  const handleCheckout = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) return;

    setCheckoutLoading(priceId);
    setError('');

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setError('Geen geldige sessie gevonden. Log opnieuw in.');
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: priceId,
          mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/dashboard`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Er is een fout opgetreden');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      setError(error.message || 'Er is een fout opgetreden bij het starten van de checkout');
    } finally {
      setCheckoutLoading(null);
    }
  };

  if (subscriptionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-green-600/30 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Dashboard laden...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Dashboard - SocialFlows"
        description="Beheer uw SocialFlows AI assistenten en abonnementen vanuit uw persoonlijke dashboard."
      />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Uitloggen
              </Button>
            </div>
          </div>

          {/* Alerts */}
          {error && (
            <div className="mb-6">
              <Alert type="error" message={error} onClose={() => setError('')} />
            </div>
          )}

          {success && (
            <div className="mb-6">
              <Alert type="success" message={success} onClose={() => setSuccess('')} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Subscription Status */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                  Abonnement Status
                </h2>
                
                {subscription ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Plan:</span>
                      <span className="font-semibold text-gray-800">
                        {getSubscriptionPlan() || 'Geen actief abonnement'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        isActive() 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {subscription.subscription_status === 'active' ? 'Actief' :
                         subscription.subscription_status === 'trialing' ? 'Proefperiode' :
                         subscription.subscription_status === 'not_started' ? 'Niet gestart' :
                         subscription.subscription_status}
                      </span>
                    </div>

                    {subscription.current_period_end && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Vernieuwt op:</span>
                        <span className="text-gray-800">
                          {new Date(subscription.current_period_end * 1000).toLocaleDateString('nl-NL')}
                        </span>
                      </div>
                    )}

                    {subscription.payment_method_last4 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Betaalmethode:</span>
                        <span className="text-gray-800">
                          {subscription.payment_method_brand?.toUpperCase()} •••• {subscription.payment_method_last4}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-600 mb-4">Geen actief abonnement</p>
                    <p className="text-sm text-gray-500">Kies een plan om te beginnen</p>
                  </div>
                )}
              </div>
            </div>

            {/* Available Products */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-green-600" />
                  Beschikbare Producten
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stripeProducts.map((product) => {
                    const isCurrentPlan = subscription?.price_id === product.priceId;
                    const hasActiveSubscription = isActive();
                    
                    return (
                      <div key={product.id} className="border border-gray-200 rounded-lg p-6 hover:border-green-300 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                          </div>
                          {isCurrentPlan && (
                            <div className="flex items-center text-green-600 text-xs font-semibold">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Actief
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-gray-800">
                            €{product.price.toFixed(2)}
                          </span>
                          {product.interval && (
                            <span className="text-gray-600 ml-1">/{product.interval === 'month' ? 'maand' : 'jaar'}</span>
                          )}
                        </div>
                        
                        <Button
                          onClick={() => handleCheckout(product.priceId, product.mode)}
                          loading={checkoutLoading === product.priceId}
                          disabled={isCurrentPlan && hasActiveSubscription}
                          className="w-full"
                          variant={isCurrentPlan ? 'outline' : 'primary'}
                        >
                          {isCurrentPlan && hasActiveSubscription
                            ? 'Huidige Plan'
                            : product.mode === 'subscription'
                            ? 'Abonneren'
                            : 'Kopen'
                          }
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}