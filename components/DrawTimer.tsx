'use client';

import { formatTimeRemaining } from '@/lib/utils';

interface DrawTimerProps {
  timeRemaining: number;
}

export function DrawTimer({ timeRemaining }: DrawTimerProps) {
  const progress = ((12 * 60 * 60 * 1000 - timeRemaining) / (12 * 60 * 60 * 1000)) * 100;

  return (
    <div className="relative w-24 h-24">
      {/* Background circle */}
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${progress * 2.51} 251`}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-xs font-bold">12</div>
        <div className="text-white/70 text-xs">Hour draw cycles</div>
      </div>
    </div>
  );
}
