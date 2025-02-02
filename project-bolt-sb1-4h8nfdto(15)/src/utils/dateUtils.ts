import { format, isToday as isTodayFns, isSameDay as isSameDayFns, parseISO, subDays, subWeeks, subMonths, subYears, isWithinInterval } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const isToday = (dateString: string): boolean => {
  return isTodayFns(parseISO(dateString));
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return isSameDayFns(date1, date2);
};

export const filterDataByDateRange = <T extends { timestamp?: Date | string; date?: string; completedAt?: string }>(
  data: T[],
  range: string,
  startDate?: string,
  endDate?: string
): T[] => {
  const now = new Date();
  let start: Date;
  let end = now;

  // Set the time to end of day for the end date
  end.setHours(23, 59, 59, 999);

  switch (range) {
    case 'day':
      start = subDays(now, 1);
      break;
    case 'week':
      start = subWeeks(now, 1);
      break;
    case 'month':
      start = subMonths(now, 1);
      break;
    case 'year':
      start = subYears(now, 1);
      break;
    case 'custom':
      if (startDate && endDate) {
        start = new Date(startDate);
        end = new Date(endDate);
        end.setHours(23, 59, 59, 999); // Set end date to end of day
      } else {
        start = subWeeks(now, 1); // Default to last week if custom range is invalid
      }
      break;
    default:
      start = subWeeks(now, 1);
  }

  // Set the time to start of day for the start date
  start.setHours(0, 0, 0, 0);

  return data.filter(item => {
    let itemDate: Date | null = null;

    if (item.timestamp) {
      itemDate = item.timestamp instanceof Date ? item.timestamp : new Date(item.timestamp);
    } else if (item.date) {
      itemDate = new Date(item.date);
    } else if (item.completedAt) {
      itemDate = new Date(item.completedAt);
    }

    if (!itemDate) return false;

    return isWithinInterval(itemDate, { start, end });
  });
};