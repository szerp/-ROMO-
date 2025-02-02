import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { inputSectionThemes } from '../../theme/inputSections';

interface InputSectionProps {
  title: string;
  icon: LucideIcon;
  variant: 'daily-check-in' | 'sleep-log' | 'stretches' | 'movement';
  children: React.ReactNode;
}

export default function InputSection({ title, icon: Icon, variant, children }: InputSectionProps) {
  const { theme } = useTheme();
  const style = inputSectionThemes[theme][variant];

  return (
    <div className={`${style.bg} ${style.text} rounded-xl p-6 shadow-md border ${style.border}`}>
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-6">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${child.props.className} ${style.accent}`
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}