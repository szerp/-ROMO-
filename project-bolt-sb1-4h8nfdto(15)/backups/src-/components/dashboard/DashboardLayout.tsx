import React from 'react';
import { BookOpen, BarChart2 } from 'lucide-react';
import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#F0FFFF]">
      <header className="bg-gradient-to-r from-[#FF69B4] to-[#40E0D0] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">✨ Life Balance Tracker ✨</h1>
            <div className="flex gap-4">
              <button 
                onClick={() => console.log('Open Recipe Library')}
                className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Vegan Recipe Library
              </button>
              <button 
                onClick={() => console.log('View History')}
                className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <BarChart2 className="w-5 h-5" />
                History & Charts
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {children}
      </main>
    </div>
  );
}