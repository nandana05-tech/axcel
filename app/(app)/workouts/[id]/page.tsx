'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import ShareModal from '@/components/modals/ShareModal';

const STEPS = [
  {
    step: 1,
    title: 'Position the bar',
    desc: 'Step under the bar and position it across the back of your shoulders (not your neck). Grip the bar firmly, slightly wider than shoulder-width.',
    active: true,
  },
  {
    step: 2,
    title: 'Squat down',
    desc: "Keep your chest up and back straight. Push your hips back and bend your knees as if sitting in a chair. Lower until your thighs are parallel to the floor.",
    active: false,
  },
  {
    step: 3,
    title: 'Drive up',
    desc: 'Push through your heels and extend your hips and knees to return to the starting position. Keep your core braced throughout.',
    active: false,
  },
];

export default function WorkoutDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string | undefined;

  const workoutName = id
    ? id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Barbell Back Squat';

  const [showShare, setShowShare] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  useEffect(() => {
    if (!showSavedToast) return;
    const t = setTimeout(() => setShowSavedToast(false), 2000);
    return () => clearTimeout(t);
  }, [showSavedToast]);

  const handleBookmark = () => {
    setSaved((v) => !v);
    setShowSavedToast(true);
  };

  return (
    <>
      <div className="bg-background text-on-background font-body overflow-x-hidden relative pb-[100px]">
        {/* Video / Hero area */}
        <div className="relative w-full aspect-video bg-surface-container-highest">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC98RI3AVUcbrWVHJvxY3F_bC_vZf6jLVxiTZO195_EQWzBZ5ha0z6B7ukPCB9aIXEnzPi_iXNjIFddthD-6QXuoSGclsvDorAQXgk2JjVpSJlUfPm5pX4GWXNlROdHhZG7TLHWCAy7Xsy0ojefadHVg7oUzIII4hfW5D9uWLBAjzVIIxFlsJZ_emQ-u3vl-YqwSiA6iiB-HzTUKwYf-3GixZoOXL7NU5bxi-TUJrfPHQe7TbNVFY8zmuKxK2cLownXxx8mKePU_iiq')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Top actions */}
          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 rounded-full bg-surface-dim/40 backdrop-blur flex items-center justify-center border border-white/10 text-white transition-transform active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setShowShare(true)}
                className="w-10 h-10 rounded-full bg-surface-dim/40 backdrop-blur flex items-center justify-center border border-white/10 text-white transition-transform active:scale-90"
              >
                <span className="material-symbols-outlined">share</span>
              </button>
              <button
                onClick={handleBookmark}
                className="w-10 h-10 rounded-full bg-surface-dim/40 backdrop-blur flex items-center justify-center border border-white/10 text-white transition-transform active:scale-90"
              >
                <span className={`material-symbols-outlined ${saved ? 'icon-fill text-accent' : ''}`}>
                  bookmark
                </span>
              </button>
            </div>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-primary-container/80 backdrop-blur flex items-center justify-center text-on-primary-container shadow-[0_0_20px_rgba(124,58,255,0.4)] cursor-pointer transition-transform hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined icon-fill text-4xl">play_arrow</span>
            </div>
          </div>

          {/* Progress scrubber */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-surface-variant/50">
            <div className="h-full bg-primary w-1/3 rounded-r-full shadow-[0_0_8px_rgba(208,188,255,0.8)]" />
          </div>
        </div>

        {/* Main Content */}
        <main className="px-margin-mobile py-lg flex flex-col gap-xl">
          {/* Header */}
          <header className="flex flex-col gap-2">
            <h1 className="font-headline text-headline-lg text-on-background uppercase tracking-wide">
              {workoutName}
            </h1>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Quads', 'Glutes', 'Core'].map((muscle) => (
                <span
                  key={muscle}
                  className="bg-primary-container/20 text-primary border border-primary/30 px-3 py-1 rounded-full font-body text-label-md uppercase tracking-wider"
                >
                  {muscle}
                </span>
              ))}
              <span className="bg-tertiary-container/30 text-tertiary border border-tertiary/40 px-3 py-1 rounded-full font-body text-label-md uppercase tracking-wider ml-auto">
                Intermediate
              </span>
            </div>
          </header>

          {/* Stats row */}
          <section className="grid grid-cols-3 gap-3">
            {[
              { icon: 'fitness_center', value: '4', unit: 'Sets' },
              { icon: 'repeat', value: '10', unit: 'Reps' },
              { icon: 'timer', value: '90s', unit: 'Rest' },
            ].map(({ icon, value, unit }) => (
              <div
                key={unit}
                className="bg-surface-container rounded-xl p-3 flex flex-col items-center justify-center border border-surface-container-highest shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                <span className="material-symbols-outlined text-on-surface-variant mb-1">{icon}</span>
                <span className="font-headline text-headline-md text-on-surface">{value}</span>
                <span className="font-body text-label-md text-on-surface-variant uppercase">{unit}</span>
              </div>
            ))}
          </section>

          {/* Tabs */}
          <section className="flex flex-col">
            <div className="flex gap-6 border-b border-surface-variant">
              {['Instructions', 'Muscles', 'Tips'].map((tab, i) => (
                <button
                  key={tab}
                  className={`pb-3 font-body text-label-lg uppercase tracking-wider relative ${
                    i === 0
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-on-surface transition-colors'
                  }`}
                >
                  {tab}
                  {i === 0 && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full shadow-[0_-2px_8px_rgba(208,188,255,0.5)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-6 mt-6">
              {STEPS.map((step, idx) => (
                <div key={step.step} className="flex gap-4 relative">
                  {idx < STEPS.length - 1 && (
                    <div className="absolute left-4 top-10 bottom-[-24px] w-0.5 bg-surface-variant z-0" />
                  )}
                  <div
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-body text-label-lg font-bold shrink-0 ${
                      step.active
                        ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(208,188,255,0.4)]'
                        : 'bg-surface-container border-2 border-surface-variant text-on-surface-variant'
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-body text-body-lg font-bold text-on-surface mb-1">{step.title}</h3>
                    <p className="font-body text-body-md text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modification banner */}
          <div className="bg-surface-container-high rounded-xl p-4 border border-outline-variant flex flex-col gap-4 mt-2 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined icon-fill text-tertiary">warning</span>
              <span className="font-body text-body-lg font-bold text-on-surface">Need a modification?</span>
            </div>
            <button
              onClick={() => router.push(`/workouts/${id ?? 'upper-body-strength'}/modifications`)}
              className="w-full py-2.5 rounded-lg border border-outline text-on-surface font-body text-label-lg uppercase tracking-wider hover:bg-surface-variant transition-colors active:scale-[0.98]"
            >
              View Easier Version
            </button>
          </div>
        </main>

        {/* Bottom action */}
        <div className="fixed bottom-[80px] md:bottom-0 left-0 w-full px-margin-mobile py-4 bg-background/90 backdrop-blur-md border-t border-white/5 z-40">
          <Link
            href={`/workouts/${id ?? 'upper-body-strength'}/active`}
            className="w-full h-16 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container flex items-center justify-center font-headline text-headline-md uppercase tracking-[0.05em] shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Start Workout
          </Link>
        </div>
      </div>

      {/* Saved toast */}
      <div
        className={`fixed bottom-[100px] left-1/2 -translate-x-1/2 z-50 flex items-center gap-sm px-lg py-sm rounded-full bg-surface-container-high border border-outline-variant shadow-xl transition-all duration-300 whitespace-nowrap ${
          showSavedToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <span className={`material-symbols-outlined icon-fill text-sm ${saved ? 'text-accent' : 'text-on-surface-variant'}`}>
          {saved ? 'bookmark_added' : 'bookmark_remove'}
        </span>
        <span className="font-body text-label-md text-on-surface">
          {saved ? 'Workout saved!' : 'Removed from saved'}
        </span>
      </div>

      <ShareModal
        isOpen={showShare}
        onClose={() => setShowShare(false)}
        workoutName={workoutName}
        duration={45}
        calories={315}
        totalVolume={2400}
      />
    </>
  );
}
