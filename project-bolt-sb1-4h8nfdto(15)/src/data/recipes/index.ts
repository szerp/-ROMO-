import { breakfastRecipes } from './categories/breakfast';
import { lunchRecipes } from './categories/lunch';
import { dinnerRecipes } from './categories/dinner';
import { smoothieRecipes } from './categories/smoothies';
import { snackRecipes } from './categories/snacks';
import { dessertRecipes } from './categories/desserts';
import type { Recipe, DietaryPreference } from './types';

// Combine all recipes into a single array
export const allRecipes: Recipe[] = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...smoothieRecipes,
  ...snackRecipes,
  ...dessertRecipes,
];

// Debug logging to help identify any issues
console.log('Recipe counts by category:', {
  breakfast: breakfastRecipes.length,
  lunch: lunchRecipes.length,
  dinner: dinnerRecipes.length,
  smoothies: smoothieRecipes.length,
  snacks: snackRecipes.length,
  desserts: dessertRecipes.length,
  total: allRecipes.length
});

export function getFeaturedRecipesByTime(dietaryPreference: DietaryPreference): Recipe[] {
  const hour = new Date().getHours();
  let mealType: 'breakfast' | 'lunch' | 'dinner';

  if (hour >= 5 && hour < 11) {
    mealType = 'breakfast';
  } else if (hour >= 11 && hour < 16) {
    mealType = 'lunch';
  } else {
    mealType = 'dinner';
  }

  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesDiet = dietaryPreference.type === 'regular' || (
      dietaryPreference.type === 'vegan-strict' ? recipe.dietaryInfo.isVeganStrict :
      dietaryPreference.type === 'vegan-with-honey' ? recipe.dietaryInfo.isVeganWithHoney :
      dietaryPreference.type === 'vegetarian-with-eggs' ? recipe.dietaryInfo.isVegetarianWithEggs :
      dietaryPreference.type === 'vegetarian-no-eggs' ? recipe.dietaryInfo.isVegetarianNoEggs :
      dietaryPreference.type === 'pescatarian' ? recipe.dietaryInfo.isPescatarian : true
    );

    return recipe.type === mealType && matchesDiet;
  });

  return shuffleArray(filteredRecipes).slice(0, 3);
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Export individual categories for direct access
export {
  breakfastRecipes,
  lunchRecipes,
  dinnerRecipes,
  smoothieRecipes,
  snackRecipes,
  dessertRecipes
};