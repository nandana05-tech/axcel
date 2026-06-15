'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RestDayModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

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
        <div className="flex justify-center pt-3 pb-5">
          <div className="w-10 h-1 bg-outline-variant rounded-full" />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-md">
          <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary icon-fill" style={{ fontSize: '36px' }}>bedtime</span>
          </div>
        </div>

        <h2 className="font-headline text-headline-md text-on-surface uppercase text-center tracking-wide mb-xs">
          Recovery Time?
        </h2>
        <p className="font-body text-body-md text-on-surface-variant text-center px-xl mb-xl">
          Rest today and come back stronger tomorrow.
        </p>

        {/* Options */}
        <div className="flex flex-col gap-sm px-md">
          <button
            onClick={onClose}
            className="flex items-center gap-md p-md rounded-xl border border-accent/40 bg-accent/5 hover:bg-accent/10 transition-colors active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <span className="material-symbols-outlined icon-fill">bedtime</span>
            </div>
            <div className="text-left flex-1">
              <p className="font-body text-label-lg text-on-surface">Mark as Rest Day</p>
              <p className="font-body text-label-md text-on-surface-variant">Recovery counts as progress</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-md p-md rounded-xl border border-tertiary/40 bg-tertiary/5 hover:bg-tertiary/10 transition-colors active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
              <span className="material-symbols-outlined icon-fill">skip_next</span>
            </div>
            <div className="text-left flex-1">
              <p className="font-body text-label-lg text-on-surface">Skip for Today</p>
              <p className="font-body text-label-md text-on-surface-variant">No workout logged</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </button>

          <button
            onClick={onClose}
            className="font-body text-label-lg text-primary-container tracking-widest uppercase mt-sm py-md text-center hover:text-primary transition-colors"
          >
            Keep Training ←
          </button>
        </div>
      </div>
    </div>
  );
}
