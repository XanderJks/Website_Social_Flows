import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-semibold text-gray-800">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-white/90 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm ${
          error ? 'border-red-500' : 'border-green-200/50'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
}