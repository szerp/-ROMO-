import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Home, BookOpen, BarChart2, Settings, LogOut, User } from 'lucide-react';
import UserAvatar from './UserAvatar';
import { useTheme } from '../../contexts/ThemeContext';

const navigationThemes = {
  forest: {
    text: 'text-[#E8F3E8]',
    selected: 'bg-[#5B7F52] text-white',
    hover: 'hover:bg-[#5B7F52]/50'
  },
  otter: {
    text: 'text-[#4B3621]',
    selected: 'bg-[#D2A679] text-white',
    hover: 'hover:bg-[#D2A679]/50'
  },
  light: {
    text: 'text-indigo-600',
    selected: 'bg-indigo-500 text-white',
    hover: 'hover:bg-indigo-500/50'
  },
  dark: {
    text: 'text-indigo-100',
    selected: 'bg-indigo-500 text-white',
    hover: 'hover:bg-indigo-500/50'
  }
};

export default function Header() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { theme } = useTheme();
  const styles = navigationThemes[theme];

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: LucideIcon; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium
          ${isActive ? styles.selected : `${styles.text} ${styles.hover}`}`}
      >
        <Icon className="w-4 h-4" />
        <span>{children}</span>
      </Link>
    );
  };

  return (
    <header className="bg-surface shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center ${styles.text} hover:opacity-90 transition-opacity`}>
            <span className="text-2xl font-bold">ROMO</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/recipes" icon={BookOpen}>Recipes</NavLink>
            <NavLink to="/history" icon={BarChart2}>History</NavLink>
          </nav>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className={`flex items-center gap-2 p-2 rounded-full ${styles.hover}`}
            >
              <UserAvatar user={user} />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-surface rounded-lg shadow-lg py-1 z-10 border border-border">
                <div className="px-4 py-2 text-sm text-text border-b border-border">
                  {user?.email}
                </div>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-text hover:bg-accent/10"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-text hover:bg-accent/10"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}