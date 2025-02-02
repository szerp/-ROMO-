import { useLocalStorage } from './useLocalStorage';
import type { Sleep } from '../types';

export function useSleepLogs() {
  const [sleepLogs, setSleepLogs] = useLocalStorage<Sleep[]>('sleepLogs', []);

  const addSleepLog = (sleep: Sleep) => {
    setSleepLogs([...sleepLogs, sleep]);
  };

  const deleteSleepLog = (date: string) => {
    setSleepLogs(sleepLogs.filter(log => log.date !== date));
  };

  return {
    sleepLogs,
    addSleepLog,
    deleteSleepLog
  };
}