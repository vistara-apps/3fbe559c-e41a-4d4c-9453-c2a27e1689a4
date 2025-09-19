'use client';

interface BetButtonProps {
  disabled?: boolean;
  onClick: () => void;
  amount: string;
  token: string;
  variant?: 'default' | 'disabled';
}

export function BetButton({ 
  disabled = false, 
  onClick, 
  amount, 
  token,
  variant = 'default' 
}: BetButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
        disabled
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
          : 'btn-primary hover:scale-105 active:scale-95'
      }`}
    >
      {disabled ? (
        'Select a Number'
      ) : (
        <>
          Place Bet • {amount} {token}
        </>
      )}
    </button>
  );
}
