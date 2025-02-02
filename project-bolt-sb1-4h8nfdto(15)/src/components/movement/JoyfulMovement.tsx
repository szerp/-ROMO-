import React, { useState } from 'react';
import { Heart, Clock } from 'lucide-react';

interface JoyfulMovementProps {
  onTrackMovement: (minutes: number, activity: string) => void;
}

export default function JoyfulMovement({ onTrackMovement }: JoyfulMovementProps) {
  const [minutes, setMinutes] = useState(30);
  const [activity, setActivity] = useState('');

  const handleSubmit = () => {
    if (minutes > 0 && activity.trim()) {
      onTrackMovement(minutes, activity);
      setActivity('');
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
            Type of Movement
          </label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="e.g., dancing, skating, running"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Minutes of Movement
          </label>
          <input
            type="number"
            min="1"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!activity.trim() || minutes <= 0}
          className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 
                   transition-colors flex items-center justify-center gap-2
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Clock className="w-4 h-4" />
          Track Movement
        </button>
      </div>
    </div>
  );
}