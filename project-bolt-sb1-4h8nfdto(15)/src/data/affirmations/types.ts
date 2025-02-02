export interface Affirmation {
  id: string;
  category: 'self-love' | 'growth' | 'strength' | 'peace' | 'joy' | 'health' | 'mindfulness';
  teaser: string;
  full: string;
  tags: string[];
}