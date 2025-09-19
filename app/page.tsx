import { AppShell } from '@/components/AppShell'
import { DrawInterface } from '@/components/DrawInterface'
import { AnalyticsPanel } from '@/components/AnalyticsPanel'

export default function HomePage() {
  return (
    <AppShell>
      <div className="min-h-screen gradient-bg">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/3 w-1 h-8 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-40 right-1/4 w-8 h-1 bg-white/10 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h1 className="text-xl font-bold text-white">ChainDraw Pro</h1>
            </div>
            <p className="text-white/80 text-sm">
              Fairness & Fun, On-Chain
            </p>
          </div>

          {/* Main Draw Interface */}
          <DrawInterface />

          {/* Analytics Panel */}
          <AnalyticsPanel />
        </div>
      </div>
    </AppShell>
  )
}
