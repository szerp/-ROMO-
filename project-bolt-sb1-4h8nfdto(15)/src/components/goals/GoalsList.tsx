import React, { useState } from 'react';
import { Target, Plus } from 'lucide-react';
import ThemedCard from '../shared/ThemedCard';
import { useGoals } from '../../contexts/GoalsContext';
import GoalCard from './GoalCard';
import NewGoalForm from './NewGoalForm';
import EditGoalForm from './EditGoalForm';
import LoadingState from '../shared/LoadingState';
import ErrorState from '../shared/ErrorState';

export default function GoalsList() {
  const { goals, loading, error, addGoal, updateGoal, deleteGoal, addTask, updateTask, deleteTask } = useGoals();
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState<string | null>(null);

  if (loading) return <LoadingState message="Loading goals..." />;
  if (error) return <ErrorState message={error} />;

  return (
    <ThemedCard variant="goals">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Goals</h2>
        </div>
        <button
          onClick={() => setShowNewForm(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Goal
        </button>
      </div>

      {showNewForm && (
        <NewGoalForm
          onSubmit={(goal) => {
            addGoal(goal);
            setShowNewForm(false);
          }}
          onCancel={() => setShowNewForm(false)}
        />
      )}

      <div className="space-y-4">
        {goals.map(goal => (
          <React.Fragment key={goal.id}>
            {editingGoal === goal.id ? (
              <EditGoalForm
                goal={goal}
                onSubmit={(updatedGoal) => {
                  updateGoal(updatedGoal);
                  setEditingGoal(null);
                }}
                onCancel={() => setEditingGoal(null)}
              />
            ) : (
              <GoalCard
                goal={goal}
                onEdit={() => setEditingGoal(goal.id)}
                onDelete={() => deleteGoal(goal.id)}
                onAddTask={(task) => addTask(goal.id, task)}
                onToggleTask={(taskId) => {
                  const task = goal.tasks.find(t => t.id === taskId);
                  if (task) {
                    updateTask(goal.id, { ...task, completed: !task.completed });
                  }
                }}
                onDeleteTask={(taskId) => deleteTask(goal.id, taskId)}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </ThemedCard>
  );
}