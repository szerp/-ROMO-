import React, { useState } from 'react';
import { Clock, Users, ChefHat, Leaf, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import type { Recipe } from '../../data/recipes/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
          <div className="flex gap-1">
            {recipe.dietaryInfo.isVeganStrict && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Vegan
              </span>
            )}
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{totalTime} mins total</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>

          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4" />
            <span className="capitalize">{recipe.type}</span>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 w-full bg-purple-100 text-purple-700 px-4 py-2 rounded-lg 
                   hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Details
            </>
          )}
        </button>

        <div className={`mt-4 space-y-6 transition-all duration-300 ${
          isExpanded ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-600" />
              Ingredients
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-purple-600" />
              Instructions
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="font-medium mb-2">Nutrition (per serving)</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="font-medium">Calories:</span> {recipe.nutrition.calories}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Protein:</span> {recipe.nutrition.protein}g
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Carbs:</span> {recipe.nutrition.carbs}g
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Fat:</span> {recipe.nutrition.fat}g
              </div>
            </div>
          </div>

          {recipe.dietaryInfo.allergens.length > 0 && (
            <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-medium">Contains: </span>
                {recipe.dietaryInfo.allergens.join(', ')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}