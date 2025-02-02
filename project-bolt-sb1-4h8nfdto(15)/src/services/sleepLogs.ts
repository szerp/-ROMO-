import type { Sleep } from '../types';

const STORAGE_KEY = 'sleep_logs';

export async function getSleepLogs(): Promise<Sleep[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed: Sleep[] = JSON.parse(data);
      return parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error("Error parsing sleep logs:", error);
      return [];
    }
  }
  return [];
}

export async function addSleepLog(sleep: Sleep): Promise<Sleep> {
  const current = await getSleepLogs();
  const updated = [sleep, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return sleep;
}

export async function deleteSleepLog(date: string): Promise<void> {
  const current = await getSleepLogs();
  const updated = current.filter(log => log.date !== date);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
