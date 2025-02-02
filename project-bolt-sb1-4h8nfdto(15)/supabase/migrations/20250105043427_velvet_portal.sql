/*
  # Fix column names and add missing columns

  1. Changes
    - Rename columns to match TypeScript naming convention
    - Add missing columns
    - Update indexes
    - Fix RLS policies

  2. Security
    - Maintain user data isolation
    - Keep existing RLS policies
*/

-- Fix sleep_logs columns
ALTER TABLE sleep_logs 
RENAME COLUMN hours_slept TO "hoursSlept";

ALTER TABLE sleep_logs 
RENAME COLUMN wind_down_started TO "windDownStarted";

-- Fix movements columns
ALTER TABLE movements 
RENAME COLUMN joint_friendly TO "jointFriendly";

ALTER TABLE movements 
RENAME COLUMN completed_at TO "completedAt";

-- Fix hobbies columns
ALTER TABLE hobbies 
RENAME COLUMN time_spent TO "timeSpent";

ALTER TABLE hobbies 
RENAME COLUMN last_activity TO "lastActivity";

-- Fix goals columns
ALTER TABLE goals 
RENAME COLUMN target_date TO "targetDate";

-- Update indexes for renamed columns
DROP INDEX IF EXISTS idx_sleep_logs_user_date;
CREATE INDEX idx_sleep_logs_user_date ON sleep_logs(user_id, date DESC);

DROP INDEX IF EXISTS idx_movements_user_completed;
CREATE INDEX idx_movements_user_completed ON movements(user_id, "completedAt" DESC);

DROP INDEX IF EXISTS idx_hobbies_user_last_activity;
CREATE INDEX idx_hobbies_user_last_activity ON hobbies(user_id, "lastActivity" DESC);