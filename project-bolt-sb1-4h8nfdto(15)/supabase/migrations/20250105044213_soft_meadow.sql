/*
  # Fix Goals Schema

  1. Changes
    - Add missing columns to goals table
    - Update column names to match TypeScript types
    - Add proper indexes
    - Update RLS policies

  2. Security
    - Enable RLS
    - Add policies for CRUD operations
*/

-- Fix goals table structure
ALTER TABLE goals
ADD COLUMN IF NOT EXISTS progress INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS "targetDate" DATE;

-- Add tasks table if it doesn't exist
CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  goal_id UUID REFERENCES goals(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  optional BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Create policies for tasks
CREATE POLICY "Users can view their own tasks"
  ON tasks FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM goals
      WHERE goals.id = tasks.goal_id
      AND goals.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create tasks for their goals"
  ON tasks FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM goals
      WHERE goals.id = tasks.goal_id
      AND goals.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their own tasks"
  ON tasks FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM goals
      WHERE goals.id = tasks.goal_id
      AND goals.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their own tasks"
  ON tasks FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM goals
      WHERE goals.id = tasks.goal_id
      AND goals.user_id = auth.uid()
    )
  );

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_tasks_goal_id ON tasks(goal_id);
CREATE INDEX IF NOT EXISTS idx_goals_user_target ON goals(user_id, "targetDate");