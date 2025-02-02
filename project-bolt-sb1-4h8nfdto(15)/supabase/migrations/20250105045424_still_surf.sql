-- Drop existing table and recreate with correct structure
DROP TABLE IF EXISTS hobbies CASCADE;

CREATE TABLE hobbies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  time_spent INTEGER DEFAULT 0,
  goal INTEGER NOT NULL,
  priority TEXT NOT NULL DEFAULT 'medium',
  frequency TEXT NOT NULL DEFAULT 'weekly',
  last_activity TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE hobbies ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own hobbies"
  ON hobbies FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own hobbies"
  ON hobbies FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own hobbies"
  ON hobbies FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own hobbies"
  ON hobbies FOR DELETE
  USING (auth.uid() = user_id);

-- Create indexes
CREATE INDEX idx_hobbies_user_id ON hobbies(user_id);
CREATE INDEX idx_hobbies_last_activity ON hobbies(user_id, last_activity DESC);

-- Create updated_at trigger
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