import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { activityCardThemes } from '../../theme/activityCards';

interface ActivityCardProps {
  title: string;
  icon: LucideIcon;
  variant: 'check-ins' | 'sleep' | 'stretches' | 'movement';
  children: React.ReactNode;
}

export default function ActivityCard({ title, icon: Icon, variant, children }: ActivityCardProps) {
  const { theme } = useTheme();
  const style = activityCardThemes[theme][variant];

  return (
    <div className={`${style.bg} ${style.text} rounded-lg p-4 shadow-md border ${style.border}`}>
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="space-y-2">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${child.props.className} ${style.divider}`
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}