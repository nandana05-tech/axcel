
'use client';

import { useRouter } from 'next/navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  badgeName?: string;
  badgeDescription?: string;
  stats?: { duration: string; calories: string; reps: string };
}

export default function AchievementModal({
  isOpen,
  onClose,
  badgeName = 'IRON WEEK',
  badgeDescription = 'You have worked out for 7 days in a row.',
  stats = { duration: '4H', calories: '2.1K', reps: '350' },
}: Props) {
  const router = useRouter();

  if (!isOpen) return null;

  const STAT_ITEMS = [
    { icon: 'timer', label: 'Duration', value: stats.duration },
    { icon: 'local_fire_department', label: 'Cal', value: stats.calories },
    { icon: 'fitness_center', label: 'Reps', value: stats.reps },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center px-md">
      <div className="bg-surface-container-low rounded-3xl w-full max-w-sm p-xl relative shadow-[0_0_60px_rgba(124,58,255,0.2)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-md right-md text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Diamond badge icon */}
        <div className="flex justify-center mb-lg">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary rounded-[20px] rotate-45 shadow-[0_0_40px_rgba(124,58,255,0.4)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary-container icon-fill"
                style={{ fontSize: '36px' }}
              >
                bolt
              </span>
            </div>
          </div>
        </div>

        <p className="font-body text-label-lg text-on-surface-variant uppercase tracking-widest text-center mb-xs">
          New Badge Unlocked
        </p>
        <h2 className="font-headline text-headline-lg text-on-surface uppercase text-center mb-sm">
          {badgeName}
        </h2>
        <p className="font-body text-body-md text-on-surface-variant text-center mb-xl">
          {badgeDescription}{' '}
          <span className="font-bold text-on-surface">Awesome!</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-sm mb-xl">
          {STAT_ITEMS.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-surface-container rounded-xl p-sm flex flex-col items-center gap-xs border border-outline-variant"
            >
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>{icon}</span>
              <span className="font-headline text-headline-md text-on-surface">{value}</span>
              <span className="font-body text-label-md text-on-surface-variant uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-sm">
          <button
            onClick={onClose}
            className="w-full py-4 rounded-full bg-gradient-to-r from-primary-container to-accent text-on-primary font-body text-label-lg uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-sm"
          >
            Continue →
          </button>
          <button
            onClick={() => { onClose(); router.push('/profile/badges'); }}
            className="w-full py-3 rounded-full border border-outline-variant text-on-surface font-body text-label-lg hover:bg-surface-container transition-colors"
          >
            See All The Badges
          </button>
        </div>
      </div>
    </div>
  );
}
