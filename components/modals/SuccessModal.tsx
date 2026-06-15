'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  label?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = 'Done!',
  message = 'Your workout schedule has been successfully saved.',
  label = 'Okay',
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center px-md">
      <div className="bg-surface-container-low rounded-3xl w-full max-w-xs p-xl shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        {/* Icon */}
        <div className="flex justify-center mb-lg">
          <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_30px_rgba(124,58,255,0.4)]">
            <span className="material-symbols-outlined text-on-primary-container icon-fill" style={{ fontSize: '32px' }}>
              check
            </span>
          </div>
        </div>

        <h2 className="font-headline text-headline-md text-on-surface uppercase text-center mb-sm">
          {title}
        </h2>
        <p className="font-body text-body-md text-on-surface-variant text-center mb-xl">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full py-4 rounded-full bg-gradient-to-r from-primary-container to-accent text-on-primary font-body text-label-lg tracking-wider font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-opacity"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
