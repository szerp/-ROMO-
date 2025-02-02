import React from 'react';
import { Settings as SettingsIcon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../theme';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <SettingsIcon className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-text">Settings</h1>
      </div>

      <div className="bg-surface rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <Palette className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-text">Theme</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(themes).map(([themeId, themeData]) => (
            <button
              key={themeId}
              onClick={() => setTheme(themeId as any)}
              className={`p-4 rounded-lg border-2 transition-all ${
                theme === themeId
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-text">{themeData.name}</span>
                <div className="w-4 h-4 rounded-full border-2 border-border">
                  {theme === themeId && (
                    <div className="w-full h-full rounded-full bg-primary" />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="h-8 rounded"
                  style={{ backgroundColor: themeData.colors.primary }}
                />
                <div
                  className="h-8 rounded"
                  style={{ backgroundColor: themeData.colors.secondary }}
                />
                <div
                  className="h-8 rounded"
                  style={{ backgroundColor: themeData.colors.accent }}
                />
                <div
                  className="h-8 rounded"
                  style={{ backgroundColor: themeData.colors.background }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}