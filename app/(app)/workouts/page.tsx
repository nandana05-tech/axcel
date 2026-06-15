import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'kekuatan-inti',
    title: 'Core\nStrength',
    duration: '30 min',
    level: 'beginner',
    levelColor: 'bg-tertiary shadow-[0_0_8px_rgba(255,182,142,0.6)]',
    icon: 'accessibility_new',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'ketahanan-total',
    title: 'Total\nEndurance',
    duration: '45 min',
    level: 'intermediate',
    levelColor: 'bg-primary shadow-[0_0_8px_rgba(208,188,255,0.6)]',
    icon: 'sprint',
    img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'tubuh-atas',
    title: 'Upper\nBody',
    duration: '40 min',
    level: 'expert',
    levelColor: 'bg-error shadow-[0_0_8px_rgba(255,180,171,0.6)]',
    icon: 'sports_gymnastics',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'mobilitas-sendi',
    title: 'Joint\nMobility',
    duration: '20 min',
    level: 'beginner',
    levelColor: 'bg-tertiary shadow-[0_0_8px_rgba(255,182,142,0.6)]',
    icon: 'self_improvement',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop',
  },
];

export default function WorkoutsPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen pb-[100px]">
      {/* Header */}
      <header className="px-margin-mobile pt-lg pb-md flex justify-between items-center sticky top-0 z-40 bg-surface-container-lowest/90 backdrop-blur-md">
        <h1 className="font-headline text-headline-lg text-on-surface">Workout Catalog</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high flex-shrink-0 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">A</span>
        </div>
      </header>

      <main className="flex flex-col gap-xl">
        {/* Search & Filter */}
        <section className="px-margin-mobile flex flex-col gap-md">
          <div className="w-full bg-surface-container-high rounded-lg h-12 flex items-center px-4 border border-outline-variant/30 focus-within:border-primary-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
            <input
              type="text"
              placeholder="Search workouts..."
              className="bg-transparent border-none outline-none text-on-surface font-body text-body-md w-full placeholder-on-surface-variant focus:ring-0 p-0"
            />
            <button className="ml-2 text-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined icon-fill">tune</span>
            </button>
          </div>

          {/* Filter tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-sm pb-1 -mx-margin-mobile px-margin-mobile">
            {['All', 'Beginner', 'Intermediate', 'Expert'].map((f, i) => (
              <button
                key={f}
                className={`px-5 py-2 rounded-full font-body text-label-lg whitespace-nowrap flex-shrink-0 transition-transform active:scale-95 ${
                  i === 0
                    ? 'bg-primary-container text-on-primary-container'
                    : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="px-margin-mobile">
          <Link
            href="/workouts/inferno-bakar-lemak"
            className="relative w-full rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-high border border-outline-variant/30 group cursor-pointer active:scale-[0.98] transition-transform block"
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80&auto=format&fit=crop"
              alt="Featured Workout"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="self-start px-3 py-1 bg-tertiary text-on-tertiary rounded-full font-body text-label-lg tracking-widest uppercase flex items-center gap-1 shadow-lg">
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '14px' }}>bolt</span>
                FEATURED
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-headline text-display-lg text-on-surface leading-none drop-shadow-md">
                  Inferno<br />Fat Burn
                </h2>
                <div className="flex items-center gap-3 text-on-surface-variant font-body text-label-md">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span> 45 min</div>
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>fitness_center</span> 8 exercises</div>
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <div className="text-error font-bold">Expert</div>
                </div>
                <div className="mt-2 self-end px-6 py-3 rounded-full bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container font-body text-label-lg flex items-center gap-2 shadow-[0_4px_20px_rgba(124,58,255,0.3)]">
                  View Details <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Categories Grid */}
        <section className="px-margin-mobile flex flex-col gap-md">
          <h3 className="font-headline text-headline-md text-on-surface">Browse Categories</h3>
          <div className="grid grid-cols-2 gap-gutter">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/workouts/${cat.id}`}
                className="relative rounded-xl overflow-hidden aspect-square bg-surface-container-high border border-outline-variant/30 active:scale-[0.98] transition-transform block"
              >
                <img
                  src={cat.img}
                  alt={cat.title.replace('\n', ' ')}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/50 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-primary-container/20 backdrop-blur-sm flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined icon-fill">{cat.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-headline text-headline-md text-on-surface leading-tight whitespace-pre-line">
                      {cat.title}
                    </h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-body text-label-md text-on-surface-variant bg-surface-container/80 px-2 py-0.5 rounded">
                        {cat.duration}
                      </span>
                      <span className={`w-3 h-3 rounded-full ${cat.levelColor}`} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
