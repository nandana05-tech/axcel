import Link from 'next/link';

const CALENDAR_DAYS = [
  null, null, // empty slots for alignment
  { day: 1, type: 'workout' },
  { day: 2, type: 'rest' },
  { day: 3, type: 'workout' },
  { day: 4, type: 'today' },
  { day: 5, type: 'empty' },
  { day: 6, type: 'empty' },
  { day: 7, type: 'empty' },
];

const RECENT_WORKOUTS = [
  { icon: 'fitness_center', name: 'Upper Body Strength', meta: 'Yesterday · 45 Min' },
  { icon: 'directions_run', name: 'HIIT Cardio Burn', meta: '3 Oct · 30 Min' },
  { icon: 'pool', name: 'Active Recovery Swim', meta: '1 Oct · 20 Min' },
];

export default function ProfilePage() {
  return (
    <div className="bg-surface text-on-surface pb-24 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-6 py-4 h-16 bg-zinc-950/80 backdrop-blur-lg top-0 sticky z-50 border-b border-white/5">
        <h1 className="font-headline text-headline-lg-mobile text-on-surface uppercase tracking-tighter">
          Profile &amp; Progress
        </h1>
        <Link href="/settings" className="text-zinc-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined icon-fill">settings</span>
        </Link>
      </header>

      <main className="flex-1 px-margin-mobile pt-md pb-xl flex flex-col gap-xl">
        {/* Profile card */}
        <section className="bg-surface-container rounded-xl p-md border border-outline-variant shadow-sm flex items-center gap-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container" />
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-primary-container shrink-0 bg-surface-container-high flex items-center justify-center">
            <span className="text-primary font-headline text-display-lg">A</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline text-headline-md text-on-surface">Alex Reyhan</h2>
            <p className="font-body text-body-md text-on-surface-variant mt-1">Intermediate · 5-day streak 🔥</p>
          </div>
        </section>

        {/* Stats bento */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-sm">
          {[
            { label: 'Total Workouts', value: '48', color: 'text-primary' },
            { label: 'Total Calories', value: '12k', color: 'text-primary' },
            { label: 'Active Days', value: '34', color: 'text-primary', fullWidth: true },
          ].map(({ label, value, color, fullWidth }) => (
            <div
              key={label}
              className={`bg-surface-container-high rounded-xl p-md border border-outline-variant flex flex-col justify-center items-start ${
                fullWidth ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <span className="font-body text-label-md text-on-surface-variant uppercase tracking-wider mb-1">{label}</span>
              <span className={`font-headline text-display-lg ${color}`}>{value}</span>
            </div>
          ))}
        </section>

        {/* Badges section */}
        <section className="flex flex-col gap-sm">
          <h2 className="font-headline text-headline-md text-on-surface uppercase tracking-wide">Badges</h2>
          <Link
            href="/profile/badges"
            className="flex items-center gap-md p-md rounded-xl border-2 border-dashed border-primary-container/50 bg-surface-container/40 hover:bg-surface-container hover:border-primary-container transition-colors active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary-container/60 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(124,58,255,0.25)]">
              <span className="material-symbols-outlined icon-fill text-primary-container" style={{ fontSize: '24px' }}>military_tech</span>
            </div>
            <div className="flex-1">
              <p className="font-body text-body-lg font-bold text-on-surface">Your Badges</p>
              <p className="font-body text-label-md text-on-surface-variant">See All Badges</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </Link>
        </section>

        {/* Weekly target progress */}
        <section className="bg-surface-container rounded-xl p-lg border border-outline-variant flex flex-col items-center relative overflow-hidden">
          <div className="w-full flex justify-between items-center mb-lg">
            <h3 className="font-headline text-headline-md text-on-surface">Weekly Target</h3>
            <span className="material-symbols-outlined text-primary-container icon-fill">flag</span>
          </div>
          {/* Semi-circle progress */}
          <div className="w-[200px] h-[100px] overflow-hidden relative mb-2">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <path
                d="M 16 100 A 84 84 0 0 1 184 100"
                fill="none"
                stroke="#2c2834"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M 16 100 A 84 84 0 0 1 184 100"
                fill="none"
                stroke="url(#progressGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="264"
                strokeDashoffset="105"
              />
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aff" />
                  <stop offset="100%" stopColor="#d0bcff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center -mt-2 relative z-10">
            <span className="font-headline text-display-lg text-on-surface">3/5</span>
            <span className="font-body text-label-md text-on-surface-variant uppercase tracking-wider">Workouts Done</span>
          </div>
        </section>

        {/* Activity calendar */}
        <section className="bg-surface-container rounded-xl p-md border border-outline-variant">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-headline text-headline-md text-on-surface">Activity Calendar</h3>
            <div className="flex items-center gap-2">
              <button className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined icon-fill text-sm">chevron_left</span>
              </button>
              <span className="font-body text-label-md text-on-surface">Oct 2024</span>
              <button className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined icon-fill text-sm">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <span key={i} className="font-body text-label-md text-on-surface-variant">{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {CALENDAR_DAYS.map((day, i) => {
              if (!day) return <div key={i} />;
              const base = 'aspect-square rounded-full flex items-center justify-center font-body text-body-md text-on-surface';
              const styles: Record<string, string> = {
                workout: `${base} bg-primary-container`,
                rest: `${base} bg-surface-variant`,
                today: `${base} border-2 border-tertiary text-tertiary`,
                empty: `${base} text-on-surface-variant`,
              };
              return (
                <div key={i} className={styles[day.type] || styles.empty}>
                  {day.day}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-lg pt-md border-t border-outline-variant justify-center">
            {[
              { color: 'bg-primary-container', label: 'Done' },
              { color: 'bg-surface-variant', label: 'Rest' },
              { color: 'border-2 border-tertiary', label: 'Today' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <span className="font-body text-label-md text-on-surface-variant">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent workouts */}
        <section className="flex flex-col gap-sm">
          <div className="flex justify-between items-end mb-sm">
            <h3 className="font-headline text-headline-md text-on-surface">Recent History</h3>
            <a href="#" className="font-body text-label-md text-primary hover:text-primary-container transition-colors">
              See All →
            </a>
          </div>
          {RECENT_WORKOUTS.map(({ icon, name, meta }) => (
            <div
              key={name}
              className="bg-surface-container rounded-xl p-md border border-outline-variant flex items-center justify-between hover:scale-[0.98] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div>
                  <h4 className="font-body text-label-lg text-on-surface">{name}</h4>
                  <p className="font-body text-label-md text-on-surface-variant">{meta}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant icon-fill">chevron_right</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
