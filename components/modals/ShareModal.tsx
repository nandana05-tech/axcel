'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  workoutName: string;
  duration: number;
  calories: number;
  totalVolume: number;
  streak?: number;
}

export default function ShareModal({ isOpen, onClose, workoutName, duration, calories, totalVolume, streak = 6 }: Props) {
  if (!isOpen) return null;

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  const SOCIALS = [
    { label: 'Instagram', emoji: '📸', bg: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]' },
    { label: 'WhatsApp', emoji: '💬', bg: 'bg-[#25D366]' },
    { label: 'X', emoji: '✕', bg: 'bg-[#000000] border border-outline-variant' },
    { label: 'More', emoji: '···', bg: 'bg-surface-container-high' },
  ];

  const ACTIONS = [
    { icon: 'download', label: 'Save Image' },
    { icon: 'link', label: 'Copy Share Link' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-low rounded-t-3xl w-full max-w-sm pb-10 shadow-[0_-4px_40px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-4">
          <div className="w-10 h-1 bg-outline-variant rounded-full" />
        </div>

        {/* Workout summary card */}
        <div className="mx-md mb-lg bg-[#0f0f1a] rounded-xl overflow-hidden border border-outline-variant">
          <div className="p-md">
            <div className="flex items-center justify-between mb-sm">
              <span className="font-headline text-primary-container text-[14px] tracking-wider">AXCEL</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 border border-tertiary/30 font-body text-label-md text-tertiary">
                🔥 {streak}-Day Streak
              </span>
            </div>
            <h3 className="font-headline text-headline-lg text-on-surface uppercase leading-none mb-xs">
              {workoutName}
            </h3>
            <p className="font-body text-label-md text-on-surface-variant mb-md">{today}</p>
            <div className="flex items-center gap-md">
              <span className="font-body text-label-md text-on-surface-variant">⏱ {duration} min</span>
              <span className="font-body text-label-md text-on-surface-variant">🔥 {calories} kcal</span>
              <span className="font-body text-label-md text-on-surface-variant">💪 {(totalVolume / 1000).toFixed(1)} kg</span>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-primary-container to-accent" />
        </div>

        {/* Social share */}
        <div className="px-md">
          <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest mb-md">Share Workout</p>
          <div className="flex gap-lg mb-lg">
            {SOCIALS.map(({ label, emoji, bg }) => (
              <div key={label} className="flex flex-col items-center gap-xs">
                <button
                  className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center text-white font-bold text-lg active:scale-95 transition-transform`}
                >
                  {emoji}
                </button>
                <span className="font-body text-label-md text-on-surface-variant">{label}</span>
              </div>
            ))}
          </div>

          {ACTIONS.map(({ icon, label }) => (
            <button
              key={label}
              className="w-full flex items-center justify-between p-md rounded-xl bg-surface-container border border-outline-variant mb-sm hover:bg-surface-container-high transition-colors active:scale-[0.98]"
            >
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-on-surface-variant">{icon}</span>
                <span className="font-body text-label-lg text-on-surface">{label}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
