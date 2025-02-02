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
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{hobby.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={onRemove}
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2 opacity-80">
          <Clock className="w-5 h-5" />
          <span>{hobby.timeSpent} minutes this {hobby.frequency}</span>
        </div>
        
        <div className="flex items-center gap-2 opacity-80">
          <Target className="w-5 h-5" />
          <span>Goal: {hobby.goal} minutes</span>
        </div>

        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-semibold">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div>
          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 bg-white/30 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Minutes"
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg
                     placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:border-transparent"
            min="1"
          />
          <button
            onClick={handleTrackProgress}
            disabled={!minutes}
            className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Track Progress
          </button>
        </div>
      </div>
    </div>
  );
}