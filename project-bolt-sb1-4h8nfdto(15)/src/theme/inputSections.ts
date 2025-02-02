import { ThemeName } from '../theme';

export interface InputSectionStyle {
  bg: string;
  border: string;
  text: string;
  accent: string;
  button: string;
}

type InputSectionType = 'daily-check-in' | 'sleep-log' | 'stretches' | 'movement';

export const inputSectionThemes: Record<ThemeName, Record<InputSectionType, InputSectionStyle>> = {
  forest: {
    'daily-check-in': {
      bg: 'bg-[#5B7F52]/90',
      border: 'border-[#7A9F71]',
      text: 'text-[#E8F3E8]',
      accent: 'accent-[#E3B448]',
      button: 'bg-[#E3B448] hover:bg-[#E3B448]/90'
    },
    'sleep-log': {
      bg: 'bg-[#6B593D]/90',
      border: 'border-[#8E6C3D]',
      text: 'text-[#F0E6D8]',
      accent: 'accent-[#E3B448]',
      button: 'bg-[#E3B448] hover:bg-[#E3B448]/90'
    },
    'stretches': {
      bg: 'bg-[#4A704A]/90',
      border: 'border-[#5B855B]',
      text: 'text-[#E3F0E3]',
      accent: 'accent-[#E3B448]',
      button: 'bg-[#E3B448] hover:bg-[#E3B448]/90'
    },
    'movement': {
      bg: 'bg-[#3B6642]/90',
      border: 'border-[#4B7F52]',
      text: 'text-[#D8EBD8]',
      accent: 'accent-[#E3B448]',
      button: 'bg-[#E3B448] hover:bg-[#E3B448]/90'
    }
  },
  otter: {
    'daily-check-in': {
      bg: 'bg-[#D2A679]/90',
      border: 'border-[#E9C4A1]',
      text: 'text-white',
      accent: 'accent-[#BFE7E3]',
      button: 'bg-[#BFE7E3] hover:bg-[#BFE7E3]/90'
    },
    'sleep-log': {
      bg: 'bg-[#4B3621]/90',
      border: 'border-[#6B4E33]',
      text: 'text-[#F4E3D7]',
      accent: 'accent-[#BFE7E3]',
      button: 'bg-[#BFE7E3] hover:bg-[#BFE7E3]/90'
    },
    'stretches': {
      bg: 'bg-[#BFE7E3]/90',
      border: 'border-[#9AD8D2]',
      text: 'text-[#2C2C2C]',
      accent: 'accent-[#D2A679]',
      button: 'bg-[#D2A679] hover:bg-[#D2A679]/90'
    },
    'movement': {
      bg: 'bg-[#B88D60]/90',
      border: 'border-[#D2A679]',
      text: 'text-white',
      accent: 'accent-[#BFE7E3]',
      button: 'bg-[#BFE7E3] hover:bg-[#BFE7E3]/90'
    }
  },
  light: {
    'daily-check-in': {
      bg: 'bg-indigo-500/90',
      border: 'border-indigo-400',
      text: 'text-white',
      accent: 'accent-indigo-200',
      button: 'bg-indigo-600 hover:bg-indigo-700'
    },
    'sleep-log': {
      bg: 'bg-violet-500/90',
      border: 'border-violet-400',
      text: 'text-white',
      accent: 'accent-violet-200',
      button: 'bg-violet-600 hover:bg-violet-700'
    },
    'stretches': {
      bg: 'bg-blue-500/90',
      border: 'border-blue-400',
      text: 'text-white',
      accent: 'accent-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    'movement': {
      bg: 'bg-sky-500/90',
      border: 'border-sky-400',
      text: 'text-white',
      accent: 'accent-sky-200',
      button: 'bg-sky-600 hover:bg-sky-700'
    }
  },
  dark: {
    'daily-check-in': {
      bg: 'bg-indigo-900/90',
      border: 'border-indigo-700',
      text: 'text-indigo-100',
      accent: 'accent-indigo-500',
      button: 'bg-indigo-500 hover:bg-indigo-600'
    },
    'sleep-log': {
      bg: 'bg-violet-900/90',
      border: 'border-violet-700',
      text: 'text-violet-100',
      accent: 'accent-violet-500',
      button: 'bg-violet-500 hover:bg-violet-600'
    },
    'stretches': {
      bg: 'bg-blue-900/90',
      border: 'border-blue-700',
      text: 'text-blue-100',
      accent: 'accent-blue-500',
      button: 'bg-blue-500 hover:bg-blue-600'
    },
    'movement': {
      bg: 'bg-sky-900/90',
      border: 'border-sky-700',
      text: 'text-sky-100',
      accent: 'accent-sky-500',
      button: 'bg-sky-500 hover:bg-sky-600'
    }
  }
};