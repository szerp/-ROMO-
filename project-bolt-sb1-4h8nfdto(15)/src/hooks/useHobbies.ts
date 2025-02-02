import { useState, useEffect } from 'react';
import { getHobbies, addHobby as addHobbyService, updateHobby as updateHobbyService, 
         deleteHobby as deleteHobbyService } from '../services/hobbies';
import type { Hobby } from '../types';

export function useHobbies() {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadHobbies();
  }, []);

  const loadHobbies = async () => {
    try {
      const data = await getHobbies();
      setHobbies(data);
    } catch (err) {
      setError('Failed to load hobbies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addHobby = async (hobby: Omit<Hobby, 'id'>) => {
    try {
      const newHobby = await addHobbyService(hobby);
      setHobbies(prev => [newHobby, ...prev]);
    } catch (err) {
      setError('Failed to add hobby');
      console.error(err);
    }
  };

  const updateHobby = async (hobby: Hobby) => {
    try {
      await updateHobbyService(hobby);
      setHobbies(prev => prev.map(h => 
        h.id === hobby.id ? hobby : h
      ));
    } catch (err) {
      setError('Failed to update hobby');
      console.error(err);
    }
  };

  const deleteHobby = async (id: string) => {
    try {
      await deleteHobbyService(id);
      setHobbies(prev => prev.filter(h => h.id !== id));
    } catch (err) {
      setError('Failed to delete hobby');
      console.error(err);
    }
  };

  return {
    hobbies,
    loading,
    error,
    addHobby,
    updateHobby,
    deleteHobby
  };
}