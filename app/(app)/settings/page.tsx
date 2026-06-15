'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

export default function SettingsPage() {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [workoutReminder, setWorkoutReminder] = useState(true);

  return (
    <>
      <div className="bg-background text-on-background min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between px-margin-mobile py-4 h-16 bg-background/90 backdrop-blur-xl border-b border-white/5">
          <Link href="/home" className="text-on-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline text-headline-md text-on-surface uppercase tracking-wide">
            Settings
          </h1>
          <div className="w-6" />
        </header>

        <main className="flex-1 flex flex-col gap-xl px-margin-mobile py-lg pb-32">
          {/* Profile summary */}
          <section className="bg-surface-container rounded-xl p-md border border-outline-variant flex items-center gap-md">
            <div className="w-14 h-14 rounded-full bg-primary-container/20 border-2 border-primary-container flex items-center justify-center shrink-0">
              <span className="text-primary font-headline text-headline-md">A</span>
            </div>
            <div className="flex-1">
              <p className="font-headline text-headline-md text-on-surface">Alex Reyhan</p>
              <p className="font-body text-label-md text-on-surface-variant">Intermediate · Member since 2024</p>
            </div>
            <Link href="/profile" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined icon-fill">chevron_right</span>
            </Link>
          </section>

          {/* Akun */}
          <section className="flex flex-col gap-xs">
            <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest px-xs mb-xs">
              Account
            </p>
            <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
              <Link href="/profile" className="flex items-center justify-between px-md py-sm border-b border-outline-variant hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>person</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Edit Profile</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant icon-fill">chevron_right</span>
              </Link>
              <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>lock</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Change Password</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant icon-fill">chevron_right</span>
              </div>
              <div className="flex items-center justify-between px-md py-sm">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>email</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Email</span>
                </div>
                <span className="font-body text-label-md text-on-surface-variant">alex@example.com</span>
              </div>
            </div>
          </section>

          {/* Preferensi */}
          <section className="flex flex-col gap-xs">
            <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest px-xs mb-xs">
              Preferences
            </p>
            <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
              <Link href="/settings/notifications" className="flex items-center justify-between px-md py-sm border-b border-outline-variant hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>notifications</span>
                  </div>
                  <div>
                    <span className="font-body text-body-md text-on-surface block">Reminder &amp; Notifications</span>
                    <span className="font-body text-label-md text-on-surface-variant">Manage workout reminders</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant icon-fill">chevron_right</span>
              </Link>
              <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>fitness_center</span>
                  </div>
                  <div>
                    <span className="font-body text-body-md text-on-surface block">Workout Reminder</span>
                    <span className="font-body text-label-md text-on-surface-variant">Every day, 07:00 AM</span>
                  </div>
                </div>
                <Toggle on={workoutReminder} onToggle={() => setWorkoutReminder((v) => !v)} />
              </div>
              <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>dark_mode</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Dark Mode</span>
                </div>
                <Toggle on={darkMode} onToggle={() => setDarkMode((v) => !v)} />
              </div>
              <div className="flex items-center justify-between px-md py-sm">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>language</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Language</span>
                </div>
                <span className="font-body text-label-md text-on-surface-variant">Indonesia</span>
              </div>
            </div>
          </section>

          {/* Tentang */}
          <section className="flex flex-col gap-xs">
            <p className="font-body text-label-md text-on-surface-variant uppercase tracking-widest px-xs mb-xs">
              About
            </p>
            <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
              <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>info</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">App Version</span>
                </div>
                <span className="font-body text-label-md text-on-surface-variant">1.0.0</span>
              </div>
              <div className="flex items-center justify-between px-md py-sm border-b border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>policy</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Privacy Policy</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant icon-fill">chevron_right</span>
              </div>
              <div className="flex items-center justify-between px-md py-sm hover:bg-surface-container-high transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined icon-fill" style={{ fontSize: '18px' }}>help</span>
                  </div>
                  <span className="font-body text-body-md text-on-surface">Help</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant icon-fill">chevron_right</span>
              </div>
            </div>
          </section>

          {/* Sign out */}
          <button
            onClick={() => setShowLogout(true)}
            className="w-full py-4 rounded-xl border border-error/40 text-error font-body text-label-lg uppercase tracking-wider hover:bg-error/10 transition-colors"
          >
            Sign Out
          </button>
        </main>
      </div>

      {/* Logout confirmation modal */}
      {showLogout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-margin-mobile"
          onClick={() => setShowLogout(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm bg-surface-container rounded-2xl p-xl border border-outline-variant shadow-2xl flex flex-col items-center gap-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-error/15 flex items-center justify-center">
              <span className="material-symbols-outlined icon-fill text-error" style={{ fontSize: '32px' }}>logout</span>
            </div>
            <div className="flex flex-col items-center gap-sm text-center">
              <h2 className="font-headline text-headline-md text-on-surface">Sign Out?</h2>
              <p className="font-body text-body-md text-on-surface-variant">
                You'll be signed out of this account. See you soon, Alex!
              </p>
            </div>
            <div className="flex flex-col gap-sm w-full">
              <button
                onClick={() => { setShowLogout(false); router.push('/'); }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-error to-error/80 text-white font-body text-label-lg uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(255,0,0,0.2)] hover:opacity-90 transition-opacity"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={() => setShowLogout(false)}
                className="w-full py-4 rounded-full border border-outline-variant text-on-surface font-body text-label-lg uppercase tracking-wider hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
