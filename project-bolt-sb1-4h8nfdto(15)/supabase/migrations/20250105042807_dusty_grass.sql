/*
  # Create User Data Tables

  1. New Tables
    - `check_ins`: Daily user check-ins
    - `sleep_logs`: User sleep tracking data
    - `movements`: User movement tracking
    - `goals`: User goals
    - `tasks`: Tasks belonging to goals
    - `hobbies`: User hobby tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Check-ins table
CREATE TABLE IF NOT EXISTS check_ins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mood INTEGER NOT NULL,
  energy INTEGER NOT NULL,
  notes TEXT,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE check_ins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own check-ins"
  ON check_ins
  USING (auth.uid() = user_id);

-- Sleep logs table
CREATE TABLE IF NOT EXISTS sleep_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  hours_slept DECIMAL(4,2) NOT NULL,
  quality INTEGER NOT NULL,
  notes TEXT,
  wind_down_started BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, date)
);

ALTER TABLE sleep_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own sleep logs"
  ON sleep_logs
  USING (auth.uid() = user_id);

-- Movements table
CREATE TABLE IF NOT EXISTS movements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  difficulty TEXT NOT NULL,
  duration INTEGER NOT NULL,
  joint_friendly BOOLEAN DEFAULT false,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE movements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own movements"
  ON movements
  USING (auth.uid() = user_id);

-- Goals table
CREATE TABLE IF NOT EXISTS goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  target_date DATE,
  progress INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own goals"
  ON goals
  USING (auth.uid() = user_id);

-- Tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  goal_id UUID NOT NULL REFERENCES goals(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  optional BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage tasks through their goals"
  ON tasks
  USING (
    EXISTS (
      SELECT 1 FROM goals
      WHERE goals.id = tasks.goal_id
      AND goals.user_id = auth.uid()
    )
  );

-- Hobbies table
CREATE TABLE IF NOT EXISTS hobbies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  time_spent INTEGER DEFAULT 0,
  goal INTEGER NOT NULL,
  priority TEXT NOT NULL,
  frequency TEXT NOT NULL,
  last_activity TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE hobbies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own hobbies"
  ON hobbies
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS check_ins_user_id_timestamp_idx ON check_ins(user_id, timestamp);
CREATE INDEX IF NOT EXISTS sleep_logs_user_id_date_idx ON sleep_logs(user_id, date);
CREATE INDEX IF NOT EXISTS movements_user_id_completed_at_idx ON movements(user_id, completed_at);
CREATE INDEX IF NOT EXISTS goals_user_id_idx ON goals(user_id);
CREATE INDEX IF NOT EXISTS hobbies_user_id_idx ON hobbies(user_id);