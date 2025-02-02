import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  className?: string;
  onRetry?: () => void;
}

export default function ErrorState({ 
  message = 'Something went wrong', 
  className = '',
  onRetry
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
      <p className="text-text-light mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}