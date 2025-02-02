import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Goal, Task } from '../types';

interface GoalsContextType {
  goals: Goal[];
  addGoal: (goal: Omit<Goal, 'id' | 'progress' | 'tasks'>) => void;
  updateGoal: (goal: Goal) => void;
  deleteGoal: (goalId: string) => void;
  addTask: (goalId: string, task: Omit<Task, 'id'>) => void;
  updateTask: (goalId: string, task: Task) => void;
  deleteTask: (goalId: string, taskId: string) => void;
  reorderTasks: (goalId: string, taskIds: string[]) => void;
  reorderGoals: (goalIds: string[]) => void;
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  const [goals, setGoals] = useLocalStorage<Goal[]>('goals', []);

  const addGoal = (newGoal: Omit<Goal, 'id' | 'progress' | 'tasks'>) => {
    setGoals(prev => [...prev, {
      ...newGoal,
      id: crypto.randomUUID(),
      progress: 0,
      tasks: []
    }]);
  };

  const updateGoal = (updatedGoal: Goal) => {
    setGoals(prev => prev.map(goal => 
      goal.id === updatedGoal.id ? updatedGoal : goal
    ));
  };

  const deleteGoal = (goalId: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== goalId));
  };

  const addTask = (goalId: string, task: Omit<Task, 'id'>) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id !== goalId) return goal;
      const newTask = { ...task, id: crypto.randomUUID() };
      return {
        ...goal,
        tasks: [...goal.tasks, newTask]
      };
    }));
  };

  const updateTask = (goalId: string, updatedTask: Task) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id !== goalId) return goal;
      return {
        ...goal,
        tasks: goal.tasks.map(task => 
          task.id === updatedTask.id ? updatedTask : task
        )
      };
    }));
  };

  const deleteTask = (goalId: string, taskId: string) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id !== goalId) return goal;
      return {
        ...goal,
        tasks: goal.tasks.filter(task => task.id !== taskId)
      };
    }));
  };

  const reorderTasks = (goalId: string, taskIds: string[]) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id !== goalId) return goal;
      const reorderedTasks = taskIds.map(taskId => 
        goal.tasks.find(task => task.id === taskId)!
      );
      return { ...goal, tasks: reorderedTasks };
    }));
  };

  const reorderGoals = (goalIds: string[]) => {
    setGoals(prev => {
      const reorderedGoals = goalIds.map(goalId => 
        prev.find(goal => goal.id === goalId)!
      );
      return reorderedGoals;
    });
  };

  return (
    <GoalsContext.Provider value={{
      goals,
      addGoal,
      updateGoal,
      deleteGoal,
      addTask,
      updateTask,
      deleteTask,
      reorderTasks,
      reorderGoals
    }}>
      {children}
    </GoalsContext.Provider>
  );
}

export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) throw new Error('useGoals must be used within a GoalsProvider');
  return context;
};