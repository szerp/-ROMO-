import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { DailyCheckInData } from '../../types';
import { isSameDay } from '../../utils/dateUtils';
import DailyCheckInForm from './DailyCheckInForm';

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
      // Reset form after successful submission
      setFormData({
        mood: 5,
        energy: 5,
        notes: '',
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-800">Daily Check-In</h2>
      </div>

      <DailyCheckInForm
        formData={formData}
        onChange={setFormData}
        disabled={hasCheckedInToday}
      />

      <button
        onClick={handleSubmit}
        disabled={hasCheckedInToday}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mt-6 ${
          hasCheckedInToday 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-purple-600 text-white hover:bg-purple-700'
        }`}
      >
        {hasCheckedInToday ? 'Already Checked In Today' : 'Save Check-In'}
      </button>
    </div>
  );
}