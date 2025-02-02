import React from 'react';
import { Sun, Moon, Battery, PenLine } from 'lucide-react';
import ThemedSlider from '../shared/ThemedSlider';
import type { DailyCheckInFormData } from './types';

interface DailyCheckInFormProps {
  formData: DailyCheckInFormData;
  onChange: (data: DailyCheckInFormData) => void;
  disabled: boolean;
}

export default function DailyCheckInForm({ formData, onChange, disabled }: DailyCheckInFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          How are you feeling today?
        </label>
        <ThemedSlider
          variant="mood"
          value={formData.mood}
          onChange={(value) => onChange({ ...formData, mood: value })}
          disabled={disabled}
        />
        <div className="flex justify-between text-sm opacity-60 mt-1">
          <Moon className="w-4 h-4" />
          <Sun className="w-4 h-4" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Energy Level
        </label>
        <ThemedSlider
          variant="energy"
          value={formData.energy}
          onChange={(value) => onChange({ ...formData, energy: value })}
          disabled={disabled}
        />
        <div className="flex justify-between text-sm opacity-60 mt-1">
          <Battery className="w-4 h-4" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Any thoughts to share?
        </label>
        <div className="relative">
          <textarea
            value={formData.notes}
            onChange={(e) => onChange({ ...formData, notes: e.target.value })}
            placeholder="How's your day going? What's on your mind?"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                     placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:border-transparent
                     disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            rows={3}
            disabled={disabled}
          />
          <PenLine className="absolute right-3 top-3 w-5 h-5 opacity-50" />
        </div>
      </div>
    </div>
  );
}