import { dailyAffirmations } from './daily';
import type { Affirmation } from './types';

// Get a random affirmation
export function getRandomAffirmation(): Affirmation {
  const index = Math.floor(Math.random() * dailyAffirmations.length);
  return dailyAffirmations[index];
}

// Get affirmations by category
export function getAffirmationsByCategory(category: Affirmation['category']): Affirmation[] {
  return dailyAffirmations.filter(affirmation => affirmation.category === category);
}

// Get affirmations by tag
export function getAffirmationsByTag(tag: string): Affirmation[] {
  return dailyAffirmations.filter(affirmation => 
    affirmation.tags.includes(tag.toLowerCase())
  );
}

// Export all affirmations for direct access if needed
export { dailyAffirmations };