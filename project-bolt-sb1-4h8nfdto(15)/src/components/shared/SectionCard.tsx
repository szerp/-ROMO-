import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function SectionCard({ title, icon: Icon, children }: SectionCardProps) {
  return (
    <div className="bg-surface rounded-xl p-6 shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-text">{title}</h2>
      </div>
      {children}
    </div>
  );
}