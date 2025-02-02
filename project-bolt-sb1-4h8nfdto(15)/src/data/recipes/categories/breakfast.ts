import type { Recipe } from '../types';

export const breakfastRecipes: Recipe[] = [
  {
    id: 'overnight-bircher',
    name: 'Classic Bircher Muesli',
    type: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    ingredients: [
      '1 cup rolled oats',
      '1 cup plant milk',
      '1 apple, grated',
      '1/4 cup raisins',
      '2 tbsp chia seeds',
      'Cinnamon to taste',
      'Fresh berries for topping'
    ],
    instructions: [
      'Mix oats, milk, and chia seeds',
      'Add grated apple and raisins',
      'Refrigerate overnight',
      'Top with fresh berries before serving'
    ],
    tags: ['make-ahead', 'no-cook', 'swiss'],
    nutrition: {
      calories: 290,
      protein: 8,
      carbs: 52,
      fat: 6
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['oats']
    }
  },
  {
    id: 'savory-oats',
    name: 'Savory Mushroom Oatmeal',
    type: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1565592415402-7d9357e59818?auto=format&fit=crop&q=80',
    prepTime: 5,
    cookTime: 15,
    servings: 1,
    ingredients: [
      '1 cup rolled oats',
      '2.5 cups vegetable broth',
      '1 cup mushrooms, sliced',
      '2 cloves garlic, minced',
      'Fresh thyme',
      'Nutritional yeast',
      'Black pepper'
    ],
    instructions: [
      'Sauté mushrooms and garlic',
      'Add oats and broth',
      'Simmer until creamy',
      'Top with nutritional yeast and thyme'
    ],
    tags: ['savory', 'hot', 'umami'],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 54,
      fat: 8
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['oats']
    }
  },
  {
    id: 'breakfast-burrito',
    name: 'Southwest Breakfast Burrito',
    type: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    ingredients: [
      '2 large tortillas',
      '1 block firm tofu',
      'Black beans',
      'Avocado',
      'Salsa',
      'Nutritional yeast',
      'Southwest spices'
    ],
    instructions: [
      'Scramble tofu with spices',
      'Warm tortillas',
      'Layer ingredients',
      'Roll tightly',
      'Optional: grill for crispy exterior'
    ],
    tags: ['protein', 'mexican-inspired', 'portable'],
    nutrition: {
      calories: 450,
      protein: 22,
      carbs: 48,
      fat: 18
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['soy', 'wheat']
    }
  },
  {
    id: 'breakfast-hash',
    name: 'Sweet Potato Breakfast Hash',
    type: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1638864616275-9f0b291a2eb6?auto=format&fit=crop&q=80',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    ingredients: [
      '2 sweet potatoes, diced',
      '1 bell pepper',
      '1 onion',
      'Tempeh bacon',
      'Fresh rosemary',
      'Garlic powder',
      'Paprika'
    ],
    instructions: [
      'Dice vegetables uniformly',
      'Season and roast sweet potatoes',
      'Add other vegetables',
      'Cook until crispy',
      'Add tempeh bacon at the end'
    ],
    tags: ['hearty', 'gluten-free', 'weekend'],
    nutrition: {
      calories: 380,
      protein: 16,
      carbs: 62,
      fat: 10
    },
    dietaryInfo: {
      isVeganWithHoney: true,
      isVeganStrict: true,
      isVegetarianWithEggs: true,
      isVegetarianNoEggs: true,
      isPescatarian: true,
      allergens: ['soy']
    }
  }
];