import { supabase } from '../lib/supabase';
import type { Movement } from '../types';

export async function getMovements() {
  const { data, error } = await supabase
    .from('movements')
    .select(`
      id,
      name,
      description,
      difficulty,
      duration,
      "jointFriendly",
      completed,
      "completedAt"
    `)
    .order('completedAt', { ascending: false });

  if (error) throw error;
  return data as Movement[];
}

export async function addMovement(movement: Omit<Movement, 'id'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('movements')
    .insert([{
      user_id: user.id,
      name: movement.name,
      description: movement.description,
      difficulty: movement.difficulty,
      duration: movement.duration,
      "jointFriendly": movement.jointFriendly,
      completed: movement.completed,
      "completedAt": movement.completedAt
    }])
    .select(`
      id,
      name,
      description,
      difficulty,
      duration,
      "jointFriendly",
      completed,
      "completedAt"
    `)
    .single();

  if (error) throw error;
  return data;
}

export async function deleteMovement(id: string) {
  const { error } = await supabase
    .from('movements')
    .delete()
    .eq('id', id);

  if (error) throw error;
}