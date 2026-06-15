'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import EndWorkoutModal from '@/components/modals/EndWorkoutModal';

const REST_DURATION = 75;

export default function ActiveWorkoutPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params?.id as string | undefined;
  const fromWorkout = searchParams.get('from');

  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(60);
  const [restSeconds, setRestSeconds] = useState(REST_DURATION);
  const [isResting, setIsResting] = useState(true);
  const [showEndModal, setShowEndModal] = useState(false);

  useEffect(() => {
    if (!isResting) return;
    if (restSeconds <= 0) {
      setIsResting(false);
      setRestSeconds(REST_DURATION);
      return;
    }
    const t = setTimeout(() => setRestSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [isResting, restSeconds]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const handleSkip = () => {
    if (fromWorkout) {
      router.push(`/workouts/${fromWorkout}`);
      return;
    }
    setIsResting(false);
    setRestSeconds(REST_DURATION);
  };

  const handleComplete = () => {
    if (!id) return;
    router.push(`/workouts/${id}/complete?sets=${sets}&reps=${reps}&weight=${weight}`);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body overflow-x-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-margin-mobile py-md border-b border-outline-variant/30 sticky top-0 bg-background/90 backdrop-blur-md z-40">
        <Link
          href={`/workouts/${id ?? ''}`}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-on-surface">close</span>
        </Link>
        <div className="text-center">
          <h1 className="font-body text-label-lg text-on-surface tracking-widest uppercase">Active Workout</h1>
        </div>
        <div className="text-right">
          <span className="font-body text-label-md text-primary font-bold">EXERCISE: 3/8</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col px-margin-mobile py-lg gap-xl max-w-lg mx-auto w-full">
        {/* Exercise header */}
        <section className="flex flex-col items-center text-center gap-sm">
          <div className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-surface-container border border-outline-variant mb-xs">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-body text-label-md text-on-surface-variant uppercase tracking-wider">Intermediate</span>
          </div>
          <h2 className="font-headline text-display-lg text-on-surface uppercase tracking-tight leading-none">
            Barbell Back Squat
          </h2>
          <p className="font-body text-body-md text-outline">Quads &amp; Glutes</p>
        </section>

        {/* Timer / Progress ring */}
        <section className="flex justify-center items-center py-md relative">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center rounded-full bg-surface-container border-8 border-surface-variant shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]">
            <div
              className="absolute inset-0 rounded-full border-8 border-transparent pointer-events-none transition-colors duration-1000"
              style={{
                borderTopColor: isResting ? '#d0bcff' : '#37333f',
                borderRightColor: isResting && restSeconds < REST_DURATION * 0.75 ? '#7c3aff' : '#37333f',
                transform: 'rotate(45deg)',
              }}
            />
            <div className="flex flex-col items-center justify-center z-10">
              <span
                className="font-headline text-on-surface tabular-nums tracking-tighter"
                style={{ fontSize: '56px', lineHeight: 1 }}
              >
                {formatTime(restSeconds)}
              </span>
              <span className="font-body text-label-md text-primary mt-sm tracking-widest uppercase">
                {isResting ? 'Rest' : 'Ready'}
              </span>
            </div>
          </div>
        </section>

        {/* Metric controls */}
        <section className="grid grid-cols-3 gap-sm sm:gap-md">
          {[
            { label: 'SET', displayValue: `${sets}/5`, unit: '', setter: setSets },
            { label: 'REPS', displayValue: `${reps}`, unit: '', setter: setReps },
            { label: 'WEIGHT', displayValue: `${weight}`, unit: 'kg', setter: setWeight },
          ].map(({ label, displayValue, unit, setter }) => (
            <div
              key={label}
              className="bg-surface-container rounded-lg p-md flex flex-col items-center justify-between border border-outline-variant shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            >
              <span className="font-body text-label-md text-outline tracking-wider mb-sm">{label}</span>
              <div className="font-headline text-headline-md text-on-surface mb-sm flex items-baseline gap-xs">
                {displayValue}
                {unit && <span className="font-body text-label-md text-outline uppercase">{unit}</span>}
              </div>
              <div className="flex gap-xs mt-auto">
                <button
                  onClick={() => setter((v: number) => Math.max(1, v - 1))}
                  className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container-high active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <button
                  onClick={() => setter((v: number) => v + 1)}
                  className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-on-surface hover:bg-surface-container-high active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Primary actions */}
        <section className="flex gap-md mt-auto pt-lg">
          <button
            onClick={handleSkip}
            className="flex-none px-xl py-md rounded-full border-2 border-outline-variant text-on-surface font-body text-label-lg hover:bg-surface-variant active:scale-95 transition-all uppercase tracking-wide"
          >
            Skip
          </button>
          <button
            onClick={handleComplete}
            className="flex-1 px-lg py-md rounded-full bg-primary text-on-primary font-body text-label-lg flex items-center justify-center gap-sm hover:bg-primary-container hover:text-on-primary-container active:scale-95 transition-all uppercase tracking-wide shadow-[0_0_20px_rgba(208,188,255,0.3)]"
          >
            Complete Set
            <span className="material-symbols-outlined">check</span>
          </button>
        </section>

        {/* Danger link */}
        <section className="flex justify-center pb-safe">
          <button
            onClick={() => setShowEndModal(true)}
            className="font-body text-label-md text-error hover:text-error-container uppercase tracking-widest pb-md pt-sm"
          >
            End Workout
          </button>
        </section>
      </main>

      <EndWorkoutModal
        isOpen={showEndModal}
        onClose={() => setShowEndModal(false)}
        onConfirm={() => { setShowEndModal(false); router.push('/home'); }}
      />
    </div>
  );
}
