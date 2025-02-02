import type { Recipe } from '../types';

export const lunchRecipes: Recipe[] = [
  {
    id: 'asian-noodle-salad',
    name: 'Asian Noodle Salad',
    type: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1547928576-b822bc410bdf?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      'Rice noodles',
      'Shredded carrots',
      'Red cabbage',
      'Edamame',
      'Green onions',
      'Sesame seeds',
      'Ginger-sesame dressing'
    ],
    instructions: [
      'Cook noodles according to package',
      'Prepare vegetables',
      'Make dressing',
      'Combine all ingredients',
      'Chill before serving'
    ],
    tags: ['asian-inspired', 'cold', 'make-ahead'],
    nutrition: {
      calories: 320,
      protein: 10,
      carbs: 52,
      fat: 12
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['soy', 'sesame']
    }
  },
  {
    id: 'mediterranean-wrap',
    name: 'Mediterranean Hummus Wrap',
    type: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&q=80',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    ingredients: [
      'Whole grain wraps',
      'Hummus',
      'Cucumber',
      'Tomatoes',
      'Kalamata olives',
      'Red onion',
      'Fresh herbs'
    ],
    instructions: [
      'Spread hummus on wraps',
      'Layer vegetables',
      'Add olives and herbs',
      'Roll tightly',
      'Cut diagonally'
    ],
    tags: ['mediterranean', 'no-cook', 'portable'],
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 48,
      fat: 18
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['wheat', 'sesame']
    }
  },
  {
    id: 'quinoa-power-bowl',
    name: 'Quinoa Power Bowl',
    type: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    ingredients: [
      'Quinoa',
      'Black beans',
      'Roasted sweet potato',
      'Avocado',
      'Kale',
      'Pumpkin seeds',
      'Lime-tahini dressing'
    ],
    instructions: [
      'Cook quinoa',
      'Roast sweet potato',
      'Massage kale',
      'Assemble bowls',
      'Top with dressing'
    ],
    tags: ['protein', 'bowl', 'meal-prep'],
    nutrition: {
      calories: 450,
      protein: 16,
      carbs: 62,
      fat: 20
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['sesame']
    }
  },
  {
    id: 'chickpea-salad',
    name: 'Mediterranean Chickpea Salad',
    type: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    ingredients: [
      'Chickpeas',
      'Cherry tomatoes',
      'Cucumber',
      'Red onion',
      'Fresh parsley',
      'Lemon juice',
      'Olive oil'
    ],
    instructions: [
      'Drain and rinse chickpeas',
      'Chop vegetables',
      'Mix dressing',
      'Combine all ingredients',
      'Chill before serving'
    ],
    tags: ['mediterranean', 'protein', 'no-cook'],
    nutrition: {
      calories: 280,
      protein: 12,
      carbs: 42,
      fat: 10
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: []
    }
  }
];