import { ThemeName } from '../theme';

export interface GoalCardStyle {
  bg: string;
  border: string;
  text: string;
  taskBg: string;
  progressBg: string;
  progressFill: string;
}

export const goalCardThemes: Record<ThemeName, GoalCardStyle> = {
  forest: {
    bg: 'bg-[#4A704A]/90',
    border: 'border-[#5B855B]',
    text: 'text-[#E3F0E3]',
    taskBg: 'hover:bg-[#5B855B]/30',
    progressBg: 'bg-[#E3B448]/20',
    progressFill: 'bg-[#E3B448]'
  },
  otter: {
    bg: 'bg-[#BFE7E3]/90',
    border: 'border-[#9AD8D2]',
    text: 'text-[#2C2C2C]',
    taskBg: 'hover:bg-[#9AD8D2]/30',
    progressBg: 'bg-[#D2A679]/20',
    progressFill: 'bg-[#D2A679]'
  },
  light: {
    bg: 'bg-blue-500/90',
    border: 'border-blue-400',
    text: 'text-white',
    taskBg: 'hover:bg-blue-600/30',
    progressBg: 'bg-blue-200/20',
    progressFill: 'bg-blue-200'
  },
  dark: {
    bg: 'bg-blue-900/90',
    border: 'border-blue-700',
    text: 'text-blue-100',
    taskBg: 'hover:bg-blue-800/30',
    progressBg: 'bg-blue-500/20',
    progressFill: 'bg-blue-500'
  }
};