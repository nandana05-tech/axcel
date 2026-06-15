'use client';

import { useState } from 'react';
import Link from 'next/link';

const RECENT_BADGES = [
  { name: '7 Day Streak', earned: '2 days ago', icon: 'local_fire_department' },
  { name: 'Early Bird', earned: 'Earned Oct 12', icon: 'wb_sunny' },
];

const ALL_BADGES = [
  { name: 'Iron Week', icon: 'fitness_center' },
  { name: 'Marathoner', icon: 'directions_run' },
  { name: 'Hydrated', icon: 'water_drop' },
  { name: 'Peak Form', icon: 'trending_up' },
  { name: 'Top Tier', icon: 'star' },
  { name: 'Quick Hit', icon: 'bolt' },
];

const LOCKED = [
  { name: 'Century Club', desc: 'Complete 100 workouts (78/100)' },
  { name: 'Night Owl', desc: 'Finish a workout after 11:00 PM' },
  { name: 'Social Butterfly', desc: 'Join 5 community groups' },
];

const TOTAL = 40;
const EARNED = 12;

const SOCIALS = [
  { label: 'Instagram', emoji: '📸', bg: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]' },
  { label: 'WhatsApp', emoji: '💬', bg: 'bg-[#25D366]' },
  { label: 'X', emoji: '✕', bg: 'bg-black border border-outline-variant' },
  { label: 'More', emoji: '···', bg: 'bg-surface-container-high' },
];

export default function BadgesPage() {
  const [showShare, setShowShare] = useState(false);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <div className="bg-background text-on-background min-h-screen font-body pb-32">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-margin-mobile py-4 h-16 bg-background/90 backdrop-blur-xl border-b border-white/5">
          <Link href="/profile" className="flex items-center gap-sm text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-headline text-headline-md text-on-surface uppercase tracking-wide">Badges</span>
          </Link>
          <button
            onClick={() => setShowShare(true)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-outline transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>share</span>
          </button>
        </header>

        <main className="flex flex-col gap-xl px-margin-mobile pt-lg">
          {/* Earning progress */}
          <section className="bg-surface-container rounded-xl p-lg border border-outline-variant">
            <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest mb-sm">
              Earning Progress
            </p>
            <div className="flex items-baseline gap-xs mb-md">
              <span className="font-headline text-display-lg text-primary-container">{EARNED}</span>
              <span className="font-body text-body-lg text-on-surface-variant">/ {TOTAL}</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-container to-primary rounded-full"
                style={{ width: `${(EARNED / TOTAL) * 100}%` }}
              />
            </div>
          </section>

          {/* Recently earned */}
          <section>
            <h2 className="font-body text-label-lg text-on-surface uppercase tracking-widest mb-md">
              Recently Earned
            </h2>
            <div className="grid grid-cols-2 gap-md">
              {RECENT_BADGES.map(({ name, earned, icon }) => (
                <div
                  key={name}
                  className="bg-surface-container rounded-xl p-md border border-outline-variant flex flex-col items-center gap-sm text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_20px_rgba(124,58,255,0.3)]">
                    <span className="material-symbols-outlined text-on-primary-container icon-fill" style={{ fontSize: '28px' }}>
                      {icon}
                    </span>
                  </div>
                  <p className="font-body text-label-lg text-on-surface">{name}</p>
                  <p className="font-body text-label-md text-on-surface-variant">{earned}</p>
                </div>
              ))}
            </div>
          </section>

          {/* All badges */}
          <section>
            <h2 className="font-body text-label-lg text-on-surface uppercase tracking-widest mb-md">
              All Badges
            </h2>
            <div className="grid grid-cols-3 gap-md">
              {ALL_BADGES.map(({ name, icon }) => (
                <div
                  key={name}
                  className="bg-surface-container rounded-xl p-md border border-outline-variant flex flex-col items-center gap-sm text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-container/80 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-container icon-fill" style={{ fontSize: '24px' }}>
                      {icon}
                    </span>
                  </div>
                  <p className="font-body text-label-md text-on-surface">{name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Locked achievements */}
          <section>
            <h2 className="font-body text-label-lg text-on-surface uppercase tracking-widest mb-md">
              Locked Achievements
            </h2>
            <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
              {LOCKED.map(({ name, desc }, i) => (
                <div
                  key={name}
                  className={`flex items-center gap-md p-md ${i < LOCKED.length - 1 ? 'border-b border-outline-variant' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock</span>
                  </div>
                  <div>
                    <p className="font-body text-label-lg text-on-surface">{name}</p>
                    <p className="font-body text-label-md text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Share bottom sheet */}
      {showShare && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-end justify-center"
          onClick={() => setShowShare(false)}
        >
          <div
            className="bg-surface-container-low rounded-t-3xl w-full max-w-sm pb-10 shadow-[0_-4px_40px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-4">
              <div className="w-10 h-1 bg-outline-variant rounded-full" />
            </div>

            {/* Badge summary card */}
            <div className="mx-md mb-lg bg-[#0f0f1a] rounded-xl overflow-hidden border border-outline-variant">
              <div className="p-md">
                <div className="flex items-center justify-between mb-sm">
                  <span className="font-headline text-primary-container text-[14px] tracking-wider">AXCEL</span>
                  <span className="px-3 py-1 rounded-full bg-primary-container/20 border border-primary-container/30 font-body text-label-md text-primary-container">
                    🏅 {EARNED}/{TOTAL} Badges
                  </span>
                </div>
                <h3 className="font-headline text-headline-lg text-on-surface uppercase leading-none mb-xs">
                  Alex Reyhan
                </h3>
                <p className="font-body text-label-md text-on-surface-variant mb-md">{today}</p>
                <div className="flex gap-sm">
                  {RECENT_BADGES.map(({ name, icon }) => (
                    <div key={name} className="flex items-center gap-xs">
                      <span className="material-symbols-outlined text-primary-container icon-fill" style={{ fontSize: '16px' }}>{icon}</span>
                      <span className="font-body text-label-md text-on-surface-variant">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary-container to-accent" />
            </div>

            {/* Social share */}
            <div className="px-md">
              <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest mb-md">Share Badges</p>
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
              {[
                { icon: 'download', label: 'Save Image' },
                { icon: 'link', label: 'Copy Share Link' },
              ].map(({ icon, label }) => (
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
      )}
    </>
  );
}
