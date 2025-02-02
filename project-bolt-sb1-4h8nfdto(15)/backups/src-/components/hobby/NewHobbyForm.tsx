import React, { useState } from 'react';
import type { Hobby } from '../../types';

interface NewHobbyFormProps {
  onSubmit: (hobby: Omit<Hobby, 'id'>) => void;
  onCancel: () => void;
}

export default function NewHobbyForm({ onSubmit, onCancel }: NewHobbyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    goal: 60,
    priority: 'medium',
    frequency: 'weekly'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      timeSpent: 0,
      lastActivity: new Date().toISOString(),
    } as Omit<Hobby, 'id'>);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-purple-50 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hobby Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Weekly Goal (minutes)
          </label>
          <input
            type="number"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            min="1"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Add Hobby
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}