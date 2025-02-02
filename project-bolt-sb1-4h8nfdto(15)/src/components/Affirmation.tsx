import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { getRandomAffirmation } from '../data/affirmations';
import type { Affirmation as AffirmationType } from '../data/affirmations/types';

export default function Affirmation() {
  const [currentAffirmation] = useState<AffirmationType>(() => getRandomAffirmation());
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white cursor-pointer 
                 transform transition-all duration-300 hover:scale-[1.02] shadow-md"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-accent" />
        <h3 className="font-medium text-white/90">Daily Affirmation</h3>
      </div>
      
      <p className="text-lg font-medium leading-relaxed text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
        {isExpanded ? currentAffirmation.full : currentAffirmation.teaser}
      </p>
      
      <p className="text-sm mt-4 text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
        {isExpanded ? "Click to collapse" : "Click to reveal"}
      </p>
    </div>
  );
}