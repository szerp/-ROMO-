import type { Sleep } from '../types';

const STORAGE_KEY = 'sleep_logs';

export async function getSleepLogs(): Promise<Sleep[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed: Sleep[] = JSON.parse(data);
      // Sort by date descending
      return parsed.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } catch (error) {
      console.error("Error parsing sleep logs from local storage:", error);
      return [];
    }
  }
  return [];
}

export async function addSleepLog(sleep: Sleep): Promise<Sleep> {
  const current = await getSleepLogs();
  // Assume sleep object is complete and valid
  const newSleep: Sleep = { ...sleep };
  const updated = [newSleep, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newSleep;
}

export async function deleteSleepLog(date: string): Promise<void> {
  const current = await getSleepLogs();
  const updated = current.filter(log => log.date !== date);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
