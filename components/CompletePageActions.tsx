'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ShareModal from '@/components/modals/ShareModal';
import AchievementModal from '@/components/modals/AchievementModal';

interface Props {
  workoutName: string;
  duration: number;
  calories: number;
  totalVolume: number;
}

export default function CompletePageActions({ workoutName, duration, calories, totalVolume }: Props) {
  const [showShare, setShowShare] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowAchievement(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 w-full z-40 flex flex-col gap-sm"
        style={{ padding: '40px 20px 20px', background: 'linear-gradient(to top, #15121c 60%, transparent)' }}
      >
        <button
          onClick={() => setShowShare(true)}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-outline-variant bg-surface-container-lowest text-on-background font-body text-label-lg hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>share</span>
          Share Progress
        </button>
        <Link
          href="/home"
          className="w-full py-4 rounded-full bg-primary-container text-on-primary-container font-body text-label-lg uppercase tracking-wider shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-opacity text-center block"
        >
          Done
        </Link>
      </div>

      <ShareModal
        isOpen={showShare}
        onClose={() => setShowShare(false)}
        workoutName={workoutName}
        duration={duration}
        calories={calories}
        totalVolume={totalVolume}
      />

      <AchievementModal
        isOpen={showAchievement}
        onClose={() => setShowAchievement(false)}
      />
    </>
  );
}
