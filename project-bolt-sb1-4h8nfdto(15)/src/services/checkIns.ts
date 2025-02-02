import type { DailyCheckInData } from '../types';

const STORAGE_KEY = 'check_ins';

export async function getCheckIns(): Promise<DailyCheckInData[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed: DailyCheckInData[] = JSON.parse(data);
      // Sort by timestamp descending
      return parsed.sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    } catch (error) {
      console.error("Error parsing check-ins from local storage:", error);
      return [];
    }
  }
  return [];
}

export async function addCheckIn(
  checkIn: Omit<DailyCheckInData, 'id'>
): Promise<DailyCheckInData> {
  // Generate an id using the current timestamp.
  // Make sure your DailyCheckInData type includes an "id" property.
  const newCheckIn = { ...checkIn, id: Date.now().toString() } as DailyCheckInData;
  const current = await getCheckIns();
  const updated = [newCheckIn, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newCheckIn;
}

export async function deleteCheckIn(timestamp: Date): Promise<void> {
  const current = await getCheckIns();
  const updated = current.filter(
    (checkIn) =>
      new Date(checkIn.timestamp).toISOString() !== timestamp.toISOString()
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
