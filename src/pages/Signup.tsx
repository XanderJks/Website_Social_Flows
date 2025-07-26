import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Alert } from '../components/ui/Alert';
import { SEOHead } from '../components/SEOHead';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Wachtwoorden komen niet overeen');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Wachtwoord moet minimaal 6 karakters bevatten');
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password);

    if (error) {
      setError(error.message);
    } else {
      setSuccess('Account succesvol aangemaakt! U wordt doorgestuurd naar het dashboard...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <>
      <SEOHead 
        title="Registreren - SocialFlows"
        description="Maak een SocialFlows account aan en start met AI assistenten voor uw restaurant."
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
            <h2 className="text-3xl font-bold text-gray-800">Account aanmaken</h2>
            <p className="mt-2 text-gray-600">Start uw digitale transformatie</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/50 shadow-lg p-8">
            {error && (
              <div className="mb-6">
                <Alert type="error" message={error} onClose={() => setError('')} />
              </div>
            )}

            {success && (
              <div className="mb-6">
                <Alert type="success" message={success} />
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
                placeholder="Minimaal 6 karakters"
                required
              />

              <Input
                id="confirmPassword"
                type="password"
                label="Bevestig wachtwoord"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Herhaal uw wachtwoord"
                required
              />

              <Button
                type="submit"
                loading={loading}
                className="w-full"
              >
                Account aanmaken
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Al een account?{' '}
                <Link to="/login" className="text-green-600 hover:text-green-700 font-semibold">
                  Log hier in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}