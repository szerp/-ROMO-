import React, { useState } from 'react';
import { Clock, Target, Trophy, Trash2, Edit } from 'lucide-react';
import type { Hobby } from '../../types';

interface HobbyCardProps {
  hobby: Hobby;
  onTrackProgress: (minutes: number) => void;
  onEdit: () => void;
  onRemove: () => void;
}

export default function HobbyCard({ hobby, onTrackProgress, onEdit, onRemove }: HobbyCardProps) {
  const [minutes, setMinutes] = useState('');
  const progress = (hobby.timeSpent / hobby.goal) * 100;

  const handleTrackProgress = () => {
    const minutesNum = parseInt(minutes);
    if (minutesNum > 0) {
      onTrackProgress(minutesNum);
      setMinutes('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{hobby.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>{hobby.timeSpent} minutes this {hobby.frequency}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Target className="w-5 h-5" />
          <span>Goal: {hobby.goal} minutes</span>
        </div>

        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-semibold text-purple-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-100">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Minutes"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            min="1"
          />
          <button
            onClick={handleTrackProgress}
            disabled={!minutes}
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Track
          </button>
        </div>
      </div>
    </div>
  );
}