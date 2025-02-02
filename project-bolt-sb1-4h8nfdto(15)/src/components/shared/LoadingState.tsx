import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export default function LoadingState({ message = 'Loading...', className = '' }: LoadingStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <LoadingSpinner size="lg" className="text-primary mb-4" />
      <p className="text-text-light">{message}</p>
    </div>
  );
}