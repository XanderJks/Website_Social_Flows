import React from 'react';
import { X, ExternalLink, Shield, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  planName: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
  planName
}) => {
  const handleCheckout = () => {
    // Open Stripe checkout in new tab
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    // Close modal after opening checkout
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-200/50">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {planName} Plan
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Veilige betaling via Stripe
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100/50 rounded-lg transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Ga door naar betaling
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              U wordt doorgestuurd naar onze veilige Stripe betalingspagina om uw {planName} plan te activeren.
            </p>
          </div>
          
          {/* Security Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-700">
              <Shield className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
              256-bit SSL encryptie
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Shield className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
              PCI DSS compliant
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Shield className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
              Direct annuleren mogelijk
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleCheckout}
              className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group"
            >
              <span>Ga naar betaling</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-300"
            >
              Annuleren
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Door verder te gaan gaat u akkoord met onze voorwaarden
          </p>
        </div>
      </div>
    </div>
  );
};