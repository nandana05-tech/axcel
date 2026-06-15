# AXCEL — Train Smarter. Build Stronger.

AXCEL adalah aplikasi fitness berbasis web dengan dukungan PWA (Progressive Web App) yang dirancang untuk membantu para atlet dan penggemar kebugaran dalam merencanakan, menjalankan, dan memantau latihan mereka secara menyeluruh.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Direktori](#struktur-direktori)
- [Memulai](#memulai)
- [Konfigurasi](#konfigurasi)
- [Skrip yang Tersedia](#skrip-yang-tersedia)
- [Design System](#design-system)
- [Alur Aplikasi](#alur-aplikasi)
- [Status Fitur](#status-fitur)

---

## Fitur Utama

- **Autentikasi** — Login dan registrasi akun dengan dukungan Google OAuth (UI)
- **Onboarding** — Pemilihan tujuan kebugaran dan level pengalaman
- **Katalog Workout** — Jelajahi ratusan rutinitas latihan dengan filter dan pencarian
- **Pelacak Workout Aktif** — Timer real-time, pencatatan set/rep/berat, dan pelacak istirahat
- **Ringkasan Penyelesaian** — Statistik lengkap setelah workout (durasi, kalori, volume)
- **Manajemen Jadwal** — Tampilan mingguan dan pembuatan jadwal workout
- **Profil & Pencapaian** — Statistik, badge, kalender aktivitas, dan riwayat workout
- **Progressive Web App** — Dapat diinstal di perangkat mobile, mendukung mode offline
- **Navigasi Mobile-first** — Bottom navigation yang nyaman di layar sentuh

---

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI Library | [React 18](https://react.dev/) |
| Bahasa | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| PWA | [@ducanh2912/next-pwa](https://github.com/DuCanhGH/next-pwa) + Workbox |
| Font | Bebas Neue (display) · DM Sans (body) via Google Fonts |
| Ikon | Material Symbols Outlined (Google Fonts) |
| Linting | ESLint 8 + Next.js lint config |

---

## Struktur Direktori

```
axcel/
├── app/
│   ├── layout.tsx                    # Root layout (font, metadata, viewport)
│   ├── globals.css                   # Styling global & Tailwind directives
│   ├── page.tsx                      # Splash screen → redirect ke /login
│   ├── login/
│   │   └── page.tsx                  # Halaman login (email/password + Google)
│   ├── register/
│   │   └── page.tsx                  # Halaman registrasi
│   ├── onboarding/
│   │   ├── goal/page.tsx             # Pemilihan tujuan kebugaran
│   │   └── fitness-level/page.tsx    # Pemilihan level pengalaman
│   └── (app)/                        # Route terproteksi dengan bottom nav
│       ├── layout.tsx                # Layout dengan BottomNav
│       ├── home/page.tsx             # Dashboard utama
│       ├── workouts/
│       │   ├── page.tsx              # Katalog workout
│       │   └── [id]/
│       │       ├── page.tsx          # Detail workout
│       │       ├── active/page.tsx   # Sesi workout aktif
│       │       ├── complete/page.tsx # Ringkasan setelah workout
│       │       └── modifications/page.tsx # Variasi/modifikasi workout
│       ├── schedule/
│       │   ├── page.tsx              # Tampilan jadwal mingguan
│       │   └── create/page.tsx       # Buat/jadwalkan workout baru
│       ├── profile/
│       │   ├── page.tsx              # Profil pengguna & statistik
│       │   └── badges/page.tsx       # Showcase badge & pencapaian
│       └── settings/
│           ├── page.tsx              # Pengaturan umum
│           └── notifications/page.tsx # Preferensi notifikasi
├── components/
│   ├── BottomNav.tsx                 # Navigasi bawah mobile
│   ├── CompletePageActions.tsx       # Aksi Share & Done di halaman selesai
│   └── modals/
│       ├── AchievementModal.tsx      # Modal pencapaian/badge terbuka
│       ├── DatePickerModal.tsx       # Modal pemilih tanggal
│       ├── EndWorkoutModal.tsx       # Konfirmasi akhiri workout
│       ├── RestDayModal.tsx          # Info hari istirahat
│       ├── ShareModal.tsx            # Bagikan progres workout
│       └── SuccessModal.tsx          # Konfirmasi aksi berhasil
├── public/
│   ├── manifest.json                 # PWA manifest
│   └── icons/
│       ├── icon.svg
│       └── apple-touch-icon.svg
├── next.config.mjs                   # Konfigurasi Next.js & PWA
├── tailwind.config.ts                # Design tokens & custom colors
├── tsconfig.json                     # TypeScript (path alias @/*)
└── package.json
```

---

## Memulai

### Prasyarat

- **Node.js** versi 18 atau lebih baru
- **npm**, **yarn**, atau **pnpm**

### Instalasi

```bash
# Clone repository
git clone https://github.com/nandana05-tech/axcel.git
cd axcel

# Install dependencies
npm install
```

### Menjalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

---

## Konfigurasi

Buat file `.env.local` di root project untuk mengatur variabel environment:

```env
# Contoh variabel yang mungkin dibutuhkan saat integrasi backend
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

> Saat ini aplikasi berjalan sepenuhnya di sisi frontend tanpa koneksi backend. Variabel environment belum diperlukan untuk development lokal.

### Konfigurasi Gambar Eksternal

File `next.config.mjs` sudah dikonfigurasi untuk menerima gambar dari:
- `lh3.googleusercontent.com` — Google profile photos
- `images.unsplash.com` — Unsplash stock images

---

## Skrip yang Tersedia

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Jalankan development server di `http://localhost:3000` |
| `npm run build` | Build aplikasi untuk produksi |
| `npm start` | Jalankan production server (setelah build) |
| `npm run lint` | Jalankan ESLint untuk mengecek kualitas kode |

---

## Design System

AXCEL menggunakan sistem desain berbasis **Material Design 3** yang diimplementasikan melalui Tailwind CSS custom tokens.

### Palet Warna

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| `primary` | `#d0bcff` | Elemen utama, teks aksen |
| `primary-container` | `#7c3aff` | Tombol utama, badge |
| `on-primary` | `#3b0091` | Teks di atas primary |
| `secondary` | `#d0bcff` | Elemen sekunder |
| `secondary-container` | `#523793` | Container sekunder |
| `tertiary` | `#ffb68e` | Aksen hangat / warm orange |
| `accent` | `#00e5a0` | Sorotan mint green |
| `background` | `#15121c` | Latar belakang gelap |
| `surface-container` | `#211e29` | Card & container |
| `on-background` | `#e7e0ef` | Teks utama |
| `error` | `#ffb4ab` | Indikator error |

### Tipografi

| Tipe | Ukuran | Font |
|------|--------|------|
| Display | 48px | Bebas Neue |
| Headline L | 32px | Bebas Neue |
| Headline M | 24px | Bebas Neue |
| Body L | 18px | DM Sans |
| Body M | 16px | DM Sans |
| Label M | 14px | DM Sans |
| Label S | 12px | DM Sans |

---

## Alur Aplikasi

```
/                          Splash Screen (2.5s)
    └─► /login             Login
         ├─► /register     Daftar Akun Baru
         └─► /onboarding/goal
                  └─► /onboarding/fitness-level
                           └─► /home            Dashboard Utama
                                ├─► /workouts                   Katalog Workout
                                │    └─► /workouts/[id]         Detail Workout
                                │         ├─► /workouts/[id]/active       Sesi Aktif
                                │         │    └─► /workouts/[id]/complete  Selesai
                                │         └─► /workouts/[id]/modifications Modifikasi
                                ├─► /schedule                   Jadwal Mingguan
                                │    └─► /schedule/create       Buat Jadwal
                                ├─► /profile                    Profil Pengguna
                                │    └─► /profile/badges        Koleksi Badge
                                └─► /settings                   Pengaturan
                                     └─► /settings/notifications Notifikasi
```

---

## Status Fitur

| Fitur | Status |
|-------|--------|
| UI Splash Screen | Selesai |
| UI Login & Registrasi | Selesai |
| UI Onboarding | Selesai |
| UI Katalog Workout | Selesai |
| UI Detail Workout | Selesai |
| UI Sesi Workout Aktif | Selesai |
| UI Ringkasan Workout | Selesai |
| UI Jadwal Mingguan | Selesai |
| UI Profil & Badge | Selesai |
| UI Pengaturan | Selesai |
| PWA & Offline Support | Selesai |
| Integrasi Backend / API | Belum |
