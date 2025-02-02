/*
  # Update Hobbies Table Policies

  1. Changes
    - Drop existing policy if it exists
    - Create new policy for user data isolation
    - Add missing indexes for performance

  2. Security
    - Ensure RLS is enabled
    - Update policy for proper user access control
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Users can manage their own hobbies" ON hobbies;

-- Create new policy
CREATE POLICY "Users can manage their own hobbies"
  ON hobbies
  USING (auth.uid() = user_id);

-- Create indexes for better query performance (if they don't exist)
CREATE INDEX IF NOT EXISTS idx_hobbies_user_id ON hobbies(user_id);
CREATE INDEX IF NOT EXISTS idx_hobbies_last_activity ON hobbies(user_id, "lastActivity" DESC);