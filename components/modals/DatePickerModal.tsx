'use client';

import { useState } from 'react';

interface Props {
  isOpen: boolean;
  initialDate?: Date;
  onConfirm: (date: Date) => void;
  onClose: () => void;
}

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];
const DAY_LABELS = ['M','T','W','T','F','S','S'];

export default function DatePickerModal({ isOpen, initialDate, onConfirm, onClose }: Props) {
  const today = new Date();
  const [selected, setSelected] = useState<Date>(initialDate ?? today);
  const [viewYear, setViewYear] = useState(selected.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected.getMonth());

  if (!isOpen) return null;

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayRaw = new Date(viewYear, viewMonth, 1).getDay();
  const mondayOffset = firstDayRaw === 0 ? 6 : firstDayRaw - 1;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const selectDay = (d: number) => setSelected(new Date(viewYear, viewMonth, d));

  const isSelected = (d: number) =>
    selected.getDate() === d && selected.getMonth() === viewMonth && selected.getFullYear() === viewYear;

  const isToday = (d: number) =>
    today.getDate() === d && today.getMonth() === viewMonth && today.getFullYear() === viewYear;

  const cells: (number | null)[] = [
    ...Array(mondayOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const quickSelect = (date: Date) => {
    setSelected(date);
    setViewMonth(date.getMonth());
    setViewYear(date.getFullYear());
  };

  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const nextWeek = new Date(today); nextWeek.setDate(today.getDate() + 7);
  const nextMonth_ = new Date(today); nextMonth_.setMonth(today.getMonth() + 1);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a2e] rounded-t-3xl w-full max-w-sm shadow-[0_-4px_40px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-outline-variant rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-md py-sm border-b border-white/5">
          <button
            onClick={onClose}
            className="font-body text-label-lg text-on-surface-variant uppercase tracking-widest px-sm py-xs hover:text-on-surface transition-colors"
          >
            Cancel
          </button>
          <span className="font-headline text-headline-md text-on-surface uppercase tracking-wide">Choose Date</span>
          <button
            onClick={() => onConfirm(selected)}
            className="font-body text-label-lg text-primary-container uppercase tracking-widest px-sm py-xs hover:text-primary transition-colors"
          >
            Apply
          </button>
        </div>

        {/* Month nav */}
        <div className="flex items-center justify-between px-lg py-md">
          <button
            onClick={prevMonth}
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface" style={{ fontSize: '20px' }}>chevron_left</span>
          </button>
          <span className="font-headline text-headline-md text-on-surface uppercase tracking-wide">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button
            onClick={nextMonth}
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface" style={{ fontSize: '20px' }}>chevron_right</span>
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 px-md mb-1">
          {DAY_LABELS.map((d, i) => (
            <span key={i} className="font-body text-label-md text-on-surface-variant text-center py-1">{d}</span>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 px-md gap-y-1 mb-md">
          {cells.map((day, i) => {
            if (!day) return <div key={i} />;
            const sel = isSelected(day);
            const tod = isToday(day);
            return (
              <button
                key={i}
                onClick={() => selectDay(day)}
                className={`w-9 h-9 mx-auto flex flex-col items-center justify-center rounded-full font-body text-body-md relative transition-colors ${
                  sel
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : tod
                      ? 'text-tertiary font-bold border border-tertiary/40'
                      : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Quick select chips */}
        <div className="flex gap-sm px-md pb-md overflow-x-auto hide-scrollbar">
          {[
            { label: 'Today', date: today },
            { label: 'Tomorrow', date: tomorrow },
            { label: 'Next Week', date: nextWeek },
            { label: 'Next Month', date: nextMonth_ },
          ].map(({ label, date }) => (
            <button
              key={label}
              onClick={() => quickSelect(date)}
              className="flex-none px-md py-xs rounded-full bg-surface-container-high border border-outline-variant font-body text-label-md text-on-surface hover:bg-surface-container-highest transition-colors whitespace-nowrap"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Confirm */}
        <div className="px-md pb-10">
          <button
            onClick={() => { onConfirm(selected); onClose(); }}
            className="w-full py-4 rounded-full bg-gradient-to-r from-primary-container to-accent text-on-primary font-body text-label-lg uppercase tracking-wider font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 transition-opacity"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
