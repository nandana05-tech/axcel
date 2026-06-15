'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function EndWorkoutModal({ isOpen, onClose, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center px-md">
      <div className="bg-surface-container-low rounded-3xl w-full max-w-xs p-xl shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        {/* Icon */}
        <div className="flex justify-center mb-lg">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 border border-primary-container/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-container icon-fill" style={{ fontSize: '32px' }}>
              logout
            </span>
          </div>
        </div>

        <h2 className="font-headline text-headline-md text-on-surface uppercase text-center mb-sm">
          End Workout?
        </h2>
        <p className="font-body text-body-md text-on-surface-variant text-center mb-xl">
          Are you sure you want to end this training session? Your progress will be saved automatically.
        </p>

        <div className="flex flex-col gap-sm">
          <button
            onClick={onConfirm}
            className="w-full py-4 rounded-full bg-gradient-to-r from-primary-container to-accent text-on-primary font-body text-label-lg uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-opacity"
          >
            End
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full border border-outline-variant text-on-surface font-body text-label-lg hover:bg-surface-container transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
