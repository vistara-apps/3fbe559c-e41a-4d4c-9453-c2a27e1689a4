export default function Loading() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/80">Loading ChainDraw Pro...</p>
      </div>
    </div>
  );
}
