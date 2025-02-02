export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'side' | 'smoothie' | 'dessert';

export type DietaryRestriction = 
  | 'vegan-with-honey'
  | 'vegan-strict'
  | 'vegetarian-with-eggs'
  | 'vegetarian-no-eggs'
  | 'pescatarian'
  | 'regular';

export interface DietaryPreference {
  type: DietaryRestriction;
  customRestrictions?: string[]; // For custom allergies or restrictions
}

export interface Recipe {
  id: string;
  name: string;
  type: MealType;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  dietaryInfo: {
    isVeganWithHoney: boolean;
    isVeganStrict: boolean;
    isVegetarianWithEggs: boolean;
    isVegetarianNoEggs: boolean;
    isPescatarian: boolean;
    allergens: string[];
  };
}