import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { DailyCheckInData } from '../../types';
import { isSameDay } from '../../utils/dateUtils';
import DailyCheckInForm from './DailyCheckInForm';
import ThemedCard from '../shared/ThemedCard';

interface DailyCheckInProps {
  onSubmit: (checkIn: DailyCheckInData) => void;
  checkIns: DailyCheckInData[];
}

export default function DailyCheckIn({ onSubmit, checkIns }: DailyCheckInProps) {
  const [formData, setFormData] = useState({
    mood: 5,
    energy: 5,
    notes: '',
  });

  const hasCheckedInToday = checkIns.some(checkIn => 
    isSameDay(new Date(checkIn.timestamp), new Date())
  );

  const handleSubmit = () => {
    if (!hasCheckedInToday) {
      const checkIn: DailyCheckInData = {
        ...formData,
        timestamp: new Date()
      };
      onSubmit(checkIn);
      setFormData({
        mood: 5,
        energy: 5,
        notes: '',
      });
    }
  };

  return (
    <ThemedCard variant="checkIn">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6" />
        <h2 className="text-2xl font-bold">Daily Check-In</h2>
      </div>

      <DailyCheckInForm
        formData={formData}
        onChange={setFormData}
        disabled={hasCheckedInToday}
      />

      <button
        onClick={handleSubmit}
        disabled={hasCheckedInToday}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mt-6 
          ${hasCheckedInToday 
            ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
            : 'bg-accent text-white hover:bg-accent/90'}`}
      >
        {hasCheckedInToday ? 'Already Checked In Today' : 'Save Check-In'}
      </button>
    </ThemedCard>
  );
}