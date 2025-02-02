import { ThemeName } from '../theme';

interface SliderStyle {
  track: string;
  thumb: string;
}

type SliderVariant = 'mood' | 'energy' | 'sleep' | 'quality';

export const sliderThemes: Record<ThemeName, Record<SliderVariant, SliderStyle>> = {
  forest: {
    mood: {
      track: 'bg-[#5B7F52]/30 bg-gradient-to-r from-[#5B7F52]/20 to-[#5B7F52]/40',
      thumb: 'bg-[#DAA520]'
    },
    energy: {
      track: 'bg-[#5B7F52]/30 bg-gradient-to-r from-[#5B7F52]/20 to-[#5B7F52]/40',
      thumb: 'bg-[#DAA520]'
    },
    sleep: {
      track: 'bg-[#2F4F4F]/30 bg-gradient-to-r from-[#2F4F4F]/20 to-[#2F4F4F]/40',
      thumb: 'bg-[#DAA520]'
    },
    quality: {
      track: 'bg-[#2F4F4F]/30 bg-gradient-to-r from-[#2F4F4F]/20 to-[#2F4F4F]/40',
      thumb: 'bg-[#DAA520]'
    }
  },
  otter: {
    mood: {
      track: 'bg-[#D2A679]/30 bg-gradient-to-r from-[#D2A679]/20 to-[#D2A679]/40',
      thumb: 'bg-[#BFE7E3]'
    },
    energy: {
      track: 'bg-[#D2A679]/30 bg-gradient-to-r from-[#D2A679]/20 to-[#D2A679]/40',
      thumb: 'bg-[#BFE7E3]'
    },
    sleep: {
      track: 'bg-[#4B3621]/30 bg-gradient-to-r from-[#4B3621]/20 to-[#4B3621]/40',
      thumb: 'bg-[#BFE7E3]'
    },
    quality: {
      track: 'bg-[#4B3621]/30 bg-gradient-to-r from-[#4B3621]/20 to-[#4B3621]/40',
      thumb: 'bg-[#BFE7E3]'
    }
  },
  light: {
    mood: {
      track: 'bg-indigo-200 bg-gradient-to-r from-indigo-100 to-indigo-300',
      thumb: 'bg-indigo-500'
    },
    energy: {
      track: 'bg-indigo-200 bg-gradient-to-r from-indigo-100 to-indigo-300',
      thumb: 'bg-indigo-500'
    },
    sleep: {
      track: 'bg-blue-200 bg-gradient-to-r from-blue-100 to-blue-300',
      thumb: 'bg-blue-500'
    },
    quality: {
      track: 'bg-blue-200 bg-gradient-to-r from-blue-100 to-blue-300',
      thumb: 'bg-blue-500'
    }
  },
  dark: {
    mood: {
      track: 'bg-indigo-800 bg-gradient-to-r from-indigo-900 to-indigo-700',
      thumb: 'bg-indigo-400'
    },
    energy: {
      track: 'bg-indigo-800 bg-gradient-to-r from-indigo-900 to-indigo-700',
      thumb: 'bg-indigo-400'
    },
    sleep: {
      track: 'bg-blue-800 bg-gradient-to-r from-blue-900 to-blue-700',
      thumb: 'bg-blue-400'
    },
    quality: {
      track: 'bg-blue-800 bg-gradient-to-r from-blue-900 to-blue-700',
      thumb: 'bg-blue-400'
    }
  }
};