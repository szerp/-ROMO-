import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { cardThemes } from '../../theme/cards';

interface ThemedCardProps {
  variant: 'goals' | 'hobbies' | 'sleep' | 'checkIn';
  children: React.ReactNode;
  className?: string;
}

export default function ThemedCard({ variant, children, className = '' }: ThemedCardProps) {
  const { theme } = useTheme();
  const style = cardThemes[theme][variant];

  return (
    <div 
      className={`${style.bg} ${style.text} rounded-xl p-6 shadow-lg border ${style.border} ${className}`}
      style={{
        '--card-accent': style.accent,
        '--card-input-bg': style.input.bg,
        '--card-input-border': style.input.border,
        '--card-input-focus': style.input.focus,
        '--card-button-primary': style.button.primary,
        '--card-button-hover': style.button.hover,
        '--card-button-disabled': style.button.disabled,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}