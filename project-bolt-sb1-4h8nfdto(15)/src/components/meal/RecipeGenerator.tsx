import React, { useState } from 'react';
import { ChefHat, Loader } from 'lucide-react';
import Card from '../shared/Card';
import CardHeader from '../shared/CardHeader';
import IngredientList from './IngredientList';
import Button from '../shared/Button';
import { generateMealPlan } from '../../services/openai';

interface Ingredient {
  id: string;
  name: string;
}

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const handleUpdateIngredient = (id: string, newName: string) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, name: newName } : ing
    ));
  };

  const handleGenerateRecipe = async () => {
    setLoading(true);
    try {
      const generatedRecipe = await generateMealPlan(ingredients.map(ing => ing.name));
      setRecipe(generatedRecipe);
    } catch (error) {
      console.error('Failed to generate recipe:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader
        icon={ChefHat}
        title="AI Recipe Generator"
      />
      <div className="space-y-6">
        <IngredientList
          ingredients={ingredients}
          onAdd={handleAddIngredient}
          onRemove={handleRemoveIngredient}
          onUpdate={handleUpdateIngredient}
          addButtonClass="text-accent"
        />

        <Button
          onClick={handleGenerateRecipe}
          disabled={ingredients.length === 0 || loading}
          loading={loading}
          fullWidth
        >
          {loading ? 'Generating Recipe...' : 'Generate Recipe'}
        </Button>

        {recipe && (
          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <pre className="whitespace-pre-wrap font-sans text-text">{recipe}</pre>
          </div>
        )}
      </div>
    </Card>
  );
}