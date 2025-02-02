import type { Recipe } from '../types';

export const dinnerRecipes: Recipe[] = [
  // ... existing recipes ...

  {
    id: 'buddha-bowl',
    name: 'Rainbow Buddha Bowl',
    type: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    ingredients: [
      '2 sweet potatoes, cubed',
      '1 cup quinoa',
      '2 cups kale',
      '1 can chickpeas',
      '1 avocado',
      'Tahini dressing',
      'Pumpkin seeds'
    ],
    instructions: [
      'Roast sweet potatoes and chickpeas',
      'Cook quinoa according to package',
      'Massage kale with lemon juice',
      'Prepare tahini dressing',
      'Assemble bowls with all components'
    ],
    tags: ['bowl', 'healthy', 'colorful'],
    nutrition: {
      calories: 450,
      protein: 15,
      carbs: 65,
      fat: 18
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
    id: 'eggplant-lasagna',
    name: 'Eggplant Lasagna',
    type: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80',
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    ingredients: [
      '2 large eggplants',
      'Vegan ricotta',
      'Marinara sauce',
      'Spinach',
      'Nutritional yeast',
      'Italian herbs',
      'Vegan mozzarella'
    ],
    instructions: [
      'Slice and salt eggplant',
      'Layer with ricotta and marinara',
      'Add spinach and herbs',
      'Top with vegan cheese',
      'Bake until bubbly'
    ],
    tags: ['italian', 'baked', 'comfort-food'],
    nutrition: {
      calories: 380,
      protein: 16,
      carbs: 42,
      fat: 18
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
    id: 'tempeh-stir-fry',
    name: 'Ginger Tempeh Stir-Fry',
    type: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      '1 block tempeh',
      'Mixed vegetables',
      'Brown rice',
      'Ginger-soy sauce',
      'Sesame seeds',
      'Green onions',
      'Garlic'
    ],
    instructions: [
      'Steam tempeh for 10 minutes',
      'Cook brown rice',
      'Stir-fry vegetables',
      'Add tempeh and sauce',
      'Serve over rice'
    ],
    tags: ['asian-inspired', 'protein', 'quick'],
    nutrition: {
      calories: 420,
      protein: 22,
      carbs: 52,
      fat: 16
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
    id: 'cauliflower-tacos',
    name: 'Roasted Cauliflower Tacos',
    type: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      '1 head cauliflower',
      'Corn tortillas',
      'Black beans',
      'Avocado crema',
      'Red cabbage slaw',
      'Lime',
      'Taco seasoning'
    ],
    instructions: [
      'Roast seasoned cauliflower',
      'Warm black beans',
      'Make avocado crema',
      'Prepare cabbage slaw',
      'Assemble tacos'
    ],
    tags: ['mexican', 'tacos', 'spicy'],
    nutrition: {
      calories: 340,
      protein: 12,
      carbs: 48,
      fat: 14
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['corn']
    }
  }
];