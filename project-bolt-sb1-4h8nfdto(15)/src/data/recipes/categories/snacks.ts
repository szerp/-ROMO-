import type { Recipe } from '../types';

export const snackRecipes: Recipe[] = [
  // ... existing snacks ...

  {
    id: 'roasted-chickpeas',
    name: 'Crispy Roasted Chickpeas',
    type: 'snack',
    imageUrl: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&q=80',
    prepTime: 5,
    cookTime: 35,
    servings: 4,
    ingredients: [
      '2 cans chickpeas',
      '2 tbsp olive oil',
      '1 tsp cumin',
      '1 tsp paprika',
      '1/2 tsp garlic powder',
      'Salt to taste'
    ],
    instructions: [
      'Drain and dry chickpeas thoroughly',
      'Toss with oil and seasonings',
      'Roast at 400°F until crispy',
      'Let cool completely'
    ],
    tags: ['protein', 'crunchy', 'savory'],
    nutrition: {
      calories: 180,
      protein: 8,
      carbs: 22,
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
    id: 'energy-balls',
    name: 'No-Bake Energy Balls',
    type: 'snack',
    imageUrl: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 0,
    servings: 12,
    ingredients: [
      '1 cup oats',
      '1/2 cup almond butter',
      '1/4 cup maple syrup',
      '1/4 cup dark chocolate chips',
      '2 tbsp chia seeds',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Mix all ingredients in a bowl',
      'Roll into balls',
      'Refrigerate for 30 minutes',
      'Store in airtight container'
    ],
    tags: ['no-bake', 'protein', 'portable'],
    nutrition: {
      calories: 120,
      protein: 4,
      carbs: 15,
      fat: 7
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['nuts', 'oats']
    }
  },
  {
    id: 'veggie-hummus-cups',
    name: 'Rainbow Veggie Hummus Cups',
    type: 'snack',
    imageUrl: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    ingredients: [
      'Hummus',
      'Cherry tomatoes',
      'Cucumber',
      'Carrots',
      'Bell peppers',
      'Fresh herbs',
      'Olive oil drizzle'
    ],
    instructions: [
      'Chop vegetables into small pieces',
      'Fill cups with hummus',
      'Arrange vegetables on top',
      'Drizzle with olive oil',
      'Garnish with herbs'
    ],
    tags: ['fresh', 'party-food', 'colorful'],
    nutrition: {
      calories: 150,
      protein: 5,
      carbs: 18,
      fat: 8
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['sesame']
    }
  }
];