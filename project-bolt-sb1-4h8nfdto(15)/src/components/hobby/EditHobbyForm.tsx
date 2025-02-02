import React, { useState } from 'react';
import Button from '../shared/Button';
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
    <form onSubmit={handleSubmit} className="bg-accent/10 rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Hobby Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text
                     focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Goal (minutes)
          </label>
          <input
            type="number"
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: Number(e.target.value) })}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text
                     focus:ring-2 focus:ring-primary focus:border-transparent"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as Hobby['priority'] })}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text
                     focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-1">
            Frequency
          </label>
          <select
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value as Hobby['frequency'] })}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text
                     focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            fullWidth
          >
            Save Changes
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            fullWidth
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}