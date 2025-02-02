import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import RecipeGenerator from './RecipeGenerator';

export default function MealPlanner() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <UtensilsCrossed className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-800">Meal Planner</h2>
      </div>

      <div className="space-y-8">
        <RecipeGenerator />
      </div>
    </div>
  );
}