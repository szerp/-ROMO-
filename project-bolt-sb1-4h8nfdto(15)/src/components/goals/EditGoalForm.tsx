import React, { useState } from 'react';
import type { Goal } from '../../types';

interface EditGoalFormProps {
  goal: Goal;
  onSubmit: (goal: Goal) => void;
  onCancel: () => void;
}

export default function EditGoalForm({ goal, onSubmit, onCancel }: EditGoalFormProps) {
  const [formData, setFormData] = useState({
    ...goal,
    targetDate: goal.targetDate ? new Date(goal.targetDate).toISOString().split('T')[0] : ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      targetDate: formData.targetDate ? new Date(formData.targetDate) : undefined
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-purple-50 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Goal Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Target Date</label>
          <input
            type="date"
            value={formData.targetDate}
            onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Save Changes
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