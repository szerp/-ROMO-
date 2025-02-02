import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import type { Goal } from '../../types';

interface NewGoalFormProps {
  onSubmit: (goal: Omit<Goal, 'id' | 'progress' | 'tasks'>) => void;
  onCancel: () => void;
}

export default function NewGoalForm({ onSubmit, onCancel }: NewGoalFormProps) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    targetDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      targetDate: formData.targetDate ? new Date(formData.targetDate) : undefined
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-primary/10 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Goal Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                     placeholder:text-gray-600 placeholder:font-medium
                     focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                     placeholder:text-gray-600 placeholder:font-medium
                     focus:ring-2 focus:ring-primary/50 focus:border-transparent resize-none"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Date
          </label>
          <input
            type="date"
            value={formData.targetDate}
            onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
            className="w-full px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                     placeholder:text-gray-600 placeholder:font-medium
                     focus:ring-2 focus:ring-primary/50 focus:border-transparent"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Add Goal
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