import { isSameDay } from '../../utils/dateUtils';
import type { DailyCheckInData } from '../../types';

export function useCheckInStatus(checkIns: DailyCheckInData[]) {
  const hasCheckedInToday = checkIns.some(ci => {
    const checkInDate = new Date(ci.timestamp);
    const today = new Date();
    return isSameDay(checkInDate, today);
  });

  return {
    hasCheckedIn: hasCheckedInToday
  };
}