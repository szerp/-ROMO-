import { useLocalStorage } from './useLocalStorage';
import type { Movement } from '../types';

export function useMovements() {
  const [movements, setMovements] = useLocalStorage<Movement[]>('completedMovements', []);

  const completeMovement = (movement: Movement) => {
    const completedMovement = { 
      ...movement, 
      completed: true, 
      completedAt: new Date().toISOString() 
    };
    setMovements([...movements, completedMovement]);
  };

  const trackJoyfulMovement = (movement: Omit<Movement, 'id'>) => {
    const newMovement = {
      ...movement,
      id: crypto.randomUUID(),
    };
    setMovements([...movements, newMovement]);
  };

  const deleteMovement = (id: string) => {
    setMovements(movements.filter(m => m.id !== id));
  };

  return {
    movements,
    completeMovement,
    trackJoyfulMovement,
    deleteMovement
  };
}