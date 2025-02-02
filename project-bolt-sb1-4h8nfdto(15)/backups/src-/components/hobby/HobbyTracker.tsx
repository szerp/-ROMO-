import React, { useState } from 'react';
import { Palette, Plus } from 'lucide-react';
import HobbyCard from './HobbyCard';
import NewHobbyForm from './NewHobbyForm';
import EditHobbyForm from './EditHobbyForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { Hobby } from '../../types';

export default function HobbyTracker() {
  const [hobbies, setHobbies] = useLocalStorage<Hobby[]>('hobbies', []);
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingHobby, setEditingHobby] = useState<string | null>(null);

  const handleAddHobby = (hobby: Omit<Hobby, 'id'>) => {
    const newHobby = {
      ...hobby,
      id: crypto.randomUUID(),
    };
    setHobbies([...hobbies, newHobby]);
    setShowNewForm(false);
  };

  const handleUpdateHobby = (updatedHobby: Hobby) => {
    setHobbies(hobbies.map(hobby => 
      hobby.id === updatedHobby.id ? updatedHobby : hobby
    ));
    setEditingHobby(null);
  };

  const handleRemoveHobby = (id: string) => {
    setHobbies(hobbies.filter(hobby => hobby.id !== id));
  };

  const handleTrackProgress = (id: string, minutes: number) => {
    setHobbies(hobbies.map(hobby => 
      hobby.id === id 
        ? { ...hobby, timeSpent: hobby.timeSpent + minutes, lastActivity: new Date().toISOString() }
        : hobby
    ));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Palette className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800">Hobby Tracker</h2>
        </div>
        <button
          onClick={() => setShowNewForm(true)}
          className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-200"
        >
          <Plus className="w-4 h-4" />
          Add Hobby
        </button>
      </div>

      {showNewForm && (
        <NewHobbyForm 
          onSubmit={handleAddHobby}
          onCancel={() => setShowNewForm(false)}
        />
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <React.Fragment key={hobby.id}>
            {editingHobby === hobby.id ? (
              <EditHobbyForm
                hobby={hobby}
                onSubmit={handleUpdateHobby}
                onCancel={() => setEditingHobby(null)}
              />
            ) : (
              <HobbyCard
                hobby={hobby}
                onTrackProgress={(minutes) => handleTrackProgress(hobby.id, minutes)}
                onEdit={() => setEditingHobby(hobby.id)}
                onRemove={() => handleRemoveHobby(hobby.id)}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}