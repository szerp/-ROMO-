import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { Affirmation as AffirmationType } from '../types';

const SAMPLE_AFFIRMATIONS: AffirmationType[] = [
  {
    teaser: "You won't believe how amazing you are...",
    full: "Your neurodivergent brain makes you uniquely capable of seeing the world in ways others can't. That's your superpower! 🌟"
  },
  {
    teaser: "The secret to your progress today...",
    full: "Every small step counts! Your journey is valid, and you're making progress at exactly the right pace for you. 🌱"
  },
  {
    teaser: "Here's why today is already a win...",
    full: "You showed up, and that's huge! Your presence matters, and your efforts (big or small) are worth celebrating. 🎉"
  }
];

export default function Affirmation() {
  const [currentAffirmation] = useState<AffirmationType>(
    SAMPLE_AFFIRMATIONS[Math.floor(Math.random() * SAMPLE_AFFIRMATIONS.length)]
  );
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5" />
        <h3 className="font-medium">Daily Affirmation</h3>
      </div>
      
      <p className="text-lg font-medium leading-relaxed">
        {isExpanded ? currentAffirmation.full : currentAffirmation.teaser}
      </p>
      
      <p className="text-sm mt-4 text-white/80">
        {isExpanded ? "Click to collapse" : "Click to reveal"}
      </p>
    </div>
  );
}