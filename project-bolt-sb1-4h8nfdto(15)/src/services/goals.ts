import type { Goal, Task } from '../types';

const STORAGE_KEY = 'goals';

export async function getGoals(): Promise<Goal[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function addGoal(goal: Omit<Goal, 'id' | 'progress' | 'tasks'>): Promise<Goal> {
  const current = await getGoals();
  const newGoal: Goal = {
    id: Date.now().toString(),
    title: goal.title,
    description: goal.description,
    targetDate: goal.targetDate,
    progress: 0,
    tasks: []
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newGoal, ...current]));
  return newGoal;
}

export async function updateGoal(goal: Goal): Promise<Goal> {
  const current = await getGoals();
  const updated = current.map(g => g.id === goal.id ? goal : g);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return goal;
}

export async function deleteGoal(id: string): Promise<void> {
  const current = await getGoals();
  const updated = current.filter(g => g.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export async function addTask(goalId: string, task: Omit<Task, 'id'>): Promise<Task> {
  const current = await getGoals();
  const updated = current.map(goal => {
    if (goal.id === goalId) {
      const newTask: Task = { id: Date.now().toString(), ...task };
      return { ...goal, tasks: [...goal.tasks, newTask] };
    }
    return goal;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  const goal = updated.find(g => g.id === goalId);
  if (goal) return goal.tasks[goal.tasks.length - 1];
  throw new Error("Goal not found");
}

export async function updateTask(goalId: string, task: Task): Promise<Task> {
  const current = await getGoals();
  const updated = current.map(goal => {
    if (goal.id === goalId) {
      const updatedTasks = goal.tasks.map(t => t.id === task.id ? task : t);
      return { ...goal, tasks: updatedTasks };
    }
    return goal;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return task;
}

export async function deleteTask(goalId: string, taskId: string): Promise<void> {
  const current = await getGoals();
  const updated = current.map(goal => {
    if (goal.id === goalId) {
      return { ...goal, tasks: goal.tasks.filter(t => t.id !== taskId) };
    }
    return goal;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
