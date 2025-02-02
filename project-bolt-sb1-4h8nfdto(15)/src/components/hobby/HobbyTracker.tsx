import React, { useState } from 'react';
import { Palette, Plus } from 'lucide-react';
import ThemedCard from '../shared/ThemedCard';
import { useHobbies } from '../../hooks/useHobbies';
import HobbyCard from './HobbyCard';
import NewHobbyForm from './NewHobbyForm';
import EditHobbyForm from './EditHobbyForm';
import LoadingState from '../shared/LoadingState';
import ErrorState from '../shared/ErrorState';

export default function HobbyTracker() {
  const { hobbies, loading, error, addHobby, updateHobby, deleteHobby } = useHobbies();
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingHobby, setEditingHobby] = useState<string | null>(null);

  if (loading) return <LoadingState message="Loading hobbies..." />;
  if (error) return <ErrorState message={error} />;

  return (
    <ThemedCard variant="hobbies">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Palette className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Hobby Tracker</h2>
        </div>
        <button
          onClick={() => setShowNewForm(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Hobby
        </button>
      </div>

      {showNewForm && (
        <NewHobbyForm 
          onSubmit={(hobby) => {
            addHobby(hobby);
            setShowNewForm(false);
          }}
          onCancel={() => setShowNewForm(false)}
        />
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <React.Fragment key={hobby.id}>
            {editingHobby === hobby.id ? (
              <EditHobbyForm
                hobby={hobby}
                onSubmit={(updatedHobby) => {
                  updateHobby(updatedHobby);
                  setEditingHobby(null);
                }}
                onCancel={() => setEditingHobby(null)}
              />
            ) : (
              <HobbyCard
                hobby={hobby}
                onTrackProgress={(minutes) => {
                  updateHobby({
                    ...hobby,
                    timeSpent: hobby.timeSpent + minutes,
                    lastActivity: new Date().toISOString()
                  });
                }}
                onEdit={() => setEditingHobby(hobby.id)}
                onRemove={() => deleteHobby(hobby.id)}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </ThemedCard>
  );
}