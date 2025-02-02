import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
  const { theme } = useTheme();

  const baseStyles = `w-full px-3 py-2 rounded-lg border transition-all duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                     disabled:opacity-50 disabled:cursor-not-allowed
                     bg-white/90 backdrop-blur-sm text-text placeholder-text-light/50
                     resize-none`;

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-text">
          {label}
        </label>
      )}
      <textarea
        className={`${baseStyles} ${error ? 'border-red-500' : 'border-border'} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}