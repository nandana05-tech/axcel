'use client';

import { useState } from 'react';
import Link from 'next/link';

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
        on ? 'bg-primary-container' : 'bg-surface-container-highest'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 ${
          on ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest px-xs mb-xs">
      {children}
    </p>
  );
}

export default function NotificationsSettingsPage() {
  const [pengingat, setPengingat] = useState(true);
  const [streak, setStreak] = useState(false);
  const [badge, setBadge] = useState(false);
  const [water, setWater] = useState(false);
  const [tips, setTips] = useState(false);
  const [morning, setMorning] = useState(false);
  const [positif, setPositif] = useState(false);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 flex items-center justify-between px-margin-mobile py-4 h-16 bg-background/90 backdrop-blur-xl border-b border-white/5">
        <Link href="/settings" className="text-on-surface hover:text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline text-headline-md text-on-surface uppercase tracking-wide">
          Reminders &amp; Notifications
        </h1>
        <div className="w-6" />
      </header>

      <main className="flex-1 flex flex-col gap-xl px-margin-mobile py-lg pb-32">

        {/* Workout Reminder */}
        <section className="flex flex-col gap-xs">
          <SectionLabel>Workout Reminder</SectionLabel>
          <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
            {/* Pengingat Harian */}
            <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
              <div className="flex-1 pr-md">
                <p className="font-body text-body-md text-on-surface">Daily Reminder</p>
                <p className="font-body text-label-md text-on-surface-variant">Remind me every day</p>
              </div>
              <Toggle on={pengingat} onToggle={() => setPengingat((v) => !v)} />
            </div>
            {/* Reminder Time */}
            <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
              <p className="font-body text-body-md text-on-surface">Reminder Time</p>
              <div className="flex items-center gap-xs text-primary-container">
                <span className="font-body text-body-md font-bold">07:00 AM</span>
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>chevron_right</span>
              </div>
            </div>
            {/* Select a Day */}
            <div className="flex items-center justify-between px-md py-sm">
              <p className="font-body text-body-md text-on-surface">Select a Day</p>
              <div className="flex items-center gap-xs text-on-surface-variant">
                <span className="font-body text-body-md">Mon, Tue, Wed...</span>
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>chevron_right</span>
              </div>
            </div>
          </div>
        </section>

        {/* Notification */}
        <section className="flex flex-col gap-xs">
          <SectionLabel>Notification</SectionLabel>
          <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
            <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
              <p className="font-body text-body-md text-on-surface">The Streak Is Almost Over</p>
              <Toggle on={streak} onToggle={() => setStreak((v) => !v)} />
            </div>
            <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
              <p className="font-body text-body-md text-on-surface">New Badge</p>
              <Toggle on={badge} onToggle={() => setBadge((v) => !v)} />
            </div>
            <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
              <div className="flex-1 pr-md">
                <p className="font-body text-body-md text-on-surface">Drink Water Reminder</p>
                <p className="font-body text-label-md text-on-surface-variant">Every 2 Hour</p>
              </div>
              <Toggle on={water} onToggle={() => setWater((v) => !v)} />
            </div>
            <div className="flex items-center justify-between px-md py-sm">
              <p className="font-body text-body-md text-on-surface">Tips &amp; New Article</p>
              <Toggle on={tips} onToggle={() => setTips((v) => !v)} />
            </div>
          </div>
        </section>

        {/* Motivation */}
        <section className="flex flex-col gap-xs">
          <SectionLabel>Motivation</SectionLabel>
          <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
            <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
              <p className="font-body text-body-md text-on-surface">Morning Motivation Message</p>
              <Toggle on={morning} onToggle={() => setMorning((v) => !v)} />
            </div>
            <div className="flex items-center justify-between px-md py-sm">
              <p className="font-body text-body-md text-on-surface">Automatic Positive Notification</p>
              <Toggle on={positif} onToggle={() => setPositif((v) => !v)} />
            </div>
          </div>
        </section>

        {/* Auto-save footer */}
        <div className="flex items-center justify-center gap-sm text-on-surface-variant">
          <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>cloud_done</span>
          <span className="font-body text-label-md">Settings are saved automatically</span>
        </div>
      </main>
    </div>
  );
}
