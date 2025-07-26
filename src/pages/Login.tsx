import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Alert } from '../components/ui/Alert';
import { SEOHead } from '../components/SEOHead';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
    } else {
      navigate('/dashboard');
    }

    setLoading(false);
  };

  return (
    <>
      <SEOHead 
        title="Inloggen - SocialFlows"
        description="Log in op uw SocialFlows account om toegang te krijgen tot uw AI assistenten en dashboard."
      />
      
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img 
              src="https://github.com/XanderJks/0011/blob/main/public/Naamloos.jpg?raw=true" 
              alt="SocialFlows" 
              className="h-16 w-16 mx-auto mb-4"
              style={{ objectFit: 'contain' }}
            />
            <h2 className="text-3xl font-bold text-gray-800">Welkom terug</h2>
            <p className="mt-2 text-gray-600">Log in op uw SocialFlows account</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/50 shadow-lg p-8">
            {error && (
              <div className="mb-6">
                <Alert type="error" message={error} onClose={() => setError('')} />
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@bedrijf.nl"
                required
              />

              <Input
                id="password"
                type="password"
                label="Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Uw wachtwoord"
                required
              />

              <Button
                type="submit"
                loading={loading}
                className="w-full"
              >
                Inloggen
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Nog geen account?{' '}
                <Link to="/signup" className="text-green-600 hover:text-green-700 font-semibold">
                  Registreer hier
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}