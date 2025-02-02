import { ThemeName } from '../theme';

export interface CardStyle {
  bg: string;
  border: string;
  text: string;
  accent: string;
  input: {
    bg: string;
    border: string;
    focus: string;
  };
  button: {
    primary: string;
    hover: string;
    disabled: string;
  };
}

export const cardThemes: Record<ThemeName, Record<'goals' | 'hobbies' | 'sleep' | 'checkIn', CardStyle>> = {
  forest: {
    goals: {
      bg: 'bg-[#3B7A57]/90',
      border: 'border-[#4A7856]',
      text: 'text-[#E8F5E9]',
      accent: '#DAA520',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#DAA520]/50'
      },
      button: {
        primary: 'bg-[#DAA520]',
        hover: 'hover:bg-[#DAA520]/90',
        disabled: 'bg-gray-500'
      }
    },
    hobbies: {
      bg: 'bg-[#8B4513]/90',
      border: 'border-[#A0522D]',
      text: 'text-[#E8F5E9]',
      accent: '#DAA520',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#DAA520]/50'
      },
      button: {
        primary: 'bg-[#DAA520]',
        hover: 'hover:bg-[#DAA520]/90',
        disabled: 'bg-gray-500'
      }
    },
    sleep: {
      bg: 'bg-[#2F4F4F]/90',
      border: 'border-[#3D6363]',
      text: 'text-[#E8F5E9]',
      accent: '#DAA520',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#DAA520]/50'
      },
      button: {
        primary: 'bg-[#DAA520]',
        hover: 'hover:bg-[#DAA520]/90',
        disabled: 'bg-gray-500'
      }
    },
    checkIn: {
      bg: 'bg-[#1B4D3E]/90',
      border: 'border-[#2A5F4E]',
      text: 'text-[#E8F5E9]',
      accent: '#DAA520',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#DAA520]/50'
      },
      button: {
        primary: 'bg-[#DAA520]',
        hover: 'hover:bg-[#DAA520]/90',
        disabled: 'bg-gray-500'
      }
    }
  },
  otter: {
    goals: {
      bg: 'bg-[#D2A679]/90',
      border: 'border-[#B88D60]',
      text: 'text-white',
      accent: '#BFE7E3',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#BFE7E3]/50'
      },
      button: {
        primary: 'bg-[#BFE7E3]',
        hover: 'hover:bg-[#BFE7E3]/90',
        disabled: 'bg-gray-500'
      }
    },
    hobbies: {
      bg: 'bg-[#4B3621]/90',
      border: 'border-[#6B4E33]',
      text: 'text-white',
      accent: '#BFE7E3',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#BFE7E3]/50'
      },
      button: {
        primary: 'bg-[#BFE7E3]',
        hover: 'hover:bg-[#BFE7E3]/90',
        disabled: 'bg-gray-500'
      }
    },
    sleep: {
      bg: 'bg-[#BFE7E3]/90',
      border: 'border-[#9AD8D2]',
      text: 'text-[#2C2C2C]',
      accent: '#D2A679',
      input: {
        bg: 'bg-black/10',
        border: 'border-black/20',
        focus: 'ring-[#D2A679]/50'
      },
      button: {
        primary: 'bg-[#D2A679]',
        hover: 'hover:bg-[#D2A679]/90',
        disabled: 'bg-gray-500'
      }
    },
    checkIn: {
      bg: 'bg-[#B88D60]/90',
      border: 'border-[#D2A679]',
      text: 'text-white',
      accent: '#BFE7E3',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#BFE7E3]/50'
      },
      button: {
        primary: 'bg-[#BFE7E3]',
        hover: 'hover:bg-[#BFE7E3]/90',
        disabled: 'bg-gray-500'
      }
    }
  },
  light: {
    goals: {
      bg: 'bg-indigo-500/90',
      border: 'border-indigo-400',
      text: 'text-white',
      accent: '#93C5FD',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#93C5FD]/50'
      },
      button: {
        primary: 'bg-[#93C5FD]',
        hover: 'hover:bg-[#93C5FD]/90',
        disabled: 'bg-gray-500'
      }
    },
    hobbies: {
      bg: 'bg-violet-500/90',
      border: 'border-violet-400',
      text: 'text-white',
      accent: '#DDD6FE',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#DDD6FE]/50'
      },
      button: {
        primary: 'bg-[#DDD6FE]',
        hover: 'hover:bg-[#DDD6FE]/90',
        disabled: 'bg-gray-500'
      }
    },
    sleep: {
      bg: 'bg-blue-500/90',
      border: 'border-blue-400',
      text: 'text-white',
      accent: '#BFDBFE',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#BFDBFE]/50'
      },
      button: {
        primary: 'bg-[#BFDBFE]',
        hover: 'hover:bg-[#BFDBFE]/90',
        disabled: 'bg-gray-500'
      }
    },
    checkIn: {
      bg: 'bg-sky-500/90',
      border: 'border-sky-400',
      text: 'text-white',
      accent: '#BAE6FD',
      input: {
        bg: 'bg-white/10',
        border: 'border-white/20',
        focus: 'ring-[#BAE6FD]/50'
      },
      button: {
        primary: 'bg-[#BAE6FD]',
        hover: 'hover:bg-[#BAE6FD]/90',
        disabled: 'bg-gray-500'
      }
    }
  },
  dark: {
    goals: {
      bg: 'bg-indigo-900/90',
      border: 'border-indigo-700',
      text: 'text-indigo-100',
      accent: '#818CF8',
      input: {
        bg: 'bg-black/20',
        border: 'border-white/10',
        focus: 'ring-[#818CF8]/50'
      },
      button: {
        primary: 'bg-[#818CF8]',
        hover: 'hover:bg-[#818CF8]/90',
        disabled: 'bg-gray-700'
      }
    },
    hobbies: {
      bg: 'bg-violet-900/90',
      border: 'border-violet-700',
      text: 'text-violet-100',
      accent: '#A78BFA',
      input: {
        bg: 'bg-black/20',
        border: 'border-white/10',
        focus: 'ring-[#A78BFA]/50'
      },
      button: {
        primary: 'bg-[#A78BFA]',
        hover: 'hover:bg-[#A78BFA]/90',
        disabled: 'bg-gray-700'
      }
    },
    sleep: {
      bg: 'bg-blue-900/90',
      border: 'border-blue-700',
      text: 'text-blue-100',
      accent: '#93C5FD',
      input: {
        bg: 'bg-black/20',
        border: 'border-white/10',
        focus: 'ring-[#93C5FD]/50'
      },
      button: {
        primary: 'bg-[#93C5FD]',
        hover: 'hover:bg-[#93C5FD]/90',
        disabled: 'bg-gray-700'
      }
    },
    checkIn: {
      bg: 'bg-sky-900/90',
      border: 'border-sky-700',
      text: 'text-sky-100',
      accent: '#7DD3FC',
      input: {
        bg: 'bg-black/20',
        border: 'border-white/10',
        focus: 'ring-[#7DD3FC]/50'
      },
      button: {
        primary: 'bg-[#7DD3FC]',
        hover: 'hover:bg-[#7DD3FC]/90',
        disabled: 'bg-gray-700'
      }
    }
  }
};