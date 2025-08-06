import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: 'nl' | 'en';
  onLanguageChange: (language: 'nl' | 'en') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 backdrop-blur-xl border border-green-200/50 hover:bg-white/90 hover:border-green-300/60 transition-all duration-300 shadow-sm">
        <Globe className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-gray-700 uppercase">
          {currentLanguage}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-32 bg-white/95 backdrop-blur-xl rounded-lg border border-green-200/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="p-2 space-y-1">
          <button
            onClick={() => onLanguageChange('nl')}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              currentLanguage === 'nl'
                ? 'bg-green-50 text-green-700 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            🇳🇱 Nederlands
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              currentLanguage === 'en'
                ? 'bg-green-50 text-green-700 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            🇬🇧 English
          </button>
        </div>
      </div>
    </div>
  );
};