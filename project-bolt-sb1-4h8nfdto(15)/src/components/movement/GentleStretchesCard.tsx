import React from 'react';
import { Activity, Clock, Shield } from 'lucide-react';
import Button from '../shared/Button';
import InputSection from '../shared/InputSection';
import { isToday } from '../../utils/dateUtils';
import type { Movement } from '../../types';

interface GentleStretchesCardProps {
  exercise: Movement;
  onComplete: (movement: Movement) => void;
  completedMovements: Movement[];
}

export default function GentleStretchesCard({ exercise, onComplete, completedMovements }: GentleStretchesCardProps) {
  const hasCompletedToday = completedMovements
    .filter(m => m.id === exercise.id && m.name === exercise.name)
    .some(m => m.completedAt && isToday(m.completedAt));

  return (
    <InputSection
      title={exercise.name}
      icon={Shield}
      variant="stretches"
    >
      <p className="text-sm opacity-80">{exercise.description}</p>

      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5" />
        <span>{exercise.duration} minutes</span>
      </div>

      <div className="flex items-center gap-2">
        <Activity className="w-5 h-5" />
        <span className="capitalize">{exercise.difficulty} intensity</span>
      </div>

      {exercise.jointFriendly && (
        <div className="text-sm">
          ✓ Joint-friendly movement
        </div>
      )}

      <Button
        onClick={() => !hasCompletedToday && onComplete(exercise)}
        disabled={hasCompletedToday}
        fullWidth
      >
        {hasCompletedToday ? 'Completed Today' : 'Complete Stretches'}
      </Button>
    </InputSection>
  );
}