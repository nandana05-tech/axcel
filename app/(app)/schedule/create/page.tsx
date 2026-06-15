'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DatePickerModal from '@/components/modals/DatePickerModal';
import SuccessModal from '@/components/modals/SuccessModal';

const WORKOUT_TYPES = ['Strength', 'Cardio', 'HIIT', 'Mobility', 'Yoga'];
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function CreateSchedulePage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [workoutType, setWorkoutType] = useState('Strength');
  const [startDate, setStartDate] = useState<Date>(() => {
    const d = new Date(); d.setDate(d.getDate() + 1); return d;
  });
  const [selectedDays, setSelectedDays] = useState<number[]>([0, 2, 4]); // M W F
  const [duration, setDuration] = useState(45);
  const [notes, setNotes] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleDay = (i: number) =>
    setSelectedDays((prev) => prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i]);

  const formatDate = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();

  const dayLabel = (d: Date) => {
    const diff = Math.round((d.getTime() - new Date().setHours(0,0,0,0)) / 86400000);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    return d.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const handleSave = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    router.push('/schedule');
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-body flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-margin-mobile py-4 h-16 bg-background/90 backdrop-blur-xl border-b border-white/5">
        <Link href="/schedule" className="text-on-surface hover:text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline text-headline-md text-on-surface uppercase tracking-wide">
          Create Schedule
        </h1>
        <button
          onClick={handleSave}
          className="font-body text-label-lg text-primary-container hover:text-primary transition-colors uppercase tracking-widest"
        >
          Save
        </button>
      </header>

      <main className="flex-1 flex flex-col gap-xl px-margin-mobile py-lg pb-32">
        {/* Schedule name */}
        <div className="flex flex-col gap-xs">
          <label className="font-body text-label-md text-on-surface-variant uppercase tracking-widest">
            Schedule Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="E.G. MORNING CRUSHER"
            className="w-full h-[56px] rounded-xl bg-surface-container border border-outline-variant px-md font-headline text-headline-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container transition-colors uppercase tracking-wide"
          />
        </div>

        {/* Workout type */}
        <div className="flex flex-col gap-sm">
          <label className="font-body text-label-md text-on-surface-variant uppercase tracking-widest">
            Workout Type
          </label>
          <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-1">
            {WORKOUT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setWorkoutType(type)}
                className={`flex-none px-lg py-sm rounded-full font-body text-label-lg transition-colors ${
                  workoutType === type
                    ? 'bg-primary-container text-on-primary-container shadow-[0_0_12px_rgba(124,58,255,0.3)]'
                    : 'bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-2 gap-md">
          <button
            onClick={() => setShowDatePicker(true)}
            className="bg-surface-container rounded-xl p-md border border-outline-variant flex flex-col gap-xs text-left hover:bg-surface-container-high transition-colors active:scale-[0.98]"
          >
            <div className="flex items-center gap-xs text-primary-container">
              <span className="material-symbols-outlined icon-fill" style={{ fontSize: '16px' }}>calendar_month</span>
              <span className="font-body text-label-md uppercase tracking-wider">Start Date</span>
            </div>
            <span className="font-headline text-headline-md text-on-surface">{formatDate(startDate)}</span>
            <span className="font-body text-label-md text-on-surface-variant">{dayLabel(startDate)}</span>
          </button>

          <div className="bg-surface-container rounded-xl p-md border border-outline-variant flex flex-col gap-xs">
            <div className="flex items-center gap-xs text-accent">
              <span className="material-symbols-outlined icon-fill" style={{ fontSize: '16px' }}>schedule</span>
              <span className="font-body text-label-md uppercase tracking-wider">Time</span>
            </div>
            <span className="font-headline text-headline-md text-on-surface">06:00</span>
            <span className="font-body text-label-md text-on-surface-variant">AM</span>
          </div>
        </div>

        {/* Repeat weekly */}
        <div className="flex flex-col gap-sm">
          <label className="font-body text-label-md text-on-surface-variant uppercase tracking-widest">
            Repeat Weekly
          </label>
          <div className="grid grid-cols-7 gap-1">
            {DAYS.map((d, i) => (
              <button
                key={i}
                onClick={() => toggleDay(i)}
                className={`w-full aspect-square rounded-full font-body text-sm font-bold transition-all active:scale-95 ${
                  selectedDays.includes(i)
                    ? 'bg-accent text-background shadow-[0_0_12px_rgba(0,229,160,0.3)]'
                    : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Duration target */}
        <div className="bg-surface-container rounded-xl p-md border border-outline-variant flex flex-col gap-md">
          <div className="flex items-center justify-between">
            <span className="font-body text-label-md text-on-surface-variant uppercase tracking-widest">
              Duration Target
            </span>
            <span className="font-headline text-headline-md text-accent bg-accent/10 px-sm py-xs rounded-md">
              {duration} MIN
            </span>
          </div>
          <input
            type="range"
            min={15}
            max={120}
            step={5}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="flex justify-between font-body text-label-md text-on-surface-variant">
            <span>15m</span>
            <span>60m</span>
            <span>120m</span>
          </div>
        </div>

        {/* Coach notes */}
        <div className="flex flex-col gap-xs">
          <label className="font-body text-label-md text-on-surface-variant uppercase tracking-widest">
            Coach Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Focus on form over speed..."
            rows={3}
            className="w-full rounded-xl bg-surface-container border border-outline-variant px-md py-md font-body text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container transition-colors resize-none"
          />
        </div>
      </main>

      {/* Save button */}
      <div className="fixed bottom-[80px] md:bottom-0 left-0 w-full px-margin-mobile pb-8 pt-6 bg-gradient-to-t from-background to-transparent">
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-full bg-gradient-to-r from-primary-container to-accent text-on-primary font-body text-label-lg uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-sm"
        >
          <span className="material-symbols-outlined icon-fill" style={{ fontSize: '20px' }}>check</span>
          Save Schedule
        </button>
      </div>

      <DatePickerModal
        isOpen={showDatePicker}
        initialDate={startDate}
        onConfirm={(d) => setStartDate(d)}
        onClose={() => setShowDatePicker(false)}
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Done!"
        message="Your workout schedule has been successfully saved."
        label="Okay"
      />
    </div>
  );
}
