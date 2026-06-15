'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import RestDayModal from '@/components/modals/RestDayModal';
import DatePickerModal from '@/components/modals/DatePickerModal';

const WEEK = [
  { day: 'MON', date: 12, status: 'workout', dotColor: 'bg-primary-container' },
  { day: 'TUE', date: 13, status: 'workout', dotColor: 'bg-tertiary' },
  { day: 'WED', date: 14, status: 'today', dotColor: 'bg-primary-fixed' },
  { day: 'THU', date: 15, status: 'rest', dotColor: 'bg-error' },
  { day: 'FRI', date: 16, status: 'upcoming', dotColor: 'bg-primary-container' },
  { day: 'SAT', date: 17, status: 'upcoming', dotColor: 'bg-tertiary' },
  { day: 'SUN', date: 18, status: 'rest', dotColor: 'bg-error' },
];

export default function SchedulePage() {
  const router = useRouter();
  const [showRestModal, setShowRestModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body pb-24">
      {/* Atmospheric background */}
      <div
        className="absolute top-0 left-0 w-full h-[300px] bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-surface-container-lowest/0 via-surface-container-lowest/80 to-surface-container-lowest pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 flex justify-between items-center w-full px-margin-mobile py-4 h-16 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/home" className="text-on-surface hover:text-primary transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>arrow_back</span>
        </Link>
        <h1 className="font-headline text-headline-lg-mobile tracking-wide uppercase text-on-surface mt-1">My Schedule</h1>
        <button
          onClick={() => setShowCalendar(true)}
          className="text-on-surface hover:text-primary transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>calendar_month</span>
        </button>
      </header>

      <main className="relative z-10 flex flex-col gap-xl mt-md">
        {/* Week view */}
        <section className="px-margin-mobile">
          <div className="grid grid-cols-7 w-full">
            {WEEK.map(({ day, date, status, dotColor }) => {
              const isToday = status === 'today';
              return (
                <div key={day} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <span
                    className={`font-body text-[10px] tracking-wide transition-colors ${
                      isToday ? 'text-primary-fixed' : 'text-outline group-hover:text-on-surface'
                    }`}
                  >
                    {day}
                  </span>
                  <div
                    className={`flex items-center justify-center font-body text-sm font-medium transition-colors ${
                      isToday
                        ? 'w-9 h-9 rounded-full bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(124,58,255,0.3)] font-bold'
                        : 'w-9 h-9 rounded-full text-on-surface-variant group-hover:bg-surface-container-low'
                    }`}
                  >
                    {date}
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Daily summary */}
        <section className="px-margin-mobile grid grid-cols-2 gap-md">
          <div className="bg-surface-container-low border border-surface-container-high rounded-xl p-md flex flex-col justify-between h-24">
            <span className="font-body text-label-md text-outline uppercase tracking-wider">Today&apos;s Focus</span>
            <span className="font-headline text-headline-md text-primary-fixed">Strength</span>
          </div>
          <div className="bg-surface-container-low border border-surface-container-high rounded-xl p-md flex flex-col justify-between h-24">
            <span className="font-body text-label-md text-outline uppercase tracking-wider">Total Volume</span>
            <span className="font-headline text-headline-md text-on-surface">
              120 <span className="font-body text-label-md text-outline ml-1">MIN</span>
            </span>
          </div>
        </section>

        {/* Workout list */}
        <section className="px-margin-mobile flex flex-col gap-md">
          <div className="flex justify-between items-end mb-xs">
            <h2 className="font-body text-label-lg text-on-surface uppercase tracking-widest">Wednesday, Oct 14</h2>
            <button className="text-primary-fixed font-body text-label-md hover:text-primary transition-colors">EDIT</button>
          </div>

          {/* Strength card */}
          <article className="bg-surface-container-low rounded-xl p-md relative overflow-hidden flex items-center gap-md border border-surface-container-highest shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container" />
            <div className="flex flex-col items-center justify-center min-w-[60px] border-r border-outline-variant/20 pr-md py-xs">
              <span className="font-headline text-headline-md text-on-surface leading-none mb-1">08:00</span>
              <span className="font-body text-label-md text-outline">AM</span>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-body text-label-md text-primary-fixed uppercase tracking-wider mb-0.5">Strength Profile</span>
              <h3 className="font-body text-body-lg font-semibold text-on-surface leading-tight mb-2">Upper Body Power</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-outline">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>timer</span>
                  <span className="font-body text-label-md">60 Min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>fitness_center</span>
                  <span className="font-body text-label-md">5 Blocks</span>
                </div>
              </div>
            </div>
          </article>

          {/* Cardio card */}
          <article className="bg-surface-container-low rounded-xl p-md relative overflow-hidden flex items-center gap-md border border-surface-container-highest shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary" />
            <div className="flex flex-col items-center justify-center min-w-[60px] border-r border-outline-variant/20 pr-md py-xs">
              <span className="font-headline text-headline-md text-on-surface leading-none mb-1">05:30</span>
              <span className="font-body text-label-md text-outline">PM</span>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-body text-label-md text-tertiary uppercase tracking-wider mb-0.5">Conditioning</span>
              <h3 className="font-body text-body-lg font-semibold text-on-surface leading-tight mb-2">HIIT Assault Bike</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-outline">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>timer</span>
                  <span className="font-body text-label-md">45 Min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>local_fire_department</span>
                  <span className="font-body text-label-md">500 Kcal</span>
                </div>
              </div>
            </div>
          </article>

          {/* Rest day — tapping opens modal */}
          <div className="mt-lg flex justify-between items-end mb-xs">
            <h2 className="font-body text-label-lg text-outline uppercase tracking-widest">Thursday, Oct 15</h2>
          </div>
          <article
            onClick={() => setShowRestModal(true)}
            className="bg-surface-container-low/50 rounded-xl p-md relative overflow-hidden flex items-center gap-md border border-surface-container-high border-dashed cursor-pointer hover:bg-surface-container-low transition-colors active:scale-[0.98]"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-error/80" />
            <div className="flex flex-col items-center justify-center min-w-[60px] border-r border-outline-variant/20 pr-md py-sm">
              <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px' }}>bedtime</span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-body text-label-md text-error uppercase tracking-wider mb-0.5">Mandatory</span>
              <h3 className="font-body text-body-lg font-semibold text-on-surface/80 leading-tight">Rest &amp; Recovery</h3>
              <p className="font-body text-label-md text-outline mt-1">Focus on mobility and hydration.</p>
            </div>
            <span className="material-symbols-outlined text-outline">chevron_right</span>
          </article>
        </section>
      </main>

      {/* FAB → Create Schedule */}
      <button
        onClick={() => router.push('/schedule/create')}
        className="fixed bottom-[88px] right-margin-mobile w-14 h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(124,58,255,0.4)] z-40 hover:scale-105 active:scale-95 transition-all outline outline-1 outline-surface-container-low outline-offset-2"
      >
        <span className="material-symbols-outlined icon-fill" style={{ fontSize: '28px' }}>add</span>
      </button>

      <RestDayModal isOpen={showRestModal} onClose={() => setShowRestModal(false)} />

      <DatePickerModal
        isOpen={showCalendar}
        initialDate={selectedDate}
        onConfirm={(d) => { setSelectedDate(d); setShowCalendar(false); }}
        onClose={() => setShowCalendar(false)}
      />
    </div>
  );
}
