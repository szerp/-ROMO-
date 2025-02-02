import React, { useState } from 'react';
import { ChefHat, Search } from 'lucide-react';
import RecipeGenerator from '../components/meal/RecipeGenerator';
import ThemedCard from '../components/shared/ThemedCard';

export default function RecipeLibrary() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <ChefHat className="w-8 h-8 text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold text-text">Recipe Library</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-text
                       placeholder:text-text-light focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>

      <ThemedCard variant="goals">
        <RecipeGenerator />
      </ThemedCard>

      {/* Recipe list will be added here in future updates */}
    </div>
  );
}