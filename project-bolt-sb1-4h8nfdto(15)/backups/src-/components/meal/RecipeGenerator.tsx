import React, { useState } from 'react';
import { ChefHat, Loader, X, Edit2, Check, XCircle } from 'lucide-react';
import { generateMealPlan } from '../../services/openai';

interface Ingredient {
  id: string;
  name: string;
}

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([
        ...ingredients, 
        { id: crypto.randomUUID(), name: newIngredient.trim() }
      ]);
      setNewIngredient('');
    }
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const startEditing = (ingredient: Ingredient) => {
    setEditingId(ingredient.id);
    setEditValue(ingredient.name);
  };

  const handleEditSave = () => {
    if (editValue.trim() && editingId) {
      setIngredients(ingredients.map(ing => 
        ing.id === editingId ? { ...ing, name: editValue.trim() } : ing
      ));
      setEditingId(null);
      setEditValue('');
    }
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
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <ChefHat className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-800">AI Recipe Generator</h2>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
            placeholder="Add an ingredient..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddIngredient}
            disabled={!newIngredient.trim()}
            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="group flex items-center gap-2 bg-purple-50 rounded-full pr-2"
            >
              {editingId === ingredient.id ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleEditSave()}
                    className="px-3 py-1 rounded-full bg-white border-2 border-purple-300 focus:outline-none focus:border-purple-500"
                    autoFocus
                  />
                  <div className="flex gap-1 ml-2">
                    <button
                      onClick={handleEditSave}
                      className="text-green-500 hover:text-green-600"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="px-3 py-1">{ingredient.name}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => startEditing(ingredient)}
                      className="text-purple-500 hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleRemoveIngredient(ingredient.id)}
                      className="text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleGenerateRecipe}
          disabled={ingredients.length === 0 || loading}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium 
                   hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader className="w-5 h-5 animate-spin" />
              Generating Recipe...
            </span>
          ) : (
            'Generate Recipe'
          )}
        </button>

        {recipe && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <pre className="whitespace-pre-wrap font-sans">{recipe}</pre>
          </div>
        )}
      </div>
    </div>
  );
}