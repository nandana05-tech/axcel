import Link from 'next/link';

const ARTICLES = [
  {
    id: 1,
    tag: 'NUTRITION',
    tagColor: 'bg-primary/20 text-primary',
    title: 'The Importance of Post-Workout Protein',
    readTime: '3 Min Read',
    hoverColor: 'group-hover:text-primary',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    tag: 'RECOVERY',
    tagColor: 'bg-secondary/20 text-secondary',
    title: 'Optimize Your Sleep Quality',
    readTime: '5 Min Read',
    hoverColor: 'group-hover:text-secondary',
    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    tag: 'FORM',
    tagColor: 'bg-tertiary/20 text-tertiary',
    title: 'Proper Deadlift Technique',
    readTime: '4 Min Read',
    hoverColor: 'group-hover:text-tertiary',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop',
  },
];

export default function HomePage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      {/* Desktop top bar */}
      <header className="bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 hidden md:flex justify-between items-center w-full px-6 py-4 h-16 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-white/10 flex-shrink-0 hover:border-primary/50 transition-colors">
            <div className="w-full h-full bg-primary-container/30 flex items-center justify-center text-primary text-xs font-bold">A</div>
          </Link>
          <h1 className="text-violet-500 font-headline font-bold text-lg uppercase tracking-tighter italic text-xl">AXCEL</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          {[
            { href: '/home', label: 'Home', icon: 'home', active: true },
            { href: '/workouts', label: 'Workouts', icon: 'fitness_center', active: false },
            { href: '/schedule', label: 'Activity', icon: 'calendar_month', active: false },
            { href: '/profile', label: 'Profile', icon: 'person', active: false },
          ].map(({ href, label, icon, active }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center text-[10px] font-medium tracking-wide transition-colors ${
                active
                  ? 'text-violet-400 bg-violet-500/10 rounded-xl px-3 py-1'
                  : 'text-zinc-500 hover:text-violet-300'
              }`}
            >
              <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/settings" className="text-zinc-400 hover:text-primary transition-colors p-2">
          <span className="material-symbols-outlined">settings</span>
        </Link>
      </header>

      {/* Mobile top header */}
      <header className="md:hidden flex justify-between items-center w-full px-margin-mobile py-4 sticky top-0 bg-background/90 backdrop-blur-md z-40">
        <div className="flex items-center gap-3">
          <Link href="/profile" className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border border-white/10 flex-shrink-0 flex items-center justify-center hover:border-primary/50 transition-colors">
            <span className="text-primary font-bold">A</span>
          </Link>
          <div>
            <p className="font-body text-label-md text-on-surface-variant">Hello, Alex!</p>
            <h1 className="font-headline text-headline-md text-on-surface">Ready to Train?</h1>
          </div>
        </div>
        <Link href="/settings" className="text-on-surface-variant hover:text-primary transition-colors p-2">
          <span className="material-symbols-outlined">settings</span>
        </Link>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-margin-mobile md:px-xl py-lg space-y-xl overflow-x-hidden">
        {/* Weekly Progress */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="font-headline text-headline-md text-on-surface">Weekly Progress</h2>
            <a href="#" className="font-body text-label-md text-primary hover:text-primary-fixed transition-colors">See All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {/* Streak */}
            <div className="bg-surface-container rounded-xl p-md border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-tertiary">local_fire_department</span>
                <span className="font-body text-label-md text-on-surface-variant">Streak</span>
              </div>
              <div className="font-headline text-headline-lg text-on-surface">
                5 <span className="font-body text-body-md text-on-surface-variant">Days</span>
              </div>
            </div>
            {/* Total waktu */}
            <div className="bg-surface-container rounded-xl p-md border border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-colors">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-secondary">timer</span>
                <span className="font-body text-label-md text-on-surface-variant">Total Time</span>
              </div>
              <div className="font-headline text-headline-lg text-on-surface">
                120 <span className="font-body text-body-md text-on-surface-variant">Min</span>
              </div>
            </div>
            {/* Weekly target */}
            <div className="bg-surface-container rounded-xl p-md border border-white/5 relative overflow-hidden group hover:border-primary-container/30 transition-colors col-span-2 md:col-span-2 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="font-body text-label-md text-on-surface-variant">Weekly Target</span>
                </div>
                <div className="font-body text-body-lg text-on-surface">3 / 5 Workouts Done</div>
              </div>
              {/* Progress ring */}
              <div className="relative w-16 h-16">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-surface-container-high"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-primary"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="60, 100"
                    strokeWidth="4"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-body text-label-md text-on-surface">60%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Today's workout CTA */}
        <section className="relative">
          <div className="bg-gradient-to-br from-surface-container to-surface-container-low rounded-xl p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_rgba(77,224,130,0.1)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-tertiary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 w-full md:w-auto text-center md:text-left">
              <h3 className="font-headline text-headline-lg text-on-surface mb-2">Today's Schedule</h3>
              <p className="font-body text-body-md text-on-surface-variant mb-4">Upper Body Strength - 45 Min</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-secondary mb-6 md:mb-0">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="font-body text-label-md">Reminder: Starting in 30 Minutes</span>
              </div>
            </div>
            <Link
              href="/workouts/upper-body-strength"
              className="w-full md:w-auto relative z-10 bg-tertiary hover:bg-tertiary-fixed text-on-tertiary font-body text-label-lg py-4 px-8 rounded-full transition-transform transform active:scale-95 shadow-[0_0_20px_rgba(77,224,130,0.3)] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined icon-fill">play_arrow</span>
              START WORKOUT
            </Link>
          </div>
        </section>

        {/* Articles carousel */}
        <section className="space-y-4 pb-lg">
          <div className="flex justify-between items-end">
            <h2 className="font-headline text-headline-md text-on-surface">Education &amp; Tips</h2>
          </div>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-gutter pb-4 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 hide-scrollbar">
            {ARTICLES.map((article) => (
              <div
                key={article.id}
                className="snap-start flex-shrink-0 w-[280px] md:w-[320px] rounded-xl overflow-hidden bg-surface-container border border-white/5 group cursor-pointer relative"
              >
                <div className="h-40 w-full relative bg-surface-container-high">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-90" />
                </div>
                <div className="p-md absolute bottom-0 left-0 right-0">
                  <span className={`inline-block px-2 py-1 ${article.tagColor} rounded font-body text-[10px] mb-2`}>
                    {article.tag}
                  </span>
                  <h3 className={`font-body text-body-lg text-on-surface leading-tight mb-1 ${article.hoverColor} transition-colors`}>
                    {article.title}
                  </h3>
                  <p className="font-body text-label-md text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
                    {article.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
