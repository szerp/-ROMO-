import React, { useState } from 'react';
import { Heart, Activity } from 'lucide-react';
import Button from '../shared/Button';
import InputSection from '../shared/InputSection';
import type { Movement } from '../../types';

interface JoyfulMovementCardProps {
  onTrackMovement: (movement: Omit<Movement, 'id'>) => void;
}

export default function JoyfulMovementCard({ onTrackMovement }: JoyfulMovementCardProps) {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState<number>(30);

  const handleSubmit = () => {
    if (activity.trim() && duration > 0) {
      onTrackMovement({
        name: 'Joyful Movement',
        description: activity.trim(),
        difficulty: 'moderate',
        duration,
        jointFriendly: true,
        completed: true,
        completedAt: new Date().toISOString()
      });
      setActivity('');
      setDuration(30);
    }
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setDuration(isNaN(value) ? 0 : value);
  };

  return (
    <InputSection
      title="Joyful Movement"
      icon={Heart}
      variant="movement"
    >
      <div>
        <label className="block text-sm font-medium mb-2">
          What movement brings you joy today?
        </label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="e.g., dancing, skating, walking in nature"
          className="w-full px-3 py-2 border rounded-lg bg-white/10 backdrop-blur-sm
                   focus:ring-2 focus:ring-white/20 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Duration (minutes)
        </label>
        <input
          type="number"
          min="1"
          value={duration || ''}
          onChange={handleDurationChange}
          className="w-full px-3 py-2 border rounded-lg bg-white/10 backdrop-blur-sm
                   focus:ring-2 focus:ring-white/20 focus:border-transparent"
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!activity.trim() || duration <= 0}
        fullWidth
      >
        Track Movement
      </Button>
    </InputSection>
  );
}