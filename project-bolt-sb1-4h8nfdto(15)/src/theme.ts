export type ThemeName = 'otter' | 'light' | 'dark' | 'forest';

export interface Theme {
  id: ThemeName;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textLight: string;
    border: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  forest: {
    id: 'forest',
    name: 'Forest Theme',
    colors: {
      primary: '#3B7A57',    // Forest Green
      secondary: '#8B4513',   // Saddle Brown
      accent: '#DAA520',      // Goldenrod
      background: '#1B4D3E',  // Deep Forest Green
      surface: '#2F4F4F',    // Dark Slate Gray
      text: '#E8F5E9',       // Mint White
      textLight: '#A5D6A7',  // Light Green
      border: '#4A7856',     // Sage Green
    },
  },
  otter: {
    id: 'otter',
    name: 'Otter Theme',
    colors: {
      primary: '#D2A679',
      secondary: '#4B3621',
      accent: '#BFE7E3',
      background: '#F9F5F1',
      surface: '#FFFFFF',
      text: '#2C2C2C',
      textLight: '#6B7280',
      border: '#E5E7EB',
    },
  },
  light: {
    id: 'light',
    name: 'Light Theme',
    colors: {
      primary: '#6366F1',
      secondary: '#4F46E5',
      accent: '#818CF8',
      background: '#F9FAFB',
      surface: '#FFFFFF',
      text: '#111827',
      textLight: '#6B7280',
      border: '#E5E7EB',
    },
  },
  dark: {
    id: 'dark',
    name: 'Dark Theme',
    colors: {
      primary: '#818CF8',
      secondary: '#6366F1',
      accent: '#C7D2FE',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB',
      textLight: '#9CA3AF',
      border: '#374151',
    },
  },
};