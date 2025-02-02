import React from 'react';
import { Filter } from 'lucide-react';
import type { DietaryPreference, MealType } from '../../data/recipes/types';

interface RecipeFiltersProps {
  selectedDiet: DietaryPreference;
  onDietChange: (diet: DietaryPreference) => void;
  selectedType: MealType | 'all';
  onTypeChange: (type: MealType | 'all') => void;
  sortBy: 'name' | 'prepTime' | 'calories';
  onSortChange: (sort: 'name' | 'prepTime' | 'calories') => void;
}

export default function RecipeFilters({
  selectedDiet,
  onDietChange,
  selectedType,
  onTypeChange,
  sortBy,
  onSortChange
}: RecipeFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-500" />
          <select
            value={selectedDiet.type}
            onChange={(e) => onDietChange({ type: e.target.value as DietaryPreference['type'] })}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="regular">All Diets</option>
            <option value="vegan-strict">Vegan (Strict)</option>
            <option value="vegan-with-honey">Vegan (with Honey)</option>
            <option value="vegetarian-with-eggs">Vegetarian (with Eggs)</option>
            <option value="vegetarian-no-eggs">Vegetarian (No Eggs)</option>
            <option value="pescatarian">Pescatarian</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value as MealType | 'all')}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="all">All Types</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snacks</option>
            <option value="smoothie">Smoothies</option>
            <option value="dessert">Desserts</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'name' | 'prepTime' | 'calories')}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="name">Sort by Name</option>
            <option value="prepTime">Sort by Time</option>
            <option value="calories">Sort by Calories</option>
          </select>
        </div>
      </div>
    </div>
  );
}