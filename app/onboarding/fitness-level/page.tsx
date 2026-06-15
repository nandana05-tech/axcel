'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LEVELS = [
  {
    id: 'beginner',
    label: 'Beginner',
    desc: 'Just starting out or getting back into it',
    icon: 'fitness_center',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    desc: 'Train 2-3 times a week consistently',
    icon: 'local_fire_department',
  },
  {
    id: 'expert',
    label: 'Expert',
    desc: 'Highly active, dedicated training regimen',
    icon: 'bolt',
  },
];

export default function FitnessLevelPage() {
  const router = useRouter();
  const [selected, setSelected] = useState('intermediate');

  return (
    <div className="bg-[#0F0F14] text-on-background font-body min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex flex-col w-full px-margin-mobile pt-md pb-lg">
        <div className="flex items-center justify-between mb-lg">
          <Link
            href="/onboarding/goal"
            className="flex items-center justify-center size-12 -ml-sm text-on-surface"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
          </Link>
          <div className="w-12" />
        </div>

        {/* Progress */}
        <div className="flex w-full flex-row items-center justify-center gap-xs mb-lg">
          <div className="h-2 w-full rounded-full bg-elevated max-w-[40px]" />
          <div className="h-2 w-full rounded-full bg-elevated max-w-[40px]" />
          <div className="h-2 w-full rounded-full bg-elevated max-w-[40px]" />
          <div className="h-2 w-full rounded-full bg-primary-container max-w-[40px]" />
        </div>

        <h1
          className="font-headline text-on-background mb-sm uppercase"
          style={{ fontSize: '32px', lineHeight: '32px', letterSpacing: '0.02em' }}
        >
          What's your fitness level?
        </h1>
        <p className="text-body-md text-muted">We'll personalize your plan based on this.</p>
      </header>

      {/* Content */}
      <main className="flex-1 px-margin-mobile flex flex-col gap-md pb-xl">
        {LEVELS.map((level) => {
          const isSelected = selected === level.id;
          return (
            <label
              key={level.id}
              onClick={() => setSelected(level.id)}
              className={`flex items-center p-md rounded-xl cursor-pointer active:scale-[0.98] transition-all duration-200 relative overflow-hidden ${
                isSelected
                  ? 'bg-card border border-primary-container shadow-[0_0_15px_rgba(124,58,255,0.15)]'
                  : 'bg-card border border-elevated'
              }`}
              style={{ backgroundColor: '#1A1A24' }}
            >
              {isSelected && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container" />
              )}
              <div
                className={`flex items-center justify-center size-12 rounded-lg mr-md text-primary-container shrink-0 ${
                  isSelected ? 'ml-1 bg-primary-container/20' : 'bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  {level.icon}
                </span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-label-lg text-on-background uppercase tracking-widest mb-xs">
                  {level.label}
                </span>
                <span className="text-label-md text-muted">{level.desc}</span>
              </div>
              <div className="flex items-center justify-center size-6 ml-sm shrink-0">
                <div
                  className={`size-5 rounded-full border-2 transition-colors ${
                    isSelected
                      ? 'border-primary-container bg-primary-container'
                      : 'border-outline-variant bg-transparent'
                  }`}
                />
              </div>
            </label>
          );
        })}
      </main>

      {/* Bottom Action */}
      <footer className="px-margin-mobile pb-xl pt-md bg-[#0F0F14] sticky bottom-0 z-10">
        <button
          onClick={() => router.push('/home')}
          className="w-full h-[56px] rounded-full flex items-center justify-center text-background text-label-lg uppercase tracking-widest active:scale-[0.98] transition-transform duration-200 shadow-[0_4px_14px_rgba(0,229,160,0.2)]"
          style={{ background: 'linear-gradient(90deg, #7c3aff 0%, #00E5A0 100%)' }}
        >
          Continue
          <span className="material-symbols-outlined ml-sm" style={{ fontSize: '20px' }}>arrow_forward</span>
        </button>
      </footer>
    </div>
  );
}
