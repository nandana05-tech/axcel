import CompletePageActions from '@/components/CompletePageActions';

interface Props {
  params: { id: string };
  searchParams: { sets?: string; reps?: string; weight?: string };
}

function slugToTitle(slug: string): string {
  return slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const EXERCISE_ICONS = {
  default: 'fitness_center',
  cardio: 'directions_run',
};

export default function WorkoutCompletePage({ params, searchParams }: Props) {
  const workoutName = slugToTitle(params.id);
  const totalSets = Math.max(1, parseInt(searchParams.sets ?? '3', 10));
  const totalReps = Math.max(1, parseInt(searchParams.reps ?? '10', 10));
  const weightKg = Math.max(1, parseInt(searchParams.weight ?? '60', 10));

  const totalRepsAll = totalSets * totalReps;
  const totalVolume = totalSets * totalReps * weightKg;
  const estimatedMinutes = Math.max(10, totalSets * 3);
  const estimatedCalories = Math.round(estimatedMinutes * 7);

  const exerciseBreakdown = [
    { icon: EXERCISE_ICONS.default, name: workoutName, target: 'Primary', sets: totalSets, reps: totalReps },
    { icon: EXERCISE_ICONS.cardio, name: 'Cool Down', target: 'Recovery', sets: 1, reps: 5 },
  ];

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body overflow-x-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary-container rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <main className="flex-1 overflow-y-auto pb-40">
        {/* Hero */}
        <section className="flex flex-col items-center pt-20 px-margin-mobile text-center relative z-10">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-container to-secondary-container shadow-[0_0_40px_rgba(124,58,255,0.4)] mb-lg border-2 border-primary">
            <span className="material-symbols-outlined icon-fill text-on-primary-container" style={{ fontSize: '40px' }}>check</span>
          </div>
          <h1 className="font-headline text-display-lg text-on-background mb-xs uppercase">
            Workout Complete! 🎉
          </h1>
          <p className="font-body text-body-md text-on-surface-variant mb-md">
            Amazing, you crushed it today!
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant">
            <span className="material-symbols-outlined text-primary mr-2" style={{ fontSize: '16px' }}>fitness_center</span>
            <span className="font-body text-label-lg text-primary">{workoutName}</span>
          </div>
        </section>

        {/* Stats bento */}
        <section className="px-margin-mobile mt-xl z-10 relative">
          <div className="grid grid-cols-2 gap-gutter">
            {[
              { icon: 'schedule', iconColor: '', label: 'Duration', value: String(estimatedMinutes), unit: 'MIN' },
              { icon: 'local_fire_department', iconColor: 'text-tertiary', label: 'Calories', value: String(estimatedCalories), unit: 'KCAL' },
              { icon: 'repeat', iconColor: '', label: 'Total Reps', value: String(totalRepsAll), unit: '' },
              { icon: 'fitness_center', iconColor: '', label: 'Total Weight', value: totalVolume.toLocaleString(), unit: 'KG' },
            ].map(({ icon, iconColor, label, value, unit }) => (
              <div
                key={label}
                className="bg-surface-container-low rounded-xl p-md border border-outline-variant flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center text-on-surface-variant mb-sm">
                  <span className={`material-symbols-outlined mr-2 ${iconColor}`} style={{ fontSize: '18px' }}>{icon}</span>
                  <span className="font-body text-label-md">{label}</span>
                </div>
                <div className="font-headline text-headline-lg-mobile text-on-background tracking-wide">
                  {value}{' '}
                  {unit && (
                    <span className="font-body text-label-md text-on-surface-variant align-baseline tracking-normal">{unit}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Streak banner */}
        <section className="px-margin-mobile mt-lg">
          <div className="relative bg-surface-container rounded-xl p-md border border-primary-container overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex items-center gap-sm mb-md">
              <span className="text-xl">🔥</span>
              <h3 className="font-body text-label-lg text-on-background">Your streak: 6 Days in a row!</h3>
            </div>
            <div className="relative z-10">
              <div className="flex justify-between font-body text-label-md text-on-surface-variant mb-xs">
                <span>Today</span>
                <span>7-Day Milestone</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Exercise breakdown */}
        <section className="px-margin-mobile mt-xl mb-xl">
          <h2 className="font-body text-label-lg text-on-background uppercase tracking-wider mb-md">Exercise Breakdown</h2>
          <div className="flex flex-col gap-xs">
            {exerciseBreakdown.map(({ icon, name, target, sets, reps }) => (
              <div
                key={name}
                className="bg-surface-container-low rounded-lg p-md border border-surface-container-highest flex justify-between items-center"
              >
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{icon}</span>
                  </div>
                  <div>
                    <p className="font-body text-body-md text-on-background font-medium">{name}</p>
                    <p className="font-body text-label-md text-on-surface-variant">Target: {target}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-headline text-headline-md text-on-background">
                    {sets} <span className="font-body text-label-md text-on-surface-variant font-normal">SET</span>
                  </p>
                  <p className="font-body text-label-md text-on-surface-variant">× {reps} Reps</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CompletePageActions
        workoutName={workoutName}
        duration={estimatedMinutes}
        calories={estimatedCalories}
        totalVolume={totalVolume}
      />
    </div>
  );
}
