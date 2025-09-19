'use client';

interface WalletConnectButtonProps {
  onConnect: () => void;
  variant?: 'default';
}

export function WalletConnectButton({ onConnect, variant = 'default' }: WalletConnectButtonProps) {
  return (
    <button
      onClick={onConnect}
      className="w-full btn-primary hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-xl">🔗</span>
        Connect Base Wallet
      </div>
    </button>
  );
}
