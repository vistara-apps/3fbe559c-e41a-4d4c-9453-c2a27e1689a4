export interface User {
  walletAddress: string;
  totalBets: number;
  totalWinnings: number;
  lastActive: Date;
}

export interface Draw {
  drawId: string;
  startTime: Date;
  endTime: Date;
  winningNumber?: number;
  status: 'active' | 'completed' | 'pending';
  entryFeeAmount: string;
  entryFeeToken: 'ETH' | 'DEGEN';
  totalPrizePool: string;
  participantCount: number;
}

export interface Bet {
  betId: string;
  userId: string;
  drawId: string;
  amount: string;
  selectedNumber: number;
  transactionHash?: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'won' | 'lost';
}

export interface AnalyticsData {
  totalDraws: number;
  totalBets: number;
  totalPrizePool: string;
  winRate: number;
  recentActivity: Bet[];
}

export interface DrawCycle {
  current: Draw;
  next: Draw;
  timeUntilNext: number;
}
