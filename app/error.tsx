'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-400 text-2xl">⚠</span>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          Something went wrong!
        </h2>
        <p className="text-white/70 mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
