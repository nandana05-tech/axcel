'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding/goal');
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center px-margin-mobile py-lg sticky top-0 bg-background/90 z-10 backdrop-blur-sm">
        <Link
          href="/login"
          className="text-on-surface hover:text-primary transition-colors flex items-center justify-center p-sm -ml-sm"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1
          className="font-headline text-on-surface ml-md tracking-wide"
          style={{ fontSize: '28px', lineHeight: '28px' }}
        >
          Create Your Account
        </h1>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col px-margin-mobile py-md w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-gutter w-full mt-sm">
          {/* Full Name */}
          <div className="flex flex-col gap-xs">
            <label className="text-label-md text-outline" htmlFor="fullName">Full Name</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-outline">
                <span className="material-symbols-outlined">person</span>
              </div>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full h-[56px] rounded-[12px] pl-12 pr-4 text-body-md text-on-surface placeholder-outline transition-all border border-[#353546] focus:outline-none focus:border-b-2 focus:border-b-primary-container"
                style={{ backgroundColor: '#252532' }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-xs">
            <label className="text-label-md text-outline" htmlFor="email">Email Address</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-outline">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full h-[56px] rounded-[12px] pl-12 pr-4 text-body-md text-on-surface placeholder-outline transition-all border border-[#353546] focus:outline-none focus:border-b-2 focus:border-b-primary-container"
                style={{ backgroundColor: '#252532' }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-xs">
            <label className="text-label-md text-outline" htmlFor="password">Password</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-outline">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a strong password"
                className="w-full h-[56px] rounded-[12px] pl-12 pr-12 text-body-md text-on-surface placeholder-outline transition-all border border-[#353546] focus:outline-none focus:border-b-2 focus:border-b-primary-container"
                style={{ backgroundColor: '#252532' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-outline hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-xs">
            <label className="text-label-md text-outline" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-outline">
                <span className="material-symbols-outlined">lock_reset</span>
              </div>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full h-[56px] rounded-[12px] pl-12 pr-4 text-body-md text-on-surface placeholder-outline transition-all border border-[#353546] focus:outline-none focus:border-b-2 focus:border-b-primary-container"
                style={{ backgroundColor: '#252532' }}
              />
            </div>
          </div>

          {/* Terms */}
          <div className="mt-xs text-center">
            <p className="text-label-md text-outline">
              By signing up you agree to our{' '}
              <a href="#" className="text-primary-container underline decoration-primary-container/50 hover:decoration-primary-container transition-all">Terms</a>{' '}
              &amp;{' '}
              <a href="#" className="text-primary-container underline decoration-primary-container/50 hover:decoration-primary-container transition-all">Privacy Policy</a>
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[56px] rounded-full mt-sm flex items-center justify-center text-label-lg text-on-primary font-bold shadow-[0_4px_20px_rgba(124,58,255,0.3)] hover:opacity-90 active:scale-95 transition-all uppercase tracking-wider bg-gradient-to-r from-primary-container to-accent"
          >
            Create Account
          </button>
        </form>

        {/* Social */}
        <div className="w-full flex flex-col items-center mt-lg mb-xl">
          <div className="flex items-center w-full my-md">
            <div className="flex-grow border-t border-outline-variant" />
            <span className="px-md text-label-md text-outline tracking-wider uppercase">or continue with</span>
            <div className="flex-grow border-t border-outline-variant" />
          </div>
          <button
            type="button"
            className="w-full h-[56px] rounded-[12px] bg-inverse-surface border border-outline-variant flex items-center justify-center gap-md hover:bg-surface-variant hover:text-inverse-surface transition-all active:scale-[0.98]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-label-lg text-surface-dim">Continue with Google</span>
          </button>
        </div>

        {/* Login link */}
        <div className="mt-auto pb-lg text-center w-full">
          <p className="text-body-md text-outline">
            Already have an account?{' '}
            <Link href="/login" className="text-label-lg text-primary-container hover:text-primary transition-colors ml-xs">
              Log In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
