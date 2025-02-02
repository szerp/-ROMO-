import React from 'react';
import { Calendar, Filter } from 'lucide-react';

interface HistoryFiltersProps {
  dateRange: string;
  onDateRangeChange: (range: string) => void;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

export default function HistoryFilters({
  dateRange,
  onDateRangeChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange
}: HistoryFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-500" />
          <select
            value={dateRange}
            onChange={(e) => onDateRangeChange(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        {dateRange === 'custom' && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <span className="text-gray-500">to</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}