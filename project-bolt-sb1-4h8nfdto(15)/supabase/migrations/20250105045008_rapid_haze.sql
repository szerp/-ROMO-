/*
  # Fix Hobbies Table Schema

  1. Changes
    - Drop existing table if it exists
    - Create new table with correct column names
    - Add proper indexes
    - Set up RLS policies

  2. Security
    - Enable RLS
    - Add policy for user data isolation
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS hobbies CASCADE;

-- Create hobbies table with correct column names
CREATE TABLE hobbies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  "timeSpent" INTEGER DEFAULT 0,
  goal INTEGER NOT NULL,
  priority TEXT NOT NULL DEFAULT 'medium',
  frequency TEXT NOT NULL DEFAULT 'weekly',
  "lastActivity" TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE hobbies ENABLE ROW LEVEL SECURITY;

-- Create RLS policy
CREATE POLICY "Users can manage their own hobbies"
  ON hobbies
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX idx_hobbies_user_id ON hobbies(user_id);
CREATE INDEX idx_hobbies_last_activity ON hobbies(user_id, "lastActivity" DESC);

-- Create trigger to automatically set updated_at
CREATE OR REPLACE FUNCTION update_hobbies_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_hobbies_updated_at
  BEFORE UPDATE ON hobbies
  FOR EACH ROW
  EXECUTE FUNCTION update_hobbies_updated_at();