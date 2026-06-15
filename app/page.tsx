'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-background min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-body text-on-surface">
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw-D5Yg8AAw_yhPO_WPcjuSAuvAj6e7phFu0koFyYeDZU0Eok5dXFSFTu5XcZKP9lMBOhfAR0_rCFYVlb5U3x2e0G_6VPOquuobdx4SGGE8-Of9txFIxgFF1DjogEsROJplbYCrEuU7DmKVaX5EUjgJuJKZm_OQmf8EsKQb6rShe3G5KUICJx4GUHncl9LqRkRnV35-dXtI6aLOMJ0oeX4WgjpaAC4D48Cf2I_WWEJXgVlf5p69ach0JaLIeo2MjtXFpB9goNW6ZTB')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-surface-container-lowest pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-margin-mobile">
        <h1
          className="font-headline text-transparent bg-clip-text bg-gradient-to-br from-primary-container to-secondary text-center drop-shadow-lg"
          style={{ fontSize: '80px', lineHeight: '80px', letterSpacing: '0.05em' }}
        >
          AXCEL
        </h1>
        <p className="font-body text-body-md text-on-surface-variant mt-xs text-center tracking-wide">
          Train smarter. Build stronger.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-xl left-1/2 -translate-x-1/2 flex justify-center items-center z-10">
        <svg
          className="w-16 h-16 drop-shadow-[0_0_8px_rgba(124,58,255,0.5)]"
          viewBox="0 0 100 100"
        >
          <path
            className="text-surface-container-highest"
            d="M 20 80 A 45 45 0 1 1 80 80"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aff" />
              <stop offset="100%" stopColor="#d0bcff" />
            </linearGradient>
          </defs>
          <path
            d="M 20 80 A 45 45 0 1 1 80 80"
            fill="none"
            stroke="url(#progressGradient)"
            strokeDasharray="200"
            strokeDashoffset="50"
            strokeLinecap="round"
            strokeWidth="4"
            style={{ animation: 'dash 2s ease-in-out forwards' }}
          />
        </svg>
      </div>

      <Link href="/login" className="absolute bottom-4 text-outline font-body text-label-md hover:text-primary transition-colors z-10">
        Tap to continue
      </Link>

      <style>{`
        @keyframes dash {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 20; }
        }
      `}</style>
    </div>
  );
}
