import { ThemeName } from '../theme';

export interface FormElementStyles {
  input: {
    text: string;
    placeholder: string;
    background: string;
    border: string;
    focus: string;
    disabled: {
      text: string;
      background: string;
    };
  };
  button: {
    disabled: {
      text: string;
      background: string;
    };
  };
}

export const formElementThemes: Record<ThemeName, FormElementStyles> = {
  forest: {
    input: {
      text: 'text-gray-800',
      placeholder: 'placeholder-gray-600',
      background: 'bg-white/95',
      border: 'border-[#7A9F71]',
      focus: 'focus:border-[#5B7F52] focus:ring-[#5B7F52]',
      disabled: {
        text: 'text-gray-700',
        background: 'bg-gray-100'
      }
    },
    button: {
      disabled: {
        text: 'text-gray-700',
        background: 'bg-gray-200'
      }
    }
  },
  otter: {
    input: {
      text: 'text-gray-800',
      placeholder: 'placeholder-gray-600',
      background: 'bg-white/95',
      border: 'border-[#D2A679]',
      focus: 'focus:border-[#B88D60] focus:ring-[#B88D60]',
      disabled: {
        text: 'text-gray-700',
        background: 'bg-gray-100'
      }
    },
    button: {
      disabled: {
        text: 'text-gray-700',
        background: 'bg-gray-200'
      }
    }
  },
  light: {
    input: {
      text: 'text-gray-800',
      placeholder: 'placeholder-gray-600',
      background: 'bg-white',
      border: 'border-gray-300',
      focus: 'focus:border-indigo-500 focus:ring-indigo-500',
      disabled: {
        text: 'text-gray-700',
        background: 'bg-gray-100'
      }
    },
    button: {
      disabled: {
        text: 'text-gray-700',
        background: 'bg-gray-200'
      }
    }
  },
  dark: {
    input: {
      text: 'text-gray-100',
      placeholder: 'placeholder-gray-400',
      background: 'bg-gray-800',
      border: 'border-gray-700',
      focus: 'focus:border-indigo-400 focus:ring-indigo-400',
      disabled: {
        text: 'text-gray-400',
        background: 'bg-gray-900'
      }
    },
    button: {
      disabled: {
        text: 'text-gray-400',
        background: 'bg-gray-800'
      }
    }
  }
};