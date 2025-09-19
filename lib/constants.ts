export const DRAW_CYCLE_HOURS = 12;
export const DRAW_CYCLE_MS = DRAW_CYCLE_HOURS * 60 * 60 * 1000;

export const ENTRY_FEES = {
  TIER_1: { amount: '0.001', token: 'ETH' as const, label: '$1' },
  TIER_2: { amount: '0.005', token: 'ETH' as const, label: '$5' },
  TIER_3: { amount: '0.01', token: 'ETH' as const, label: '$10' },
} as const;

export const PLATFORM_COMMISSION = 0.05; // 5%

export const DRAW_NUMBERS = Array.from({ length: 10 }, (_, i) => i + 1);

export const FEATURE_HIGHLIGHTS = [
  {
    icon: '🔒',
    title: 'Secure crypto transactions',
    description: 'Multi-factor authentication'
  },
  {
    icon: '🎯',
    title: 'Multi time betting analytics',
    description: 'Real-time insights'
  },
  {
    icon: '📊',
    title: 'Real time & betting analytics',
    description: 'Performance tracking'
  },
  {
    icon: '🎲',
    title: 'Automated prize distribution',
    description: 'Instant payouts'
  },
  {
    icon: '⏰',
    title: '12 hour draw cycles',
    description: 'Regular opportunities'
  },
  {
    icon: '✨',
    title: 'Awesome design',
    description: 'Beautiful interface'
  }
];
