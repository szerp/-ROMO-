import React, { useState } from 'react';
import { Plus, Target } from 'lucide-react';
import { useGoals } from '../../contexts/GoalsContext';
import GoalCard from './GoalCard';
import NewGoalForm from './NewGoalForm';
import EditGoalForm from './EditGoalForm';

export default function GoalsList() {
  const { goals, addGoal, updateGoal, deleteGoal, addTask, updateTask, deleteTask } = useGoals();
  const [showNewForm, setShowNewForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState<string | null>(null);

  const handleAddTask = (goalId: string, task: Omit<Task, 'id'>) => {
    addTask(goalId, task);
  };

  const handleToggleTask = (goalId: string, taskId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;

    const task = goal.tasks.find(t => t.id === taskId);
    if (!task) return;

    updateTask(goalId, { ...task, completed: !task.completed });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800">Goals</h2>
        </div>
        <button
          onClick={() => setShowNewForm(true)}
          className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-200"
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
                onAddTask={(task) => handleAddTask(goal.id, task)}
                onToggleTask={(taskId) => handleToggleTask(goal.id, taskId)}
                onDeleteTask={(taskId) => deleteTask(goal.id, taskId)}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}