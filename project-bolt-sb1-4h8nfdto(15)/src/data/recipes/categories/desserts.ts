// Contains dessert recipes
import type { Recipe } from '../types';

export const dessertRecipes: Recipe[] = [
  // Existing recipes...
  {
    id: 'chocolate-truffles',
    name: 'Date Chocolate Truffles',
    type: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1548741487-18d363dc4469?auto=format&fit=crop&q=80',
    prepTime: 20,
    cookTime: 0,
    servings: 15,
    ingredients: [
      '2 cups Medjool dates',
      '1 cup walnuts',
      '1/2 cup cocoa powder',
      '1 tsp vanilla extract',
      'Pinch of salt',
      'Extra cocoa for rolling'
    ],
    instructions: [
      'Process dates and walnuts until crumbly',
      'Add cocoa powder and vanilla',
      'Roll into balls',
      'Coat in extra cocoa powder'
    ],
    tags: ['no-bake', 'raw', 'gluten-free'],
    nutrition: {
      calories: 95,
      protein: 2,
      carbs: 15,
      fat: 4
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['nuts']
    }
  },
  {
    id: 'lemon-coconut-energy-balls',
    name: 'Lemon Coconut Energy Balls',
    type: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1598511753042-048807dd9f7d?auto=format&fit=crop&q=80',
    prepTime: 10,
    cookTime: 0,
    servings: 12,
    ingredients: [
      '1 cup cashews',
      '1 cup shredded coconut',
      '2 tbsp lemon juice',
      '1 tbsp maple syrup',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Blend cashews and coconut until crumbly.',
      'Add lemon juice, maple syrup, and vanilla extract.',
      'Roll into small balls and chill for 30 minutes.',
      'Optional: roll in extra coconut before serving.'
    ],
    tags: ['raw', 'refreshing', 'no-bake'],
    nutrition: {
      calories: 150,
      protein: 4,
      carbs: 10,
      fat: 10
    },
    dietaryInfo: {
      isVeganStrict: true,
      allergens: ['nuts']
    }
  },
  {
    id: 'pumpkin-chocolate-chip-cookies',
    name: 'Pumpkin Chocolate Chip Cookies',
    type: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 12,
    servings: 8,
    ingredients: [
      '1 cup canned pumpkin',
      '1 cup almond flour',
      '1/2 cup dark chocolate chips',
      '1/4 cup coconut sugar',
      '1 tsp baking soda',
      '1 tsp cinnamon'
    ],
    instructions: [
      'Mix all ingredients in a bowl.',
      'Scoop onto a lined baking sheet.',
      'Bake at 350°F (175°C) for 12-15 minutes.',
      'Cool before serving.'
    ],
    tags: ['fall', 'soft', 'gluten-free'],
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 25,
      fat: 7
    },
    dietaryInfo: {
      isVeganStrict: true,
      allergens: ['nuts']
    }
  },
  {
    id: 'raspberry-bliss-bars',
    name: 'Raspberry Bliss Bars',
    type: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 0,
    servings: 8,
    ingredients: [
      '1 cup almonds',
      '1 cup dates (pitted)',
      '1/2 cup raspberries',
      '1/4 cup shredded coconut',
      '1 tbsp chia seeds'
    ],
    instructions: [
      'Blend almonds and dates into a dough.',
      'Press into a dish and top with raspberries and chia seeds.',
      'Refrigerate for 1 hour and slice into bars.'
    ],
    tags: ['raw', 'fruit-based', 'healthy'],
    nutrition: {
      calories: 190,
      protein: 4,
      carbs: 28,
      fat: 8
    },
    dietaryInfo: {
      isVeganStrict: true,
      allergens: ['nuts']
    }
  },
  {
    id: 'apple-cinnamon-crumble',
    name: 'Apple Cinnamon Crumble',
    type: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1605036074374-30d279a86c7d?auto=format&fit=crop&q=80',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    ingredients: [
      '4 apples (sliced)',
      '1 cup rolled oats',
      '1/3 cup almond flour',
      '1 tsp cinnamon',
      '3 tbsp maple syrup'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Layer sliced apples in a baking dish.',
      'Mix oats, almond flour, cinnamon, and maple syrup.',
      'Spread mixture over apples and bake for 25 minutes.'
    ],
    tags: ['baked', 'fruit', 'comfort'],
    nutrition: {
      calories: 260,
      protein: 5,
      carbs: 42,
      fat: 7
    },
    dietaryInfo: {
      isVeganStrict: true,
      allergens: ['oats']
    }
  }
  // Add more dessert recipes...
];