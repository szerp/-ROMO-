import { format, isToday as isTodayFns, isSameDay as isSameDayFns, parseISO } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const isToday = (dateString: string): boolean => {
  return isTodayFns(parseISO(dateString));
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return isSameDayFns(date1, date2);
};