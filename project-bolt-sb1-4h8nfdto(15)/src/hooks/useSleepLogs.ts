import { useState, useEffect } from 'react';
import { getSleepLogs, addSleepLog as addSleepLogService, deleteSleepLog as deleteSleepLogService } from '../services/sleepLogs';
import type { Sleep } from '../types';

export function useSleepLogs() {
  const [sleepLogs, setSleepLogs] = useState<Sleep[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSleepLogs();
  }, []);

  const loadSleepLogs = async () => {
    try {
      const data = await getSleepLogs();
      setSleepLogs(data);
    } catch (err) {
      setError('Failed to load sleep logs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addSleepLog = async (sleep: Sleep) => {
    try {
      const newLog = await addSleepLogService(sleep);
      setSleepLogs(prev => [newLog, ...prev]);
    } catch (err) {
      setError('Failed to add sleep log');
      console.error(err);
    }
  };

  const deleteSleepLog = async (date: string) => {
    try {
      await deleteSleepLogService(date);
      setSleepLogs(prev => prev.filter(log => log.date !== date));
    } catch (err) {
      setError('Failed to delete sleep log');
      console.error(err);
    }
  };

  return {
    sleepLogs,
    loading,
    error,
    addSleepLog,
    deleteSleepLog
  };
}