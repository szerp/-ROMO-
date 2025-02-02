import { ThemeName } from '../theme';

export interface ActivityCardStyle {
  bg: string;
  text: string;
  border: string;
  divider: string;
}

type ActivityVariant = 'check-ins' | 'sleep' | 'stretches' | 'movement';

export const activityCardThemes: Record<ThemeName, Record<ActivityVariant, ActivityCardStyle>> = {
  forest: {
    'check-ins': {
      bg: 'bg-[#3B7A57]',
      text: 'text-[#E8F5E9]',
      border: 'border-[#4A7856]',
      divider: 'border-[#4A7856]'
    },
    'sleep': {
      bg: 'bg-[#8B4513]',
      text: 'text-[#E8F5E9]',
      border: 'border-[#A0522D]',
      divider: 'border-[#A0522D]'
    },
    'stretches': {
      bg: 'bg-[#2F4F4F]',
      text: 'text-[#E8F5E9]',
      border: 'border-[#3D6363]',
      divider: 'border-[#3D6363]'
    },
    'movement': {
      bg: 'bg-[#1B4D3E]',
      text: 'text-[#E8F5E9]',
      border: 'border-[#2A5F4E]',
      divider: 'border-[#2A5F4E]'
    }
  },
  otter: {
    'check-ins': {
      bg: 'bg-[#D2A679]',
      text: 'text-white',
      border: 'border-[#E9C4A1]',
      divider: 'border-[#E9C4A1]'
    },
    'sleep': {
      bg: 'bg-[#4B3621]',
      text: 'text-[#F4E3D7]',
      border: 'border-[#6B4E33]',
      divider: 'border-[#6B4E33]'
    },
    'stretches': {
      bg: 'bg-[#BFE7E3]',
      text: 'text-[#2C2C2C]',
      border: 'border-[#9AD8D2]',
      divider: 'border-[#9AD8D2]'
    },
    'movement': {
      bg: 'bg-[#B88D60]',
      text: 'text-white',
      border: 'border-[#D2A679]',
      divider: 'border-[#D2A679]'
    }
  },
  light: {
    'check-ins': {
      bg: 'bg-indigo-500',
      text: 'text-white',
      border: 'border-indigo-400',
      divider: 'border-indigo-400'
    },
    'sleep': {
      bg: 'bg-violet-500',
      text: 'text-white',
      border: 'border-violet-400',
      divider: 'border-violet-400'
    },
    'stretches': {
      bg: 'bg-blue-500',
      text: 'text-white',
      border: 'border-blue-400',
      divider: 'border-blue-400'
    },
    'movement': {
      bg: 'bg-sky-500',
      text: 'text-white',
      border: 'border-sky-400',
      divider: 'border-sky-400'
    }
  },
  dark: {
    'check-ins': {
      bg: 'bg-indigo-900',
      text: 'text-indigo-100',
      border: 'border-indigo-700',
      divider: 'border-indigo-700'
    },
    'sleep': {
      bg: 'bg-violet-900',
      text: 'text-violet-100',
      border: 'border-violet-700',
      divider: 'border-violet-700'
    },
    'stretches': {
      bg: 'bg-blue-900',
      text: 'text-blue-100',
      border: 'border-blue-700',
      divider: 'border-blue-700'
    },
    'movement': {
      bg: 'bg-sky-900',
      text: 'text-sky-100',
      border: 'border-sky-700',
      divider: 'border-sky-700'
    }
  }
};