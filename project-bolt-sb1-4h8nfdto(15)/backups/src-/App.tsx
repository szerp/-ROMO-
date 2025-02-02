import React from 'react';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DailyCheckIn from './components/DailyCheckIn';
import Affirmation from './components/Affirmation';
import HobbyTracker from './components/hobby/HobbyTracker';
import MealPlanner from './components/meal/MealPlanner';
import GentleStretchesCard from './components/movement/GentleStretchesCard';
import JoyfulMovementCard from './components/movement/JoyfulMovementCard';
import SleepTracker from './components/sleep/SleepTracker';
import HistoryDashboard from './components/history/HistoryDashboard';
import GoalsList from './components/goals/GoalsList';
import { GoalsProvider } from './contexts/GoalsContext';
import { useCheckIns } from './hooks/useCheckIns';
import { useSleepLogs } from './hooks/useSleepLogs';
import { useMovements } from './hooks/useMovements';
import type { Movement } from './types';

const GENTLE_STRETCHES: Movement = {
  id: 'morning-stretch',
  name: 'Gentle Morning Stretches',
  description: 'Start your day with gentle stretches',
  difficulty: 'easy',
  duration: 10,
  jointFriendly: true,
  completed: false,
};

export default function App() {
  const { checkIns, addCheckIn, deleteCheckIn } = useCheckIns();
  const { sleepLogs, addSleepLog, deleteSleepLog } = useSleepLogs();
  const { 
    movements, 
    completeMovement, 
    trackJoyfulMovement, 
    deleteMovement 
  } = useMovements();

  return (
    <GoalsProvider>
      <DashboardLayout>
        <Affirmation />
        
        <HistoryDashboard 
          checkIns={checkIns}
          sleepLogs={sleepLogs}
          movements={movements}
          onDeleteCheckIn={deleteCheckIn}
          onDeleteSleep={deleteSleepLog}
          onDeleteMovement={deleteMovement}
        />

        <DailyCheckIn 
          onSubmit={addCheckIn}
          checkIns={checkIns}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <GentleStretchesCard
            exercise={GENTLE_STRETCHES}
            onComplete={completeMovement}
            completedMovements={movements}
          />
          
          <JoyfulMovementCard
            onTrackMovement={trackJoyfulMovement}
          />
        </div>

        <SleepTracker 
          onSubmit={addSleepLog}
          sleepLogs={sleepLogs}
        />
        
        <GoalsList />
        
        <HobbyTracker />
        
        <MealPlanner />
      </DashboardLayout>
    </GoalsProvider>
  );
}