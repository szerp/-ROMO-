import { supabase } from '../lib/supabase';
import type { Hobby } from '../types';

export async function getHobbies() {
  const { data, error } = await supabase
    .from('hobbies')
    .select('id, name, time_spent, goal, priority, frequency, last_activity')
    .order('created_at', { ascending: false });

  if (error) throw error;
  
  // Transform snake_case to camelCase
  return data.map(hobby => ({
    id: hobby.id,
    name: hobby.name,
    timeSpent: hobby.time_spent,
    goal: hobby.goal,
    priority: hobby.priority,
    frequency: hobby.frequency,
    lastActivity: hobby.last_activity
  })) as Hobby[];
}

export async function addHobby(hobby: Omit<Hobby, 'id'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('hobbies')
    .insert([{
      user_id: user.id,
      name: hobby.name,
      time_spent: hobby.timeSpent,
      goal: hobby.goal,
      priority: hobby.priority,
      frequency: hobby.frequency,
      last_activity: hobby.lastActivity
    }])
    .select('id, name, time_spent, goal, priority, frequency, last_activity')
    .single();

  if (error) throw error;

  // Transform snake_case to camelCase
  return {
    id: data.id,
    name: data.name,
    timeSpent: data.time_spent,
    goal: data.goal,
    priority: data.priority,
    frequency: data.frequency,
    lastActivity: data.last_activity
  } as Hobby;
}

export async function updateHobby(hobby: Hobby) {
  const { data, error } = await supabase
    .from('hobbies')
    .update({
      name: hobby.name,
      time_spent: hobby.timeSpent,
      goal: hobby.goal,
      priority: hobby.priority,
      frequency: hobby.frequency,
      last_activity: hobby.lastActivity
    })
    .eq('id', hobby.id)
    .select('id, name, time_spent, goal, priority, frequency, last_activity')
    .single();

  if (error) throw error;

  // Transform snake_case to camelCase
  return {
    id: data.id,
    name: data.name,
    timeSpent: data.time_spent,
    goal: data.goal,
    priority: data.priority,
    frequency: data.frequency,
    lastActivity: data.last_activity
  } as Hobby;
}

export async function deleteHobby(id: string) {
  const { error } = await supabase
    .from('hobbies')
    .delete()
    .eq('id', id);

  if (error) throw error;
}