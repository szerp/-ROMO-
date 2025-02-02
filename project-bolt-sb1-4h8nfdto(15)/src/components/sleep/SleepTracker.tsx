import React, { useState } from 'react';
import { Moon, Star } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import type { Sleep } from '../../types';
import ThemedCard from '../shared/ThemedCard';
import ThemedSlider from '../shared/ThemedSlider';

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

  const hasLoggedToday = sleepLogs.some(log => log.date === today);

  const handleSubmit = () => {
    if (!hasLoggedToday) {
      onSubmit({
        ...sleepData,
        date: today
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
    <ThemedCard variant="sleep">
      <div className="flex items-center gap-2 mb-6">
        <Moon className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Sleep Log</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Hours of Sleep
          </label>
          <div className="flex items-center gap-4">
            <ThemedSlider
              variant="sleep"
              min={0}
              max={12}
              step={0.5}
              value={sleepData.hoursSlept}
              onChange={(value) => setSleepData({ ...sleepData, hoursSlept: value })}
              disabled={hasLoggedToday}
            />
            <span className="font-medium w-16">{sleepData.hoursSlept}h</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Sleep Quality
          </label>
          <div className="flex items-center gap-4">
            <ThemedSlider
              variant="quality"
              value={sleepData.quality}
              onChange={(value) => setSleepData({ ...sleepData, quality: value })}
              disabled={hasLoggedToday}
            />
            <span className="font-medium w-16">{sleepData.quality}/10</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <Star className="w-4 h-4 opacity-50" />
            <Star className="w-4 h-4 text-accent" />
          </div>
        </div>

        {/* Rest of the component remains the same */}
      </div>
    </ThemedCard>
  );
}