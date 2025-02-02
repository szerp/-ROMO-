import { useState, useEffect } from 'react';
import { getCheckIns, addCheckIn as addCheckInService, deleteCheckIn as deleteCheckInService } from '../services/checkIns';
import type { DailyCheckInData } from '../types';

export function useCheckIns() {
  const [checkIns, setCheckIns] = useState<DailyCheckInData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCheckIns();
  }, []);

  const loadCheckIns = async () => {
    try {
      const data = await getCheckIns();
      setCheckIns(data);
    } catch (err) {
      setError('Failed to load check-ins');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addCheckIn = async (checkIn: DailyCheckInData) => {
    try {
      const newCheckIn = await addCheckInService(checkIn);
      setCheckIns(prev => [newCheckIn, ...prev]);
    } catch (err) {
      setError('Failed to add check-in');
      console.error(err);
    }
  };

  const deleteCheckIn = async (timestamp: Date) => {
    try {
      await deleteCheckInService(timestamp);
      setCheckIns(prev => prev.filter(ci => ci.timestamp !== timestamp));
    } catch (err) {
      setError('Failed to delete check-in');
      console.error(err);
    }
  };

  return {
    checkIns,
    loading,
    error,
    addCheckIn,
    deleteCheckIn
  };
}