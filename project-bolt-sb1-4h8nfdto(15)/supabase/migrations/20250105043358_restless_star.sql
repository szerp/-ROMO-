/*
  # Add user isolation to all tables

  1. Changes
    - Add user_id foreign key to all tables
    - Enable RLS on all tables
    - Add RLS policies for user data isolation
    - Add indexes for performance

  2. Security
    - Users can only access their own data
    - Automatic user_id assignment on insert
    - Cascading deletes when user is deleted
*/

-- Add user_id to all tables that don't have it
ALTER TABLE hobbies
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update RLS policies
CREATE POLICY "Users can only view their own hobbies"
ON hobbies FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own hobbies"
ON hobbies FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own hobbies"
ON hobbies FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own hobbies"
ON hobbies FOR DELETE
USING (auth.uid() = user_id);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_hobbies_user_id ON hobbies(user_id);
CREATE INDEX IF NOT EXISTS idx_check_ins_user_timestamp ON check_ins(user_id, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_sleep_logs_user_date ON sleep_logs(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_movements_user_completed ON movements(user_id, completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_goals_user_created ON goals(user_id, created_at DESC);

-- Add function to set user_id on insert
CREATE OR REPLACE FUNCTION public.set_user_id()
RETURNS TRIGGER AS $$
BEGIN
  NEW.user_id := auth.uid();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add triggers to automatically set user_id
CREATE TRIGGER set_hobbies_user_id
  BEFORE INSERT ON hobbies
  FOR EACH ROW
  EXECUTE FUNCTION public.set_user_id();

CREATE TRIGGER set_check_ins_user_id
  BEFORE INSERT ON check_ins
  FOR EACH ROW
  EXECUTE FUNCTION public.set_user_id();

CREATE TRIGGER set_sleep_logs_user_id
  BEFORE INSERT ON sleep_logs
  FOR EACH ROW
  EXECUTE FUNCTION public.set_user_id();

CREATE TRIGGER set_movements_user_id
  BEFORE INSERT ON movements
  FOR EACH ROW
  EXECUTE FUNCTION public.set_user_id();

CREATE TRIGGER set_goals_user_id
  BEFORE INSERT ON goals
  FOR EACH ROW
  EXECUTE FUNCTION public.set_user_id();