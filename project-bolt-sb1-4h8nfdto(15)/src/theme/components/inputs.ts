import { ThemeName } from '../../theme';

export interface InputStyles {
  placeholder: {
    color: string;
    weight: string;
    spacing: string;
  };
  slider: {
    track: {
      height: string;
      background: string;
      filled: string;
      shadow: string;
    };
    thumb: {
      size: string;
      background: string;
      border: string;
      shadow: string;
    };
  };
}

export const inputStyles: Record<ThemeName, InputStyles> = {
  forest: {
    placeholder: {
      color: 'text-gray-600',
      weight: 'font-medium',
      spacing: 'tracking-wide'
    },
    slider: {
      track: {
        height: 'h-1.5',
        background: 'bg-[#7A9F71]/30',
        filled: 'bg-[#5B7F52]',
        shadow: 'shadow-sm'
      },
      thumb: {
        size: 'w-4 h-4',
        background: 'bg-[#5B7F52]',
        border: 'border-2 border-white',
        shadow: 'shadow-md'
      }
    }
  },
  otter: {
    placeholder: {
      color: 'text-gray-600',
      weight: 'font-medium',
      spacing: 'tracking-wide'
    },
    slider: {
      track: {
        height: 'h-1.5',
        background: 'bg-[#D2A679]/30',
        filled: 'bg-[#B88D60]',
        shadow: 'shadow-sm'
      },
      thumb: {
        size: 'w-4 h-4',
        background: 'bg-[#B88D60]',
        border: 'border-2 border-white',
        shadow: 'shadow-md'
      }
    }
  },
  light: {
    placeholder: {
      color: 'text-gray-600',
      weight: 'font-medium',
      spacing: 'tracking-wide'
    },
    slider: {
      track: {
        height: 'h-1.5',
        background: 'bg-indigo-200',
        filled: 'bg-indigo-500',
        shadow: 'shadow-sm'
      },
      thumb: {
        size: 'w-4 h-4',
        background: 'bg-indigo-500',
        border: 'border-2 border-white',
        shadow: 'shadow-md'
      }
    }
  },
  dark: {
    placeholder: {
      color: 'text-gray-400',
      weight: 'font-medium',
      spacing: 'tracking-wide'
    },
    slider: {
      track: {
        height: 'h-1.5',
        background: 'bg-gray-700',
        filled: 'bg-indigo-500',
        shadow: 'shadow-sm'
      },
      thumb: {
        size: 'w-4 h-4',
        background: 'bg-indigo-500',
        border: 'border-2 border-gray-900',
        shadow: 'shadow-md'
      }
    }
  }
};