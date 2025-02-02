import { useLocalStorage } from './useLocalStorage';
import { isSameDay } from '../utils/dateUtils';
import type { DailyCheckInData } from '../types';

export function useCheckIns() {
  const [checkIns, setCheckIns] = useLocalStorage<DailyCheckInData[]>('checkIns', []);

  const addCheckIn = (checkIn: DailyCheckInData) => {
    setCheckIns([...checkIns, checkIn]);
  };

  const deleteCheckIn = (timestamp: Date) => {
    setCheckIns(checkIns.filter(ci => !isSameDay(new Date(ci.timestamp), timestamp)));
  };

  return {
    checkIns,
    addCheckIn,
    deleteCheckIn
  };
}