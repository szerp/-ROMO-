export interface Affirmation {
  teaser: string;
  full: string;
}

export interface DailyCheckInData {
  mood: number;
  energy: number;
  notes: string;
  timestamp: Date;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  targetDate?: Date;
  progress: number;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  optional?: boolean;
}

export interface Hobby {
  id: string;
  name: string;
  timeSpent: number;
  goal: number;
  priority: 'high' | 'medium' | 'low';
  frequency: 'daily' | 'weekly' | 'monthly';
  lastActivity: string;
}

export interface Sleep {
  date: string;
  hoursSlept: number;
  quality: number;
  notes: string;
  windDownStarted: boolean;
}

export interface Movement {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  duration: number;
  jointFriendly: boolean;
  completed: boolean;
  completedAt?: string;
}