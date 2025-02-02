import React, { useState } from 'react';
import { Edit2, Check, X, XCircle, Plus } from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
}

interface IngredientListProps {
  ingredients: Ingredient[];
  onAdd: (ingredient: Ingredient) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, newName: string) => void;
  addButtonClass?: string;
}

export default function IngredientList({ 
  ingredients, 
  onAdd, 
  onRemove, 
  onUpdate,
  addButtonClass = 'text-primary'
}: IngredientListProps) {
  const [newIngredient, setNewIngredient] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      onAdd({
        id: crypto.randomUUID(),
        name: newIngredient.trim()
      });
      setNewIngredient('');
    }
  };

  const handleEditSave = () => {
    if (editValue.trim() && editingId) {
      onUpdate(editingId, editValue.trim());
      setEditingId(null);
      setEditValue('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
          placeholder="Add an ingredient..."
          className="flex-1 px-3 py-2 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg text-gray-900
                   placeholder:text-gray-600 placeholder:font-medium
                   focus:ring-2 focus:ring-primary/50 focus:border-transparent"
        />
        <button
          onClick={handleAddIngredient}
          disabled={!newIngredient.trim()}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${addButtonClass} hover:bg-primary/10 transition-colors
                    disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="group flex items-center gap-2 bg-accent/10 rounded-full pr-2"
          >
            {editingId === ingredient.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleEditSave()}
                  className="px-3 py-1 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-gray-900
                           placeholder:text-gray-600 placeholder:font-medium
                           focus:ring-2 focus:ring-primary/50 focus:border-transparent"
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
                    onClick={() => {
                      setEditingId(ingredient.id);
                      setEditValue(ingredient.name);
                    }}
                    className="text-text-light hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemove(ingredient.id)}
                    className="text-text-light hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}