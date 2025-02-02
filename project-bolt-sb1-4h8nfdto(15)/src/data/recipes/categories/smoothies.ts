import type { Recipe } from '../types';

export const smoothieRecipes: Recipe[] = [
  // ... existing smoothies ...

  {
    id: 'tropical-turmeric',
    name: 'Golden Tropical Turmeric Smoothie',
    type: 'smoothie',
    imageUrl: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&q=80',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    ingredients: [
      '1 cup mango chunks',
      '1/2 cup pineapple',
      '1 banana',
      '1 tsp turmeric',
      '1/4 tsp black pepper',
      '1 cup coconut milk',
      'Optional: 1 tbsp coconut oil'
    ],
    instructions: [
      'Combine all ingredients in blender',
      'Blend until creamy',
      'Add ice if desired',
      'Sprinkle extra turmeric on top'
    ],
    tags: ['anti-inflammatory', 'tropical', 'golden'],
    nutrition: {
      calories: 260,
      protein: 4,
      carbs: 48,
      fat: 8
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: []
    }
  },
  {
    id: 'chocolate-pb',
    name: 'Chocolate Peanut Butter Protein Smoothie',
    type: 'smoothie',
    imageUrl: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=80',
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    ingredients: [
      '1 frozen banana',
      '2 tbsp peanut butter',
      '1 scoop chocolate protein powder',
      '1 tbsp cacao powder',
      '1 cup oat milk',
      '1 date for sweetness',
      'Ice cubes'
    ],
    instructions: [
      'Blend all ingredients until smooth',
      'Add more milk if needed',
      'Top with cacao nibs if desired'
    ],
    tags: ['protein', 'dessert-like', 'post-workout'],
    nutrition: {
      calories: 380,
      protein: 25,
      carbs: 42,
      fat: 16
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['peanuts']
    }
  }
];