'use client';

import { useState } from 'react';
import { FEATURE_HIGHLIGHTS } from '@/lib/constants';

interface AnalyticsPanelProps {
  variant?: 'overview' | 'history';
}

export function AnalyticsPanel({ variant = 'overview' }: AnalyticsPanelProps) {
  const [activeTab, setActiveTab] = useState<'features' | 'stats'>('features');

  return (
    <div className="card mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Platform Features</h3>
        <div className="flex bg-surface rounded-lg p-1">
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
              activeTab === 'features'
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
              activeTab === 'stats'
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            Stats
          </button>
        </div>
      </div>

      {activeTab === 'features' ? (
        <div className="grid grid-cols-2 gap-4">
          {FEATURE_HIGHLIGHTS.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">{feature.icon}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-white text-sm font-medium mb-1 leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-tight">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-text-secondary text-sm">Total Draws</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-white">2.4K</div>
              <div className="text-text-secondary text-sm">Total Bets</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-accent">12.5 ETH</div>
              <div className="text-text-secondary text-sm">Total Prizes</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-green-400">15%</div>
              <div className="text-text-secondary text-sm">Win Rate</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
