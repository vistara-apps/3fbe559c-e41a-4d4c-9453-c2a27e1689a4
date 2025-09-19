'use client';

interface NumberSelectorProps {
  numbers: number[];
  selectedNumber: number | null;
  onSelect: (number: number) => void;
}

export function NumberSelector({ numbers, selectedNumber, onSelect }: NumberSelectorProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-white mb-4">Select Your Lucky Number</h3>
      <div className="grid grid-cols-5 gap-3">
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => onSelect(number)}
            className={`aspect-square rounded-lg border-2 transition-all duration-200 flex items-center justify-center font-bold ${
              selectedNumber === number
                ? 'border-accent bg-accent/20 text-accent scale-110'
                : 'border-gray-600 bg-slate-800/50 text-gray-400 hover:border-gray-500 hover:scale-105'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
