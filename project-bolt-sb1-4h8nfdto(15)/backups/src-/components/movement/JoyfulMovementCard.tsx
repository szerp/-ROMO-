import React, { useState } from 'react';
import { Heart, Clock, Activity } from 'lucide-react';
import type { Movement } from '../../types';

interface JoyfulMovementCardProps {
  onTrackMovement: (movement: Omit<Movement, 'id'>) => void;
}

export default function JoyfulMovementCard({ onTrackMovement }: JoyfulMovementCardProps) {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState(30);

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

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="text-pink-500" />
        <h3 className="text-xl font-semibold">Joyful Movement</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            What movement brings you joy today?
          </label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="e.g., dancing, skating, walking in nature"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Duration (minutes)
          </label>
          <input
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!activity.trim() || duration <= 0}
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 
                   transition-colors flex items-center justify-center gap-2
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Activity className="w-4 h-4" />
          Track Movement
        </button>
      </div>
    </div>
  );
}