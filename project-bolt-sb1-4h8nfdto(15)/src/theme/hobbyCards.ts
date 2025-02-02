import { ThemeName } from '../theme';

export interface HobbyCardStyle {
  bg: string;
  border: string;
  text: string;
  inputBg: string;
  progressBg: string;
  progressFill: string;
}

export const hobbyCardThemes: Record<ThemeName, HobbyCardStyle> = {
  forest: {
    bg: 'bg-[#3B6642]/90',
    border: 'border-[#4B7F52]',
    text: 'text-[#D8EBD8]',
    inputBg: 'bg-[#4B7F52]/30',
    progressBg: 'bg-[#E3B448]/20',
    progressFill: 'bg-[#E3B448]'
  },
  otter: {
    bg: 'bg-[#B88D60]/90',
    border: 'border-[#D2A679]',
    text: 'text-white',
    inputBg: 'bg-[#D2A679]/30',
    progressBg: 'bg-[#BFE7E3]/20',
    progressFill: 'bg-[#BFE7E3]'
  },
  light: {
    bg: 'bg-sky-500/90',
    border: 'border-sky-400',
    text: 'text-white',
    inputBg: 'bg-sky-600/30',
    progressBg: 'bg-sky-200/20',
    progressFill: 'bg-sky-200'
  },
  dark: {
    bg: 'bg-sky-900/90',
    border: 'border-sky-700',
    text: 'text-sky-100',
    inputBg: 'bg-sky-800/30',
    progressBg: 'bg-sky-500/20',
    progressFill: 'bg-sky-500'
  }
};