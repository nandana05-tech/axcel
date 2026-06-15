'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/home', label: 'Home', icon: 'home' },
  { href: '/workouts', label: 'Workouts', icon: 'fitness_center' },
  { href: '/schedule', label: 'Activity', icon: 'calendar_month' },
  { href: '/profile', label: 'Profile', icon: 'person' },
];

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname.endsWith('/active') || pathname.endsWith('/complete')) return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_rgba(139,92,246,0.15)] flex justify-around items-center px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      {NAV_ITEMS.map(({ href, label, icon }) => {
        const isActive = pathname === href || pathname.startsWith(href + '/');
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-colors ${
              isActive
                ? 'text-violet-400 bg-violet-500/10'
                : 'text-zinc-500 hover:text-violet-300'
            }`}
          >
            <span
              className="material-symbols-outlined mb-1"
              style={{
                fontSize: '24px',
                fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {icon}
            </span>
            <span className="font-body text-[10px] font-medium tracking-wide">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
