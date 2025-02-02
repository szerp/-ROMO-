import React, { useState } from 'react';
import { Moon, Sun, Star } from 'lucide-react';
import { formatDate, isSameDay } from '../../utils/dateUtils';
import type { Sleep } from '../../types';

interface SleepTrackerProps {
  onSubmit: (sleep: Sleep) => void;
  sleepLogs: Sleep[];
}

export default function SleepTracker({ onSubmit, sleepLogs }: SleepTrackerProps) {
  const today = formatDate(new Date());
  const [sleepData, setSleepData] = useState<Sleep>({
    date: today,
    hoursSlept: 7,
    quality: 5,
    notes: '',
    windDownStarted: false
  });

  // Check if there's a log for today by comparing the date strings
  const hasLoggedToday = sleepLogs.some(log => log.date === today);

  const handleSubmit = () => {
    if (!hasLoggedToday) {
      onSubmit({
        ...sleepData,
        date: today // Ensure we're using today's date
      });
      setSleepData({
        date: today,
        hoursSlept: 7,
        quality: 5,
        notes: '',
        windDownStarted: false
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Moon className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-800">Sleep Log</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Hours of Sleep
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="12"
              step="0.5"
              value={sleepData.hoursSlept}
              onChange={(e) => setSleepData({ ...sleepData, hoursSlept: Number(e.target.value) })}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"
              disabled={hasLoggedToday}
            />
            <span className="text-gray-700 font-medium w-16">{sleepData.hoursSlept}h</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Sleep Quality
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="10"
              value={sleepData.quality}
              onChange={(e) => setSleepData({ ...sleepData, quality: Number(e.target.value) })}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50"
              disabled={hasLoggedToday}
            />
            <span className="text-gray-700 font-medium w-16">{sleepData.quality}/10</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <Star className="w-4 h-4" />
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Notes
          </label>
          <textarea
            value={sleepData.notes}
            onChange={(e) => setSleepData({ ...sleepData, notes: e.target.value })}
            placeholder="How did you sleep? Any dreams?"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-50 disabled:text-gray-500"
            rows={3}
            disabled={hasLoggedToday}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={hasLoggedToday}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            hasLoggedToday 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {hasLoggedToday ? 'Sleep Already Logged Today' : 'Save Sleep Stats'}
        </button>
      </div>
    </div>
  );
}