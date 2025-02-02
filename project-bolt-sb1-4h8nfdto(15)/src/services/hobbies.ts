import type { Hobby } from '../types';

const STORAGE_KEY = 'hobbies';

export async function getHobbies(): Promise<Hobby[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed: Hobby[] = JSON.parse(data);
      return parsed;
    } catch (error) {
      console.error("Error parsing hobbies from local storage:", error);
      return [];
    }
  }
  return [];
}

export async function addHobby(hobby: Omit<Hobby, 'id'>): Promise<Hobby> {
  const current = await getHobbies();
  const newHobby: Hobby = {
    id: Date.now().toString(),
    name: hobby.name,
    timeSpent: hobby.timeSpent,
    goal: hobby.goal,
    priority: hobby.priority,
    frequency: hobby.frequency,
    lastActivity: hobby.lastActivity
  };
  const updated = [newHobby, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newHobby;
}

export async function updateHobby(hobby: Hobby): Promise<Hobby> {
  const current = await getHobbies();
  const updated = current.map(h => h.id === hobby.id ? hobby : h);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return hobby;
}

export async function deleteHobby(id: string): Promise<void> {
  const current = await getHobbies();
  const updated = current.filter(h => h.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
