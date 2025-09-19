# ChainDraw Pro

A blockchain-verified lottery platform built for Base Mini Apps, offering provably fair draws with secure crypto transactions and real-time analytics.

## Features

- 🔗 **Blockchain-Verified Draws**: Leverages Base's blockchain for transparent, tamper-proof lottery results
- 🔒 **Secure Crypto Transactions**: Integrated Base Wallet authentication and transaction handling
- 📊 **Real-time Analytics**: Live betting activity, performance metrics, and historical data
- 💰 **Automated Prize Distribution**: Instant payouts directly to winners' wallets
- ⏰ **12-Hour Draw Cycles**: Regular opportunities to participate and win
- 🎯 **Multiple Entry Tiers**: $1, $5, and $10 entry options for different risk levels

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd chaindraw-pro
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

3. **Development**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Architecture

### Data Models

- **User**: Wallet address, betting history, winnings
- **Draw**: 12-hour cycles with entry fees and prize pools
- **Bet**: Individual user bets with selected numbers and amounts

### Key Components

- `DrawInterface`: Main betting interface with number selection
- `DrawCard`: Display active and completed draws
- `AnalyticsPanel`: Real-time statistics and platform features
- `WalletConnectButton`: Base Wallet integration

### Smart Contract Integration

The app integrates with Base blockchain for:
- Bet placement and validation
- Random number generation for draws
- Automated prize distribution
- Transaction verification

## Base Mini App Features

- **Frame Actions**: `view_draws`, `place_bet`, `view_history`
- **Notifications**: Win alerts and new draw cycle notifications
- **Social Integration**: Shareable results and leaderboards

## Security

- Multi-factor authentication via Base Wallet
- On-chain transaction verification
- Provably fair random number generation
- Secure prize distribution

## License

MIT License - see LICENSE file for details
