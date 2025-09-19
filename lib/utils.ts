import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatAmount(amount: string, decimals: number = 4): string {
  const num = parseFloat(amount);
  if (num === 0) return '0';
  if (num < 0.0001) return '< 0.0001';
  return num.toFixed(decimals);
}

export function formatTimeRemaining(ms: number): string {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

export function generateMockDrawId(): string {
  return `draw_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function calculatePrizePool(bets: number, entryFee: string): string {
  const totalPool = bets * parseFloat(entryFee);
  const afterCommission = totalPool * (1 - 0.05); // 5% commission
  return afterCommission.toFixed(6);
}

export function getTimeUntilNextDraw(): number {
  const now = new Date();
  const nextDraw = new Date();
  nextDraw.setHours(nextDraw.getHours() + (12 - (nextDraw.getHours() % 12)));
  nextDraw.setMinutes(0);
  nextDraw.setSeconds(0);
  nextDraw.setMilliseconds(0);
  
  return nextDraw.getTime() - now.getTime();
}
