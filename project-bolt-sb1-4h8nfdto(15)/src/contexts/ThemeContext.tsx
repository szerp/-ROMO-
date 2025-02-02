import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { themes, type ThemeName } from '../theme';

// Define the shape of the context
interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to wrap the app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<ThemeName>('theme', 'otter');

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[theme]?.colors || themes['otter'].colors;  // Fallback to otter theme

    // Apply theme colors to CSS variables
    Object.entries(themeColors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--color-${key}`, value);
      }
    });

    // Apply opacity variants for key colors
    ['primary', 'secondary', 'accent'].forEach(color => {
      const baseColor = themeColors[color];
      if (typeof baseColor === 'string') {
        root.style.setProperty(`--color-${color}-10`, `${baseColor}1A`); // 10% opacity
        root.style.setProperty(`--color-${color}-20`, `${baseColor}33`); // 20% opacity
      }
    });

    // Add and remove theme-specific classes
    root.classList.remove('theme-otter', 'theme-light', 'theme-dark');
    root.classList.add(`theme-${theme}`);

    // Cleanup on component unmount or theme change
    return () => {
      Object.entries(themeColors).forEach(([key]) => {
        root.style.removeProperty(`--color-${key}`);
      });

      root.classList.remove(`theme-${theme}`);
    };
  }, [theme]);

  // Handle invalid theme case and fallback
  useEffect(() => {
    if (!themes[theme]) {
      console.warn(`Invalid theme: ${theme}, falling back to otter`);
      setTheme('otter');
    }
  }, [theme, setTheme]);

  // Provide the theme and setter through context
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
