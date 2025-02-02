import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ progress, className = '', showLabel = true }: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-text-light">Progress</span>
          <span className="text-sm font-medium text-text-light">{Math.round(clampedProgress)}%</span>
        </div>
      )}
      <div className="w-full bg-accent/10 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}