import React, { useState } from 'react';
import { Target, CheckSquare, MoreHorizontal, Trash2, Edit, Plus } from 'lucide-react';
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
  const completedTasks = goal.tasks.filter(task => task.completed).length;
  const progress = (completedTasks / (goal.tasks.length || 1)) * 100;

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
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Target className="text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">{goal.title}</h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={onEdit}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button 
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {goal.description && (
        <p className="text-gray-600 mb-4">{goal.description}</p>
      )}

      <div className="mt-2 space-y-2">
        {goal.tasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded group"
          >
            <div 
              className="flex items-center cursor-pointer flex-1"
              onClick={() => onToggleTask(task.id)}
            >
              <CheckSquare 
                className={`${task.completed ? 'text-green-500' : 'text-gray-400'} mr-2`}
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
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
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button
            onClick={handleAddTask}
            disabled={!newTaskTitle.trim()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Add
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowTaskInput(true)}
          className="mt-4 text-blue-500 flex items-center gap-2 hover:text-blue-600"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      )}

      <div className="mt-4">
        <div className="relative w-full bg-gray-200 rounded h-2">
          <div
            className="bg-blue-500 h-2 rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {completedTasks} of {goal.tasks.length} tasks completed
        </p>
      </div>
    </div>
  );
}