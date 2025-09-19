'use client';

import { formatAmount, formatTimeRemaining } from '@/lib/utils';
import type { Draw } from '@/lib/types';

interface DrawCardProps {
  draw: Draw;
  variant: 'active' | 'completed';
}

export function DrawCard({ draw, variant }: DrawCardProps) {
  const isActive = variant === 'active';

  return (
    <div className={`card ${isActive ? 'border-primary/50' : 'border-gray-600'}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Draw #{draw.drawId.split('_')[2] || '001'}
          </h3>
          <p className="text-text-secondary text-sm">
            {isActive ? 'Active Now' : 'Completed'}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          isActive 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-gray-500/20 text-gray-400'
        }`}>
          {draw.status.toUpperCase()}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-text-secondary text-sm">Prize Pool</p>
          <p className="text-white font-semibold">
            {formatAmount(draw.totalPrizePool)} {draw.entryFeeToken}
          </p>
        </div>
        <div>
          <p className="text-text-secondary text-sm">Participants</p>
          <p className="text-white font-semibold">{draw.participantCount}</p>
        </div>
      </div>

      {draw.winningNumber && (
        <div className="mt-4 pt-4 border-t border-gray-600">
          <p className="text-text-secondary text-sm">Winning Number</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{draw.winningNumber}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
