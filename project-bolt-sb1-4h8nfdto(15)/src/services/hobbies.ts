import type { Hobby } from '../types';

const STORAGE_KEY = 'hobbies';

export async function getHobbies(): Promise<Hobby[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function addHobby(hobby: Omit<Hobby, 'id'>): Promise<Hobby> {
  const current = await getHobbies();
  const newHobby: Hobby = { id: Date.now().toString(), ...hobby };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newHobby, ...current]));
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
