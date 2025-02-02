import { supabase } from '../lib/supabase';
import type { DailyCheckInData } from '../types';

export async function getCheckIns() {
  const { data, error } = await supabase
    .from('check_ins')
    .select('mood, energy, notes, timestamp')
    .order('timestamp', { ascending: false });

  if (error) throw error;
  return data as DailyCheckInData[];
}

export async function addCheckIn(checkIn: Omit<DailyCheckInData, 'id'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('check_ins')
    .insert([{ 
      user_id: user.id,
      mood: checkIn.mood,
      energy: checkIn.energy,
      notes: checkIn.notes,
      timestamp: checkIn.timestamp
    }])
    .select('mood, energy, notes, timestamp')
    .single();

  if (error) throw error;
  return data;
}

export async function deleteCheckIn(timestamp: Date) {
  const { error } = await supabase
    .from('check_ins')
    .delete()
    .eq('timestamp', timestamp.toISOString());

  if (error) throw error;
}