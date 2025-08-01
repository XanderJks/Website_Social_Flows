import React from 'react';
import { X } from 'lucide-react';

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
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Hide loading overlay after iframe loads
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // 3 seconds fallback
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, checkoutUrl]);

  const handleIframeLoad = () => {
    setIsLoading(false);
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
      <div className="relative w-full max-w-4xl h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {planName} - Checkout
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Veilige betaling via Stripe
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Iframe Container */}
        <div className="relative h-full">
          <iframe
            src={checkoutUrl}
            className="w-full h-full border-0"
            title={`${planName} Checkout`}
            allow="payment; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleIframeLoad}
          />
          
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-white flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Checkout wordt geladen...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};