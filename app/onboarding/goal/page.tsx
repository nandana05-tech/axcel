'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const GOALS = [
  { id: 'lose-weight', label: 'Lose Weight', icon: 'local_fire_department', color: 'text-tertiary' },
  { id: 'build-muscle', label: 'Build Muscle', icon: 'fitness_center', color: 'text-primary-container' },
  { id: 'endurance', label: 'Improve Endurance', icon: 'directions_run', color: 'text-secondary' },
  { id: 'stay-active', label: 'Stay Active', icon: 'favorite', color: 'text-error' },
];

export default function GoalSelectionPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>(['build-muscle']);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((g) => g !== id)
        : prev.length < 2
          ? [...prev, id]
          : prev
    );
  };

  return (
    <div
      className="bg-[#0F0F14] text-on-background min-h-screen flex flex-col font-body overflow-hidden"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Top App Bar */}
      <header className="flex justify-between items-center w-full px-6 py-4 h-16 sticky top-0 z-50">
        <Link href="/login" className="text-on-surface-variant hover:text-white transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div
          className="font-headline text-primary-container font-black italic tracking-tighter"
          style={{ fontSize: '24px', lineHeight: '24px' }}
        >
          AXCEL
        </div>
        <div className="w-6" />
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col px-margin-mobile pt-md pb-xl overflow-y-auto">
        {/* Progress dots */}
        <div className="flex justify-center items-center gap-xs mb-xl">
          <div className="w-8 h-1 rounded-full bg-elevated" />
          <div className="w-8 h-1 rounded-full bg-elevated" />
          <div className="w-8 h-1 rounded-full bg-primary-container" />
          <div className="w-8 h-1 rounded-full bg-elevated" />
        </div>

        {/* Heading */}
        <div className="mb-xl flex flex-col items-center text-center">
          <h1
            className="font-headline text-white mb-sm"
            style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0.02em' }}
          >
            What's your main goal?
          </h1>
          <p className="text-body-md text-outline">Pick up to 2 goals to focus on.</p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-gutter flex-grow min-h-0">
          {GOALS.map((goal) => {
            const isSelected = selected.includes(goal.id);
            return (
              <button
                key={goal.id}
                onClick={() => toggle(goal.id)}
                className={`rounded-[16px] flex flex-col items-center justify-center p-md gap-md active:scale-95 transition-transform relative ${
                  isSelected
                    ? 'bg-primary-container/10 border-2 border-primary-container'
                    : 'bg-card border border-elevated'
                }`}
                style={{ backgroundColor: isSelected ? 'rgba(124,58,255,0.1)' : '#1A1A24' }}
              >
                {isSelected && (
                  <div className="absolute top-sm right-sm w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined icon-fill text-[#0F0F14]" style={{ fontSize: '16px' }}>check</span>
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-primary-container/20' : 'bg-surface-container'
                  }`}
                >
                  <span className={`material-symbols-outlined ${goal.color}`} style={{ fontSize: '32px' }}>
                    {goal.icon}
                  </span>
                </div>
                <span className="text-label-lg text-white">{goal.label}</span>
              </button>
            );
          })}
        </div>
      </main>

      {/* Bottom Action */}
      <div className="px-margin-mobile py-lg">
        <button
          onClick={() => router.push('/onboarding/fitness-level')}
          disabled={selected.length === 0}
          className="w-full h-14 rounded-full flex items-center justify-center text-label-lg text-white tracking-widest uppercase active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(124,58,255,0.3)] disabled:opacity-50"
          style={{ background: 'linear-gradient(90deg, #7c3aff 0%, #00E5A0 100%)' }}
        >
          Continue
          <span className="material-symbols-outlined ml-sm" style={{ fontSize: '20px' }}>arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
