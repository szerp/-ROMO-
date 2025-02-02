import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../shared/Card';
import type { DailyCheckInData, Sleep, Movement } from '../../types';

interface ActivityChartsProps {
  checkIns: DailyCheckInData[];
  sleepLogs: Sleep[];
  movements: Movement[];
}

export default function ActivityCharts({ checkIns, sleepLogs, movements }: ActivityChartsProps) {
  const moodData = checkIns.map(ci => ({
    date: new Date(ci.timestamp).toLocaleDateString(),
    mood: ci.mood,
    energy: ci.energy
  }));

  const sleepData = sleepLogs.map(log => ({
    date: log.date,
    hours: log.hoursSlept,
    quality: log.quality
  }));

  const gentleStretches = movements
    .filter(m => m.name === 'Gentle Morning Stretches')
    .map(m => ({
      date: new Date(m.completedAt!).toLocaleDateString(),
      duration: m.duration
    }));

  const joyfulMovements = movements
    .filter(m => m.name === 'Joyful Movement')
    .map(m => ({
      date: new Date(m.completedAt!).toLocaleDateString(),
      duration: m.duration
    }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <h3 className="text-lg font-semibold text-text mb-4">Mood & Energy Trends</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="date" stroke="var(--color-text)" />
              <YAxis stroke="var(--color-text)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="mood" stroke="var(--color-primary)" name="Mood" />
              <Line type="monotone" dataKey="energy" stroke="var(--color-secondary)" name="Energy" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-text mb-4">Sleep Patterns</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer>
            <LineChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="date" stroke="var(--color-text)" />
              <YAxis stroke="var(--color-text)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="hours" stroke="var(--color-primary)" name="Hours Slept" />
              <Line type="monotone" dataKey="quality" stroke="var(--color-accent)" name="Sleep Quality" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}