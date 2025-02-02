import React from 'react';
import Affirmation from '../components/Affirmation';
import DailyCheckIn from '../components/DailyCheckIn';
import HobbyTracker from '../components/hobby/HobbyTracker';
import GentleStretchesCard from '../components/movement/GentleStretchesCard';
import JoyfulMovementCard from '../components/movement/JoyfulMovementCard';
import SleepTracker from '../components/sleep/SleepTracker';
import GoalsList from '../components/goals/GoalsList';
import RecentHistory from '../components/history/RecentHistory';
import { useCheckIns } from '../hooks/useCheckIns';
import { useSleepLogs } from '../hooks/useSleepLogs';
import { useMovements } from '../hooks/useMovements';
import type { Movement } from '../types';

const GENTLE_STRETCHES: Movement = {
  id: 'morning-stretch',
  name: 'Gentle Morning Stretches',
  description: 'Start your day with gentle stretches',
  difficulty: 'easy',
  duration: 10,
  jointFriendly: true,
  completed: false,
};

export default function Dashboard() {
  const { checkIns, addCheckIn, deleteCheckIn } = useCheckIns();
  const { sleepLogs, addSleepLog, deleteSleepLog } = useSleepLogs();
  const { movements, completeMovement, trackJoyfulMovement, deleteMovement } = useMovements();

  return (
    <div className="space-y-8">
      <Affirmation />

      <RecentHistory
        checkIns={checkIns}
        sleepLogs={sleepLogs}
        movements={movements}
        onDeleteCheckIn={deleteCheckIn}
        onDeleteSleep={deleteSleepLog}
        onDeleteMovement={deleteMovement}
      />
      
      <div className="w-full">
        <DailyCheckIn 
          onSubmit={addCheckIn}
          checkIns={checkIns}
        />
      </div>

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
    </div>
  );
}