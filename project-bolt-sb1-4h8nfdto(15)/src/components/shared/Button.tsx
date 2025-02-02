import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  loading,
  fullWidth,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variantStyles = {
    primary: `bg-primary text-white hover:bg-primary/90 shadow-sm 
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary`,
    secondary: `bg-secondary text-white hover:bg-secondary/90 shadow-sm 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary`,
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current" />
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </>
      )}
    </button>
  );
}