import React, { useState } from 'react';
import type { Hobby } from '../../types';

interface EditHobbyFormProps {
  hobby: Hobby;
  onSubmit: (hobby: Hobby) => void;
  onCancel: () => void;
}

export default function EditHobbyForm({ hobby, onSubmit, onCancel }: EditHobbyFormProps) {
  const [formData, setFormData] = useState(hobby);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-purple-50 rounded-lg p-6">
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
            Goal (minutes)
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

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as Hobby['priority'] })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Frequency
          </label>
          <select
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value as Hobby['frequency'] })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
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