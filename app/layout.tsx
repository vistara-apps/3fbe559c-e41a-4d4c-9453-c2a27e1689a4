import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChainDraw Pro - Fairness & Fun, On-Chain',
  description: 'Verified Draws, Crypto Bets, Real-Time Insights on Base',
  keywords: ['blockchain', 'lottery', 'base', 'crypto', 'draws', 'betting'],
  authors: [{ name: 'ChainDraw Pro Team' }],
  openGraph: {
    title: 'ChainDraw Pro',
    description: 'Fairness & Fun, On-Chain: Verified Draws, Crypto Bets, Real-Time Insights',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChainDraw Pro',
    description: 'Fairness & Fun, On-Chain: Verified Draws, Crypto Bets, Real-Time Insights',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
