export interface DailyCheckInFormData {
  mood: number;
  energy: number;
  notes: string;
}

export interface CheckInStatus {
  hasCheckedIn: boolean;
  lastCheckInDate: string | null;
}