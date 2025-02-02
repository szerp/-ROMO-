import React, { useState } from 'react';
import { TrendingUp, Search, Settings } from 'lucide-react';
import HistoryDashboard from '../components/history/HistoryDashboard';
import HistoryFilters from '../components/history/HistoryFilters';
import ActivityCharts from '../components/history/ActivityCharts';
import { useCheckIns } from '../hooks/useCheckIns';
import { useSleepLogs } from '../hooks/useSleepLogs';
import { useMovements } from '../hooks/useMovements';
import { filterDataByDateRange } from '../utils/dateUtils';

export default function History() {
  const { checkIns, deleteCheckIn } = useCheckIns();
  const { sleepLogs, deleteSleepLog } = useSleepLogs();
  const { movements, deleteMovement } = useMovements();

  const [dateRange, setDateRange] = useState('week');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showBackupModal, setShowBackupModal] = useState(false);

  // Filter data based on date range and search term
  const filteredCheckIns = filterDataByDateRange(checkIns, dateRange, startDate, endDate)
    .filter(ci => 
      ci.notes?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      new Date(ci.timestamp).toLocaleDateString().includes(searchTerm)
    );

  const filteredSleepLogs = filterDataByDateRange(sleepLogs, dateRange, startDate, endDate)
    .filter(log => 
      log.notes?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.date.includes(searchTerm)
    );

  const filteredMovements = filterDataByDateRange(movements, dateRange, startDate, endDate)
    .filter(m => 
      m.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-purple-500" />
          <h1 className="text-3xl font-bold text-gray-800">History & Analytics</h1>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search history..."
              className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => setShowBackupModal(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
            aria-label="Settings"
          >
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <HistoryFilters
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      <ActivityCharts
        checkIns={filteredCheckIns}
        sleepLogs={filteredSleepLogs}
        movements={filteredMovements}
      />

      <HistoryDashboard
        checkIns={filteredCheckIns}
        sleepLogs={filteredSleepLogs}
        movements={filteredMovements}
        onDeleteCheckIn={deleteCheckIn}
        onDeleteSleep={deleteSleepLog}
        onDeleteMovement={deleteMovement}
      />
    </div>
  );
}