'use client';

import { useRouter, useParams } from 'next/navigation';

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC98RI3AVUcbrWVHJvxY3F_bC_vZf6jLVxiTZO195_EQWzBZ5ha0z6B7ukPCB9aIXEnzPi_iXNjIFddthD-6QXuoSGclsvDorAQXgk2JjVpSJlUfPm5pX4GWXNlROdHhZG7TLHWCAy7Xsy0ojefadHVg7oUzIII4hfW5D9uWLBAjzVIIxFlsJZ_emQ-u3vl-YqwSiA6iiB-HzTUKwYf-3GixZoOXL7NU5bxi-TUJrfPHQe7TbNVFY8zmuKxK2cLownXxx8mKePU_iiq';
const SQUAT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3MDt0vuPUMahPc95u3BRXaAsd2SHdsNLaX-Hl4TDf-rPIK4WkfhhTjdGxBklJMEcZjuTdWP_GlbiW7_6OfUIde1V2u86brv-_5Wh2ALoLu3yCtulXiIpBMTv2ZtYNH0kWJT7W5OpySiZf47y1b79Ta_cIO1HJwgIvFztIU-jfOktopJgFcaFjv0NUueVR_gq6Wv7voKkYSDiXPnB0_1YNvmU_TqqwYUXOoYZ9RiGsZEcNyoioYtpBGBYNpgkpperMbPoA3yAwiuZZ';

const MODIFICATIONS = [
  {
    id: 'bodyweight-squat',
    num: 1,
    name: 'Bodyweight Squat',
    level: 'Beginner',
    desc: 'No equipment needed. Focus on depth and form.',
    img: SQUAT_IMG,
  },
  {
    id: 'goblet-squat',
    num: 2,
    name: 'Goblet Squat',
    level: 'Beginner',
    desc: 'Uses a single dumbbell held at chest height.',
    img: HERO_IMG,
  },
  {
    id: 'chair-squat',
    num: 3,
    name: 'Chair Squat',
    level: 'Beginner',
    desc: 'Very safe and beginner friendly variation.',
    img: null,
    icon: 'chair',
  },
];

export default function ModificationsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string | undefined;

  const workoutName = id
    ? id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Barbell Back Squat';

  return (
    <div className="bg-[#0f0f14] text-on-background min-h-screen font-body flex flex-col">
      {/* Header */}
      <header className="px-margin-mobile pt-lg pb-md flex flex-col gap-xs">
        <div className="flex items-center gap-md mb-xs">
          <button
            onClick={() => router.back()}
            className="text-on-surface hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline text-headline-lg text-on-surface uppercase tracking-wide">
            Choose a Modification
          </h1>
        </div>
        <p className="font-body text-body-md text-on-surface-variant pl-[36px]">
          Easier variations of the {workoutName}
        </p>
      </header>

      <main className="flex-1 flex flex-col px-margin-mobile py-lg gap-md pb-32">

        {/* Original card */}
        <div className="rounded-2xl overflow-hidden border border-primary-container/40 bg-surface-container shadow-[0_0_20px_rgba(124,58,255,0.15)]">
          <div className="flex items-stretch h-[120px]">
            <div className="w-[130px] shrink-0 relative overflow-hidden">
              <img
                src={HERO_IMG}
                alt={workoutName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container/60" />
            </div>
            <div className="flex-1 flex flex-col justify-center px-md gap-sm">
              <span className="self-start px-2 py-0.5 rounded border border-outline text-on-surface-variant font-body text-[10px] uppercase tracking-widest">
                Original
              </span>
              <h2 className="font-headline text-headline-md text-on-surface uppercase leading-tight">
                {workoutName}
              </h2>
              <span className="self-start px-3 py-1 rounded-full bg-[#3d2b1a] text-[#c97c3a] font-body text-label-md">
                Intermediate
              </span>
            </div>
          </div>
        </div>

        {/* Modification cards */}
        {MODIFICATIONS.map((mod) => (
          <div
            key={mod.id}
            className="rounded-2xl overflow-hidden border border-outline-variant bg-surface-container"
          >
            <div className="flex items-stretch min-h-[130px]">
              {/* Image */}
              <div className="w-[130px] shrink-0 relative overflow-hidden bg-surface-container-high">
                {mod.img ? (
                  <img
                    src={mod.img}
                    alt={mod.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>
                      {mod.icon}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between px-md py-md">
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center gap-sm">
                    <span className="font-body text-label-md text-accent uppercase tracking-wider">
                      Modification {mod.num}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-accent/15 text-accent font-body text-[10px] uppercase tracking-wider">
                      {mod.level}
                    </span>
                  </div>
                  <h3 className="font-headline text-headline-md text-on-surface uppercase leading-tight">
                    {mod.name}
                  </h3>
                  <p className="font-body text-label-md text-on-surface-variant leading-relaxed line-clamp-2">
                    {mod.desc}
                  </p>
                </div>

                <button
                  onClick={() => router.push(`/workouts/${mod.id}/active?from=${id ?? ''}`)}
                  className="self-end mt-sm px-5 py-2 rounded-full border-2 border-primary-container text-primary-container font-body text-label-lg tracking-wider hover:bg-primary-container/10 active:scale-95 transition-all"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex justify-center items-center gap-sm mt-md">
          <span className="material-symbols-outlined text-primary-container icon-fill" style={{ fontSize: '20px' }}>chat</span>
          <span className="font-body text-label-lg text-primary-container">Need help?</span>
        </div>
      </main>
    </div>
  );
}
