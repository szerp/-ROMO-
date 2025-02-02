import React, { createContext, useContext, useState, useEffect } from 'react';
import { getGoals, addGoal as addGoalService, updateGoal as updateGoalService, 
         deleteGoal as deleteGoalService, addTask as addTaskService,
         updateTask as updateTaskService, deleteTask as deleteTaskService } from '../services/goals';
import type { Goal, Task } from '../types';

interface GoalsContextType {
  goals: Goal[];
  loading: boolean;
  error: string | null;
  addGoal: (goal: Omit<Goal, 'id' | 'progress' | 'tasks'>) => Promise<void>;
  updateGoal: (goal: Goal) => Promise<void>;
  deleteGoal: (goalId: string) => Promise<void>;
  addTask: (goalId: string, task: Omit<Task, 'id'>) => Promise<void>;
  updateTask: (goalId: string, task: Task) => Promise<void>;
  deleteTask: (goalId: string, taskId: string) => Promise<void>;
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const data = await getGoals();
      setGoals(data);
    } catch (err) {
      setError('Failed to load goals');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addGoal = async (newGoal: Omit<Goal, 'id' | 'progress' | 'tasks'>) => {
    try {
      const goal = await addGoalService(newGoal);
      setGoals(prev => [goal, ...prev]);
    } catch (err) {
      setError('Failed to add goal');
      console.error(err);
    }
  };

  const updateGoal = async (updatedGoal: Goal) => {
    try {
      await updateGoalService(updatedGoal);
      setGoals(prev => prev.map(goal => 
        goal.id === updatedGoal.id ? updatedGoal : goal
      ));
    } catch (err) {
      setError('Failed to update goal');
      console.error(err);
    }
  };

  const deleteGoal = async (goalId: string) => {
    try {
      await deleteGoalService(goalId);
      setGoals(prev => prev.filter(goal => goal.id !== goalId));
    } catch (err) {
      setError('Failed to delete goal');
      console.error(err);
    }
  };

  const addTask = async (goalId: string, task: Omit<Task, 'id'>) => {
    try {
      const newTask = await addTaskService(goalId, task);
      setGoals(prev => prev.map(goal => {
        if (goal.id !== goalId) return goal;
        return {
          ...goal,
          tasks: [...goal.tasks, newTask]
        };
      }));
    } catch (err) {
      setError('Failed to add task');
      console.error(err);
    }
  };

  const updateTask = async (goalId: string, updatedTask: Task) => {
    try {
      await updateTaskService(goalId, updatedTask);
      setGoals(prev => prev.map(goal => {
        if (goal.id !== goalId) return goal;
        return {
          ...goal,
          tasks: goal.tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
          )
        };
      }));
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  const deleteTask = async (goalId: string, taskId: string) => {
    try {
      await deleteTaskService(goalId, taskId);
      setGoals(prev => prev.map(goal => {
        if (goal.id !== goalId) return goal;
        return {
          ...goal,
          tasks: goal.tasks.filter(task => task.id !== taskId)
        };
      }));
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  return (
    <GoalsContext.Provider value={{
      goals,
      loading,
      error,
      addGoal,
      updateGoal,
      deleteGoal,
      addTask,
      updateTask,
      deleteTask
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