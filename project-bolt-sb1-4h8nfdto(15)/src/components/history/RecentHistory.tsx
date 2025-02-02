import React from 'react';
import { Calendar, Moon, Sun, Heart } from 'lucide-react';
import SectionCard from '../shared/SectionCard';
import ActivityCard from './ActivityCard';
import { formatDate } from '../../utils/dateUtils';
import type { DailyCheckInData, Sleep, Movement } from '../../types';

interface RecentHistoryProps {
  checkIns: DailyCheckInData[];
  sleepLogs: Sleep[];
  movements: Movement[];
  onDeleteCheckIn: (timestamp: Date) => void;
  onDeleteSleep: (date: string) => void;
  onDeleteMovement: (id: string) => void;
}

export default function RecentHistory({ 
  checkIns, 
  sleepLogs, 
  movements,
}: RecentHistoryProps) {
  const recentCheckIns = checkIns.slice(-3);
  const recentSleepLogs = sleepLogs.slice(-3);
  const gentleStretches = movements
    .filter(m => m.name === 'Gentle Morning Stretches')
    .slice(-3);
  const joyfulMovements = movements
    .filter(m => m.name === 'Joyful Movement')
    .slice(-3);

  return (
    <SectionCard title="Recent Activity" icon={Calendar}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ActivityCard title="Check-ins" icon={Calendar} variant="check-ins">
          {recentCheckIns.map((checkIn) => (
            <div key={checkIn.timestamp.toString()} className="border-b border-primary/10 pb-2 last:border-0">
              <div className="text-sm opacity-80">
                {formatDate(new Date(checkIn.timestamp))}
              </div>
              <div className="text-sm">
                <span>Mood: {checkIn.mood}/10</span>
                <span className="mx-2">•</span>
                <span>Energy: {checkIn.energy}/10</span>
              </div>
            </div>
          ))}
        </ActivityCard>

        <ActivityCard title="Sleep" icon={Moon} variant="sleep">
          {recentSleepLogs.map((sleep) => (
            <div key={sleep.date} className="border-b border-secondary/10 pb-2 last:border-0">
              <div className="text-sm opacity-80">{sleep.date}</div>
              <div className="text-sm">
                <span>{sleep.hoursSlept}h sleep</span>
                <span className="mx-2">•</span>
                <span>Quality: {sleep.quality}/10</span>
              </div>
            </div>
          ))}
        </ActivityCard>

        <ActivityCard title="Morning Stretches" icon={Sun} variant="stretches">
          {gentleStretches.map((movement) => (
            <div key={movement.completedAt} className="border-b border-accent/10 pb-2 last:border-0">
              <div className="text-sm opacity-80">
                {movement.completedAt ? formatDate(new Date(movement.completedAt)) : ''}
              </div>
              <div className="text-sm">{movement.duration} minutes</div>
            </div>
          ))}
        </ActivityCard>

        <ActivityCard title="Joyful Movement" icon={Heart} variant="movement">
          {joyfulMovements.map((movement) => (
            <div key={movement.completedAt} className="border-b border-primary-light/10 pb-2 last:border-0">
              <div className="text-sm opacity-80">
                {movement.completedAt ? formatDate(new Date(movement.completedAt)) : ''}
              </div>
              <div className="text-sm line-clamp-1">{movement.description}</div>
              <div className="text-xs opacity-80">{movement.duration} minutes</div>
            </div>
          ))}
        </ActivityCard>
      </div>
    </SectionCard>
  );
}