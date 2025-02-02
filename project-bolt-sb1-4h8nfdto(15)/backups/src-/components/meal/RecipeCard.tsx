import React from 'react';
import { Clock, Users, ShoppingBag } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    title: string;
    imageUrl: string;
    prepTime: string;
    servings: number;
    ingredients: string[];
  };
  onViewRecipe: () => void;
}

export default function RecipeCard({ recipe, onViewRecipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{recipe.title}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{recipe.prepTime}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-5 h-5" />
            <span>{recipe.servings} servings</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <ShoppingBag className="w-5 h-5" />
            <span>{recipe.ingredients.length} ingredients</span>
          </div>
        </div>

        <button
          onClick={onViewRecipe}
          className="w-full mt-6 bg-purple-100 text-purple-700 py-2 px-4 rounded-lg font-medium 
                   hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}