import React from 'react';
import { Sun, Moon, Battery, PenLine } from 'lucide-react';
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
        <label className="block text-sm font-medium text-gray-600 mb-2">
          How are you feeling today?
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={formData.mood}
          onChange={(e) => onChange({ ...formData, mood: Number(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"
          disabled={disabled}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <Moon className="w-4 h-4" />
          <Sun className="w-4 h-4" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Energy Level
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={formData.energy}
          onChange={(e) => onChange({ ...formData, energy: Number(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"
          disabled={disabled}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <Battery className="w-4 h-4" />
          <Battery className="w-4 h-4 text-green-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Any thoughts to share?
        </label>
        <div className="relative">
          <textarea
            value={formData.notes}
            onChange={(e) => onChange({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none disabled:bg-gray-50"
            rows={3}
            placeholder="How's your day going? What's on your mind?"
            disabled={disabled}
          />
          <PenLine className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}