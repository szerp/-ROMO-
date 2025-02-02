import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardHeaderProps {
  icon?: LucideIcon;
  title: string;
  action?: React.ReactNode;
}

export default function CardHeader({ icon: Icon, title, action }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-6 h-6 text-primary" />}
        <h2 className="text-xl font-semibold text-text">{title}</h2>
      </div>
      {action}
    </div>
  );
}