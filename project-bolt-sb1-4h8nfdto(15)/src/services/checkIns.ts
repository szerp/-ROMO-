import type { DailyCheckInData } from '../types';

const STORAGE_KEY = 'check_ins';

export async function getCheckIns(): Promise<DailyCheckInData[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed: DailyCheckInData[] = JSON.parse(data);
      return parsed.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    } catch (error) {
      console.error("Error parsing check-ins:", error);
      return [];
    }
  }
  return [];
}

export async function addCheckIn(checkIn: Omit<DailyCheckInData, 'id'>): Promise<DailyCheckInData> {
  const newCheckIn: DailyCheckInData = { ...checkIn, id: Date.now().toString() };
  const current = await getCheckIns();
  const updated = [newCheckIn, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newCheckIn;
}

export async function deleteCheckIn(timestamp: Date): Promise<void> {
  const current = await getCheckIns();
  const updated = current.filter(c => new Date(c.timestamp).toISOString() !== timestamp.toISOString());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
