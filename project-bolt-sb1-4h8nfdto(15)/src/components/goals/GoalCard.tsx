import React, { useState } from 'react';
import { Target, CheckSquare, Trash2, Edit, Plus, Trophy } from 'lucide-react';
import type { Goal, Task } from '../../types';

interface GoalCardProps {
  goal: Goal;
  onEdit: () => void;
  onDelete: () => void;
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export default function GoalCard({ 
  goal, 
  onEdit, 
  onDelete, 
  onAddTask,
  onToggleTask,
  onDeleteTask 
}: GoalCardProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showTaskInput, setShowTaskInput] = useState(false);
  
  // Calculate progress based on completed tasks
  const totalTasks = goal.tasks.length;
  const completedTasks = goal.tasks.filter(task => task.completed).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      onAddTask({
        title: newTaskTitle.trim(),
        completed: false
      });
      setNewTaskTitle('');
      setShowTaskInput(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          <h3 className="text-lg font-semibold">{goal.title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={onDelete}
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {goal.description && (
        <p className="opacity-80 mb-4">{goal.description}</p>
      )}

      {/* Progress Indicator */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <span className="text-sm opacity-80">
            {completedTasks} of {totalTasks} tasks
          </span>
        </div>
        <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 bg-white/30 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {goal.tasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center justify-between p-2 hover:bg-white/5 rounded group"
          >
            <div 
              className="flex items-center cursor-pointer flex-1"
              onClick={() => onToggleTask(task.id)}
            >
              <CheckSquare 
                className={`${task.completed ? 'opacity-100' : 'opacity-60'} mr-2`}
              />
              <span className={task.completed ? 'line-through opacity-60' : ''}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {showTaskInput ? (
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter task title..."
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg
                     placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button
            onClick={handleAddTask}
            disabled={!newTaskTitle.trim()}
            className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowTaskInput(true)}
          className="mt-4 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      )}
    </div>
  );
}