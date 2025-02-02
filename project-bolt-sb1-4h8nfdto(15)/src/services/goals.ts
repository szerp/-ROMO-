import { supabase } from '../lib/supabase';
import type { Goal, Task } from '../types';

export async function getGoals() {
  const { data, error } = await supabase
    .from('goals')
    .select(`
      id,
      title,
      description,
      "targetDate",
      progress,
      tasks (
        id,
        title,
        completed,
        optional
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Goal[];
}

export async function addGoal(goal: Omit<Goal, 'id' | 'progress' | 'tasks'>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('goals')
    .insert([{
      user_id: user.id,
      title: goal.title,
      description: goal.description,
      "targetDate": goal.targetDate,
      progress: 0
    }])
    .select(`
      id,
      title,
      description,
      "targetDate",
      progress
    `)
    .single();

  if (error) throw error;
  return { ...data, tasks: [] };
}

export async function updateGoal(goal: Goal) {
  const { data, error } = await supabase
    .from('goals')
    .update({
      title: goal.title,
      description: goal.description,
      "targetDate": goal.targetDate,
      progress: goal.progress,
      updated_at: new Date().toISOString()
    })
    .eq('id', goal.id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteGoal(id: string) {
  const { error } = await supabase
    .from('goals')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function addTask(goalId: string, task: Omit<Task, 'id'>) {
  const { data, error } = await supabase
    .from('tasks')
    .insert([{
      goal_id: goalId,
      title: task.title,
      completed: task.completed,
      optional: task.optional
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateTask(goalId: string, task: Task) {
  const { data, error } = await supabase
    .from('tasks')
    .update({
      title: task.title,
      completed: task.completed,
      optional: task.optional,
      updated_at: new Date().toISOString()
    })
    .eq('id', task.id)
    .eq('goal_id', goalId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteTask(goalId: string, taskId: string) {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId)
    .eq('goal_id', goalId);

  if (error) throw error;
}