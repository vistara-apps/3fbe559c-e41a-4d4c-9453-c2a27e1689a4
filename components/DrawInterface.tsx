'use client';

import { useState, useEffect } from 'react';
import { DrawCard } from './DrawCard';
import { BetButton } from './BetButton';
import { WalletConnectButton } from './WalletConnectButton';
import { DrawTimer } from './DrawTimer';
import { NumberSelector } from './NumberSelector';
import { ENTRY_FEES, DRAW_NUMBERS } from '@/lib/constants';
import { getTimeUntilNextDraw } from '@/lib/utils';
import type { Draw } from '@/lib/types';

export function DrawInterface() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<keyof typeof ENTRY_FEES>('TIER_1');
  const [timeUntilNext, setTimeUntilNext] = useState(getTimeUntilNextDraw());
  const [isConnected, setIsConnected] = useState(false);

  // Mock current draw data
  const currentDraw: Draw = {
    drawId: 'draw_current_001',
    startTime: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    endTime: new Date(Date.now() + timeUntilNext),
    status: 'active',
    entryFeeAmount: ENTRY_FEES[selectedTier].amount,
    entryFeeToken: ENTRY_FEES[selectedTier].token,
    totalPrizePool: '0.095',
    participantCount: 23
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilNext(getTimeUntilNextDraw());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlaceBet = () => {
    if (!selectedNumber || !isConnected) return;
    
    // This would integrate with the actual smart contract
    console.log('Placing bet:', {
      drawId: currentDraw.drawId,
      selectedNumber,
      amount: ENTRY_FEES[selectedTier].amount,
      token: ENTRY_FEES[selectedTier].token
    });
  };

  return (
    <div className="space-y-6">
      {/* Main Draw Circle */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center relative">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-gray-800 font-bold text-lg">Start draw</span>
          </div>
          
          {/* Decorative elements around the circle */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">💰</span>
          </div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">🎯</span>
          </div>
        </div>

        {/* Timer Circle */}
        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
          <DrawTimer timeRemaining={timeUntilNext} />
        </div>
      </div>

      {/* Draw Card */}
      <DrawCard draw={currentDraw} variant="active" />

      {/* Entry Fee Selection */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Select Entry Fee</h3>
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(ENTRY_FEES).map(([key, fee]) => (
            <button
              key={key}
              onClick={() => setSelectedTier(key as keyof typeof ENTRY_FEES)}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                selectedTier === key
                  ? 'border-primary bg-primary/20 text-white'
                  : 'border-gray-600 bg-surface/50 text-text-secondary hover:border-gray-500'
              }`}
            >
              <div className="text-sm font-medium">{fee.label}</div>
              <div className="text-xs opacity-70">{fee.amount} {fee.token}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Number Selection */}
      <NumberSelector
        numbers={DRAW_NUMBERS}
        selectedNumber={selectedNumber}
        onSelect={setSelectedNumber}
      />

      {/* Action Buttons */}
      <div className="space-y-3">
        {!isConnected ? (
          <WalletConnectButton onConnect={() => setIsConnected(true)} />
        ) : (
          <BetButton
            disabled={!selectedNumber}
            onClick={handlePlaceBet}
            amount={ENTRY_FEES[selectedTier].amount}
            token={ENTRY_FEES[selectedTier].token}
          />
        )}
      </div>
    </div>
  );
}
