import React from 'react';
import { Calendar, Activity, Moon, Trash2 } from 'lucide-react';
import type { DailyCheckInData, Sleep, Movement } from '../../types';
import { formatDate } from '../../utils/dateUtils';

interface HistoryDashboardProps {
  checkIns: DailyCheckInData[];
  sleepLogs: Sleep[];
  movements: Movement[];
  onDeleteCheckIn: (timestamp: Date) => void;
  onDeleteSleep: (date: string) => void;
  onDeleteMovement: (id: string) => void;
}

export default function HistoryDashboard({ 
  checkIns, 
  sleepLogs, 
  movements,
  onDeleteCheckIn,
  onDeleteSleep,
  onDeleteMovement
}: HistoryDashboardProps) {
  const gentleStretches = movements.filter(m => m.name === 'Gentle Morning Stretches');
  const joyfulMovements = movements.filter(m => m.name === 'Joyful Movement');

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-[#FF69B4] mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6" />
        History Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#FFF0F5] to-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-[#FF69B4] mb-4">Daily Check-ins</h3>
          <div className="space-y-2">
            {checkIns.slice(-5).map((checkIn) => (
              <div key={checkIn.timestamp.toString()} className="border-b border-[#FFB6C1] pb-2 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">
                    {formatDate(new Date(checkIn.timestamp))}
                  </div>
                  <div>
                    <span>Mood: {checkIn.mood}/10</span>
                    <span className="mx-2">•</span>
                    <span>Energy: {checkIn.energy}/10</span>
                  </div>
                </div>
                <button 
                  onClick={() => onDeleteCheckIn(new Date(checkIn.timestamp))}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFF0F5] to-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-[#40E0D0] mb-4">Sleep Tracking</h3>
          <div className="space-y-2">
            {sleepLogs.slice(-5).map((sleep) => (
              <div key={sleep.date} className="border-b border-[#FFB6C1] pb-2 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">{sleep.date}</div>
                  <div>
                    <span>{sleep.hoursSlept}h sleep</span>
                    <span className="mx-2">•</span>
                    <span>Quality: {sleep.quality}/10</span>
                  </div>
                </div>
                <button 
                  onClick={() => onDeleteSleep(sleep.date)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFF0F5] to-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Gentle Stretches</h3>
          <div className="space-y-2">
            {gentleStretches.slice(-5).map((movement) => (
              <div key={movement.completedAt} className="border-b border-[#FFB6C1] pb-2 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">
                    {movement.completedAt ? formatDate(new Date(movement.completedAt)) : ''}
                  </div>
                  <div>{movement.name} - {movement.duration} minutes</div>
                </div>
                <button 
                  onClick={() => onDeleteMovement(movement.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFF0F5] to-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Joyful Movement</h3>
          <div className="space-y-2">
            {joyfulMovements.slice(-5).map((movement) => (
              <div key={movement.completedAt} className="border-b border-[#FFB6C1] pb-2 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">
                    {movement.completedAt ? formatDate(new Date(movement.completedAt)) : ''}
                  </div>
                  <div>{movement.description} - {movement.duration} minutes</div>
                </div>
                <button 
                  onClick={() => onDeleteMovement(movement.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}