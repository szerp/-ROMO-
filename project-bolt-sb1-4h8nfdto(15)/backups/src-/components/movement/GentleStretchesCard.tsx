import React from 'react';
import { Activity, Clock, Shield } from 'lucide-react';
import { isToday } from '../../utils/dateUtils';
import type { Movement } from '../../types';

interface GentleStretchesCardProps {
  exercise: Movement;
  onComplete: (movement: Movement) => void;
  completedMovements: Movement[];
}

export default function GentleStretchesCard({ exercise, onComplete, completedMovements }: GentleStretchesCardProps) {
  // Only check completed movements that match the current exercise ID and name
  const hasCompletedToday = completedMovements
    .filter(m => m.id === exercise.id && m.name === exercise.name)
    .some(m => m.completedAt && isToday(m.completedAt));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{exercise.name}</h3>
          <p className="text-gray-600 mt-1">{exercise.description}</p>
        </div>
        <Shield className="text-blue-500" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>{exercise.duration} minutes</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Activity className="w-5 h-5" />
          <span className="capitalize">{exercise.difficulty} intensity</span>
        </div>

        {exercise.jointFriendly && (
          <div className="text-green-600 text-sm">
            ✓ Joint-friendly movement
          </div>
        )}

        <button
          onClick={() => !hasCompletedToday && onComplete(exercise)}
          disabled={hasCompletedToday}
          className={`w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${
            hasCompletedToday 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {hasCompletedToday ? 'Completed Today' : 'Complete Stretches'}
        </button>
      </div>
    </div>
  );
}