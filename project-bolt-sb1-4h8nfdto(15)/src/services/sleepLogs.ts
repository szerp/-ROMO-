import { supabase } from '../lib/supabase';
import type { Sleep } from '../types';

export async function getSleepLogs() {
  const { data, error } = await supabase
    .from('sleep_logs')
    .select(`
      date,
      "hoursSlept",
      quality,
      notes,
      "windDownStarted"
    `)
    .order('date', { ascending: false });

  if (error) throw error;
  return data as Sleep[];
}

export async function addSleepLog(sleep: Sleep) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('sleep_logs')
    .insert([{
      user_id: user.id,
      date: sleep.date,
      "hoursSlept": sleep.hoursSlept,
      quality: sleep.quality,
      notes: sleep.notes,
      "windDownStarted": sleep.windDownStarted
    }])
    .select(`
      date,
      "hoursSlept",
      quality,
      notes,
      "windDownStarted"
    `)
    .single();

  if (error) throw error;
  return data;
}

export async function deleteSleepLog(date: string) {
  const { error } = await supabase
    .from('sleep_logs')
    .delete()
    .eq('date', date);

  if (error) throw error;
}