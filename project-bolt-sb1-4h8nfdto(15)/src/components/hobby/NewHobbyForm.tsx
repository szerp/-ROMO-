import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Hobby } from '../../types';

interface NewHobbyFormProps {
  onSubmit: (hobby: Omit<Hobby, 'id'>) => void;
  onCancel: () => void;
}

export default function NewHobbyForm({ onSubmit, onCancel }: NewHobbyFormProps) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    goal: 60,
    priority: 'medium',
    frequency: 'weekly',
    timeSpent: 0,
    lastActivity: new Date().toISOString()
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Omit<Hobby, 'id'>);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-secondary/10 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hobby Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                     placeholder:text-gray-600 placeholder:font-medium
                     focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weekly Goal (minutes)
          </label>
          <input
            type="number"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: Number(e.target.value) })}
            className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                     placeholder:text-gray-600 placeholder:font-medium
                     focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
            min="1"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Add Hobby
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}