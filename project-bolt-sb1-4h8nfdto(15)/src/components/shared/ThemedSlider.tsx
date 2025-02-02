import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { sliderThemes } from '../../theme/sliders';

interface ThemedSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'mood' | 'energy' | 'sleep' | 'quality';
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export default function ThemedSlider({
  variant,
  value,
  onChange,
  min = 1,
  max = 10,
  step = 1,
  disabled = false,
  ...props
}: ThemedSliderProps) {
  const { theme } = useTheme();
  const style = sliderThemes[theme][variant];

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      disabled={disabled}
      className={`
        w-full h-2 rounded-lg appearance-none cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${style.track}
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:${style.thumb}
        [&::-webkit-slider-thumb]:border-2
        [&::-webkit-slider-thumb]:border-white
        [&::-webkit-slider-thumb]:shadow-md
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-moz-range-thumb]:w-4
        [&::-moz-range-thumb]:h-4
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:${style.thumb}
        [&::-moz-range-thumb]:border-2
        [&::-moz-range-thumb]:border-white
        [&::-moz-range-thumb]:shadow-md
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:duration-150
      `}
      {...props}
    />
  );
}