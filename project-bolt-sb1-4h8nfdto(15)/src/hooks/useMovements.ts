import { useState, useEffect } from 'react';
import { getMovements, addMovement as addMovementService, deleteMovement as deleteMovementService } from '../services/movements';
import type { Movement } from '../types';

export function useMovements() {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMovements();
  }, []);

  const loadMovements = async () => {
    try {
      const data = await getMovements();
      setMovements(data);
    } catch (err) {
      setError('Failed to load movements');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const completeMovement = async (movement: Movement) => {
    try {
      const completedMovement = { 
        ...movement, 
        completed: true, 
        completedAt: new Date().toISOString() 
      };
      const newMovement = await addMovementService(completedMovement);
      setMovements(prev => [newMovement, ...prev]);
    } catch (err) {
      setError('Failed to complete movement');
      console.error(err);
    }
  };

  const trackJoyfulMovement = async (movement: Omit<Movement, 'id'>) => {
    try {
      const newMovement = await addMovementService(movement);
      setMovements(prev => [newMovement, ...prev]);
    } catch (err) {
      setError('Failed to track movement');
      console.error(err);
    }
  };

  const deleteMovement = async (id: string) => {
    try {
      await deleteMovementService(id);
      setMovements(prev => prev.filter(m => m.id !== id));
    } catch (err) {
      setError('Failed to delete movement');
      console.error(err);
    }
  };

  return {
    movements,
    loading,
    error,
    completeMovement,
    trackJoyfulMovement,
    deleteMovement
  };
}