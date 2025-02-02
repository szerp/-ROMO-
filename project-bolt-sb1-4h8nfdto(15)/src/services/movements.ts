import type { Movement } from '../types';

const STORAGE_KEY = 'movements';

export async function getMovements(): Promise<Movement[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed: Movement[] = JSON.parse(data);
      // Sort by completedAt descending.
      // If completedAt is undefined, treat it as the earliest date.
      return parsed.sort((a, b) => {
        const dateA = a.completedAt ? new Date(a.completedAt) : new Date(0);
        const dateB = b.completedAt ? new Date(b.completedAt) : new Date(0);
        return dateB.getTime() - dateA.getTime();
      });
    } catch (error) {
      console.error("Error parsing movements from local storage:", error);
      return [];
    }
  }
  return [];
}

export async function addMovement(
  movement: Omit<Movement, 'id'>
): Promise<Movement> {
  const newMovement = { ...movement, id: Date.now().toString() } as Movement;
  const current = await getMovements();
  const updated = [newMovement, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newMovement;
}

export async function deleteMovement(id: string): Promise<void> {
  const current = await getMovements();
  const updated = current.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
