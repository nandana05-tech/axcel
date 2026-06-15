'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding/goal');
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col dot-bg relative overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-0 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] bg-primary-container/10 blur-[100px] z-0 pointer-events-none rounded-full" />

      <main className="flex-1 flex flex-col justify-center px-margin-mobile relative z-10 py-xl max-w-md mx-auto w-full">
        {/* Brand */}
        <div className="text-center mb-xl">
          <h1
            className="font-headline bg-gradient-to-r from-primary-container to-accent bg-clip-text text-transparent mb-sm"
            style={{ fontSize: '48px', lineHeight: '48px', letterSpacing: '0.02em' }}
          >
            AXCEL
          </h1>
          <p className="text-body-md text-on-surface-variant">
            Train smarter. Build stronger.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-gutter w-full">
          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">mail</span>
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-elevated border border-surface-container-high rounded-xl py-md pl-[52px] pr-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-body-md"
              style={{ backgroundColor: '#252532' }}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">lock</span>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full bg-elevated border border-surface-container-high rounded-xl py-md pl-[52px] pr-[52px] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-body-md"
              style={{ backgroundColor: '#252532' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-md flex items-center text-outline hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end pt-xs">
            <a href="#" className="text-label-md text-primary-container hover:text-primary transition-colors">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[56px] mt-md bg-gradient-to-r from-primary-container to-accent rounded-full text-label-lg text-on-primary font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center uppercase tracking-wider"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-xl flex flex-col items-center w-full">
          <div className="flex items-center w-full mb-lg">
            <div className="flex-1 border-t border-surface-container-high" />
            <span className="px-md text-label-md text-outline">— or continue with —</span>
            <div className="flex-1 border-t border-surface-container-high" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full h-[56px] bg-white rounded-xl flex items-center justify-center space-x-sm hover:bg-gray-100 active:scale-[0.98] transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-label-lg text-gray-900">Continue with Google</span>
          </button>
        </div>

        {/* Register link */}
        <div className="mt-auto pt-xl text-center pb-md">
          <p className="text-body-md text-on-surface-variant">
            New to AXCEL?{' '}
            <Link href="/register" className="text-primary-container font-medium hover:text-primary transition-colors ml-xs">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
