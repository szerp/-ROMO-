import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BarChart2, Menu, X, Settings, Home } from 'lucide-react';
import BackupRestore from '../BackupRestore';
import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] to-[#F0FFFF]">
      <header className="bg-gradient-to-r from-[#FF69B4] to-[#40E0D0] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
              <span className="hidden sm:inline">✨ Life Balance ✨</span>
              <span className="sm:hidden">✨ Life Balance</span>
            </Link>
            
            <div className="flex items-center gap-4">
              {/* Settings button */}
              <button 
                onClick={() => setShowBackupModal(true)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Settings className="w-6 h-6" />
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/20"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex gap-4">
              <Link 
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                  ${location.pathname === '/' 
                    ? 'bg-white/30' 
                    : 'bg-white/20 hover:bg-white/30'}`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/recipes"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                  ${location.pathname === '/recipes' 
                    ? 'bg-white/30' 
                    : 'bg-white/20 hover:bg-white/30'}`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Recipe Library</span>
              </Link>
              <Link 
                to="/history"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                  ${location.pathname === '/history' 
                    ? 'bg-white/30' 
                    : 'bg-white/20 hover:bg-white/30'}`}
              >
                <BarChart2 className="w-5 h-5" />
                <span>History</span>
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <Link 
                to="/"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors w-full
                  ${location.pathname === '/' 
                    ? 'bg-white/30' 
                    : 'bg-white/20 hover:bg-white/30'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/recipes"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors w-full
                  ${location.pathname === '/recipes' 
                    ? 'bg-white/30' 
                    : 'bg-white/20 hover:bg-white/30'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5" />
                <span>Recipe Library</span>
              </Link>
              <Link 
                to="/history"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors w-full
                  ${location.pathname === '/history' 
                    ? 'bg-white/30' 
                    : 'bg-white/20 hover:bg-white/30'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart2 className="w-5 h-5" />
                <span>History</span>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Backup/Restore Modal */}
      {showBackupModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Data Management</h2>
              <button 
                onClick={() => setShowBackupModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Backup your data to keep it safe or restore from a previous backup.
            </p>
            <BackupRestore />
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}